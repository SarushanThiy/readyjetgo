import { screen } from "@testing-library/react";
import Quiz from ".";

test("has a role of quiz", () => {
    renderWithReduxProvider(<Quiz />);
    let quiz = screen.getByRole("quiz");
    expect(quiz).toBeInTheDocument();
})