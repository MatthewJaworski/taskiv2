import ProjectCard from '@/components/cards/ProjectCard/ProjectCard';
import StoryCard from '@/components/cards/StoryCard/StoryCard';
import { TProject } from '@/types/projects';
import { TStory } from '@/types/story';
import { ICardDisplayerProps } from './CardDisplayer';

const mockUser = {
  id: 'user1',
  name: 'User Name',
};

const mockTagDto = {
  id: 'tag1',
  label: 'Tag Label',
  name: 'Backend',
} as const;

const mockComment = {
  id: 'comment1',
  userId: 'user1',
  text: 'Comment text',
};

const mockStory: TStory = {
  id: 'story1',
  projectId: 'project1',
  createdBy: mockUser,
  assignedTo: mockUser,
  name: 'Story Name',
  description: 'Story Description',
  createDate: new Date().toISOString(),
  completeDate: null,
  isComplete: false,
  storyPoints: 5,
  priority: 1,
  tag: mockTagDto,
  comments: [mockComment],
};
const mockStory2: TStory = {
  id: 'story2',
  projectId: 'project1',
  createdBy: mockUser,
  assignedTo: mockUser,
  name: 'Story Name',
  description: 'Story Description',
  createDate: new Date().toISOString(),
  completeDate: null,
  isComplete: false,
  storyPoints: 5,
  priority: 1,
  tag: mockTagDto,
  comments: [mockComment],
};
const mockProject: TProject = {
  id: 'project1',
  userId: 'user1',
  name: 'Project Name',
  description: 'Project Description',
  createDate: new Date().toISOString(),
  tags: ['Backend'],
  users: [mockUser],
  stories: [mockStory],
};

const story: ICardDisplayerProps = {
  elements: [mockStory, mockStory2, mockStory, mockStory2],
  Card: StoryCard,
};
const project: ICardDisplayerProps = {
  elements: [mockProject, mockProject, mockProject, mockProject],
  Card: ProjectCard,
};
export const mockLoaderProps = {
  story,
  project,
};
