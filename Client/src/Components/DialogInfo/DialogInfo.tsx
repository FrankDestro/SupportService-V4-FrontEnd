import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Components/Button/Button";
import './DialogInfo.css';

type Props = {
  message?: string;
  onDialogClose: Function;
  Icon: IconDefinition;
  IconColor?: string;
  ButtonColor?: string;
  ButtonHoverColor?: string;
  isLoading?: boolean; // NOVO
};

function DialogInfo({
  message,
  onDialogClose,
  Icon,
  IconColor,
  ButtonColor,
  ButtonHoverColor,
  isLoading = false, // padrão false
}: Props) {
  return (
    <div
      className="support-service-dialog-background"
      onClick={() => !isLoading && onDialogClose()}
    >
      <div
        className="support-service-dialog-box"
        onClick={(event) => event.stopPropagation()}
      >
        <h2>{message}</h2>

        {isLoading ? (
          <div className="spinner" />
        ) : (
          <FontAwesomeIcon
            icon={Icon}
            size="2x"
            style={{ margin: "10px", color: IconColor }}
          />
        )}

        {!isLoading && (
          <div
            className="support-service-dialog-btn"
            onClick={() => onDialogClose()}
          >
            <Button
              text="OK"
              background={ButtonColor || "#11344d"}
              hoverColor={ButtonHoverColor || "#335577"}
              width="100%"
              borderRadius="5px"
              type="submit"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DialogInfo;
