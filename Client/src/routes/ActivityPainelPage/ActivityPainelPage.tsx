import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ActivityPanel from "../../Modules/ActivityPanelSummaryTickets/ActivityPanelSummaryTickets";
import LineChartSupportByDay from "../../Modules/Dashboard/LineChartSupportByDay/LineChartSupportByDay";
import PieChartByUrgency from "../../Modules/Dashboard/PieChartByUrgency/PieChartByUrgency";
import PieChartDonutByStatusTicket from "../../Modules/Dashboard/PieChartDonutByStatusTicket/PieChartDonutByStatusTicket";
import SlaIndicators from "../../Modules/Dashboard/SlaIndicators/SlaIndicators";
import SearchPanel from "../../Components/SearchPanel/SearchPanel";
import { activityPanelSummaryPercentTicketsDTO } from "../../models/activityPanelSummaryPercentTickets";
import { ActivityPanelSummaryTicketsByUrgencyDTO } from "../../models/activityPanelSummaryTicketsByUrgency";
import { activityPanelSummaryTicketsDTO } from "../../models/activityPanelSummaryTicketsDTO";
import * as activityPanelService from "../../Service/activityPanel-service";
import "./ActivityPainelPage.css";

function ActivityPainelPage() {
  const [loading, setLoading] = useState<boolean>(true);

  const [activityPanelSummaryTickets, setActivityPanelSummaryTickets] =
    useState<activityPanelSummaryTicketsDTO | null>(null);
  const [
    activityPanelSummaryPercentTickets,
    setActivityPanelSummaryPercentTickets,
  ] = useState<activityPanelSummaryPercentTicketsDTO | null>(null);

  const [
    activityPanelSummaryTicketsByUrgency,
    setActivityPanelSummaryTicketsByUrgency,
  ] = useState<ActivityPanelSummaryTicketsByUrgencyDTO | null>(null);

  useEffect(() => {
    activityPanelService
      .getActivityPanelSummaryTickets()
      .then((response) => {
        setActivityPanelSummaryTickets(response.data);
      })
      .catch((e) => {
        console.error("Erro ao buscar tickets do painel de atividades:", e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [activityPanelSummaryTickets]);

  useEffect(() => {
    activityPanelService
      .getActivityPanelSummaryPercentTickets()
      .then((response) => {
        setActivityPanelSummaryPercentTickets(response.data);
      })
      .catch((e) => {
        console.error("Erro ao buscar tickets do painel de atividades:", e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    activityPanelService
      .getActivityPanelSummaryTicketsByUrgency()
      .then((response) => {
        setActivityPanelSummaryTicketsByUrgency(response.data);
      })
      .catch((e) => {
        console.error("Erro ao buscar tickets do painel de atividades:", e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-main-panel">
      <div className="container-base">
        <SearchPanel />
      </div>
      <div>
        {loading ? (
          <div
            className="container-base container-loading"
            style={{ height: "110px" }}
          >
            <Spinner animation="border" role="status"></Spinner>
            <span className="">Carregando...</span>
          </div>
        ) : (
          <ActivityPanel
            activityPanelSummaryTickets={activityPanelSummaryTickets}
          />
        )}
      </div>
      <div className="container-all-charts">
        <div className="container-charts">
          <div className="content-pie-chart-donuts-tickets">
            {loading ? (
              <div
                className="container-base container-loading"
                style={{ height: "400px" }}
              >
                <Spinner animation="border" role="status"></Spinner>
                <span className="">Carregando...</span>
              </div>
            ) : (
              <PieChartDonutByStatusTicket
                ticketStats={activityPanelSummaryPercentTickets}
              />
            )}
          </div>
          <div className="content-pie-chart-donuts-tickets">
            <PieChartByUrgency
              ticketsByUrgency={activityPanelSummaryTicketsByUrgency}
            />
          </div>
        </div>

        <div className="container-base container-panel">
          <SlaIndicators />
        </div>

        <div className="container-base container-panel ">
          <LineChartSupportByDay />
        </div>
      </div>
    </div>
  );
}

export default ActivityPainelPage;
