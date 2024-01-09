import { TProject } from '@/types/projects';
import { TStory } from '@/types/story';
import Container from '../Container/Container';
import StoryListElement from '../StoryListElement/StoryListElement';

interface AllStoryListProps {
  stories: TStory[];
  projectData: TProject;
}
const AllStoryList = ({ stories, projectData }: AllStoryListProps) => {
  return (
    <Container>
      <ul className="flex flex-col gap-2">
        {stories.map((story) => {
          const assignedTo =
            projectData.users.find((user) => user.id === story.assignedTo?.id)
              ?.name || '';
          return (
            <StoryListElement
              key={story.id}
              assignedTo={assignedTo}
              name={story.name}
              id={story.id}
            />
          );
        })}
      </ul>
    </Container>
  );
};
export default AllStoryList;
