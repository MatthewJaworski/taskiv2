import { TProject } from '@/types/projects';
import { TStory } from '@/types/story';
import { IProjectCardProps } from '../ProjectCard/ProjectCard';
import { IStoryProjectCard } from '../StoryCard/StoryCard';

interface ICardDisplayerProps {
  elements: TProject[] | TStory[];
  Card: React.ComponentType<IStoryProjectCard | IProjectCardProps>;
}
const CardDisplayer = ({ elements, Card }: ICardDisplayerProps) => {
  return elements.map((element: TProject | TStory) => (
    <Card
      key={element.id}
      name={element.name}
      description={element.description}
      id={element.id}
    />
  ));
};

export default CardDisplayer;
