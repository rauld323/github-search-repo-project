import type { Meta, StoryObj } from "@storybook/react";

import ScrollButton from "./ScrollButton";

const meta: Meta<typeof ScrollButton> = {
  component: ScrollButton,
};

export default meta;
type Story = StoryObj<typeof ScrollButton>;

export const Primary: Story = {
  render: () => <ScrollButton />,
};
