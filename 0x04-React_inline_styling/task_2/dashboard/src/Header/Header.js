import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    width: '120px',
    height: 'auto',
    marginRight: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

export default Header;