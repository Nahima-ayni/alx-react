import { normalizedData } from './notifications';

export function getAllNotificationsByUser(userId) {
  const { notifications, messages, users } = normalizedData.entities;
  const userNotifications = [];

  // Loop through the notifications and find those belonging to the userId
  for (const id in notifications) {
    const notification = notifications[id];
    if (notification.author === userId) {
      userNotifications.push(messages[notification.context]);
    }
  }

  return userNotifications;
}
