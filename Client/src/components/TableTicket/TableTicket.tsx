/* eslint-disable @typescript-eslint/no-unused-vars */
import { faClock, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TicketDTO, TicketSimpleDTO } from "../../models/ticketDTO";
import * as ticketService from "../../Service/ticket-service";
import * as functions from "../../utils/functions";
import "./TableTicket.css";
import { useEffect, useState } from "react";

type TableTicketProps = {
  tickets: TicketSimpleDTO[];
  onFilter: (ticket: TicketSimpleDTO, ticketComplete: TicketDTO) => void;
};

function TableTicket({ tickets, onFilter }: TableTicketProps) {
  const [completeTicket, setCompleteTicket] = useState<TicketDTO>();
  const [selectedTicket, setSelectedTicket] = useState<TicketSimpleDTO | null>(
    null
  );

  const handleChamadoClick = (ticket: TicketSimpleDTO) => {
    setSelectedTicket(ticket);
  };

  useEffect(() => {
    if (selectedTicket) {
      ticketService
        .ticketById(selectedTicket.id)
        .then((response) => {
          const ticketData: TicketDTO = response.data;
          setCompleteTicket(ticketData);
          onFilter(selectedTicket, ticketData);
          console.log("fui apertado");
        })
        .catch((error) => {
          console.error("Erro ao buscar ticket completo:", error);
        });
    }
  }, [selectedTicket]);

  return (
    <div>
      <div className="ticket-table-container">
        <table className="container-base">
          <thead>
            <tr>
              <th>ID</th>
              <th>Assunto</th>
              <th>Data de Registro</th>
              <th>Data de Vencimento</th>
              <th>Tempo restante</th>
              <th>Criticidade</th>
              <th>Status</th>
              <th>Natureza</th>
              <th>Solicitante</th>
              <th>Depart. Solicitante</th>
              <th>Em atendimento por</th>
              <th>Finalizado por</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} onClick={() => handleChamadoClick(ticket)}>
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>
                  {functions.formatDate(ticket.registrationDate)}
                </td>
                <td>{functions.formatDate(ticket.dueDate)}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ marginRight: "10px" }}
                    />
                  </div>

                  {functions.calculateRemainingTime(ticket.dueDate)}
                </td>
                <td>{ticket.sla.severity}</td>
                <td>
                  <span
                    style={functions.getStatusTicketBadgeStyle(
                      ticket.statusTicket
                    )}
                  >
                    {ticket.statusTicket}
                  </span>
                </td>
                <td>{ticket.categoryTicket.name}</td>
                <td>{`${ticket.requester.firstName} ${ticket.requester.lastName}`}</td>
                <td>{ticket.requester.department.description}</td>  
                <td>
                  {ticket.technician ? (
                    `${ticket.technician.firstName} ${ticket.technician.lastName}`
                  ) : (
                    <span style={{ color: "black" }}>Não Atribuído</span>
                  )}
                </td>
                <td>
                  {ticket.resolver ? (
                    `${ticket.resolver.firstName} ${ticket.resolver.lastName}`
                  ) : (
                    <span style={{ color: "black" }}>Não Finalizado</span>
                  )}
                </td>
                <td>
                  <div
                    className="container-button-details"
                    onClick={() => handleChamadoClick(ticket)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableTicket;
