import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { listNotifications } = this.props;

    return (
      <div className="Notifications">
        <button
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
          }}
          aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}
        >
          X
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.length === 0 && <NotificationItem type="default" value="No new notification for now" />}
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
