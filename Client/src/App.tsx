import "bootstrap"; // Para incluir o JavaScript do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Para incluir o CSS do Bootstrap
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Auth from "./routes/Auth/Auth";
import Login from "./routes/Auth/Login/Login";
import Recovery from "./routes/Auth/Recovery/Recovery";
import Dashboard from "./routes/Dashboard/Dashboard";
import Home from "./routes/Home/home";
import SettingsPage from "./routes/SettingsLayout/SettingsLayout";
import GeneralSettings from "./routes/SettingPages/General Settings/GeneralSettingsPage";
import ProfileSettings from "./routes/SettingPages/ProfileSettings/ProfileSettingsPage";
import SlaSettings from "./routes/SettingPages/SLA Settings/SlaSettingsPage";
import Test from "./routes/Test/Test";
import Ticket from "./routes/Tickets/tickets";
import User from "./routes/Users/user";
import KnowErrorDbPage from "./routes/knowErrorDbPage/KnowErrorDbPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="recovery" element={<Recovery />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/user" element={<User />} />
            <Route path="/test" element={<Test />} />
            <Route path="settings" element={<SettingsPage />} >
              <Route path="general" element={<GeneralSettings />} />
              <Route path="profile" element={<ProfileSettings />} />
              <Route path="sla" element={<SlaSettings />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/knowErrorDatabase" element={<KnowErrorDbPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
