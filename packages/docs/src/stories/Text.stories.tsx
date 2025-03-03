import type { Meta, StoryObj } from "@storybook/react";
import { Text, ITextProps } from "@lord-ui/react";

const meta: Meta<ITextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  }
};

export const Primary: StoryObj<ITextProps> = {}
export const CustomTag: StoryObj<ITextProps> = {
  args: {
    as: 'h2',
    children: 'Heading 2'
  }
}
export default meta;
