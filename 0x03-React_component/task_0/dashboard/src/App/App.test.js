import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('calls logOut and shows alert when ctrl+h is pressed', () => {
  const logOutMock = jest.fn();
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

  render(<App logOut={logOutMock} />);

  userEvent.keyboard('{Control>}{h}{/Control}');

  expect(alertMock).toHaveBeenCalledWith('Logging you out');
  expect(logOutMock).toHaveBeenCalled();

  alertMock.mockRestore();
});
