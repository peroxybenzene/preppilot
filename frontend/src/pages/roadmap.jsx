import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getTopics } from "../services/topicsApi";
import { updateTopicStatus }
  from "../services/topicProgressApi";

import { useParams } from "react-router-dom";

function Roadmap() {
  const { goalId } = useParams();
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
  if (goalId) {
    loadRoadmap();
  }
}, [goalId]);

    const loadRoadmap = async () => {
        const data =
            await getTopics(goalId);

        setTopics(data);
    };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">
        Roadmap
      </h1>

      <div className="flex gap-3">
      
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