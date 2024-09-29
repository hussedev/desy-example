import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './task-list';
import { TaskListProvider } from './task-list-context';
import { taskListHandler, taskListHandlerWithError } from '../../mocks/handlers';

const meta = {
  title: 'Components/TaskList',
  component: TaskList,
  loaders: [
    async () => {
      const tasks = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
        response.json(),
      );

      return { tasks };
    },
  ],
  decorators: [
    (Story, { loaded }) => {
      return (
        <TaskListProvider tasks={loaded.tasks}>
          <Story />
        </TaskListProvider>
      );
    },
  ],
} as Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {};

export const WithMockedTasks: Story = {
  parameters: {
    msw: {
      handlers: [taskListHandler],
    },
  },
};

export const WithFetchError: Story = {
  parameters: {
    msw: {
      handlers: [taskListHandlerWithError],
    },
  },
};
