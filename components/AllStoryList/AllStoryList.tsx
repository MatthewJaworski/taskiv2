import { TProject } from '@/types/projects';
import { Story } from '@/types/story';
import Container from '../Container/Container';
import StoryListElement from '../StoryListElement/StoryListElement';

interface AllStoryListProps {
  stories: Story[];
  projectData: TProject;
}
const AllStoryList = ({ stories, projectData }: AllStoryListProps) => {
  return (
    <Container>
      <ul className="flex flex-col gap-2">
        {stories.map((story) => {
          const assignedTo =
            projectData.users.find((user) => user.id === story.assignedTo)
              ?.name || '';
          return (
            <StoryListElement
              key={story.id}
              assignedTo={assignedTo}
              name={story.name}
            />
          );
        })}
      </ul>
    </Container>
  );
};
export default AllStoryList;
