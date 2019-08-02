import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import A from './A';

describe.skip('A component', () => {
  it('should SHALLOW render correctly', () => {
    const wrapper = shallow(<A />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
  it('should MOUNT correctly', () => {
    const wrapper = mount(<A />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    wrapper.unmount();
  });
});