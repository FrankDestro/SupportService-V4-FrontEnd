import './footer.css';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`footer ${className}`}>
      <p>© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
      <p>Termos de Serviço | Política de Privacidade</p>
    </footer>
  );
};

export default Footer;
