const API_URL = "http://localhost:5000/api/goals";

export const getGoals = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createGoal = async (goal) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(goal),
  });

  return response.json();
};