import { Outlet } from "react-router-dom";
import Header2 from "../../components/Header2";
import Footer from "../../components/Footer/footer";

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
