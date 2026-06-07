const API_URL =
  "http://localhost:5000/api/goals-progress";

export const getGoalsProgress =
  async () => {
    const response =
      await fetch(API_URL);

    return response.json();
  };