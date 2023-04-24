import React from "react";
import { render, screen } from "@testing-library/react";
import { RatingBox } from "./RatingBox";
import { RBNumberCircle } from "./RatingBox.styled";

describe("Rating Box renders as expected", () => {
  beforeEach(() => {
    render( <RatingBox display={true} handleSubmit={() => {}} getRating={() => {}} />);
  });

  it("has title 'How did we do?'", () => {
    const title = screen.getByRole("heading");
    expect(title).toHaveTextContent("How did we do?");
  });

  it("has star image", () => {
    const image = document.querySelector("img") as HTMLImageElement;
    expect(image.alt).toContain("Image of star in orange");
  });

  it("renders submit button", () => {
    expect(screen.getByRole("button", { name: /submit/i }));
  });

  it("has number buttons", () => {
    expect(screen.getByRole("button", { name: /1/ })).toHaveTextContent('1');
    expect(screen.getByRole("button", { name: /2/ })).toHaveTextContent('2');
    expect(screen.getByRole("button", { name: /3/ })).toHaveTextContent('3');
    expect(screen.getByRole("button", { name: /4/ })).toHaveTextContent('4');
    expect(screen.getByRole("button", { name: /5/ })).toHaveTextContent('5');
  });

  it("has description", () => {
    expect(screen.getByText(/please let us know/i))
  });

});
