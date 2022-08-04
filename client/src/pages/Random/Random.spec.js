import { screen } from "@testing-library/react";
import Random from ".";

test("it renders the Random component", () => {
    renderWithReduxProvider(<Random />);
    let random = screen.getByRole("randomiser");
    expect(random).toBeInTheDocument();
  });