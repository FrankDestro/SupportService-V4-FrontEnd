import {
  faCalendarAlt,
  faCheckCircle,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { TicketHistoryDTO } from "../../models/ticketHistoryDTO";
import * as TicketHistoryNote from "../../Service/ticket-history-service";
import { toValuesTicket } from "../../utils/functions";
import Button from "../../Components/Button/Button";
import DialogInfo from "../../Components/DialogInfo/DialogInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AndamentoTab.css";

interface Props {
  andamentos: TicketHistoryDTO[];
  idTicket: number;
}

const AndamentoTab: React.FC<Props> = ({ andamentos, idTicket }) => {
  const comentariosEndRef = useRef<HTMLDivElement | null>(null);

  const [andamentos2, setAndamentos] = useState<TicketHistoryDTO[]>([]);
  const [formData, setFormData] = useState({
    description: "",
    annotationPublic: false,
    visibleToRequester: false,
  });
  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com Sucesso!",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]:
        type === "checkbox" && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value,
    }));
  };

  const fetchAndamentos = async () => {
    try {
      const response = await TicketHistoryNote.getAllHistoryById(idTicket);
      setAndamentos(response.data);
    } catch (error) {
      console.log("Erro ao buscar os andamentos:", error);
    }
  };

  useEffect(() => {
    fetchAndamentos();
  }, [idTicket]);

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    const noteType = 0;
    const ticketId = idTicket;

    const dataToSend = {
      ...formData,
      noteType,
      ticketId,
    };

    const requestBody = toValuesTicket(dataToSend);
    console.log(requestBody);

    TicketHistoryNote.addTicketHistoryNote(requestBody)
      .then((response) => {
        console.log(response.data.id);
        fetchAndamentos();

        setDialogInfoData({
          visible: true,
          message: "Nota incluída com sucesso",
        });

        setFormData({
          description: "",
          annotationPublic: false,
          visibleToRequester: false,
        });
      })
      .catch((e) => {
        console.log(e + "Erro ao gravar uma nota");
      });
  };

  const handleDialogInfoClose = () => {
    setDialogInfoData({ ...dialogInfoData, visible: false });
  };

  const groupByDate = (andamentos: TicketHistoryDTO[]) => {
    const grouped: { [date: string]: TicketHistoryDTO[] } = {};

    andamentos.forEach((andamento) => {
      const date = new Date(andamento.registrationDate).toLocaleDateString(
        "pt-BR"
      );
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(andamento);
    });

    return grouped;
  };

  const andamentosAgrupados = groupByDate(andamentos2);

  return (
    <>
      <section className="aba-andamento">
        <div className="comentarios">
          {Object.entries(andamentosAgrupados).map(([data, itensDoDia]) => (
            <React.Fragment key={data}>
              <div className="divisor-data">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{ marginRight: "8px", color: "#888" }}
                />
                {data}
              </div>

              {itensDoDia.map((andamento) => (
                <div key={andamento.id} className="comentario">
                  <img
                    src={andamento.user.imgProfile}
                    alt={`Foto de ${andamento.user.firstName}`}
                  />
                  <div className="conteudo">
                    <div className="cabecalho">
                      <div className="usuario-info">
                        <strong>
                          {andamento.user.firstName} {andamento.user.lastName}
                        </strong>
                        <div className="detalhes-user">
                          <span>{andamento.user.email}</span>
                          {andamento.user.department && (
                            <span style={{ fontWeight: "600" }}>
                              {andamento.user.department.description}
                            </span>
                          )}
                        </div>
                        <div className="option-boolean">
                          <span>
                            {andamento.annotationPublic ? "Nota Pública" : "Nota Interna"}
                          </span>
                          <span>
                            {andamento.visibleToRequester ? "Visivel a todos" : "privado"}
                          </span>
                        </div>
                      </div>
                      <span className="data-registro">
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
                        <span className="tag-status">
                          {andamento.description}
                        </span>
                      ) : andamento.noteType === "OBSERVATION" ? (
                        <>
                          <span className="tag-obs">Observação: </span>
                          {andamento.description}
                        </>
                      ) : (
                        andamento.description
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
          <div ref={comentariosEndRef} />
        </div>
      </section>

      <form onSubmit={handleSubmitNote}>
        <div className="container-adicionar-notas">
          <textarea
            placeholder="Adicionar nota..."
            value={formData.description}
            onChange={handleChange}
            rows={4}
            id="description"
          />

          <div className="container-form-checkbox">
            <div className="input-andamento-annotation-public">
              <input
                type="checkbox"
                name="annotationPublic"
                id="annotationPublic"
                checked={formData.annotationPublic}
                onChange={handleChange}
                className="checkbox-glow"
              />
              <label htmlFor="annotationPublic">Torne a anotação pública</label>
            </div>

            <div className="input-andamento-annotation-public">
              <input
                type="checkbox"
                id="visibleToRequester"
                checked={formData.visibleToRequester}
                onChange={handleChange}
                className="checkbox-glow"
              />
              <label htmlFor="visibleToRequester">
                Visível para o solicitante
              </label>
            </div>
          </div>

          <div className="container-button-adicionar-notas">
            <Button
              text="Salvar Nota"
              icon={faSave}
              background="#11344d"
              hoverColor="#335577"
              type="submit"
              borderRadius="5px"
            />
          </div>

          {dialogInfoData.visible && (
            <DialogInfo
              IconColor="#3a7e24"
              ButtonColor="#3a7e24"
              ButtonHoverColor="#70a94a"
              Icon={faCheckCircle}
              message={dialogInfoData.message}
              onDialogClose={handleDialogInfoClose}
            />
          )}
        </div>
      </form>
    </>
  );
};

export default AndamentoTab;
