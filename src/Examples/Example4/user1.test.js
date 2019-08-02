
// vendors
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// components
import User from './user';

// mocking react redux library
jest.mock('react-redux', () => ({
    connect: () => {
        return (component) => {
            return component
        };
    }
}));

describe('User component', () => {
    const mockFetchUserDetails = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<User fetching={true} fetchUserDetails={mockFetchUserDetails}
        />);
    });
    it('should call fetchUserDetails', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(mockFetchUserDetails).toBeCalled();
    });
    
    it('should render correctly when data is fetching', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('LoadingSpinner').length).toBe(1);
    });

    it('should render correctly when some error', () => {
        wrapper.setProps({
            fetching: false,
            errorFlag: true
        });
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('.user-error').length).toBe(1);
    });

    it('should render correctly when no error and data fetching is done', () => {
        wrapper.setProps({
            fetching: false,
            errorFlag: false,
            userDetails: { name: 'test name' }
        })
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('UserView').length).toBe(1);
        expect(wrapper.find('UserView').prop('userDetails')).toEqual({ name: 'test name' });
    });
});