const API_URL =
  "http://localhost:5000/api/dashboard";

export const getDashboardStats =
  async () => {
    const response = await fetch(
      API_URL
    );

    return response.json();
  };