import {
  faAngleDown,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faChartPie,
  faDatabase,
  faGear,
  faHome,
  faTicket,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { UserDTO } from "../../../models/RequesterDTO";
import * as userService from "../../../Service/user-service";
import "./SideMenu.css";

interface SideMenuProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isCollapsed, toggleSidebar }) => {
  const [userDetails, setUserDetails] = useState<UserDTO>();

  useEffect(() => {
    userService.UserProfileDetails().then((response) => {
      setUserDetails(response.data);
    });
  }, []);

  const [isHomeOpen, setIsHomeOpen] = useState(false);

  return (
    <div className={`sideMenu ${isCollapsed ? "collapsed" : ""}`}>
      {!isCollapsed && <span className="title_sidebar_menu">Menu</span>}

      <div className="container-bt">
        {isCollapsed ? (
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={toggleSidebar}
            className={`button-collapse ${isCollapsed ? "collapsed" : ""}`}
            color="white"
            fontSize={18}
          />
        ) : (
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={toggleSidebar}
            className={`button-collapse ${isCollapsed ? "collapsed" : ""}`}
            color="white"
            fontSize={18}
          />
        )}
      </div>

      {isCollapsed ? (
        <div className="container-menu-collapsed">
          <Link
            to="/home"
            className="link-collapsed"
            data-tooltip-id="home"
            data-tooltip-content="Home"
          >
            <FontAwesomeIcon icon={faHome} className="icon-collapsed" />
          </Link>
          <Link
            to="/ticket"
            className="link-collapsed"
            data-tooltip-id="ticket"
            data-tooltip-content="Tickets"
          >
            <FontAwesomeIcon icon={faTicket} className="icon-collapsed" />
          </Link>
          <Link
            to="/user"
            className="link-collapsed"
            data-tooltip-id="user"
            data-tooltip-content="Usuário"
          >
            <FontAwesomeIcon icon={faUser} className="icon-collapsed" />
          </Link>
          <Link
            to="/dashboard"
            className="link-collapsed"
            data-tooltip-id="dashboard"
            data-tooltip-content="Dashboard"
          >
            <FontAwesomeIcon icon={faChartPie} className="icon-collapsed" />
          </Link>
          <Link
            to="/knowErrorDatabase"
            className="link-collapsed"
            data-tooltip-id="database"
            data-tooltip-content="Banco de Erros"
          >
            <FontAwesomeIcon icon={faDatabase} className="icon-collapsed" />
          </Link>
          <Link
            to="/settings/general"
            className="link-collapsed"
            data-tooltip-id="settings"
            data-tooltip-content="Configurações"
          >
            <FontAwesomeIcon icon={faGear} className="icon-collapsed" />
          </Link>

          <div style={{ zIndex: "100000000000000000" }}>
            <Tooltip id="home" />
            <Tooltip id="ticket" />
            <Tooltip id="user" />
            <Tooltip id="dashboard" />
            <Tooltip id="database" />
            <Tooltip id="settings" style={{ zIndex: "100000000000000000" }} />
          </div>
        </div>
      ) : (
        <div className="container-menu">
          <Link
            to="/home"
            className="link"
            onClick={() => setIsHomeOpen(!isHomeOpen)}
          >
            <FontAwesomeIcon icon={faHome} className="icon" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <h3>Home</h3>
              <FontAwesomeIcon
                icon={isHomeOpen ? faAngleDown : faAngleRight}
                className="icon-arrow"
                color=" #ffffff9d"
              />
            </div>
          </Link>
          {isHomeOpen && (
            <div className="container-submenu-link-home-sidebar">
              <Link to="/home/option1">Option 1</Link>
              <Link to="/home/option2">Option 2</Link>
            </div>
          )}
          <Link to="/ticket" className="link">
            <FontAwesomeIcon icon={faTicket} className="icon" />
            <h3>Ticket</h3>
          </Link>

          <Link to="/user" className="link">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <h3>User</h3>
          </Link>

          <Link to="/dashboard" className="link">
            <FontAwesomeIcon icon={faChartPie} className="icon" />
            <h3>Dashboard</h3>
          </Link>
          <Link to="/knowErrorDatabase" className="link">
            <FontAwesomeIcon icon={faDatabase} className="icon" />
            <h3>KEDB (Know Error DB)</h3>
          </Link>
          <Link to="/settings/general" className="link">
            <FontAwesomeIcon icon={faGear} className="icon" />
            <h3>Settings</h3>
          </Link>
        </div>
      )}

      <div className="sidebar__profile">
        <div className="avatar__wrapper">
          <img
            className="avatar"
            src={userDetails?.imgProfile}
            alt="Natalia Bartošová"
          />
          <div className="online__status"></div>
        </div>
        <div className="avatar__name hide">
          <div className="user-name">
            {isCollapsed
              ? ""
              : `${userDetails?.firstName} ${userDetails?.lastName}`}
          </div>

          <span className="perfil-status-badge"></span>
          <div
            className="email"
            data-tooltip-id="email"
            data-tooltip-content={userDetails?.email}
          >
            {userDetails?.email}
          </div>
        </div>
        <Tooltip id="email" />
      </div>
    </div>
  );
};

export default SideMenu;
