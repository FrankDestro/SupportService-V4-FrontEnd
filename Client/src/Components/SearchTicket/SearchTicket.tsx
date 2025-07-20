import { faEraser, faFilter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { CategoryTicketDTO } from "../../models/CategoryTicketDTO";
import { SLADTO } from "../../models/slaDTO";
import { SolvingAreaDTO } from "../../models/solvingAreaDTO";
import { TypeRequestDTO } from "../../models/typeRequestDTO";
import * as CategoryTicketService from "../../Service/category-service";
import * as SlaService from "../../Service/sla-service";
import * as solvingAreaService from "../../Service/solving-area";
import * as TypeRequestService from "../../Service/type-request";
import Button from "../Button/Button";
import CustomDatePicker from "../FormComponents/CustomDatePicker/CustomDatePicker";
import CustomSelect from "../FormComponents/CustomSelect/CustomSelect";
import CustomInput from "../FormComponents/InputCustom/InputCustom";
import "./SearchTicket.css";

type Props = {
  onSearch: (...args: string[]) => void;
};

function SearchTicker({ onSearch }: Props) {
  const [solvingAreas, setSolvingAreas] = useState<SolvingAreaDTO[]>([]);
  const [typeRequests, setTypeRequests] = useState<TypeRequestDTO[]>([]);
  const [categoryTicket, setCategoryTicket] = useState<CategoryTicketDTO[]>([]);
  const [slaList, setSlaList] = useState<SLADTO[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [areaSolucionadora, setAreaSolucionadora] = useState("");
  const [registrationDate, setRegistrationDate] = useState<string>("");
  const [tipoRequisicao, setTipoRequisicao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [sla, setSla] = useState("");

  const statusTicket = [
    { value: "", label: "Todos os status" },
    { value: "OPEN", label: "Aberto" },
    { value: "N_PROGRESS", label: "Em andamento" },
    { value: "FROZEN", label: "Aguardando" },
    { value: "CANCELED", label: "Cancelado" },
    { value: "FINISHED", label: "Finalizado" },
  ];

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

  function parseDateBR(str: string): Date | null {
    if (!str) return null;
    const [day, month, year] = str.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  function formatDateBR(date: Date | null): string {
    if (!date) return "";
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-search-ticket">
        <CustomInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          width="40%"
          height="40px"
          label="Numero do ticket"
        />
        <CustomSelect
          value={String(sla)}
          onChange={(e) => setSla(e.target.value)}
          options={[
            { value: "", label: "Todas as categorias" },
            ...slaList.map((sla) => ({
              value: String(sla.id),
              label: sla.severity,
            })),
          ]}
          width="500px"
          height="40px"
          label="Categorias"
        />
        <CustomSelect
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={statusTicket}
          width="500px"
          height="40px"
          label="Status"
        />

        <CustomSelect
          value={areaSolucionadora}
          onChange={(e) => setAreaSolucionadora(e.target.value)}
          options={[
            { value: "", label: "Todas as áreas" },
            ...solvingAreas.map((area) => ({
              value: String(area.id),
              label: area.name,
            })),
          ]}
          width="500px"
          height="40px"
          label="Área Soluc."
        />

        <CustomSelect
          value={tipoRequisicao}
          onChange={(e) => setTipoRequisicao(e.target.value)}
          options={[
            { value: "", label: "Todas Requisições" },
            ...typeRequests.map((type) => ({
              value: String(type.id),
              label: type.name,
            })),
          ]}
          width="500px"
          height="40px"
           label="Requisições"
        />

        <CustomSelect
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          options={[
            { value: "", label: "Todas Categorias" },
            ...categoryTicket.map((category) => ({
              value: String(category.id),
              label: category.name,
            })),
          ]}
          width="500px"
          height="40px"
            label="Categorias"
        />

        <CustomDatePicker
          label="Data de registro"
          value={parseDateBR(registrationDate)}
          onChange={(date) => setRegistrationDate(formatDateBR(date))}
          width="500px"
          height="50px"
          placeholder="Selecione a data"
        />

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
    </form>
  );
}

export default SearchTicker;
