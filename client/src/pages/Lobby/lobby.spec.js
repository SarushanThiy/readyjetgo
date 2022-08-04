import { screen } from "@testing-library/react";
import Lobby from ".";

test("it renders the Lobby component", () => {
    renderWithReduxProvider(<Lobby />);
    let main = screen.getByRole("maintest");
    expect(main).toBeInTheDocument();
  });



test("has an id of lobbybtn", () => {
    renderWithReduxProvider(<Lobby />);
    let button = screen.getByTestId("lobbybtn");
    expect(button).toBeInTheDocument();
})
