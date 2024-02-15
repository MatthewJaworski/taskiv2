import { Meta, StoryFn } from '@storybook/react';
import Comment, { ICommentProps } from './Comment';
import { mockCommentProps } from './comment.mock';

export default {
  title: 'Components/Comment',
  component: Comment,
  argTypes: {
    creationDate: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div className="container flex h-screen w-screen items-center justify-center bg-background p-6 text-white">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Comment>;

const Template: StoryFn<typeof Comment> = (args: any) => <Comment {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockCommentProps.base,
} as ICommentProps;
