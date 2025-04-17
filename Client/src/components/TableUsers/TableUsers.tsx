import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserDTO } from "../../models/RequesterDTO";
import * as functions from "../../utils/functions";
import "./TableUsers.css";

type TableUsersProps = {
  users: UserDTO[];
};

const TableUsers = ({ users }: TableUsersProps) => {
  return (
    <>
      <table className="container-base">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Department</th>
            <th>Area de Solução</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Created By</th>
            <th>Bloqueado</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>
                <img
                  src={usuario.imgProfile}
                  alt={`Avatar ${usuario.imgProfile}`}
                />
              </td>
              <td>Departamento descricao</td>
              <td>Area solucionadora descricao</td>
              {/* <td>{usuario.department.description}</td>
              <td>{usuario.solvingArea.name}</td> */}
              <td>
                {usuario.firstName} {usuario.lastName}
              </td>
              <td>{usuario.email}</td>
              <td>
                <span
                  style={functions.getStatusUserBadgeStyle(usuario.statusUser)}
                >
                  {usuario.statusUser}
                </span>
              </td>
              <td>{usuario.roles.map((roles) => roles.authority)}</td>
              <td>{usuario.createdBy}</td>
              <td>
                <span
                  style={functions.getBlockedStatusBadgeStyle(usuario.blocked)}
                >
                  {usuario.blocked ? "Bloqueado" : "Não bloqueado"}
                </span>
              </td>
              <td>
                <div className="container-button-details">
                  <FontAwesomeIcon icon={faEdit} />
                  <FontAwesomeIcon icon={faEye} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableUsers;
