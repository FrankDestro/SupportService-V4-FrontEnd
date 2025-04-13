import React from "react";
import semDados from "../../assets/sem-dados.png";
import { TicketDTO } from "../../models/ticketDTO";
import {
  getSeverityBadgeStyle,
  getStatusTicketBadgeStyle,
} from "../../utils/functions";
import "./DetalhesChamado.css";

type Props = {
  ticket: TicketDTO;
};

const DetalhesChamado: React.FC<Props> = ({ ticket }) => {
  return (
    <div className="container-detalhes">
      <div className="coluna">
        <h4>📌 Dados do Chamado</h4>
        <p>
          <strong>Assunto:</strong> {ticket.subject}
        </p>
        <p>
          <strong>Descrição:</strong> {ticket.description}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span style={getStatusTicketBadgeStyle(ticket.statusTicket)}>
            {ticket.statusTicket}
          </span>
        </p>

        <p>
          <strong>Tipo de Requisição:</strong> {ticket.typeRequest.name}
        </p>
        <p>
          <strong>Data Registro:</strong>{" "}
          {new Date(ticket.registrationDate).toLocaleString()}
        </p>
        <p>
          <strong>Data Conclusão:</strong>{" "}
          {new Date(ticket.completionDate).toLocaleString()}
        </p>
        <p>
          <strong>Data final:</strong>{" "}
          {new Date(ticket.dueDate).toLocaleString()}
        </p>
        <p>
          <strong>Categoria:</strong> {ticket.categoryTicket.name}
        </p>
        <p>
          <strong>Área Solucionadora:</strong> {ticket.solvingArea.name}
        </p>
        <p>
          <strong>Severidade:</strong>{" "}
          <span style={getSeverityBadgeStyle(ticket.sla.severity)}>
            {ticket.sla.severity}
          </span>
        </p>
        <p>
          <strong>Tempo de resposta:</strong> {ticket.sla.responseTime} horas{" "}
        </p>
        <p>
          {ticket.parentTicketId ? (
            <>
              <strong>Ticket pai:</strong> {ticket.parentTicketId}
            </>
          ) : (
            <>
              <strong>Ticket pai:</strong>
              <em> Não possui ticket pai</em>
            </>
          )}
        </p>
      </div>

      <div className="coluna">
        <h4>👤 Solicitante</h4>
        <img
          src={ticket.requester.imgProfile}
          alt="Solicitante"
          className="foto"
        />
        <p>
          <strong>Nome:</strong> {ticket.requester.firstName}{" "}
          {ticket.requester.lastName}
        </p>
        <p>
          <strong>Email:</strong> {ticket.requester.email}
        </p>
        <p>
          <strong>Telefone:</strong> {ticket.requester.contactNumber}
        </p>
        <p>
          <strong>Departamento:</strong>{" "}
          {ticket.requester.department.description}
        </p>
      </div>

      <div className="coluna">
        <h4>🧑‍🔧 Técnico</h4>

        {ticket.technician ? (
          <>
            <img
              src={ticket.technician.imgProfile}
              alt="Técnico"
              className="foto"
            />
            <p>
              <strong>Nome:</strong> {ticket.technician.firstName}{" "}
              {ticket.technician.lastName}
            </p>
            <p>
              <strong>Email:</strong> {ticket.technician.email}
            </p>
            <p>
              <strong>Telefone:</strong> {ticket.technician.contactNumber}
            </p>
            <p>
              <strong>Departamento:</strong>{" "}
              {ticket.technician.department.description}
            </p>
          </>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={semDados} alt="sem-dados"></img>
            <p>
              <em>Não atribuído</em>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetalhesChamado;
