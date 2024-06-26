import FormItemWrapper from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FormItemWrapper> = {
  component: FormItemWrapper,
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Title',
    required: false,
    errorMessage: '',
  },
};

export default meta;
type Story = StoryObj<typeof FormItemWrapper>;

export const Primary: Story = {};

export const Errored: Story = {
  args: {
    errorMessage: 'Error Message',
  },
};

export const RequiredMessage: Story = {
  args: {
    required: true,
  },
};
