import type { Meta, StoryObj } from "@storybook/react";

import ScrollButton from "./ScrollButton";

const meta: Meta<typeof ScrollButton> = {
  component: ScrollButton,
};

export default meta;
type Story = StoryObj<typeof ScrollButton>;

export const Primary: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        marginTop: "100px",
        height: "100vh",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "70%", height: "90%", backgroundColor: "bisque" }}>
        Box 1
      </div>
      <div
        style={{
          width: "70%",
          height: "90%",
          backgroundColor: "InactiveBorder",
        }}
      >
        Box 2
      </div>
      <div
        style={{
          width: "70%",
          height: "90%",
          backgroundColor: "aquamarine",
        }}
      >
        Box 3
      </div>
      <ScrollButton />
    </div>
  ),
};
