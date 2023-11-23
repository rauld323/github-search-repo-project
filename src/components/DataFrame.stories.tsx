import type { Meta, StoryObj } from "@storybook/react";

import DataFrame from "./DataFrame";

const meta: Meta<typeof DataFrame> = {
  component: DataFrame,
};

export default meta;
type Story = StoryObj<typeof DataFrame>;

export const Primary: Story = {
  args: {
    language: "JavaScript",
    name: "ha haha",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor.",
    svn_url: "https://youtu.be/o-YBDTqX_ZU?si=D5H8ZrNMmWVdHEFj",
    updated_at: "43",
  },
};
