import React from 'react';
import { shallow, mount } from 'enzyme';

import A from './A';

describe('A component', () => {
  it('should SHALLOW render correctly', () => {
    const wrapper = shallow(<A />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should MOUNT correctly', () => {
    const wrapper = mount(<A />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});