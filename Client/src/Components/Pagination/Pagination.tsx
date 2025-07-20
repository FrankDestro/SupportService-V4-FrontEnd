import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Pagination.css";
import React from "react";

interface BootstrapPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (rows: number) => void;
}

const Pagination: React.FC<BootstrapPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
}) => {
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
    <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "20px"}}>
      <div className="rows-per-page-selector">
        <label style={{ marginRight: "8px" }}>Itens por página:</label>
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          className="form-select"
          style={{ width: "auto", display: "inline-block" }}
        >
          {[5, 10, 12, 20, 50].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <nav aria-label="Page navigation">
        <ul className="pagination mb-0">
          <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage - 1)}
              aria-label="Previous"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </li>
          {renderPageNumbers()}
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
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
