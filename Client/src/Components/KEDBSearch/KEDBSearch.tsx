import { faEraser, faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import "./KEDBSearch.css";

type Props = {
  onSearch: (formData: {
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
  }) => void;
};

function KEDBSearch({ onSearch }: Props) {
  const [filters, setFilters] = useState({
    id: "",
    titleText: "",
    rootCauseText: "",
    solution: "",
    status: "",
    initialDate: "",
    finalDate: "",
    initialDateResolution: "",
    finalDateResolution: "",
    tags: [] as string[], // Alterando para um array vazio
  });

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = {
      id: filters.id,
      titleText: filters.titleText,
      rootCauseText: filters.rootCauseText,
      solution: filters.solution,
      status: filters.status,
      initialDate: filters.initialDate,
      finalDate: filters.finalDate,
      initialDateResolution: filters.initialDateResolution,
      finalDateResolution: filters.finalDateResolution,
      tags: words, // Usando o array words diretamente
    };
    onSearch(formData);
  }

  const [words, setWords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue && !words.includes(trimmedValue)) {
        setWords([...words, trimmedValue]);
        setInputValue("");
      }
    }
  };

  const handleRemoveWord = (wordToRemove: string) => {
    setWords(words.filter((word) => word !== wordToRemove));
  };

  function handleClearFilters(): void {
    setFilters({
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
    setWords([]);
  }

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Search</Accordion.Header>
        <Accordion.Body>
          <form onSubmit={handleSubmit}>
            <div className="kedb-search-container">
              <div className="group-search-text">
                <div className="kedb-input-container">
                  <input
                    type="text"
                    placeholder=""
                    name="id"
                    value={filters.id}
                    onChange={handleInputChange}
                    className="floating-input"
                  />
                  <label className="floating-label">Id</label>
                </div>
                <div className="kedb-input-container">
                  <input
                    type="text"
                    placeholder=" "
                    name="titleText"
                    value={filters.titleText}
                    onChange={handleInputChange}
                    className="floating-input"
                  />
                  <label className="floating-label">Titulo de Erro</label>
                </div>
                <div className="kedb-input-container">
                  <input
                    type="text"
                    placeholder=" "
                    name="rootCauseText"
                    value={filters.rootCauseText}
                    onChange={handleInputChange}
                    className="floating-input"
                  />
                  <label className="floating-label">Causa Raiz</label>
                </div>
                <div className="kedb-input-container">
                  <input
                    type="text"
                    placeholder=" "
                    name="solution"
                    value={filters.solution}
                    onChange={handleInputChange}
                    className="floating-input"
                  />
                  <label className="floating-label">Solução</label>
                </div>

                <div className="kedb-select-container">
                  <select
                    name="status"
                    value={filters.status}
                    onChange={handleInputChange}
                  >
                    <option value="">Todos os status</option>
                    <option value="OPEN">OPEN</option>
                    <option value="UNDER_ANALYSIS">UNDER_ANALYSIS</option>
                    <option value="DOCUMENTED">DOCUMENTED</option>
                    <option value="SOLUTION_PENDING">SOLUTION_PENDING</option>
                    <option value="RESOLVED">RESOLVED</option>
                    <option value="ARCHIVED">ARCHIVED</option>
                  </select>
                </div>
              </div>

              <div className="group-search-date">
                {/* Date de Registro */}

                <div className="group-search-date-register">
                  <span>Data de registro inicial</span>
                  <div className="date-select-kedb-container">
                    <input
                      type="date"
                      name="initialDate"
                      value={filters.initialDate}
                      onChange={handleInputChange}
                      className="date-input-ticker"
                    />
                  </div>
                  <span>Data de registro final</span>
                  <div className="date-select-kedb-container">
                    <input
                      type="date"
                      name="finalDate"
                      value={filters.finalDate}
                      onChange={handleInputChange}
                      className="date-input-ticker"
                    />
                  </div>
                  {/* Date de Registro */}
                </div>

                <div className="group-search-date-solution">
                  <span>Data de solução inicial</span>
                  {/* Date de Solução */}
                  <div className="date-select-kedb-container">
                    <input
                      type="date"
                      name="initialDateResolution"
                      value={filters.initialDateResolution}
                      onChange={handleInputChange}
                      className="date-input-ticker"
                    />
                  </div>

                  <span>Data de solução final</span>
                  <div className="date-select-kedb-container">
                    <input
                      type="date"
                      name="finalDateResolution"
                      value={filters.finalDateResolution}
                      onChange={handleInputChange}
                      className="date-input-ticker"
                    />
                  </div>
                  {/* Date de Solução */}
                </div>
              </div>

              <div className="group-search-input-tags">
                <div className="word-input-container">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Tags"
                    className="word-input floating-input"
                  />
                  <div className="word-list">
                    {words.map((word, index) => (
                      <div key={index} className="word-chip">
                        {word}
                        <button
                          type="button"
                          onClick={() => handleRemoveWord(word)}
                          className="remove-word-button"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group-search-button">
                <div className="kedb-filters">
                  <Button
                    text="Filtrar"
                    icon={faFilter}
                    background="#11344d"
                    hoverColor="#335577"
                    type="submit"
                    borderRadius="5px"
                  />
                  <div onClick={handleClearFilters}>
                    <Button
                      text="Limpar"
                      icon={faEraser}
                      background="#11344d"
                      hoverColor="#335577"
                      borderRadius="5px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default KEDBSearch;
