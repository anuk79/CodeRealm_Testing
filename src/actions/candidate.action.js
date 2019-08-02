
import { fetchCandidateDetails } from '../Examples/Example5/fetchCandidateDetails';

const fetchCandidateDetailsRequest = () => ({
    type: 'FETCH_CANDIDATE_DETAILS_REQUEST'
});

const fetchCandidateDetailsSuccess = response => ({
    type: 'FETCH_CANDIDATE_DETAILS_SUCCESS',
    payload: { response }    
});

const fetchCandidateDetailsError = error => ({
    type: 'FETCH_CANDIDATE_DETAILS_ERROR',
    payload: { error } 
});

const fetchDetails = () => (dispatch) => {
    dispatch(fetchCandidateDetailsRequest());
    return fetchCandidateDetails()
    .then(response => dispatch(fetchCandidateDetailsSuccess(response)))
    .catch(error => dispatch(fetchCandidateDetailsError(error)))
}

export {
    fetchCandidateDetailsRequest,
    fetchCandidateDetailsSuccess,
    fetchCandidateDetailsError,
    fetchDetails
}