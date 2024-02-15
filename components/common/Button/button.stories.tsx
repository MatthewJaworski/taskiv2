import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { mockButtonProps } from './button.mock';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="bg-background p-6 text-white container w-screen h-screen justify-center flex items-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...mockButtonProps.base,
} as ButtonProps;

export const Secondary = Template.bind({});

Secondary.args = {
  ...mockButtonProps.alternateBase,
} as ButtonProps;

export const Text = Template.bind({});

Text.args = {
  ...mockButtonProps.textBase,
} as ButtonProps;
