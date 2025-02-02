import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";

export function getActivityPanelSummaryTickets()  {
    const config : AxiosRequestConfig = {
      method : "GET",
      url : '/ticket/getActivityPanelSummaryTickets'
    }
    return requestBackendConfig(config);
}

export function getActivityPanelSummaryPercentTickets()  {
  const config : AxiosRequestConfig = {
    method : "GET",
    url : '/ticket/getActivityPanelSummaryPercentTickets'
  }
  return requestBackendConfig(config);
}

export function getActivityPanelSummaryTicketsByUrgency()  {
  const config : AxiosRequestConfig = {
    method : "GET",
    url : '/ticket/getActivityPanelSummaryTicketsByUrgency'
  }
  return requestBackendConfig(config);
}


export function getActivityPanelSummaryTicketsValueByUrgency()  {
  const config : AxiosRequestConfig = {
    method : "GET",
    url : '/ticket/getActivityPanelSummaryTicketsValueByUrgency'
  }
  return requestBackendConfig(config);
}


