
// vendors
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// actions
import {
  fetchCandidateDetailsRequest,
  fetchCandidateDetailsSuccess,
  fetchCandidateDetailsError,
  fetchDetails
} from './candidate.action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe.skip('Candidate action', () => {
  it('should call fetchCandidateDetailsRequest', async () => {
    const result = fetchCandidateDetailsRequest();
    expect(result).toEqual({
      type: 'FETCH_CANDIDATE_DETAILS_REQUEST'
    });
  });

  it('should call fetchCandidateDetailsSuccess', async () => {
    const testResponse = {
      data: 'testData'
    }
    const result = fetchCandidateDetailsSuccess(testResponse);
    expect(result).toEqual({
      type: 'FETCH_CANDIDATE_DETAILS_SUCCESS',
      payload: { response: testResponse }
    });
  });

  it('should call fetchCandidateDetailsError', async () => {
    const testError = {
      message: 'test internal server error'
    }
    const result = fetchCandidateDetailsError(testError);
    expect(result).toEqual({
      type: 'FETCH_CANDIDATE_DETAILS_ERROR',
      payload: { error: testError }
    });
  });

  it('fetchDetails should call success action', () => {
    const store = mockStore();
    const response = 'test response';

    let res = fetchCandidateDetailsSuccess(response);

    window.fetch = jest.fn().mockImplementation(() => ({
      ok: true,
      status: 200,
      json: () =>
        new Promise(resolve => {
          resolve(response);
        })
    }));

    return store
      .dispatch(fetchDetails())
      .then(result => {
        expect(result.type).toEqual(res.type);
        expect(res.payload.response).toEqual('test response');
      });
  });

  it('fetchDetails should call error action', () => {
    const store = mockStore();
    let res = fetchCandidateDetailsError();
    window.fetch = jest.fn().mockImplementation(() => ({
      ok: false,
      error: {}
    }));

    return store
      .dispatch(fetchDetails({}))
      .catch(error => {
        expect(error).toEqual(res);
      });
  });
});