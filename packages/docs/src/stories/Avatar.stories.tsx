import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, IAvatarProps } from "@lord-ui/react";

const meta: Meta<IAvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/garciamendes.png',
    alt: 'Avatar'
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Primary: StoryObj<IAvatarProps> = {}
export const WithFallback: StoryObj<IAvatarProps> = {
  args: {
    src: '',
  }
}

export default meta;
