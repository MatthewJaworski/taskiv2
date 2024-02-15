import { TProject } from '@/types/projects';
import { TStory } from '@/types/story';
import { IProjectCardProps } from '../../cards/ProjectCard/ProjectCard';
import { IStoryProjectCard } from '../../cards/StoryCard/StoryCard';

export interface ICardDisplayerProps {
  elements: TProject[] | TStory[];
  Card: React.ComponentType<IStoryProjectCard | IProjectCardProps>;
}
const CardDisplayer: React.FC<ICardDisplayerProps> = ({
  elements,
  Card,
}: ICardDisplayerProps) => {
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
