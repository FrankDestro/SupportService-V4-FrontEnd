import React from "react";
import "./CustomUploadFile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faTrash } from "@fortawesome/free-solid-svg-icons";
import FileIcon from "../../../utils/FileIcon";


interface CustomFileUploadProps {
  label?: string;
  files: File[];
  onFilesChange: (files: File[]) => void;
}

const CustomUploadFile: React.FC<CustomFileUploadProps> = ({
  label = "Anexar Arquivos",
  files,
  onFilesChange,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      onFilesChange([...files, ...selectedFiles]);
    }
  };

  const handleRemove = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    onFilesChange(updated);
  };


  console.log(files.map((arquivo) => arquivo.type));


  return (
    <div className="custom-file-upload">
      <label htmlFor="fileUpload" className="custom-upload-button">
        {label}
      </label>
      <input
        type="file"
        id="fileUpload"
        multiple
        className="hidden-file-input"
        onChange={handleFileChange}
      />
      <div className="attached-files-container">
        {files.map((file, index) => (
          <div className="file-preview" key={index}>
            {/* <FontAwesomeIcon icon={faFile} className="file-icon" /> */}

           <FileIcon type={file.type.split("/")[1]} />



            <p>{file.name}</p>
            <button
              type="button"
              className="remove-file-button"
              onClick={() => handleRemove(index)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomUploadFile;
