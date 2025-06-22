import TicketDetails from "../../Modules/TicketDetais/TicketDetails";
import { TicketDTO } from "../../models/ticketDTO";

type Props = {
  ticket: TicketDTO;
};

function TicketDetailsPage({ ticket }: Props) {
  return (
    <div>
     <TicketDetails ticket={ticket} />
    </div>
  )
}

export default TicketDetailsPage
