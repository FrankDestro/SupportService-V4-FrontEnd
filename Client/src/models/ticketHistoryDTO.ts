import { UserDTO } from "./UserDTO";

export type TicketHistoryDTO = {
  id : number,
  description: string;
  annotationPublic: string;
  visibleToRequester: boolean;
  noteType: string;
  ticketId: number;
  user: UserDTO;
  registrationDate : string;
  systemGenerated: string;
  };
