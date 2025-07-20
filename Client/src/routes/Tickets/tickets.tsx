import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import NoData from "../../Components/NoData/NoData";
import SearchTicker from "../../Components/SearchTicket/SearchTicket";
import { TicketSimpleDTO } from "../../models/ticketDTO";
import TicketTabsContainer from "../../Modules/TicketTabsContainer/TicketTabsContainer";
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
  size: number;
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
    size: 10,
  });

  useEffect(() => {
    ticketService
      .allTicketsRequest(
        queryParams.page,
        queryParams.id,
        queryParams.registrationDate,
        queryParams.status,
        queryParams.area,
        queryParams.categoryTicket,
        queryParams.typeRequest,
        queryParams.sla,
        queryParams.size
      )
      .then((response) => {
        const { totalPages, content } = response.data;
        setTickets(content);
        setTotalPages(totalPages);
      });
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

  const handleRowsPerPageChange = (newSize: number) => {
    setQueryParams({
      ...queryParams,
      page: 0,
      size: newSize,
    });
  };

  return (
    <div>
      <div className="container-base">
        <SearchTicker onSearch={handleSearch} />
      </div>
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner-border" role="status"></div>
          <span>Carregando....</span>
        </div>
      ) : tickets.length === 0 ? (
        <NoData icon={faTicket} message="Não foi encontrado ticket" />
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ flexGrow: 1 }}>
              <TicketTabsContainer
                tickets={tickets}
                onActiveTabChange={handleActiveTabChange}
                totalPages={totalPages}
                currentPage={queryParams.page}
                onPageChange={handlePageChange}
                size={queryParams.size}
                onRowsPerPageChange={handleRowsPerPageChange}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Ticket;
