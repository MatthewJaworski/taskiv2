import { TTagKeys } from './tag';

export interface IprojectRequestBody {
  name: string;
  description: string;
  tags: TTagKeys[];
  userId: string;
}

export type TProjectKeys = keyof IprojectRequestBody;

export type TDatabaseProject = {
  name: string;
  description: string;
  tags: TProjectKeys[];
};
