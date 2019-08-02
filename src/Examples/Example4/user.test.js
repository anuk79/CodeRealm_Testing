
// vendors
import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// components
import { User } from './user';

describe('User component', () => {
    const mockFetchUserDetails = jest.fn();

    it('should call fetchUserDetails', () => {
        shallow(<User 
            fetching={true} 
            fetchUserDetails={mockFetchUserDetails}
        />);
        expect(mockFetchUserDetails).toBeCalled();
    });

    it('should render correctly when data is fetching', () => {
        const wrapper = shallow(<User 
            fetching={true} 
            fetchUserDetails={mockFetchUserDetails}
        />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('LoadingSpinner').length).toBe(1);
    });

    it('should render correctly when some error', () => {
        const wrapper = shallow(<User 
            errorFlag={true} 
            fetchUserDetails={mockFetchUserDetails}
        />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('.user-error').length).toBe(1);
    });

    it('should render correctly when no error and data fetching is done', () => {
        const wrapper = mount(<User 
            userDetails={{}} 
            fetchUserDetails={mockFetchUserDetails}
        />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('UserView').prop('userDetails')).toEqual({});
    });
});