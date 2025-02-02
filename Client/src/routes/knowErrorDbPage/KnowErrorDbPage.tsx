import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import KEDBSearch from "../../components/KEDBSearch/KEDBSearch";
import NoData from "../../components/NoData/NoData";
import Pagination from "../../components/Pagination/Pagination";
import TableKnowError from "../../components/TableKnowError/TableKnowError";
import { knowErrorSimpleDTO } from "../../models/knowErrorDTO";
import * as knowErrorService from "../../Service/Kow-error-service";

type QueryParams = {
  page: number;
  id: string;
  titleText: string;
  rootCauseText: string;
  solution: string;
  status: string;
  initialDate: string;
  finalDate: string;
  initialDateResolution: string;
  finalDateResolution: string;
  tags: string[];
};

function KnowErrorDbPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [knowErros, setKnowErros] = useState<knowErrorSimpleDTO[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    id: "",
    titleText: "",
    rootCauseText: "",
    solution: "",
    status: "",
    initialDate: "",
    finalDate: "",
    initialDateResolution: "",
    finalDateResolution: "",
    tags: [],
  });

  function handleSearch(formData: {
    id: string;
    titleText: string;
    rootCauseText: string;
    solution: string;
    status: string;
    initialDate: string;
    finalDate: string;
    initialDateResolution: string;
    finalDateResolution: string;
    tags: string[];
  }) {
    setQueryParams((prev) => ({
      ...prev,
      ...formData,
      page: prev.page,
    }));
  }

  useEffect(() => {
    knowErrorService
      .allKownErrorRequest(
        queryParams.page,
        queryParams.id,
        queryParams.titleText,
        queryParams.rootCauseText,
        queryParams.solution,
        queryParams.status,
        queryParams.initialDate,
        queryParams.finalDate,
        queryParams.initialDateResolution,
        queryParams.finalDateResolution,
        queryParams.tags
      )
      .then((response) => {
        const { totalPages, content } = response.data;
        setTotalPages(totalPages);
        setKnowErros(content);
      })
      .finally(() => setIsLoading(false));
  }, [queryParams]);

  console.log(knowErros);

  const handlePageChange = (newPage: number) => {
    setQueryParams({ ...queryParams, page: newPage });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="container-base">
        <KEDBSearch onSearch={handleSearch} />
      </div>
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner-border" role="status"></div>
          <span>Carregando....</span>
        </div>
      ) : knowErros.length === 0 ? (
        <NoData icon={faDatabase} message="Não há dados disponíveis" />
      ) : (
        <>
          <TableKnowError knowerros={knowErros} />
          <div className="container-pagination">
            <Pagination
              currentPage={queryParams.page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default KnowErrorDbPage;
