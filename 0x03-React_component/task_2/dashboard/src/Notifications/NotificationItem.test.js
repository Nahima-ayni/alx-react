import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component tests', () => {
  test('renders without crashing', () => {
    render(<NotificationItem type="default" />);
  });

  test('renders correct html with dummy type and value props', () => {
    const { container } = render(<NotificationItem type="default" value="test" />);
    const li = container.querySelector('li');
    expect(li).toHaveAttribute('data-notification-type', 'default');
    expect(li).toHaveTextContent('test');
  });

  test('renders correct html with dummy html prop', () => {
    const { container } = render(<NotificationItem type="default" html={{ __html: '<u>test</u>' }} />);
    const li = container.querySelector('li');
    expect(li).toHaveAttribute('data-notification-type', 'default');
    expect(li.innerHTML).toBe('<u>test</u>');
  });
});
