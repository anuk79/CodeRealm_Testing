// @flow

// vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import CandidateView from '../../components/candidate/candidate';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

// actions
import { fetchDetails } from '../../actions/candidate.action';

const mapStateToProps = state => ({
    candidateDetails: state.candidate.candidateDetails,
    isDataFetching: state.candidate.isDataFetching,
    hasError: state.candidate.hasError
});

const mapDispatchToProps = dispatch => ({
    fetchCandidateDetails: bindActionCreators(fetchDetails, dispatch)
});
export class Candidate extends Component {
    componentDidMount() {
        this.props.fetchCandidateDetails();
    }

    render() {
        const { isDataFetching, candidateDetails, hasError } = this.props;
        let content;
        if(isDataFetching) {
            content = <LoadingSpinner customClassName="candidate-loading-spinner" />
        } else if(hasError) {
            content = (
                <div className="candidate-error">
                    {'Some error occurred. Please try again later.'}
                </div>
            );
        } else {
            content = <CandidateView candidateDetails={candidateDetails} />
        }
        return content;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Candidate);