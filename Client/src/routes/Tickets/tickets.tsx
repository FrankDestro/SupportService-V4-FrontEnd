import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import TicketTabsContainer from "../../components/TicketTabsContainer/TicketTabsContainer";
import NoData from "../../components/NoData/NoData";
import Pagination from "../../components/Pagination/Pagination";
import SearchTicker from "../../components/SearchTicket/SearchTicket";
import { TicketSimpleDTO } from "../../models/ticketDTO";
import * as ticketService from "../../Service/ticket-service";

type QueryParams = {
  page: number;
  id: string;
  registrationDate: string;
  status: string;
  area: string;
  categoryTicket: string;
  typeRequest: string;
  sla: string;
};

function Ticket() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPagination, setShowPagination] = useState(true);
  const [tickets, setTickets] = useState<TicketSimpleDTO[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    id: "",
    registrationDate: "",
    status: "",
    area: "",
    categoryTicket: "",
    typeRequest: "",
    sla: "",
  });

  useEffect(() => {
    // setIsLoading(true);

    ticketService
      .allTicketsRequest(
        queryParams.page,
        queryParams.id,
        queryParams.registrationDate,
        queryParams.status,
        queryParams.area,
        queryParams.categoryTicket,
        queryParams.typeRequest,
        queryParams.sla
      )
      .then((response) => {
        const { totalPages, content } = response.data;
        setTickets(content);
        setTotalPages(totalPages);
      })
      // .finally(() => setIsLoading(false))
  }, [queryParams, showPagination]);

  function handleSearch(
    id: string,
    registrationDate: string,
    status: string,
    area: string,
    categoryTicket: string,
    typeRequest: string,
    sla: string
  ) {
    setTickets([]);
    setQueryParams({
      ...queryParams,
      page: 0,
      id: id,
      registrationDate: registrationDate,
      status: status,
      area: area,
      categoryTicket: categoryTicket,
      typeRequest: typeRequest,
      sla: sla,
    });
  }

  const handlePageChange = (newPage: number) => {
    setQueryParams({ ...queryParams, page: newPage });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleActiveTabChange = (isTabOneActive: boolean) => {
    setShowPagination(isTabOneActive);
  };

  return (
    <div>
      <div className="container-base">
        <SearchTicker onSearch={handleSearch} />
      </div>
      {isLoading ? ( // Exibe o spinner durante o carregamento
        <div className="spinner-container">
          <div className="spinner-border" role="status"></div>
          <span>Carregando....</span>
        </div>
      ) : tickets.length === 0 ? (
        <NoData icon={faTicket} message="Não foi encontrado ticket" />
      ) : (
        <>
          <TicketTabsContainer
            tickets={tickets}
            onActiveTabChange={handleActiveTabChange}
          />
          <div className="container-pagination">
            {showPagination && (
              <Pagination
                currentPage={queryParams.page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Ticket;
