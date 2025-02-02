import { DepartmentDTO } from "./DepartmentDTO";
import { RoleDTO } from "./RoleDTO";
import { SolvingAreaDTO } from "./solvingAreaDTO";

export type UserDTO = {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  department: DepartmentDTO;
  solvingArea: SolvingAreaDTO;
  imgProfile: string;
  roles : RoleDTO[];
};
