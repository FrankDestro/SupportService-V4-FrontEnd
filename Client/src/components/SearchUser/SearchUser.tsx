// SearchUser.jsx
import { faFilter, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../Button/Button";
import DialogUserCreateModal2 from "../ModalBootTest/DialogUserCreateModal2"; // Componente modal
import "./SearchUser.css";

type Props = {
  onSearch: (...args: string[]) => void;
};

function SearchUser({ onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Fecha o modal
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSearch(searchTerm, status);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-user-container">
          <div className="search-input-container">
            <input
              type="text"
              placeholder=" "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="floating-input"
            />
            <label className="floating-label">Usuário / ID registro</label>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
          <div className="filter-container">
            <div className="status-select-container">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Buscar todos</option>
                <option value="ACTIVE">Usuários Ativos</option>
                <option value="INACTIVE">Usuários Inativos</option>
              </select>
            </div>
            <Button
              text="Filtrar"
              icon={faFilter}
              background="#11344d"
              hoverColor="#335577"
              type="submit"
            />
            <div onClick={handleOpenModal}>
              <Button
                text="Adicionar Novo"
                icon={faPlus}
                background="#11344d"
                hoverColor="#335577"
              />
            </div>
          </div>
        </div>
      </form>
      <DialogUserCreateModal2
        isVisible={isModalVisible}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default SearchUser;
