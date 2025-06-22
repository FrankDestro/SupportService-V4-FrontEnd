import { Outlet } from "react-router-dom"
import SettingsSidebar from "../../Modules/SettingsSidebar/SettingsSidebar"
import './SettingsLayout.css';

function SettingsPage() {
  return (
    <div className="container-base container-settings-page">
      <SettingsSidebar />
      <div className="container-settings-outlet">
        <Outlet />
      </div>
    </div>
  )
}

export default SettingsPage
