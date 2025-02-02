import { AxiosRequestConfig } from "axios";
import { requestBackendConfig } from "../utils/apiService";

export function allKownErrorRequest(
  page: number,
  id : string,
  titleText: string,
  rootCauseText: string,
  solution: string,
  status: string,
  initialDate: string,
  finalDate: string,
  initialDateResolution: string,
  finalDateResolution: string,
  tags: any[],
  size = 10,
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/knowError/getKnowErrorByCriteria",
    params: {
      page,
      titleText,
      id,
      rootCauseText,
      solution,
      status,
      initialDate,
      finalDate,
      initialDateResolution,
      finalDateResolution,
      tags,
      size,
    },
  };
  return requestBackendConfig(config);
}