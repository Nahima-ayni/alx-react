import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'; // Ensure the CSS is imported

describe('BodySectionWithMarginBottom component', () => {
  it('should render correctly a BodySection component with passed props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Check that BodySection component is rendered
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.length).toBe(1);

    // Check that the title prop is passed correctly
    expect(bodySection.prop('title')).toBe('test title');

    // Check that the children are passed correctly
    expect(bodySection.contains(<p>test children node</p>)).toBe(true);
  });
});
