import { Meta, StoryFn } from '@storybook/react';
import Container, { ContainerProps } from './Container';
import { mockContainerProps } from './container.mocks';
export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="bg-background p-6 text-white container w-screen h-screen justify-center flex items-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Container>;

const Template: StoryFn<typeof Container> = (args: any) => (
  <Container {...args}>
    <h1 className="text-4xl font-bold">{args.children}</h1>
    <p className="text-xl mt-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptates, quidem, voluptatum, asperiores quia nesciunt voluptatem quos
      consequuntur quibusdam dolorum quae? Quisquam voluptates, quidem,
      voluptatum, asperiores quia nesciunt voluptatem quos consequuntur
      quibusdam dolorum quae?
    </p>
  </Container>
);

export const Base = Template.bind({});

Base.args = {
  ...mockContainerProps.base,
} as ContainerProps;

const Stacked: StoryFn<typeof Container> = (args: any) => (
  <Container {...args}>
    <Container {...args}>
      <Container {...args}>
        <p className="text-2xl">Sample text</p>
      </Container>
    </Container>
  </Container>
);
export const StackedContainers = Stacked.bind({});

Stacked.args = {
  ...mockContainerProps.base,
} as ContainerProps;
