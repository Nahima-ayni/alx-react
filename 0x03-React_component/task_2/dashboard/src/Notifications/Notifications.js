import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = ({ notifications }) => {
  return (
    <ul>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          type={notification.type}
          value={notification.value}
          html={notification.html}
        />
      ))}
    </ul>
  );
};

export default Notifications;

