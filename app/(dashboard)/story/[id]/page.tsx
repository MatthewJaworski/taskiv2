import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import { AssignedTo } from '@/components/Story/AssignedTo/AssignedTo';
import Complete from '@/components/Story/Complete/Complete';
import { getStory } from '@/lib/api';
import { getJWTFromCookie } from '@/lib/auth';
import { formatDate } from '@/lib/time';
import { TStory } from '@/types/story';
import { NextPage } from 'next';
interface StoryPageProps {
  params: {
    id: string;
  };
}

const StoryPage: NextPage<StoryPageProps> = async ({ params: { id } }) => {
  const token = await getJWTFromCookie()!;

  const data = (await getStory(id, token)) as TStory;
  const { assignedTo } = data;
  const { priority, storyPoints } = data;
  const { projectId } = data;
  const { tag } = data;
  const { createDate, completeDate } = data;
  return (
    <>
      <Container>
        <h1 className="text-5xl font-semibold">{data.name}</h1>
        <Container
          size="small"
          className="flex mx-0 justify-center items-center max-w-32"
          intent="secondary"
        >
          <p>{tag?.name}</p>
        </Container>
        <Container className="mt-4 grid gap-4 grid-cols-2 text-center">
          <Container>
            <p>Created: {formatDate(createDate)}</p>
            <p>
              Competed:{' '}
              {data.completeDate ? formatDate(completeDate!) : 'Not finished'}
            </p>
          </Container>
          <Container>
            <p>Priority: {priority}</p>
            <p>Story points: {storyPoints}</p>
          </Container>
        </Container>
        <Container className="mt-4 min-h-80">
          <p>
            Created by{' '}
            <span className="font-semibold text-secondary">
              {data.createdBy.name}
            </span>
          </p>
          <h2>{data.description}</h2>
        </Container>
        <Container className="mt-4 grid gap-4 grid-cols-2">
          <AssignedTo
            data={data}
            projectId={projectId}
            token={token}

          />
          <Complete story={data} token={token} />
        </Container>

        <Container className="mt-4">
          <p className="text-2xl font-semibold">Comments</p>
        </Container>
        <Container className="mt-4">
          <Button className="w-full" intent="text">
            Delete story
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default StoryPage;
