import React from "react";
import "./AndamentoTab.css";
import { TicketHistoryDTO } from "../../models/ticketHistoryDTO";

type Comment = {
  id: number;
  user: {
    id: number;
    name: string;
    imageUrl: string;
    email: string;
    department: string | null;
  };
  description: string;
  registrationDate: string;
  systemGenerated: boolean;
  noteType: string;
};

const mockComments: Comment[] = [
  {
    id: 1,
    user: {
      id: 101,
      name: "João Silva",
      email: "joao.solicitante@empresa.com",
      department: "Atendimento",
      imageUrl: "https://i.pravatar.cc/150?img=3",
    },
    description: "Pedido encaminhado para o setor de separação.",
    registrationDate: "2024-07-01T10:15:00",
    systemGenerated: true,
    noteType: "COMMENT",
  },
  {
    id: 2,
    user: {
      id: 102,
      name: "Maria Oliveira",
      email: "maria.oliveira@empresa.com",
      department: "Desenvolvimento",
      imageUrl: "https://i.pravatar.cc/150?img=5",
    },
    description: "Produto separado e pronto para envio.",
    registrationDate: "2024-07-02T14:30:00",
    systemGenerated: true,
    noteType: "COMMENT",
  },
  {
    id: 3,
    user: {
      id: 103,
      name: "Carlos Pereira",
      email: "carlos.pereira@empresa.com",
      department: "Logística",
      imageUrl: "https://i.pravatar.cc/150?img=8",
    },
    description: "Pedido saiu para entrega com a transportadora.",
    registrationDate: "2024-07-03T09:00:00",
    systemGenerated: true,
    noteType: "COMMENT",
  },
  {
    id: 99,
    user: {
      id: 103,
      name: "Carlos Pereira",
      email: "carlos.pereira@empresa.com",
      department: "Logística",
      imageUrl: "https://i.pravatar.cc/150?img=8",
    },
    description: "Status alterado para: Em andamento",
    registrationDate: "2025-04-10T10:45:00",
    systemGenerated: true,
    noteType: "STATUS_CHANGE",
  },
];


interface Props {
  andamentos: TicketHistoryDTO[];
}

const AndamentoTab: React.FC<Props> = ({ andamentos }) => {
  return (
    <section className="aba-andamento">
      <div className="comentarios">
        {andamentos.map((andamento) => (
          <div key={andamento.id} className="comentario">
            <img
              src={andamento.user.imgProfile}
              alt={`Foto de ${andamento.user.firstName}`}
            />
            <div className="conteudo">
              <div className="cabecalho">
                <div className="usuario-info">
                  <strong>{andamento.user.firstName}</strong>
                  <div className="detalhes-user">
                    <span>{andamento.user.email}</span>
                    {andamento.user.department && (
                      <span> • {andamento.user.department.description}</span>
                    )}
                  </div>
                </div>
                <span className="data">
                  {new Date(andamento.registrationDate).toLocaleString(
                    "pt-BR",
                    {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </span>
              </div>
              <p className="descricao">
                {andamento.systemGenerated &&
                andamento.noteType === "STATUS_CHANGE" ? (
                  <span className="tag-status">{andamento.description}</span>
                ) : andamento.noteType === "OBSERVATION" ? (
                  <>
                    <span className="tag-obs">Observação: </span>
                    {andamento.description}
                  </>
                ) : (
                  andamento.description
                )}
              </p>
              <p>{andamento.annotationPublic}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AndamentoTab;
