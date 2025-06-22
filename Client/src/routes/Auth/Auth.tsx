import { Outlet } from "react-router-dom";
import Header2 from "../../Components/shared/Header";
import Footer from "../../Components/shared/Footer/footer";

function Auth() {
  return (
    <div>
      <Header2/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Auth;
