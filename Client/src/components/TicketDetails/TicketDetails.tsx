import {
  faCheck,
  faCheckCircle,
  faFile,
  faNoteSticky,
  faSave,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Accordion } from "react-bootstrap";
import { CategoryTicketDTO } from "../../models/CategoryTicketDTO";
import { SLADTO } from "../../models/slaDTO";
import { TicketDTO } from "../../models/ticketDTO";
import { TypeRequestDTO } from "../../models/typeRequestDTO";
import * as CategoryTicketService from "../../Service/category-service";
import * as SlaService from "../../Service/sla-service";
import * as TypeRequestService from "../../Service/type-request";
import * as TicketHistoryNote from "../../Service/ticket-history-service";
import Button from "../Button/Button";
import "./TicketDetails.css";
import { toValuesTicket } from "../../utils/functions";
import DialogInfo from "../DialogInfo/DialogInfo";
import * as functions from "../../utils/functions";

type Props = {
  ticket: TicketDTO;
};

function TicketDetails({ ticket }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [typeRequests, setTypeRequests] = useState<TypeRequestDTO[]>([]);
  const [categoryTicket, setCategoryTicket] = useState<CategoryTicketDTO[]>([]);
  const [slaList, setSlaList] = useState<SLADTO[]>([]);

  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com Sucesso!",
  });

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    TypeRequestService.getAllTypeRequest().then((response) => {
      setTypeRequests(response.data);
    });

    CategoryTicketService.getAllCategoryTicket().then((response) => {
      setCategoryTicket(response.data);
    });

    SlaService.getAllSla().then((response) => {
      setSlaList(response.data);
    });
  }, []);

  function handleDialogInfoClose() {
    setDialogInfoData({ ...dialogInfoData, visible: false });
  }

  const [formData, setFormData] = useState({
    description: "",
    annotationPublic: false,
    visibleToRequester: false,
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

  const handleSubmitNote = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    const noteType = 0;
    const ticketId = ticket.id;

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
        setDialogInfoData({
          visible: true,
          message: "Nota incluida com sucesso",
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

  useEffect(() => {
    console.log("Histórico atualizado:", ticket.ticketHistories);
  }, [ticket.ticketHistories]);

  return (
    <div className="container-ticket-details">
      <div className="left-ticket-details-summary container-base">
        <div className="ticket-details">
          <div className="main-info">
            <h2>Ticket # {ticket.id}</h2>
            <p>
              <strong>Assunto:</strong> {ticket.subject}
            </p>
            <p>
              <strong>Status:</strong>
              <p className={`ticket-status ${ticket.statusTicket}`}>
                {ticket.statusTicket}
              </p>
            </p>

            <p>
              <strong>Em atendimento por:</strong>
            </p>
            <p>
              {ticket.technician
                ? `${ticket.technician.firstName} ${ticket.technician.lastName}`
                : "Não atribuido"}
            </p>
            <p>{ticket.technician?.email || ""}</p>
            <p>
              {ticket.technician?.department?.description || ""}
            </p>

            <p>
              <strong>Resolvido por:</strong>
            </p>
            <p>
              {ticket.resolver
                ? `${ticket.resolver.firstName} ${ticket.technician.lastName}`
                : "Não finalizado"}
            </p>
            <p>{ticket.resolver?.email || ""}</p>
            <p>
              {ticket.resolver?.department?.description || ""}
            </p>

            <p>
              <strong>Data de Registro: </strong>{" "}
              {new Date(ticket.registrationDate).toLocaleString()}
            </p>
            <p>
              <strong>Data de Conclusão :</strong>{" "}
              {ticket.completionDate
                ? new Date(ticket.completionDate).toLocaleString()
                : "Não concluído"}
            </p>
            <p>
              <strong>Prazo Final:</strong>{" "}
              {new Date(ticket.dueDate).toLocaleString()}
            </p>
            <p>
              <strong>SLA: </strong>
              {/* <p className={`ticket-onSLA ${ticket.onSLA}`}>
                {ticket.onSLA ? "No prazo" : "Fora do prazo"}
              </p> */}
              sera implementado
            </p>
            <p>
              <strong>Criticidade:</strong> {ticket.sla.severity}
            </p>
            <p>
              <strong>Tempo de Resposta:</strong> {ticket.sla.responseTime}{" "}
              horas
            </p>

            <p>
              <FontAwesomeIcon
                icon={faTicket}
                style={{ marginRight: "10px" }}
              />
              <strong>Referencia ticket: </strong>
              {ticket.parentTicketId ? ticket.parentTicketId : "N/A"}
            </p>
            <div className="description-container">
              <strong>Descrição:</strong>
              <p className="description">
                {functions.removeTags(ticket.description)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div
          className="center-ticket-details-history container-base"
          style={{
            height: isOpen ? "385px" : "750px",
          }}
        >
          <h3>Andamento do ticket</h3>

          {ticket.ticketHistories.map((history) => (
            <div key={history.id} className="history-entry">
              <div className="history-user">
                <img
                  src={history.user.imgProfile}
                  alt={`${history.user.firstName} ${history.user.lastName}`}
                  className="user-image"
                />

                <div className="user-details">
                  <p>
                    <strong>
                      {history.user.firstName} {history.user.lastName}
                    </strong>
                  </p>
                  <p>{history.user.department.description}</p>
                </div>
              </div>
              <div className="history-info">
                <p className="history-description">{history.description}</p>
                <p>
                  <strong>Date: </strong>
                  {new Date(history.registrationDate).toLocaleString()}
                </p>
                <p>
                  <strong>Type:</strong> {history.noteType}
                </p>
                {history.annotationPublic && (
                  <span className="public-tag">Public</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmitNote}>
          <div>
            <Accordion
              activeKey={isOpen ? "0" : null}
              onSelect={handleToggle}
              className="container-base"
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FontAwesomeIcon
                    icon={faNoteSticky}
                    fontSize={18}
                    color="gray"
                    style={{ marginRight: "10px" }}
                  />
                  Adicionar nota
                </Accordion.Header>
                <Accordion.Body>
                  <div className="ticket-form-item">
                    <textarea
                      className="custom-textarea"
                      rows={7}
                      placeholder="Adicione sua nota..."
                      id="description" // ID deve corresponder à chave no formData
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <div className="container-form-checkbox">
                      <div className="form-group-checkbox">
                        <input
                          type="checkbox"
                          name="annotationPublic"
                          id="annotationPublic" // ID atualizado para corresponder
                          checked={formData.annotationPublic}
                          onChange={handleChange}
                        />
                        <label htmlFor="annotationPublic">
                          Torne a anotação pública
                        </label>
                      </div>

                      <div className="form-group-checkbox">
                        <input
                          type="checkbox"
                          id="visibleToRequester" // ID atualizado para corresponder
                          checked={formData.visibleToRequester}
                          onChange={handleChange}
                        />
                        <label htmlFor="visibleToRequester">
                          Visível para o solicitante
                        </label>
                      </div>
                    </div>

                    <div>
                      <Button
                        text="Adicionar Nota"
                        icon={faCheck}
                        background="#11344d"
                        type="submit"
                        width="200px"
                        borderRadius="5px"
                        hoverColor="#11344dc7"
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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
        </form>
      </div>

      <div className="right-center-ticket-details-options container-base">
        <div className="requester-info">
          <h4>Solicitante</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={ticket.requester.imgProfile}
              alt={`${ticket.requester.firstName} ${ticket.requester.lastName}`}
              className="requester-image"
            />
            <h3>
              {ticket.requester.firstName} {ticket.requester.lastName}
            </h3>
          </div>

          <div className="requester-details">
            <p>
              <strong>Departamento:</strong>
              {ticket.requester.department.description}
            </p>
            <p>
              <strong>Email:</strong>
              <a href={`mailto:${ticket.requester.email}`}>
                {ticket.requester.email}
              </a>
            </p>
            <p>
              <strong>Contato:</strong>{" "}
              <a href={`tel:${ticket.requester.contactNumber}`}>
                {ticket.requester.contactNumber}
              </a>
            </p>
          </div>
        </div>
        <div className="options-container">
          <h4>Opções de Alteração</h4>

          <div className="form-group">
            <label htmlFor="typeRequest" style={{ marginBottom: "10px" }}>
              Tipo de Solicitação
            </label>
            <select name="typeRequest">
              <option value="">{ticket.typeRequest.name}</option>
              {typeRequests.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.id} - {type.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sla" style={{ marginBottom: "10px" }}>
              SLA
            </label>
            <select name="sla">
              <option value="">{ticket.sla.severity}</option>
              {slaList.map((sla) => (
                <option key={sla.id} value={sla.id}>
                  {sla.severity}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="categoryTicket" style={{ marginBottom: "10px" }}>
              Categoria do Ticket
            </label>
            <select name="categoryTicket">
              <option value="">{ticket.categoryTicket.name}</option>
              {categoryTicket.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.id} - {category.name}
                </option>
              ))}
            </select>
          </div>
          <div
            style={{ display: "flex", gap: "10px", flexDirection: "column" }}
          >
            <Button
              text="Salvar Alterações"
              icon={faSave}
              background="#11344d"
              hoverColor="#335577"
              type="submit"
              borderRadius="5px"
              width="100%"
            />
            <Button
              text="Anexos"
              icon={faFile}
              background="#11344d"
              hoverColor="#335577"
              type="submit"
              borderRadius="5px"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetails;
