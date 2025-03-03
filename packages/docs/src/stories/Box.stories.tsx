import type { Meta, StoryObj } from "@storybook/react";
import { Box, IBoxProps, Text } from "@lord-ui/react";

const meta: Meta<IBoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testanod o elemento Box</Text>
  }
};

export const Primary: StoryObj<IBoxProps> = {}
export default meta;
