import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue', // Example styling for default notifications
  },
  urgent: {
    color: 'red', // Example styling for urgent notifications
  }
});

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html } = this.props;
    const notificationStyle = type === 'urgent' ? styles.urgent : styles.default;

    return (
      <>
        {value ? (
          <li className={css(notificationStyle)} data-notification-type={type}>{value}</li>
        ) : (
          <li className={css(notificationStyle)} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
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
