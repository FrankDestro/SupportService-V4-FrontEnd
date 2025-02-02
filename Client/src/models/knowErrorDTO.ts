export type knowErrorDTO = {
  id: string;
  title: string;
  rootCause: string;
  solution: string;
  tags: [];
  status: string;
  createDate: string;
  resolutionDate: string;
  userID: number;
  userEmail: string;
  attachments: [];
};

export type knowErrorSimpleDTO = Omit<knowErrorDTO, "attachments">;
