import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  body: {
    margin: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0 5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
});

function Login() {
  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input type="email" name="email" className={css(styles.input)} />
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input type="password" name="password" className={css(styles.input)} />
        <button type="submit" className={`${css(styles.button)} ${css(styles.buttonHover)}`}>OK</button>
      </form>
    </div>
  );
}

export default Login;
