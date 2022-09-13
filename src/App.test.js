import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Header Tests', () => {

  it('Should render logo', () => {
    const {getAllByText} = render(<App />);
    waitFor(() => expect(getAllByText("90's SHOP")).toBeInTheDocument());
  });

  it('Should render search input', () => {
    const {getByPlaceholderText} = render(<App />);
    waitFor(() => expect(getByPlaceholderText("Search..")).toBeInTheDocument());
  })
  
  it('Should render products links', () => {
    const {getByText} = render(<App />);
    waitFor(() => expect(getByText("")).toBeInTheDocument());
  });

  it('Should open sing in / sign up form', () => {
    const {getByTestId} = render(<App />);
    const userIcon = getByTestId("user-icon")

    expect(userIcon).toBeInTheDocument()

    userEvent.click(userIcon)

    const form = getByTestId("form-signIn-singUp")
    expect(form).toBeVisible()
  });
})
