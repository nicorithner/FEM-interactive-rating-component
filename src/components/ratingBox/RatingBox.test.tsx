import React from "react";
import { render, screen } from "@testing-library/react";
import { RatingBox } from "./RatingBox";

describe("Rating Box renders as expected", () => {
  beforeEach(() => {
    render(
      <RatingBox display={true} handleSubmit={() => {}} getRating={() => {}} />
    );
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

  it.todo("has description");
  it.todo("has number buttons");
  it.todo("number buttons change to light gray when focused");
});
