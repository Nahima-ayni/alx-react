import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs mount and unmount for a pure HTML component', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = mount(<WrappedComponent />);
    
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs mount and unmount for the Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
