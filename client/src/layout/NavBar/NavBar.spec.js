import { screen } from "@testing-library/react";
import NavBar from ".";

test("it renders the Navbar component", () => {
    renderWithReduxProvider(<NavBar />);
    let nav = screen.getByRole("nav-home");
    expect(nav).toBeInTheDocument();
  });