import { UserDTO } from "./RequesterDTO";

export type AttachmentsDTO = {
  id: number;
  url: string;
  registrationDate: string;
  fileName: string;
  type: string;
  ticketId: number;
  user: UserDTO;
};
