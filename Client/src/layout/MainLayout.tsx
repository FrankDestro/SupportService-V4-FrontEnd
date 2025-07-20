import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/shared/Footer/footer";
import Header2 from "../Components/shared/Header";
import MenuSideBar from "../Components/shared/MenuSideBar/MenuSideBar";
import NavbarLocation from "../Components/shared/NavbarLocation/NavbarLocation";
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
        {/* <SideMenu isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} /> */}
          <MenuSideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        <div className={`content ${isCollapsed ? "collapsed" : ""}`}>
          <NavbarLocation />
          <Outlet />
        </div>
      </div>
      <Footer className={isCollapsed ? "collapsed" : "" } />
    </>
  );
}

export default MainLayout;
