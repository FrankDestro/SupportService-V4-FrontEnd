import { useEffect } from "react";
import UserFormCreate from "../UserFormCreate/UserFormCreate";
import "./DialogUserCreateModal2.css";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

function DialogUserCreateModal2({ isVisible, onClose }: Props) {
  useEffect(() => {
    const modalElement = document.getElementById("exampleModal");

    if (modalElement) {
      const bootstrapModal = new window.bootstrap.Modal(modalElement);

      if (isVisible) {
        bootstrapModal.show();
      } else {
        bootstrapModal.hide();
      }
    }
  }, [isVisible]);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                + Adicionar novo Usuário
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <UserFormCreate />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DialogUserCreateModal2;
