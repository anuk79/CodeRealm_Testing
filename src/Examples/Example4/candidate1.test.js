
// vendors
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// components
import Candidate from './candidate';

// mocking react redux library
jest.mock('react-redux', () => ({
    connect: () => {
        return (component) => {
            return component
        };
    }
}));

describe('Candidate component', () => {
    const mockFetchCandidateDetails = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Candidate isDataFetching={true} fetchCandidateDetails={mockFetchCandidateDetails}
        />);
    });
    it('should call fetchCandidateDetails', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(mockFetchCandidateDetails).toBeCalled();
    });
    
    it('should render correctly when data is isDataFetching', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('LoadingSpinner').length).toBe(1);
    });

    it('should render correctly when some error', () => {
        wrapper.setProps({
            isDataFetching: false,
            hasError: true
        });
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('.candidate-error').length).toBe(1);
    });

    it('should render correctly when no error and data isDataFetching is done', () => {
        wrapper.setProps({
            isDataFetching: false,
            hasError: false,
            userDetails: { name: 'test name' }
        })
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('CandidateView').length).toBe(1);
        expect(wrapper.find('CandidateView').prop('userDetails')).toEqual({ name: 'test name' });
    });
});