import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";

export function getAllCategoryTicket()  {
    const config : AxiosRequestConfig = {
      method : "GET",
      url : '/categoryTicket/getAllCategoryTicket'
    }
    return requestBackendConfig(config);
}
