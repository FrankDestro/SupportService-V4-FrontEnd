import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import * as solvingAreaService from "../../Service/solving-area";
import Button from "../Button/Button";
import "./SearchPanel.css";
import { SolvingAreaDTO } from "../../models/solvingAreaDTO";
import Clock from "../Clock/Clock";

function SearchPanel() {
  const [solvingAreas, setSolvingAreas] = useState<SolvingAreaDTO[]>([]);

  const [status, setStatus] = useState("");

  useEffect(() => {
    solvingAreaService.getAllSolvingArea().then((response) => {
      setSolvingAreas(response.data);
    });
  }, []);

  return (
    <div className="ticket-search-panel">
      <div className="ticket-filter-panel">
        <div className="ticket-status-select">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Todas Áreas</option>
            {solvingAreas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.id} - {area.name}
              </option>
            ))}
          </select>
        </div>
        <Button
          text="Filtrar"
          icon={faFilter}
          background="#11344d"
          hoverColor="#335577"
        />
      </div>
      <div>
        <Clock />
      </div>
    </div>
  );
}

export default SearchPanel;
