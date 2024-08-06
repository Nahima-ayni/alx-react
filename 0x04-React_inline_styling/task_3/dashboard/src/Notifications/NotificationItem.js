import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  notification: {
    width: '100%', // Make the item take the entire screen width
    borderBottom: '1px solid black', // Black border at the bottom
    fontSize: '20px', // Font size of 20px
    padding: '10px 8px', // Padding of 10px top/bottom and 8px left/right
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  }
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html } = this.props;
    const notificationStyle = type === 'urgent' ? styles.urgent : styles.default;

    return (
      <>
        {value ? (
          <li className={css(styles.notification, notificationStyle)} data-notification-type={type}>{value}</li>
        ) : (
          <li className={css(styles.notification, notificationStyle)} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
        )}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string })
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;
