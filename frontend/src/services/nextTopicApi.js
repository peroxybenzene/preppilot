const API_URL =
  "http://localhost:5000/api/next-topic";

export const getNextTopic =
  async () => {
    const response =
      await fetch(API_URL);

    return response.json();
  };