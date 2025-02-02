import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";
import { SLADTO } from "../models/slaDTO";

export function getAllSla() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/sla/getSlaConfig",
  };
  return requestBackendConfig(config);
}


export function updateSlaDetails(obj: SLADTO) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/sla/updateSLA/${obj.id}`,
    withCredentials: true,
    data: obj
  }
  return requestBackendConfig(config);
}