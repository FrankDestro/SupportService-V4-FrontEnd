// NoData.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface NoDataProps {
  icon: IconDefinition;
  message: string;
}

const NoData: React.FC<NoDataProps> = ({ icon, message }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ marginRight: "20px", fontSize: "2rem" }}
      />
      <span>{message}</span>
    </div>
  );
};

export default NoData;
