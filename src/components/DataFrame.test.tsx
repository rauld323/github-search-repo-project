import { render, screen } from "@testing-library/react";
import DataFrame from "./DataFrame";

const testProps = {
  name: "the-best-repo-ever",
  language: "JavaScript",
  svn_url: "https://www.google.com/",
  update_at: "2020-08-19T06:33:41Z",
  description: "this is the best repo ever. Can you believe it?",
};

test("should render DataFrame component", () => {
  const { getByTestId } = render(
    <DataFrame
      name={testProps.name}
      language={testProps.language}
      svn_url={testProps.svn_url}
      updated_at={testProps.update_at}
    />,
  );

  const componentElement = getByTestId("dataFrame-container");

  expect(componentElement).toBeInTheDocument();
});

test("should have all mandatory text", () => {
  render(
    <DataFrame
      name={testProps.name}
      language={testProps.language}
      updated_at={testProps.update_at}
      svn_url={testProps.svn_url}
    />,
  );
  const name = screen.getByText("the-best-repo-ever");
  const language = screen.getByText("JavaScript");
  const updated_at = screen.getByText("Updated 1192 days ago.");
  const svn_url = screen.getByRole("link", { name: "Link to Repo" });

  expect(name).toBeInTheDocument();
  expect(language).toBeInTheDocument();
  expect(updated_at).toBeInTheDocument();
  expect(svn_url).toBeInTheDocument();
});

describe("should show correct color depending on language", () => {
  test("should show purple background for JS language", () => {
    const container = render(
      <DataFrame
        name={testProps.name}
        language={testProps.language}
        updated_at={testProps.update_at}
        svn_url={testProps.svn_url}
      />,
    );

    const element = container.getByText("JavaScript");

    const backgroundColor = window
      .getComputedStyle(element)
      .getPropertyValue("background-color");

    expect(backgroundColor).toBe("rgb(128, 0, 128)");
  });

  test("should show red background for HTML language", () => {
    const container = render(
      <DataFrame
        name={testProps.name}
        language={"HTML"}
        updated_at={testProps.update_at}
        svn_url={testProps.svn_url}
      />,
    );

    const element = container.getByText("HTML");

    const backgroundColor = window
      .getComputedStyle(element)
      .getPropertyValue("background-color");

    expect(backgroundColor).toBe("rgb(255, 0, 0)");
  });
});
