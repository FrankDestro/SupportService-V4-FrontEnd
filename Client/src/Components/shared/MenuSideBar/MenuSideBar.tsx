import {
  faArrowLeft,
  faArrowRight,
  faChartPie,
  faDatabase,
  faGear,
  faHome,
  faTicket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import React from "react";
import "./MenuSideBar.css";

type MenuItem = Required<MenuProps>["items"][number];

interface MenuSideBarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const items: MenuItem[] = [
  {
    key: "1",
    icon: <FontAwesomeIcon icon={faHome} className="icon-collapsed" />,
    label: "Home",
  },
  {
    key: "2",
    icon: <FontAwesomeIcon icon={faTicket} className="icon-collapsed" />,
    label: "Ticket",
  },
  {
    key: "3",
    icon: <FontAwesomeIcon icon={faUser} className="icon-collapsed" />,
    label: "Usuário",
  },
  {
    key: "4",
    icon: <FontAwesomeIcon icon={faChartPie} className="icon-collapsed" />,
    label: "Dashboard",
  },
  {
    key: "5",
    icon: <FontAwesomeIcon icon={faDatabase} className="icon-collapsed" />,
    label: "KEDB (Know Error DB)",
  },
  {
    key: "6",
    icon: <FontAwesomeIcon icon={faGear} className="icon-collapsed" />,
    label: "Configurações",
  },
];

const MenuSideBar: React.FC<MenuSideBarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="menu-header">
        <span className="menu-title">{!isCollapsed && "Menu"}</span>
        <Button type="text" onClick={toggleSidebar} className="collapse-btn">
          <FontAwesomeIcon icon={isCollapsed ? faArrowRight : faArrowLeft} />
        </Button>
      </div>

      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={isCollapsed}
        items={items}
        className="custom-menu"
      />
    </div>
  );
};

export default MenuSideBar;
