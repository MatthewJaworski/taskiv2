export type CreateProjectDto = {
  userId: string;
  name: string;
  description: string;
};
export type Project = {
  id: string;
  userId: string;
  name: string;
  desciption: string;
  creationDate: string;
};
export type UpdateProjectDto = {
  name: string;
  description: string;
};
