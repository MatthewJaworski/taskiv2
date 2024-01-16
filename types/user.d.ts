import { TStory } from "./story";

export type TUser = {
  id: string;
  name: string;
}
export type TUserToProject = {
  projectId: string;
  userId: string;
}
export type TAllUserData = {
  id:string;
  fullName: string;
  email: string;
  username: string;
  projects: TProject[];
  assignedStories: TStory[];
}