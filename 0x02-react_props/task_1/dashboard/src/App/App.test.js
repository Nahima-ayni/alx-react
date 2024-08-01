// App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Notifications from "./Notifications";
import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";

test('renders App component without crashing', () => {
  render(<App />);
});

test('contains Notifications component', () => {
  render(<App />);
  const notificationsElement = screen.getByTestId('notifications-component');
  expect(notificationsElement).toBeInTheDocument();
});

test('contains Header component', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header-component');
  expect(headerElement).toBeInTheDocument();
});

test('contains Login component', () => {
  render(<App />);
  const loginElement = screen.getByTestId('login-component');
  expect(loginElement).toBeInTheDocument();
});

test('contains Footer component', () => {
  render(<App />);
  const footerElement = screen.getByTestId('footer-component');
  expect(footerElement).toBeInTheDocument();
});
