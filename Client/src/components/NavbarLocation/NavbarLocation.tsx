import {
  faClock,
  faDashboard,
  faDatabase,
  faGears,
  faHome,
  faTasks,
  faTicket,
  faUser,
  faWarning
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

import "./NavbarLocation.css";

const NavbarLocation = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return { title: "Home | Panel", icon: faHome };
      case "/ticket":
        return { title: "Ticket", icon: faTicket };
      case "/user":
        return { title: "User", icon: faUser };
      case "/abas":
        return { title: "AbasTicket", icon: faDatabase };
      case "/ticketdetails":
        return { title: "Detalhes do ticket", icon: faTasks };
      case "/test":
        return { title: "Pagina de testes", icon: faWarning };
      case "/settings/general":
        return { title: "Settings | General", icon: faGears };
      case "/dashboard":
        return { title: "Dashboard", icon: faDashboard };
      case "/knowErrorDatabase":
        return { title: "Know Error DataBase", icon: faDatabase };
      case "/settings/profile":
          return { title: "Settings |Profile", icon: faUser };
      case "/settings/sla":
            return { title: "Settings | SLA", icon: faClock };
      default:
        return { title: "", icon: null };
    }
  };

  const { title, icon } = getTitle();

  return (
    <div className="container-navbar-location">
      <div className="container-content-navbar-location">
        {icon && <FontAwesomeIcon icon={icon} className="navbar-icon" />}
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default NavbarLocation;
