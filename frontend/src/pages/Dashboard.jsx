import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getDashboardStats }
  from "../services/dashboardApi";
import { getNextTopic }
  from "../services/nextTopicApi";

function Dashboard() {

  const [stats, setStats] =
    useState(null);

const [nextTopic, setNextTopic] =
  useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

const loadDashboard = async () => {
  const statsData =
    await getDashboardStats();

  const topicData =
    await getNextTopic();

  setStats(statsData);

  setNextTopic(topicData);
};

  if (!stats) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

<div className="bg-white p-6 rounded-2xl shadow mb-6">
  <h2 className="text-xl font-bold">
    Today's Focus
  </h2>

  {nextTopic ? (
    <>
      <p className="text-lg mt-2">
        {nextTopic.name}
      </p>

      <p className="text-gray-500">
        Next topic to complete
      </p>
    </>
  ) : (
    <p>
      All topics completed 🎉
    </p>
  )}
</div>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-gray-500">
            Goals
          </h3>

          <p className="text-3xl font-bold">
            {stats.goals}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-gray-500">
            Topics
          </h3>

          <p className="text-3xl font-bold">
            {stats.topics}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-gray-500">
            Completed
          </h3>

          <p className="text-3xl font-bold">
            {stats.completedTopics}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-gray-500">
            Progress
          </h3>

          <p className="text-3xl font-bold">
            {stats.progress}%
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;