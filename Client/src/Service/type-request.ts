import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";

export function getAllTypeRequest() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/typeRequest/getAllTypeRequest",
  };
  return requestBackendConfig(config);
}
