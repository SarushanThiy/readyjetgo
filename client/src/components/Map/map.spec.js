import { screen } from "@testing-library/react";
import Map from ".";

test("has an id of map", () => {
    renderWithReduxProvider(<Map />);
    let id = screen.getByTestId("map");
    expect(id).toBeInTheDocument();
})