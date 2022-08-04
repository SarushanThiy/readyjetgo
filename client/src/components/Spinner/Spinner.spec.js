import { screen } from '@testing-library/react';
import Spinner from './Spinner'

test('there is an arrow id', () => {
    renderWithReduxProvider(<Spinner />);
    let arrow = screen.getByTestId("arrow");
    expect(arrow).toBeInTheDocument();
});