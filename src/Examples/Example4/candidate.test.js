
// vendors
import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// components
import { Candidate } from './candidate';

describe('Candidate component', () => {
    const mockFetchCandidateDetails = jest.fn();

    it('should call fetchCandidateDetails', () => {
        shallow(<Candidate 
            isDataFetching={true} 
            fetchCandidateDetails={mockFetchCandidateDetails}
        />);
        expect(mockFetchCandidateDetails).toBeCalled();
    });

    it('should render correctly when data is isDataFetching', () => {
        const wrapper = shallow(<Candidate 
            isDataFetching={true} 
            fetchCandidateDetails={mockFetchCandidateDetails}
        />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('LoadingSpinner').length).toBe(1);
    });

    it('should render correctly when some error', () => {
        const wrapper = shallow(<Candidate 
            hasError={true} 
            fetchCandidateDetails={mockFetchCandidateDetails}
        />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('.candidate-error').length).toBe(1);
    });

    it('should render correctly when no error and data isDataFetching is done', () => {
        const wrapper = mount(<Candidate 
            userDetails={{}} 
            fetchCandidateDetails={mockFetchCandidateDetails}
        />);
        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('CandidateView').prop('userDetails')).toEqual({});
    });
});