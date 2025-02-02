import "./Pagination.css";

interface BootstrapPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: BootstrapPaginationProps) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => onPageChange(i)}>
            {i + 1}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav aria-label="Page navigation" style={{ marginTop: "5px" }}>
      <ul className="pagination">
        {/* Botão de página anterior */}
        <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Previous"
          >
            &laquo;
          </button>
        </li>

        {/* Números de página */}
        {renderPageNumbers()}

        {/* Botão de próxima página */}
        <li
          className={`page-item ${
            currentPage === totalPages - 1 ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Next"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
