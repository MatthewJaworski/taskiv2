import { TTagKeys } from './tags';

export type CreateProjectDto = {
  userId: string;
  name: string;
  description: string;
};
export type TProject = {
  id: string;
  userId: string;
  name: string;
  description: string;
  createDate: string;
  tags: TTagKeys[];
};
export type UpdateProjectDto = {
  name: string;
  description: string;
};
