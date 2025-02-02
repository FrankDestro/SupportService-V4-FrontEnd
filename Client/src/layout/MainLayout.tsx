import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Header2 from "../components/Header2";
import NavbarLocation from "../components/NavbarLocation/NavbarLocation";
import SideMenu from "../components/SideMenu/SideMenu";
import "./MainLayout.css";

function MainLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      <Header2 />
      <div className="main-content">
        <SideMenu isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div className={`content ${isCollapsed ? "collapsed" : ""}`}>
          <NavbarLocation />
          <Outlet />
        </div>
      </div>
      <Footer className={isCollapsed ? "collapsed" : ""} />
    </>
  );
}

export default MainLayout;
