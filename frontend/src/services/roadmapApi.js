const API_URL =
  "http://localhost:5000/api/roadmap";

export const generateRoadmap =
  async (goalId) => {
    const response = await fetch(
      `${API_URL}/${goalId}`,
      {
        method: "POST",
      }
    );

    return response.json();
  };