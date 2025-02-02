import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";

export function getAllRoles()  {
    const config : AxiosRequestConfig = {
      method : "GET",
      url : '/roles/getAllRoles'
    }
    return requestBackendConfig(config);
}
