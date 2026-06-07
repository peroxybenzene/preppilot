const API_URL =
  "http://localhost:5000/api/topic-progress";

export const updateTopicStatus = async (
  topicId,
  completed
) => {
  const response = await fetch(
    `${API_URL}/${topicId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        completed,
      }),
    }
  );

  return response.json();
};