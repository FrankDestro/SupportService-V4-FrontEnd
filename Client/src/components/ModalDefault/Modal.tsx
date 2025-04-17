import React from "react";
import "./Modal.css";
import { FiX } from "react-icons/fi";

type ModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content-app">
        <header className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-button">
            <FiX size={20} />
          </button>
        </header>

        <div className="modal-body">
          {children}
        </div>
        {footer && <footer className="modal-footer">{footer}</footer>}
      </div>
    </div>
  );
};

export default Modal;
