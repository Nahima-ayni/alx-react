import { schema, normalize } from 'normalizr';
import notificationsData from '../data/notifications.json';

// Define the user entity
const user = new schema.Entity('users');

// Define the message entity
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define the notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Export the normalized notifications
export const normalizedData = normalize(notificationsData, [notification]);

export { user, message, notification };

