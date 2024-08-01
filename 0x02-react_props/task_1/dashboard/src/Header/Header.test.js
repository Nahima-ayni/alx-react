import React from "react";
import { render, screen } from "@testing-library/react";
import Header from './Header';

test('renders Header component without crashing', () => {
    render(<Header />);
});

test('renders img and h1 tags', () => {
    render(<Header />);
    const imgElement = screen.getByRole('img');
    const headingElement = screen.getByRole('heading', { level: 1 });
  
    expect(imgElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
});

