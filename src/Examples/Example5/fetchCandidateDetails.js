
export const fetchCandidateDetails = async () => {
  try {
    const response = await fetch(
      '/api/get-candidate-details',
      {
        'method': 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'accept': 'application/json'
        }
      }
    );
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return response.json();
    }
  } catch (error) {
    throw new Error(error);
  }
}