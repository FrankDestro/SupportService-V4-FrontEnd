import { DepartmentDTO } from "./DepartmentDTO";
import { RoleDTO } from "./RoleDTO";
import { SolvingAreaDTO } from "./solvingAreaDTO";

export type UserDTO = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  imgProfile: string;
  createdAt: string;
  contactNumber: string;
  blocked: boolean;
  statusUser : string;
  createdByUserName: string;
  department: DepartmentDTO;
  solvingArea: SolvingAreaDTO;
  roles: RoleDTO[];
};


export type UserDTOUpdate = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imgProfile: string;
  contactNumber: string;
};



