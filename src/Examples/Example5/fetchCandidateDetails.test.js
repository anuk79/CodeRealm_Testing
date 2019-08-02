// resolvers
import { fetchCandidateDetails } from './fetchCandidateDetails';

describe('Candidate resolver', () => {
  it('should return result when api call succeeds', () => {
    const mockResult = {
      response: 'test response'
    };
    
    window.fetch = jest.fn().mockImplementation(() => ({
      ok: true,
      status: 200,
      response: 'test response',
      json: () =>
        new Promise(resolve => {
          resolve(mockResult);
        })
    }));

    return expect(fetchCandidateDetails()).resolves.toEqual(mockResult);
  });

  it('should throw error when api call fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      ok: false,
      status: 404
    }));

    await expect(fetchCandidateDetails()).rejects.toThrow('Error: 404');
  });
});