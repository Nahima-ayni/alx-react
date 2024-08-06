import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    fontSize: '20px',
    zIndex: 1000,
    padding: '20px',
    boxSizing: 'border-box',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'none',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
  notificationList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  notificationText: {
    fontSize: '20px',
  },
});

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div className={css(styles.notifications)}>
        <button
          className={css(styles.closeButton)}
          aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}
        >
          X
        </button>
        <p className={css(styles.notificationText)}>Here is the list of notifications</p>
        <ul className={css(styles.notificationList)}>
          {listNotifications.length === 0 && (
            <NotificationItem type="default" value="No new notification for now" />
          )}
          {listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({ __html: PropTypes.string }),
    })
  ),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
