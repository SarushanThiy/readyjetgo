import { screen } from "@testing-library/react";
import Register from ".";

test("it renders the Login component", () => {
    renderWithReduxProvider(<Register />);
    let login = screen.getByRole("register");
    expect(login).toBeInTheDocument();
  });

test("has a title id of Register", () => {
    renderWithReduxProvider(<Register />);
    let id = screen.getByTestId("h1");
    expect(id).toBeInTheDocument();
})

