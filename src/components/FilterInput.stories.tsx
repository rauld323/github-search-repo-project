import type { Meta, StoryObj } from "@storybook/react";
import FilterInput from "./FilterInput";

const meta: Meta<typeof FilterInput> = {
  component: FilterInput,
};

export default meta;
type Story = StoryObj<typeof FilterInput>;

export const Primary: Story = {
  render: () => (
    <div className="flex justify-center mt-16">
      <FilterInput filterOptions={[]} onFilterChange={() => undefined} />
    </div>
  ),
};
