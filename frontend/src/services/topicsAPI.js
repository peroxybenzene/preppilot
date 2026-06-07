const API_URL = "http://localhost:5000/api/topics";

export const getTopics = async (goalId) => {
  const response = await fetch(
    `${API_URL}/${goalId}`
  );

  return response.json();
};