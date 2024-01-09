'use client';
import revalidateAllProjects from '@/actions/revalidateProjects';
import revalidateStory from '@/actions/revalidateStory';
import Container from '@/components/Container/Container';
import Select, { OptionType } from '@/components/Select/Select';
import { IS_COMPLETE_OPTIONS } from '@/constants/complete';
import { updateStory } from '@/lib/api';
import { TResponse } from '@/types/response';
import { TStory } from '@/types/story';

interface ICompleteProps {
  story: TStory;
  token: string;
}

const Complete = ({ story, token }: ICompleteProps) => {
  const { isComplete } = story;
  const { id } = story;

  const isCompleteDefault = {
    value: isComplete,
    label: isComplete ? 'Yes' : 'No',
  };
  const handleChange = async (option: OptionType) => {
    const completeDate = option.value ? new Date() : null;
    const newStory = {
      ...story,
      isComplete: option.value as boolean,
      completeDate,
    } as TStory;
    const result = (await updateStory(id, newStory, token)) as TResponse;
    if (result.success) {
      await revalidateAllProjects();
      await revalidateStory();
    }
  };

  return (
    <Container className="mt-4">
      <Select
        id="isComplete"
        name="Is Complete"
        defaultValue={isCompleteDefault}
        options={IS_COMPLETE_OPTIONS}
        onChange={(e) => handleChange(e!)}
      />
    </Container>
  );
};

export default Complete;
