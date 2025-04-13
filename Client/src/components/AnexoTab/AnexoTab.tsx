import React from "react";
import "./AnexoTab.css";
import { FiDownload } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";
import { AttachmentsDTO } from "../../models/AttachmentsDTO";

type Props = {
  anexos : AttachmentsDTO[];
}

const AnexoTab: React.FC<Props> = ({anexos}) => {
  return (
    <section className="aba-anexo">
      <ul className="lista-anexos">
        {anexos.map((anexo) => (
          <li key={anexo.id} className="item-anexo">
            <div className="icone">
              {anexo.type === "PDF" ? <FaFilePdf size={24} color="#d32f2f" /> : <FiDownload size={24} />}
            </div>

            <div className="info">
              <strong>Arquivo de amostragem alias</strong>
              <small className="file-name">{anexo.fileName} • 12 MB</small>
              <small className="data">
                {new Date(anexo.registrationDate).toLocaleDateString("pt-BR")} •{" "}
                {anexo.user.firstName} {anexo.user.lastName} ({anexo.user.department.description})
              </small>
            </div>

            <a
              href={anexo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="download-link"
            >
              <FiDownload />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AnexoTab;
