import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
} satisfies Meta;

export default meta;

export type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: {
    title: 'Primary',
  },
};
