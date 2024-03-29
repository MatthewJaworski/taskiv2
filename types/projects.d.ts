import { TStory } from './story';
import { TTagKeys } from './tags';
import { TUser } from './user';

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
  users: TUser[];
  stories: TStory[];
};
export type UpdateProjectDto = {
  name: string;
  description: string;
};
