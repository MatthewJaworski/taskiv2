import ListElement from '@/components/common/ListElement/ListElement';
import { TProject } from '@/types/projects';
import { TStory } from '@/types/story';
import Container from '../../../common/Container/Container';

interface AllStoryListProps {
  stories: TStory[];
  projectData: TProject;
}
const AllStoryList = ({ stories, projectData }: AllStoryListProps) => {
  return (
    <Container>
      {stories.length ? (
        <ul className="flex flex-col gap-2">
          {stories.map((story) => {
            const assignedTo =
              projectData.users.find((user) => user.id === story.assignedTo?.id)
                ?.name || '';
            return (
              <ListElement
                key={story.id}
                assignedTo={assignedTo}
                name={story.name}
                id={story.id}
                href="story"
              />
            );
          })}
        </ul>
      ) : (
        <p>No stories</p>
      )}
    </Container>
  );
};
export default AllStoryList;
