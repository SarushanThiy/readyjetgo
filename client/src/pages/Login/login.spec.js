import { screen } from "@testing-library/react";
import Login from ".";

test("it renders the Login component", () => {
    renderWithReduxProvider(<Login />);
    let login = screen.getByRole("login");
    expect(login).toBeInTheDocument();
  });

test("has an id of RJG", () => {
    renderWithReduxProvider(<Login />);
    let RJGid = screen.getByTestId("RJG");
    expect(RJGid).toBeInTheDocument();
})