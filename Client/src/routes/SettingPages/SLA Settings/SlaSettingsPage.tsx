import { faCheckCircle, faSave } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import DialogInfo from "../../../components/DialogInfo/DialogInfo";
import { SLADTO } from "../../../models/slaDTO";
import * as slaService from '../../../Service/sla-service';
import './SlaSettingsPage.css';

function SlaSettings() {

  const [sla, setSla] = useState<SLADTO[]>([]);
  const [selectedSla, setSelectedSla] = useState<SLADTO | null>(null);


  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com Sucesso!"
  });

  function handleDialogInfoClose() {
    setDialogInfoData({ ...dialogInfoData, visible: false })
    window.location.reload();
  }

  useEffect(() => {
    slaService.getAllSla()
      .then((response) => {
        setSla(response.data);
      })
      .catch((e) => {
        console.error("Erro ao buscar os SLAs:", e);
      });
  }, []);

  const handleCardClick = (item: SLADTO) => {
    setSelectedSla(item);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedSla) {
      setSelectedSla({ ...selectedSla, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSla) {
      const sla: SLADTO = {
        ...selectedSla
      };
      slaService.updateSlaDetails(sla);
      setDialogInfoData({
        visible: true,
        message: "Alteração realizada com sucesso!"
      })
    };
  }

  return (
    <div className="container-settings-sla">
      <h2 className="container-title-settings">Configurações de SLA</h2>
      <div className="container-settings-sla-content">
        <div className="container-settings-sla-list">
          {sla.map((item) => (
            <div
              key={item.id}
              className="content-settings-sla-item"
              onClick={() => handleCardClick(item)}
              style={{
                background: selectedSla?.id === item.id ? "lightgray" : "",
                cursor: "pointer",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <span style={{ color: "black", fontWeight: "700" }}>Criticidade: </span>
              <span>{item.severity}</span>
              <span style={{ color: "black", fontWeight: "700" }}>Tempo de Resposta: </span>
              <span>{item.responseTime} horas</span>
            </div>

          ))}
        </div>

        {selectedSla !== null ? (
          <div className="container-settings-sla-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="severity"
                placeholder="Nome"
                className="floating-input"
                value={selectedSla?.severity || ""}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="responseTime"
                placeholder="Tempo de Resposta (horas)"
                className="floating-input"
                value={selectedSla?.responseTime || ""}
                onChange={handleInputChange}
              />
              <Button
                text="Salvar Alterações"
                icon={faSave}
                background="#11344d"
                hoverColor="#11344dc7"
                borderRadius="5px"
                type="submit"
                
              />
            </form>
          </div>
        ) : (
          <p>Selecione um SLA para editar.</p>
        )}
      </div>
      {
        dialogInfoData.visible &&
        <DialogInfo
          IconColor="#3a7e24"
          ButtonColor="#3a7e24"
          ButtonHoverColor="#70a94a"
          Icon={faCheckCircle}
          message={dialogInfoData.message}
          onDialogClose={handleDialogInfoClose} />
      }
    </div>
  )
}

export default SlaSettings
