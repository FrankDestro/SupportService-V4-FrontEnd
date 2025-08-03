import React, { useEffect, useState } from "react";
import "./TicketDetails.css";
import DetalhesChamado from "../DetalhesChamado/DetalhesChamado";
import AndamentoTab from "../AndamentoTab/AndamentoTab";
import AnexoTab from "../AnexoTab/AnexoTab";
import { TicketDTO } from "../../models/ticketDTO";
import { getAllHistoryById } from "../../Service/ticket-history-service";
import { getAllAttachmentById } from "../../Service/attachment-service";
import Button from "../../Components/Button/Button";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Components/ModalDefault/Modal";
import TicketTimelineChart from "../../Components/TicketTimelineChart/TicketTimelineChart";

type Aba = "detalhes" | "andamento" | "anexo";

interface Props {
  ticket: TicketDTO;
}

const TicketDetails: React.FC<Props> = ({ ticket }) => {
  const [abaAtiva, setAbaAtiva] = useState<Aba>("detalhes");
  const [andamentos, setAndamentos] = useState<any[]>([]);
  const [anexos, setAnexos] = useState<any[]>([]);
  const [carregandoAndamentos, setCarregandoAndamentos] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (abaAtiva === "andamento") {
      setCarregandoAndamentos(true);
      getAllHistoryById(ticket.id)
        .then((response) => {
          setAndamentos(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar histórico de andamento:", error);
        })
        .finally(() => setCarregandoAndamentos(false));
    }
  }, [abaAtiva, ticket.id]);

  useEffect(() => {
    if (abaAtiva === "anexo" && anexos.length === 0) {
      setCarregandoAndamentos(true);
      getAllAttachmentById(ticket.id)
        .then((response) => {
          setAnexos(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar histórico de andamento:", error);
        })
        .finally(() => setCarregandoAndamentos(false));
    }
  }, [abaAtiva, ticket.id]);

  return (
    <div className="chamado-container">
      <div className="tabs">
        <button
          onClick={() => setAbaAtiva("detalhes")}
          className={abaAtiva === "detalhes" ? "tab ativa" : "tab"}
        >
          Detalhes do Chamado
        </button>
        <button
          onClick={() => setAbaAtiva("andamento")}
          className={abaAtiva === "andamento" ? "tab ativa" : "tab"}
        >
          Andamento
        </button>
        <button
          onClick={() => setAbaAtiva("anexo")}
          className={abaAtiva === "anexo" ? "tab ativa" : "tab"}
        >
          Anexo (4)
        </button>
      </div>

      <div className="conteudo">
        {abaAtiva === "detalhes" && (
          <div>
            <DetalhesChamado ticket={ticket} />
          </div>
        )}

        {abaAtiva === "andamento" && (
          <div>
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Histórico de Andamento
              <div onClick={() => setShowModal(true)}>
                <Button
                  text="Ver histórico"
                  icon={faChartLine}
                  background="white"
                  hoverColor="#d3d3d3"
                  type="submit"
                  borderRadius="5px"
                  size="small"
                  color="black"
                  fontWeight="600"
                  fontSize="12px"
                />
              </div>
            </h3>
            {carregandoAndamentos ? (
              <p>Carregando andamento...</p>
            ) : (
              <AndamentoTab andamentos={andamentos} idTicket={ticket.id} />
            )}
          </div>
        )}
        {abaAtiva === "anexo" && (
          <div>
            <h3>Anexos</h3>
            {carregandoAndamentos ? (
              <p>Carregando andamento...</p>
            ) : (
              <AnexoTab anexos={anexos} idTicket={ticket.id} />
            )}
          </div>
        )}
      </div>

      <Modal
        title="TimeLine Ticket"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        footer=""
        width="100%"
        maxBodyHeight="60vh"
      >
        <TicketTimelineChart
          data={andamentos.filter((e) => e.noteType === "SYSTEM_GENERATED")}
        />
      </Modal>
    </div>
  );
};

export default TicketDetails;
