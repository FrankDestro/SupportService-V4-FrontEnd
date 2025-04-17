import { AxiosRequestConfig } from "axios";
import { AttachmentsDTOWithoutMetadata } from "../models/AttachmentsDTO";
import { requestBackendConfig } from "../utils/apiService";

export function addAttachments(obj: AttachmentsDTOWithoutMetadata) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/attachments/add",
    withCredentials: true,
    data: obj,
  };
  return requestBackendConfig(config);
}


export function getAllAttachmentById(id: number) {
  return requestBackendConfig({ url: `/attachments/${id}` });
}
