import { useState, useEffect, useRef } from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaExclamationCircle,
  FaInfoCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import calendarioIcon from "../../assets/logo.svg";
import "./header.css";
import { useLocation } from "react-router-dom";


function Header2() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isLoginPage = location.pathname === "/";

  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
    setShowSettings(false); // Fecha o menu de configurações se estiver aberto
  };

  const handleSettingsClick = () => {
    setShowSettings((prev) => !prev);
    setShowNotifications(false); // Fecha o menu de notificações se estiver aberto
  };

  // Fecha os menus quando o usuário clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node) &&
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
        setShowSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notifications = [
    {
      title: "Reunião agendada",
      message: "Sua reunião com o cliente foi agendada para amanhã.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Alerta de Sistema",
      message: "O sistema será reiniciado em 30 minutos para manutenção.",
      icon: <FaExclamationCircle />,
    },
    {
      title: "Novo Evento Criado",
      message: "Um novo evento foi adicionado ao seu calendário.",
      icon: <FaInfoCircle />,
    },
  ];

  return (
    <header className="header">
    <div className="logo">
      <img src={calendarioIcon} alt="CalendarioIcon" />
      <h1>Support Service</h1>
    </div>
  
    {!isLoginPage && (
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <nav className="nav" style={{ display: "flex", alignItems: "center" }}>
          <ul>
            <li>
              <a href="/home">opções rapidas</a>
            </li>
          </ul>
        </nav>
  
        {/* Notificações */}
        <div
          className="notifications"
          onClick={handleNotificationClick}
          ref={notificationRef}
        >
          <FaBell className="notification-icon" />
          {notifications.length > 0 && (
            <span className="notification-badge">{notifications.length}</span>
          )}
          {showNotifications && (
            <div className="notification-submenu">
              <ul>
                {notifications.map((notification, index) => (
                  <li key={index} className="notification-item">
                    <div className="notification-icon-container">
                      {notification.icon}
                    </div>
                    <div className="notification-content">
                      <strong>{notification.title}</strong>
                      <p>{notification.message}</p>
                      <span className="notification-date">"2025-06-23"</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="view-all">Ver todos</div>
            </div>
          )}
        </div>
  
        {/* Configurações */}
        <div
          className="settings"
          onClick={handleSettingsClick}
          ref={settingsRef}
        >
          <FaCog className="settings-icon" />
          {showSettings && (
            <div className="settings-submenu">
              <ul>
                <li>
                  <a href="/profile">Meu Perfil</a>
                </li>
                <li>
                  <a href="/settings">Configurações</a>
                </li>
                <li>
                  <div className="container-">
                    <a href="/logout">Sair</a>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    )}
  </header>
  
  );
}

export default Header2;
