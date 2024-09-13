import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
  // render app
  render(<App />);

  // find button
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  // check initial color
  expect(buttonElement).toHaveClass("red");

  // click button
  fireEvent.click(buttonElement);

  // check text
  expect(buttonElement).toHaveTextContent(/red/i);

  // check color
  expect(buttonElement).toHaveClass("blue");
});

test("checkbox flow", () => {
  // render app
  render(<App />);

  // find button
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  // find checkbox
  const checkboxElement = screen.getByRole("checkbox");

  // check intial states
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // click button
  fireEvent.click(checkboxElement);

  // check intial states
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();
});
