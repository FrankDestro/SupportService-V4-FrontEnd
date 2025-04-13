import { CategoryTicketDTO } from "./CategoryTicketDTO";
import { UserDTO } from "./RequesterDTO";
import { SLADTO } from "./slaDTO";
import { SolvingAreaDTO } from "./solvingAreaDTO";
import { TypeRequestDTO } from "./typeRequestDTO";

export type TicketDTO = {
  id: number;
  subject: string;
  description: string;
  registrationDate: string;
  dueDate: string;
  statusTicket: string;
  completionDate: string;
  parentTicketId: number;
  typeRequest: TypeRequestDTO;
  sla: SLADTO;
  solvingArea: SolvingAreaDTO;
  categoryTicket: CategoryTicketDTO;
  requester: UserDTO;
  technician: UserDTO;
  resolver: UserDTO;
};

export type TicketSimpleDTO = Omit<
  TicketDTO,
  "ticketHistories" | "attachments"
>;
