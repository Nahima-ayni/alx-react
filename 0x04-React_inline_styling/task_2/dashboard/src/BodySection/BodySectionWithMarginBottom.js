import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  container: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
});

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className={css(styles.container)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default BodySectionWithMarginBottom;
