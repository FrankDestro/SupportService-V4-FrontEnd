import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";

export function getAllSolvingArea()  {
    const config : AxiosRequestConfig = {
      method : "GET",
      url : '/solvingArea/getAllSolving'
    }
    return requestBackendConfig(config);
}
