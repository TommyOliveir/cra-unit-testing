//Note: testing playground extension
import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);
    
    //this is for heading 
    // const pageHeading = screen.getByRole("heading", {
    //   name: "Job application form",
    // });
    // expect(pageHeading).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    //this is for heading 
    // const sectionHeading = screen.getByRole("heading", {
    //   name: "Section 1",
    // });
    // expect(sectionHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    //getByText full string match
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    //getByText full string match with ignore case(string)
    const paragraphElement2 = screen.getByText("all fields are mandatory", {
      exact: false,
    });
    expect(paragraphElement2).toBeInTheDocument();

    //getByText substring match(string)
    const paragraphElement3 = screen.getByText("all fields are ", {
      exact: false,
    });
    expect(paragraphElement3).toBeInTheDocument();

    //getByText full match(regex)
    const paragraphElement4 = screen.getByText(/All fields are mandatory/);
    expect(paragraphElement4).toBeInTheDocument();

    //getByText substring ignore case(regex)
    const paragraphElement5 = screen.getByText(/all fields/i);
    expect(paragraphElement5).toBeInTheDocument();

    //getByText full string match ignore case(regex)
    const paragraphElement6 = screen.getByText(/^all fields are mandatory$/i);
    expect(paragraphElement6).toBeInTheDocument();

    //getByText with custom function text match(regex)
    const paragraphElement7 = screen.getByText((content) =>
      content.startsWith("All")
    );
    expect(paragraphElement7).toBeInTheDocument();

    //getByTitle
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    //getByAltText
    const imageElement = screen.getByAltText("A person with a laptop");
    expect(imageElement).toBeInTheDocument();

    //getByTestId
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    //getByLabelText with input selector
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    //getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    //getByDisplayValue
    const nameElement4 = screen.getByDisplayValue("Vishwas");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    //getByLabelText wrap method
    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
