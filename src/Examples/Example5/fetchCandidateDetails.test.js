import { fetchCandidateDetails } from "./fetchCandidateDetails";

describe.skip("Fetch candidate details", () => {
  it("should return result when api call succeeds", () => {
    const mockResult = {
      response: "test response"
    };

    fetch = jest.fn().mockImplementationOnce(() => ({
      ok: true,
      json: () =>
        new Promise(resolve => {
          resolve(mockResult);
        })
    }));

    return expect(fetchCandidateDetails()).resolves.toEqual(mockResult);
  });
  it("should throw error when api call fails", async () => {
    fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve, reject) => {
          reject({});
        })
    );

    await expect(fetchCandidateDetails()).rejects.toEqual({});
  });
});
