import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

// Define the keyframes for animations
const animations = StyleSheet.create({
  fadeIn: {
    '0%': { opacity: 0.5 },
    '100%': { opacity: 1 },
  },
  bounce: {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-5px)' },
    '100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(5px)' },
  },
  bounceAnimation: {
    animationName: 'bounce',
    animationDuration: '0.5s',
    animationIterationCount: 3,
    animationTimingFunction: 'ease-in-out',
  },
  fadeInAnimation: {
    animationName: 'fadeIn',
    animationDuration: '1s',
    animationIterationCount: 3,
    animationTimingFunction: 'ease-in-out',
  },
});

// Define the styles for Notifications component
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
  menuButton: {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
    backgroundColor: '#fff8f8',
    border: 'none',
    padding: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 1001,
    float: 'right',
    ':hover': {
      animationName: [animations.fadeInAnimation, animations.bounceAnimation],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
    '@media (max-width: 900px)': {
      bottom: '10px',
      right: '10px',
    },
  },
  hidden: {
    display: 'none',
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
        {/* Menu button that floats and animates */}
        <button
          className={css(styles.menuButton, listNotifications.length > 0 && styles.hidden)}
          aria-label="Notifications"
        >
          Notifications
        </button>
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
