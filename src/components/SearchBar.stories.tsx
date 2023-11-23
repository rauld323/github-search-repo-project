import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Primary: Story = (args: any) => <SearchBar {...args} />;

Primary.args = {
  userName: "rauld323",
  setUserName: () => console.log("userName"),
};
