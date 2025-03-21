import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";
import { TicketDTO } from "../models/ticketDTO";

export function allTicketsRequest(
  page: number,
  id: string,
  registrationDate: string,
  status: string,
  area: string,
  typeRequest: string,
  categoryTicket: string,
  sla: string,
  size = 16,
  sort = "registrationDate"
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/ticket/getTicketsByCriteria",
    params: {
      page,
      id,
      registrationDate,
      status,
      size,
      sort,
      area,
      typeRequest,
      categoryTicket,
      sla,
    },
  };
  return requestBackendConfig(config);
}

export function ticketById(id: number) {
  return requestBackendConfig({ url: `/ticket/getTicketById/${id}` });
}

export function createTicket(obj: TicketDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/ticket/create",
    withCredentials: true,
    data: obj,
  };
  return requestBackendConfig(config);
}
