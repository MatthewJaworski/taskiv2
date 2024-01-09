import { TTagDto, TTagKeys } from './tag';
import { TUser } from './user';

export type TStory = {
  id: string;
  projectId: string;
  createdBy: TUser;
  assignedTo: TUser;
  name: string;
  description?: string;
  createDate: string;
  completeDate?: string | null;
  isComplete: boolean;
  storyPoints: number;
  priority: 0 | 1 | 2;
  tag?: TTagDto;
};
export type CreateStoryDto = {
  projectId: string;
  createdBy: string;
  name: string;
  assignedTo?: string | null;
  description?: string;
  storyPoints: number;
  tag?: TTagKeys | null | string;
  priority?: TStoryPriority;
};

export type UpdateStoryDto = {
  id: string;
  projectId: string;
  createdBy: TUser;
  assignedTo: TUser;
  name: string;
  description?: string;
  createDate: string;
  completeDate?: string | null;
  isComplete: boolean;
  storyPoints: number;
  priority: 0 | 1 | 2;
  tag?: TTagDto;
};

export type TStoryPriority = 0 | 1 | 2 | 3;
