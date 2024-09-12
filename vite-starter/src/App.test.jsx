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
