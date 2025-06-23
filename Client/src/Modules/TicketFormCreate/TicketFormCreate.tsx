import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import DialogInfo from "../../Components/DialogInfo/DialogInfo";
import CustomSelect from "../../Components/FormComponents/CustomSelect/CustomSelect";
import CustomTextarea from "../../Components/FormComponents/CustomTextarea/CustomTextarea";
import CustomUploadFile from "../../Components/FormComponents/CustomUploadFile/CustomUploadFile";
import CustomInput from "../../Components/FormComponents/InputCustom/InputCustom";
import * as AttachmentService from "../../Service/attachment-service";
import * as CategoryTicketService from "../../Service/category-service";
import * as SlaService from "../../Service/sla-service";
import * as TicketService from "../../Service/ticket-service";
import * as TypeRequestService from "../../Service/type-request";
import { AttachmentsDTO } from "../../models/AttachmentsDTO";
import { CategoryTicketDTO } from "../../models/CategoryTicketDTO";
import { SLADTO } from "../../models/slaDTO";
import { TypeRequestDTO } from "../../models/typeRequestDTO";
import { cleanDescription, toValuesTicket } from "../../utils/functions";
import "./TicketFormCreate.css";

function TicketFormCreate() {
  const [typeRequests, setTypeRequests] = useState<TypeRequestDTO[]>([]);
  const [categoryTicket, setCategoryTicket] = useState<CategoryTicketDTO[]>([]);
  const [slaList, setSlaList] = useState<SLADTO[]>([]);

  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com Sucesso!",
  });

  const [dialogInfoSave, setDialogInfoSave] = useState({
    visible: false,
    message: "Salvando Dados...",
  });

  function handleDialogInfoClose() {
    setDialogInfoData({ ...dialogInfoData, visible: false });
    window.location.reload();
  }

  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

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

  const [formData, setFormData] = useState({
    description: "",
    typeRequest: "",
    categoryTicket: "",
    sla: "",
    subject: "",
    parentTicketId: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const requestBody = toValuesTicket(formData);

    const description = cleanDescription(formData.description);

    setFormData({ ...formData, description: description });

    TicketService.createTicket(requestBody)
      .then((response) => {
        setDialogInfoSave({
          visible: true,
          message: "Salvando Dados...",
        });

        console.log()

        setTimeout(() => {
          if (response.status == 201) {
            setDialogInfoSave({
              visible: false,
              message: "Salvando Dados...",
            });
            setDialogInfoData({
              visible: true,
            message: `Ticket salvo com sucesso! Número do ticket: ${response.data.id}`
            });
          }
        }, 200);

        if (attachedFiles.length !== 0) {
          attachedFiles.forEach((file) => {
            const attachmentData = {
              url: `https://example.com/path/to/your/${file.name}`,
              fileName: file.name,
              type: file.type.split("/")[1].toUpperCase(),
              ticketId: response.data.id,
            } as AttachmentsDTO;

            AttachmentService.addAttachments(attachmentData);
          });
        }
      })
      .catch((e) => {
        console.log(e + " erro");
      });
  }

  return (
    <div className="container-ticket-form-create">
      <form onSubmit={handleSubmit}>
        <div className="ticket-form-container">
          <div className="ticket-form-fields">
            <div className="ticket-form-row">
              <div className="ticket-form-item">
                <CustomInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  width="100%"
                  label="Assunto / Titulo do chamado"
                />
              </div>

              <div className="ticket-form-item">
                <CustomSelect
                  value={formData.categoryTicket}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "Categoria do Chamado" },
                    ...categoryTicket.map((category) => ({
                      value: String(category.id),
                      label: category.name,
                    })),
                  ]}
                  width="100%"
                  height="40px"
                  label="Categoria do Chamado"
                  name="categoryTicket"
                />
              </div>

              <div className="ticket-form-item">
                <CustomInput
                  type="number"
                  name="parentTicketId"
                  value={formData.parentTicketId}
                  onChange={handleChange}
                  width="100%"
                  height="40px"
                  label="Ticket Referência"
                />
              </div>
            </div>

            <div className="ticket-form-row">
              <div className="ticket-form-item">
                <CustomSelect
                  label="Tipo de Solicitação"
                  name="typeRequest"
                  value={formData.typeRequest}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "Selecione um tipo de req." },
                    ...typeRequests.map((type) => ({
                      value: String(type.id),
                      label: type.name,
                    })),
                  ]}
                  width="100%"
                  height="40px"
                />
              </div>
              <div className="ticket-form-item">
                <CustomSelect
                  label="Criticidade"
                  name="sla"
                  value={formData.sla}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "Selecione uma Criticidade" },
                    ...slaList.map((sla) => ({
                      value: String(sla.id),
                      label: sla.severity,
                    })),
                  ]}
                  width="100%"
                  height="40px"
                />
              </div>
            </div>

            <div className="ticket-form-item">
              <label htmlFor="description">Descrição</label>
              <CustomTextarea
                className="container-adicionar-notas"
                value={formData.description}
                onChange={(value: string) =>
                  setFormData({ ...formData, description: value })
                }
                rows={8}
                resize="none"
                placeholder="Descreva a solicitação em detalhes"
              />
            </div>

            <CustomUploadFile
              label="Anexos"
              files={attachedFiles}
              onFilesChange={setAttachedFiles}
            />

            <div
              style={{ width: "100%", display: "flex", justifyContent: "end" }}
            >
              <Button
                text="Criar Ticket"
                icon={faDatabase}
                background="#11344d"
                type="submit"
                width="200px"
                borderRadius="5px"
                hoverColor="#11344dc7"
              />
            </div>
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

          {dialogInfoSave.visible && (
            <DialogInfo
              IconColor="#3a7e24"
              ButtonColor="#3a7e24"
              ButtonHoverColor="#70a94a"
              Icon={faCheckCircle}
              message={dialogInfoSave.message}
              onDialogClose={handleDialogInfoClose}
              isLoading={true}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default TicketFormCreate;
