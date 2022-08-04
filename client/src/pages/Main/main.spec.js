import { screen } from "@testing-library/react";
import Main from "./index";

// test("it renders the Main component", () => {
//     renderWithReduxProvider(<Main />);
//     let main = screen.getByRole("main");
//     expect(main).toBeInTheDocument();
//   });

test("has an id of quizbtn", () => {
    renderWithReduxProvider(<Main />);
    let button = screen.getByTestId("quizbtn");
    expect(button).toBeInTheDocument();
})