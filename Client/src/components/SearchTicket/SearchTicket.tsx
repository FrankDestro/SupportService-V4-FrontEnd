import {
  faEraser,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SolvingAreaDTO } from "../../models/solvingAreaDTO";
import { TypeRequestDTO } from "../../models/typeRequestDTO";
import * as solvingAreaService from "../../Service/solving-area";
import * as TypeRequestService from "../../Service/type-request";
import * as CategoryTicketService from "../../Service/category-service";
import * as SlaService from "../../Service/sla-service";
import Button from "../Button/Button";
import "./SearchTicket.css";
import { CategoryTicketDTO } from "../../models/CategoryTicketDTO";
import { SLADTO } from "../../models/slaDTO";

type Props = {
  onSearch: (...args: string[]) => void;
};

function SearchTicker({ onSearch }: Props) {
  // Lista backend
  const [solvingAreas, setSolvingAreas] = useState<SolvingAreaDTO[]>([]);
  const [typeRequests, setTypeRequests] = useState<TypeRequestDTO[]>([]);
  const [categoryTicket, setCategoryTicket] = useState<CategoryTicketDTO[]>([]);
  const [slaList, setSlaList] = useState<SLADTO[]>([]);

  // Parametros selecionados
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [areaSolucionadora, setAreaSolucionadora] = useState("");
  const [tipoRequisicao, setTipoRequisicao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [sla, setSla] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSearch(
      searchTerm,
      registrationDate,
      status,
      areaSolucionadora,
      tipoRequisicao,
      categoria,
      sla
    );
  }

  function handleClearFilters(): void {
    setSearchTerm("");
    setStatus("");
    setRegistrationDate("");
    setAreaSolucionadora("");
    setTipoRequisicao("");
    setCategoria("");
    setSla("");
  }

  useEffect(() => {
    solvingAreaService.getAllSolvingArea().then((response) => {
      setSolvingAreas(response.data);
    });
  }, []);

  useEffect(() => {
    TypeRequestService.getAllTypeRequest().then((response) => {
      setTypeRequests(response.data);
    });
  }, []);

  useEffect(() => {
    CategoryTicketService.getAllCategoryTicket().then((response) => {
      setCategoryTicket(response.data);
    });
  }, []);

  useEffect(() => {
    SlaService.getAllSla().then((response) => {
      setSlaList(response.data);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-ticker-container">
        <div className="search-input-ticker-container">
          <input
            type="text"
            placeholder=" "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="floating-input"
          />
          <label className="floating-label">Número do ticket</label>
          <FontAwesomeIcon icon={faSearch} className="search-icon-ticker" />
        </div>
        <div className="sla-container-ticker">
          <div className="sla-select-ticker-container">
            <select value={sla} onChange={(e) => setSla(e.target.value)}>
              <option value="">Todas SLA</option>
              {slaList.map((sla) => (
                <option key={sla.id} value={sla.id}>
                  {sla.severity}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="filter-container-ticker">
          <div className="status-select-ticker-container">
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Status Ticket</option>
              <option value="OPEN">Aberto</option>
              <option value="IN_PROGRESS">Em andamento</option>
              <option value="FROZEN">Aguardando</option>
              <option value="CANCELED">Cancelado</option>
              <option value="FINISHED">Finalizado</option>
            </select>
          </div>
          <div className="area-select-ticker-container">
            <select
              value={areaSolucionadora}
              onChange={(e) => setAreaSolucionadora(e.target.value)}
            >
              <option value="">Todas Áreas</option>
              {solvingAreas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.id} - {area.name}
                </option>
              ))}
            </select>
          </div>
          <div className="tipo-select-ticker-container">
            <select
              value={tipoRequisicao}
              onChange={(e) => setTipoRequisicao(e.target.value)}
            >
              <option value="">Todos Tipos requisição</option>
              {typeRequests.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.id} - {type.name}
                </option>
              ))}
            </select>
          </div>
          <div className="categoria-select-ticker-container">
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Todas Categorias</option>
              {categoryTicket.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.id} - {category.name}
                </option>
              ))}
            </select>
          </div>
          <span style={{ fontSize: "14px", color: "gray" }}>
            Data registro:
          </span>
          <div className="date-select-ticker-container">
            <input
              type="date"
              value={registrationDate}
              onChange={(e) => setRegistrationDate(e.target.value)}
              className="date-input-ticker"
            />
          </div>

          <Button
            text="Filtrar"
            icon={faFilter}
            background="#11344d"
            hoverColor="#335577"
            type="submit"
            borderRadius="5px"
          />
          <div onClick={handleClearFilters}>
            <Button
              text="Limpar"
              icon={faEraser}
              background="#11344d"
              hoverColor="#335577"
              borderRadius="5px"
            />
          </div>
        </div>
      </div>


      <div className="container-checkbox-search-ticket">
        <div className="container-form-checkbox">
          <div className="form-group-checkbox">
            <input
              type="checkbox"
              name="annotationPublic"
              id="annotationPublic" // ID atualizado para corresponder
              // checked={formData.annotationPublic}
              // onChange={handleChange}
            />
            <label htmlFor="annotationPublic">Tickets Associados a min</label>
          </div>

          <div className="form-group-checkbox">
            <input
              type="checkbox"
              id="visibleToRequester" // ID atualizado para corresponder
              // checked={formData.visibleToRequester}
              // onChange={handleChange}
            />
            <label htmlFor="visibleToRequester">
             Meu tickets abertos
            </label>
          </div>
          <div className="form-group-checkbox">
            <input
              type="checkbox"
              id="visibleToRequester" // ID atualizado para corresponder
              // checked={formData.visibleToRequester}
              // onChange={handleChange}
            />
            <label htmlFor="visibleToRequester">
             Tickets da minha área
            </label>
          </div>
        </div>
      </div>


    </form>
  );
}

export default SearchTicker;
