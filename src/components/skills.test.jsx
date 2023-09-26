import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("rendersLogin button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  //queryby use for hidden not rendered elements in the dom
  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const StartLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(StartLearningButton).not.toBeInTheDocument();
  });

  //finBy/return promise -  eventually displayed it has default timeout 1000 ml
  test("Start Learning button is eventually displayed", async () => {
   const view = render(<Skills skills={skills} />);
   logRoles(view.container)
    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();
    const StartLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug();
    expect(StartLearningButton).toBeInTheDocument();
  });
});
