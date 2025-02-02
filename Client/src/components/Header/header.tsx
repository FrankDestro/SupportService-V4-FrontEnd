import { useEffect, useRef, useState } from "react";
import Bell from "../../assets/bell.png";
import Help from "../../assets/help.png";
import Logo from "../../assets/logo4.png";
import Settings from "../../assets/settings.png";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isLogoutSubmenuOpen, setIsLogoutSubmenuOpen] = useState(false); // Novo estado para o submenu do Logout
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const logoutSubmenuRef = useRef<HTMLDivElement>(null); // Novo ref para o submenu do Logout

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  const toggleLogoutSubmenu = () => {
    setIsLogoutSubmenuOpen((prev) => !prev); // Lógica para alternar o submenu do Logout
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
    if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
      setIsSubmenuOpen(false);
    }
    if (logoutSubmenuRef.current && !logoutSubmenuRef.current.contains(event.target as Node)) {
      setIsLogoutSubmenuOpen(false); // Fecha o submenu do Logout
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="logo" />
        <span className="logo-text">Support Service</span>
      </div>
      <div className="header-center"></div>
      <div className="header-user-icon">
        <button onClick={toggleSubmenu} className="button-options">
          + Opções Rápidas
        </button>

        <div className="header-user-icon">
          <div className="notification-badge">3</div>
          <img src={Bell} alt="bell" onClick={toggleMenu} />
          <img src={Settings} alt="logout" onClick={toggleLogoutSubmenu} /> {/* Adiciona o evento para o submenu do Logout */}
          <img src={Help} alt="help" />
        </div>

        {/* Menu de Notificação */}
        <div
          className={`notification-menu ${isMenuOpen ? "visible" : ""}`}
          ref={menuRef}
        >
          <p>Notificação 1</p>
          <p>Notificação 2</p>
          <p>Notificação 3</p>
        </div>

        {/* Submenu de Opções Rápidas */}
        <div
          className={`submenu ${isSubmenuOpen ? "visible" : ""}`}
          ref={submenuRef}
        >
          <p>Submenu Item 1</p>
          <p>Submenu Item 2</p>
          <p>Submenu Item 3</p>
        </div>

        {/* Submenu do Logout */}
        <div
          className={`submenu-logout ${isLogoutSubmenuOpen ? "visible" : ""}`} // Controle da visibilidade do submenu de Logout
          ref={logoutSubmenuRef}
        >
          <p>Configurações de Conta</p>
          <p>Alterar Senha</p>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
