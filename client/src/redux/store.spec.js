import { screen } from "@testing-library/react";
import Store from "./store";


test("store exists", () => {
    renderWithReduxProvider(<Store />);
    let test = screen.getByRole("store");
    expect(test).toBeInTheDocument();
  });