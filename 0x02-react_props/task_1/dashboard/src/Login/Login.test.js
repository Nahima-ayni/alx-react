// Login.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

test('renders Login component without crashing', () => {
  render(<Login />);
});

test('renders 2 input tags and 2 label tags', () => {
  render(<Login />);
  
  const inputElements = screen.getAllByRole('textbox');
  const labelElements = screen.getAllByLabelText(/.*/);

  expect(inputElements).toHaveLength(2);
  expect(labelElements).toHaveLength(2);
});
