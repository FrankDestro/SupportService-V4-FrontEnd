import TicketDetails2 from "../../components/TicketDetais2/TicketDetails2";
import { TicketDTO } from "../../models/ticketDTO";

type Props = {
  ticket: TicketDTO;
};

function TicketDetailsPage({ ticket }: Props) {
  return (
    <div>
     <TicketDetails2 ticket={ticket} />
    </div>
  )
}

export default TicketDetailsPage
