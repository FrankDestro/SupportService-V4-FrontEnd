import { AxiosRequestConfig } from "axios";
import { AttachmentsDTO } from "../models/AttachmentsDTO";
import { requestBackendConfig } from "../utils/apiService";

export function addAttachments(obj: AttachmentsDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/attachments/add",
    withCredentials: true,
    data: obj,
  };
  return requestBackendConfig(config);
}
