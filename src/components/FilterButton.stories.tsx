import type { Meta, StoryObj } from "@storybook/react";

import FilterButton from "./FilterButton";

const meta: Meta<typeof FilterButton> = {
  component: FilterButton,
};

export default meta;
type Story = StoryObj<typeof FilterButton>;

export const Primary: Story = {
  render: () => (
    <div className="flex justify-center mt-16">
      <FilterButton filterOptions={[]} placeholderText={""} />
    </div>
  ),
};
