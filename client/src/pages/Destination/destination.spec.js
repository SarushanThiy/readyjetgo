import { screen } from "@testing-library/react"
import Destination from "."


test("it renders the Destination component", () => {
    renderWithReduxProvider(<Destination />);
    let destinations = screen.getByRole("destinations");
    expect(destinations).toBeInTheDocument();
  });
