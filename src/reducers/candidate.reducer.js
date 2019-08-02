
const initialState = {
    isDataFetching: false,
    isSuccess: false,
    hasError: false,
    error: {
        type: '',
        message: ''
    },
    candidateDetails: {
        firstName: '',
        lastName: '',
        id: null,
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CANDIDATE_DETAILS_REQUEST':
        const newState1 = {...state}
        newState1.isDataFetchingtching = true;
        newState1.isSuccess = false;
        newState1.hasError = false;
        return newState1;

    case 'FETCH_CANDIDATE_DETAILS_SUCCESS':
        const newState2 = {...state}
        newState2.isDataFetchingtching = false;
        newState2.isSuccess = true;
        newState2.hasError = false;
        newState2.candidateDetails = action.payload.response
        return newState2;

    case 'FETCH_CANDIDATE_DETAILS_ERROR':
        const newState3 = {...state}
        newState3.isDataFetchingtching = false;
        newState3.isSuccess = false;
        newState3.hasError = true;
        newState3.candidateDetails = initialState.candidateDetails;
        newState3.error.type = action.payload.error.type;
        newState3.error.message = action.payload.error.message;
        return newState3;

    default:
        return initialState;
    }
}