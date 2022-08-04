import { screen } from "@testing-library/react";
import Header from ".";

test("it renders the Header layout", () => {
    renderWithReduxProvider(<Header />);
    let header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });