// @flow

// vendors
import React from 'react';

const CandidateView = (props) => {
    return (
        <React.Fragment>
            <h3>Candidate Details:</h3>
            <div>
                <label>First Name:</label>
                <span>{props.candidateDetails.firstName}</span>
            </div>
            <div>
                <label>Last Name:</label>
                <span>{props.candidateDetails.lastName}</span>
            </div>
        </React.Fragment>
    );
}

export default CandidateView;