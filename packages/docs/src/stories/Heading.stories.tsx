import type { Meta, StoryObj } from "@storybook/react";
import { Heading, IHeadingProps } from "@lord-ui/react";

const meta: Meta<IHeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
};

export const Primary: StoryObj<IHeadingProps> = {}
export const CustomTag: StoryObj<IHeadingProps> = {
  args: {
    as: 'h1',
    children: 'Heading 1'
  }
}
export default meta;
