import Layout from "../components/Layout";

function Dashboard() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-gray-500">
            Total Goals
          </h3>

          <p className="text-3xl font-bold mt-2">
            3
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-gray-500">
            Days Remaining
          </h3>

          <p className="text-3xl font-bold mt-2">
            92
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-gray-500">
            Progress
          </h3>

          <p className="text-3xl font-bold mt-2">
            34%
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;