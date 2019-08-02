
// reducers
import candidateReducer from './candidate.reducer';

describe.skip('Candidate reducer', () => {
    it('should set state correctly for FETCH_CANDIDATE_DETAILS_REQUEST action', () => {
        const newState = candidateReducer({}, {
            type: 'FETCH_CANDIDATE_DETAILS_REQUEST'
        });
        expect(newState.isDataFetching).toBeTruthy();
        expect(newState.isSuccess).toBeFalsy();
        expect(newState.hasError).toBeFalsy();
    });

    it('should set state correctly for FETCH_CANDIDATE_DETAILS_SUCCESS action', () => {
        const newState = candidateReducer({ candidateDetails: {}}, {
            type: 'FETCH_CANDIDATE_DETAILS_SUCCESS',
            payload: { 
                response: { 
                    firstName: 'test firstName',
                    lastName: 'test lastName',
                    id: 111
                }
            }
        });
        expect(newState.isDataFetching).toBeFalsy();
        expect(newState.isSuccess).toBeTruthy();
        expect(newState.hasError).toBeFalsy();
        expect(newState.candidateDetails.firstName).toEqual('test firstName');
        expect(newState.candidateDetails.lastName).toEqual('test lastName');
        expect(newState.candidateDetails.id).toEqual(111);
    });

    it('should set state correctly for FETCH_CANDIDATE_DETAILS_ERROR action', () => {
        const newState = candidateReducer({ error: {}, candidateDetails: {}}, {
            type: 'FETCH_CANDIDATE_DETAILS_ERROR',
            payload: { 
                error: { 
                    type: 401, 
                    message: 'unauthorized' 
                }
            }
        });
        expect(newState.isDataFetching).toBeFalsy();
        expect(newState.isSuccess).toBeFalsy();
        expect(newState.hasError).toBeTruthy();
        expect(newState.error.type).toEqual(401);
        expect(newState.error.message).toEqual('unauthorized');
    });

    it('should return initialstate correctly for default case', () => {
        const newState = candidateReducer(null, {});
        expect(newState.isDataFetching).toBeFalsy();
        expect(newState.isSuccess).toBeFalsy();
        expect(newState.hasError).toBeFalsy();
    });
});