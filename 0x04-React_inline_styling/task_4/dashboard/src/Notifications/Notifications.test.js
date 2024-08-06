import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('does not rerender when updating props with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');
    
    // Updating props with the same list
    wrapper.setProps({ listNotifications });
    
    expect(renderSpy).toHaveBeenCalledTimes(1);
  });

  it('rerenders when updating props with a longer list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    const longerListNotifications = [
      ...listNotifications,
      { id: 3, type: 'default', value: 'New data available' },
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const renderSpy = jest.spyOn(Notifications.prototype, 'render');

    // Updating props with a longer list
    wrapper.setProps({ listNotifications: longerListNotifications });

    expect(renderSpy).toHaveBeenCalledTimes(2);
  });
});

