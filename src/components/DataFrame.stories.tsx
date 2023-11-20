import type { Meta, StoryObj } from "@storybook/react";

import DataFrame from "./DataFrame";

const meta: Meta<typeof DataFrame> = {
  component: DataFrame,
};

export default meta;
type Story = StoryObj<typeof DataFrame>;

export const Primary: Story = {
  render: () => (
    <DataFrame
      language={""}
      repoName={""}
      descriptions={""}
      link={""}
      lastUpdated={""}
    />
  ),
};
