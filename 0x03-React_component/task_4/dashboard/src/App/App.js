import React from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';


const App = () => {
    return (
        <div>
            <BodySectionWithMarginBottom title="Course list">
                <CourseList />
            </BodySectionWithMarginBottom>

            <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
            </BodySectionWithMarginBottom>  

            <BodySection title="News from the School">
                <p>Holberton School</p>
            </BodySection>
        
        </div>
    );
};

export default App;