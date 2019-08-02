export const fetchCandidateDetails = async () => {
  const response = await fetch("/api/get-candidate-details", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      accept: "application/json"
    }
  });
  if (!response.ok) {
    throw new Error();
  } else {
    return response.json();
  }
};
