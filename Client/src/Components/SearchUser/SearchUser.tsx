import { faEraser, faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../Button/Button";
import CustomSelect from "../FormComponents/CustomSelect/CustomSelect";
import CustomInput from "../FormComponents/InputCustom/InputCustom";
import "./SearchUser.css";
import Modal from "../ModalDefault/Modal";
import UserFormCreate from "../../Modules/UserFormCreate/UserFormCreate";

type Props = {
  onSearch: (...args: string[]) => void;
};

const statusUsers = [
  { value: "", label: "Todos os status" },
  { value: "ACTIVE", label: "Usuários Ativos" },
  { value: "INACTIVE", label: "Usuários Inativos" },
];

function SearchUser({ onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSearch(searchTerm, status);
  }

  function handleClearFilters(): void {
    setSearchTerm("");
    setStatus("");
  }

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search-user-container">
          <div className="search-input-container">
            <CustomInput
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              width="100%"
              height="45px"
              label="Nome usuário / ID"
            />
          </div>

          <div className="filter-container">
            <div className="status-select-container">
              <CustomSelect
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                options={statusUsers}
                width="500px"
                height="45px"
                label="Status"
              />
            </div>
            <div className="container-button-search-user">
              <Button
                text="Filtrar"
                icon={faFilter}
                background="#11344d"
                hoverColor="#335577"
                borderRadius="5px"
                type="submit"
              />

              <div onClick={handleClearFilters}>
                <Button
                  text="Limpar Filtros"
                  icon={faEraser}
                  background="#11344d"
                  hoverColor="#335577"
                  borderRadius="5px"
                  type="submit"
                />
              </div>

              <div onClick={handleOpenModal}>
                <Button
                  text="Adicionar Novo"
                  icon={faPlus}
                  background="#11344d"
                  hoverColor="#335577"
                  borderRadius="5px"
                />
              </div>
            </div>
            <Modal
              isOpen={isModalVisible}
              onClose={handleCloseModal}
              title="Adicionar novo usuário"
              footer="rodapé"
            >
              <UserFormCreate/>
            </Modal>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchUser;
