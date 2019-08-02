// resolvers
import { getUserDetails } from './user.resolver';

describe('User resolver', () => {
  it('should return result when api call for userDetails succeeds', () => {
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

    return expect(getUserDetails()).resolves.toEqual(mockResult);
  });

  it('should throw error when api call for userDetails fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      ok: false,
      status: 404
    }));

    await expect(getUserDetails()).rejects.toThrow('Error: 404');
  });
});