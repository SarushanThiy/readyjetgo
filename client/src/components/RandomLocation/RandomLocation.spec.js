import { screen } from "@testing-library/react";
import RandomLocation from "./RandomLocation";

test("it renders the RandomLocation component", () => {
    renderWithReduxProvider(<RandomLocation />);
    let btn = screen.getByTestId("hiddenbtn");
    expect(btn).toBeInTheDocument();
  });

  test("has a random btn", () => {
    renderWithReduxProvider(<RandomLocation />);
    let btn1 = screen.getByRole("randombtn");
    expect(btn1).toBeInTheDocument();
  });