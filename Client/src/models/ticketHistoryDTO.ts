import { UserDTO } from "./UserDTO";

export type TicketHistoryDTO = {
  id : number,
  description: string;
  annotationPublic: boolean;
  visibleToRequester: boolean;
  noteType: string;
  ticketId: number;
  user: UserDTO;
  registrationDate : string;
  systemGenerated: string;
  };
