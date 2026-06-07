import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getTopics } from "../services/topicsApi";
import { getGoals } from "../services/goalsApi";
import { updateTopicStatus }
  from "../services/topicProgressApi";

function Roadmap() {
  const [goals, setGoals] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [topics, setTopics] = useState([]);

  const toggleTopic = async (
  topicId,
  completed
) => {
  await updateTopicStatus(
    topicId,
    !completed
  );

  loadRoadmap();
};
  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    const data = await getGoals();
    setGoals(data);
  };

  const loadRoadmap = async () => {
    if (!selectedGoal) return;

    const data = await getTopics(selectedGoal);

    setTopics(data);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">
        Roadmap
      </h1>

      <div className="flex gap-3">
        <select
          className="border p-2 rounded"
          value={selectedGoal}
          onChange={(e) =>
            setSelectedGoal(e.target.value)
          }
        >
          <option value="">
            Select Goal
          </option>

          {goals.map((goal) => (
            <option
              key={goal.id}
              value={goal.id}
            >
              {goal.title}
            </option>
          ))}
        </select>

        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={loadRoadmap}
        >
          Load Roadmap
        </button>
      </div>

      <div className="mt-8">
        <p className="font-semibold mb-4">
          Topics: {topics.length}
        </p>

        {topics.map((topic) => (
          <div
  key={topic.id}
  className="bg-white p-4 rounded-xl shadow mb-3 flex justify-between items-center"
>
  <span>
    {topic.completed ? "✅" : "⬜"}{" "}
    {topic.name}
  </span>

  <button
    className="bg-black text-white px-3 py-1 rounded"
    onClick={() =>
      toggleTopic(
        topic.id,
        topic.completed
      )
    }
  >
    Toggle
  </button>
</div>
        ))}
      </div>
    </Layout>
  );
}

export default Roadmap;