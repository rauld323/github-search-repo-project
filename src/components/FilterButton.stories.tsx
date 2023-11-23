import type { Meta, StoryObj } from "@storybook/react";

import FilterButton from "./FilterButton";

const meta: Meta<typeof FilterButton> = {
  component: FilterButton,
};

export default meta;
type Story = StoryObj<typeof FilterButton>;

export const Primary: Story = (args: any) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "100px",
      height: "100vh",
    }}
  >
    <FilterButton {...args} />
  </div>
);

Primary.args = {
  filterOptions: ["dogs", "cats", "birds"],
  placeholderText: "Pets",
  onFilterChange: () => alert("You clicked an option"),
};
