import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html } = this.props;

    return (
      <>
        {value ? (
          <li data-notification-type={type}>{value}</li>
        ) : (
          <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
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
