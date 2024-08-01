// Footer.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test('renders Footer component without crashing', () => {
  render(<Footer />);
});

test('renders the text "Copyright"', () => {
  render(<Footer />);
  const textElement = screen.getByText(/Copyright/i);
  expect(textElement).toBeInTheDocument();
});
