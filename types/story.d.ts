import { TTagKeys } from "./tag";
import { TStoryPriority } from "./priority";
export type Stroy = {
  id: string;
  projectId: string;
  createdBy: string;
  assignedTo: string;
  name: string;
  description?: string;
  createdDate: string;
  completedDate?: string;
  isCompleted: boolean;
  storyPoints: number;
  priority: 0 | 1 | 2;
};
export type CreateStoryDto = {
  projectId: string;
  createdBy: string;
  name: string;
  assignedTo?: string | null;
  description?: string;
  storyPoints: number;
  tag?: TTagKeys | null;
  priority?: TStoryPriority;

}

export type UpdateStoryDto = {
  name?: string;
  description?: string;
  assignedTo?: string;
  storyPoints?: number;
  priority?: 0 | 1 | 2;
  isCompleted?: boolean;
  completedDate?: string;
}