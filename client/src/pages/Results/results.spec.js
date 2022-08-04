import { screen } from "@testing-library/react";
import Results from ".";

test("it renders the Results component", () => {
    renderWithReduxProvider(<Results />);
    let results = screen.getByRole("map");
    expect(results).toBeInTheDocument();
  });