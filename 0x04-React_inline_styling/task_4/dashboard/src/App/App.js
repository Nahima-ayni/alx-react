import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
  },
  footer: {
    padding: '10px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
});

const App = () => {
  return (
    <div className={css(styles.body)}>
      <BodySectionWithMarginBottom title="Course list">
        <CourseList />
      </BodySectionWithMarginBottom>

      <BodySectionWithMarginBottom title="Log in to continue">
        <Login />
      </BodySectionWithMarginBottom>  

      <BodySection title="News from the School">
        <p>Holberton School</p>
      </BodySection>

      {/* Add footer if needed */}
      <div className={css(styles.footer)}>
        <p>Footer Content</p>
      </div>
    </div>
  );
};

export default App;