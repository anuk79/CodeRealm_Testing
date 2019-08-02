
// vendors
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// components
import { InputBox } from './inputBox';

describe.skip('InputBox component', () => {
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(<InputBox />);
  });
  
  it('should render correctly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('input').length).toBe(1);
  });

  it('should set state on blur event of input', () => {
    const setStateSpy = jest.spyOn(wrapper.instance(), 'setState');

    wrapper.find('input').simulate('change', { target: { value: 123 } });
    expect(setStateSpy).toBeCalled();
  });
});





















// jest.mock('react-router-dom', () => ({
//   withRouter: component => component,
//   Link: 'Link'
// }));
