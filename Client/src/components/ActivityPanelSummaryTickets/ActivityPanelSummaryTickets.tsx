import {
  faBan,
  faCheckCircle,
  faClipboardList,
  faClock,
  faCommentDots,
  faExclamationCircle,
  faFolderOpen,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activityPanelSummaryTicketsDTO } from "../../models/activityPanelSummaryTicketsDTO";
import "./ActivityPanelSummaryTickets.css";

type ActivityPanelSummaryTicketsProps = {
  activityPanelSummaryTickets: activityPanelSummaryTicketsDTO | null;
};

function ActivityPanel({
  activityPanelSummaryTickets,
}: ActivityPanelSummaryTicketsProps) {
  return (
    <div className="container-main-summary">
      <div className="container-base card-summary">
        <div className="container-title-icon">
          <FontAwesomeIcon
            icon={faClipboardList}
            color="#6C757D"
            fontSize={20}
          />
          <span className="title-summary-tickets">Total Tickets</span>
        </div>
        <span className="result-summary-tickets">
          {activityPanelSummaryTickets?.totalTickets}
        </span>
      </div>
      <div className="container-base card-summary">
        <div className="container-title-icon">
          <FontAwesomeIcon icon={faFolderOpen} color="#FFA726" fontSize={20} />
          <span className="title-summary-tickets">Abertos</span>
        </div>
        <span className="result-summary-tickets">
          {activityPanelSummaryTickets?.totalOpened == null
            ? "N/A"
            : activityPanelSummaryTickets?.totalOpened}
        </span>
      </div>
      <div className="container-base card-summary">
        <div className="container-title-icon">
          <FontAwesomeIcon icon={faCheckCircle} color="#66BB6A" fontSize={20} />
          <span className="title-summary-tickets">Resolvidos</span>
        </div>
        <span className="result-summary-tickets">
          {activityPanelSummaryTickets?.totalFinished == null
            ? "N/A"
            : activityPanelSummaryTickets?.totalFinished}
        </span>
      </div>
      <div className="container-base card-summary">
        <div className="container-title-icon">
          <FontAwesomeIcon icon={faCommentDots} color="#42A5F5" fontSize={20} />
          <span className="title-summary-tickets">Em atendimento</span>
        </div>
        <span className="result-summary-tickets">
          {activityPanelSummaryTickets?.totalInProgress == null
            ? "N/A"
            : activityPanelSummaryTickets?.totalInProgress}
        </span>
      </div>
      <div className="container-base card-summary">
        <div className="container-title-icon">
          <FontAwesomeIcon icon={faPauseCircle} color="#B0BEC5" fontSize={20} />
          <span className="title-summary-tickets">Arguardando</span>
        </div>
        <span className="result-summary-tickets">
          {activityPanelSummaryTickets?.totalFrozen == null
            ? "N/A"
            : activityPanelSummaryTickets?.totalFrozen}
        </span>
      </div>
      <div className="container-base card-summary">
        <div className="container-title-icon">
          <FontAwesomeIcon icon={faBan} color="#EF5350" fontSize={20} />
          <span className="title-summary-tickets">Cancelados</span>
        </div>
        <span className="result-summary-tickets">
          {activityPanelSummaryTickets?.totalCanceled == null
            ? "N/A"
            : activityPanelSummaryTickets?.totalCanceled}
        </span>
      </div>
      <div className="container-base card-summary">
        <div className="container-title-icon">
          <FontAwesomeIcon icon={faClock} color="#FFCA28" fontSize={20} />
          <span className="title-summary-tickets">Vencem hoje</span>
        </div>
        <span className="result-summary-tickets">
          {activityPanelSummaryTickets?.totalDueToday == null
            ? "N/A"
            : activityPanelSummaryTickets?.totalDueToday}
        </span>
      </div>
      <div className="container-base card-summary">
        <div className="container-title-icon">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            color="#E57373"
            fontSize={20}
          />
          <span className="title-summary-tickets">Vencidos</span>
        </div>
        <span className="result-summary-tickets">2</span>
      </div>
    </div>
  );
}

export default ActivityPanel;
