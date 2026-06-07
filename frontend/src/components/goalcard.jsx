import { deleteGoal }
  from "../services/goalsApi";
import { useNavigate }
  from "react-router-dom";
import { generateRoadmap }
  from "../services/roadmapApi";
  
function GoalCard({ goal }) {
    const handleDelete = async () => {
  const confirmed = window.confirm(
    "Delete this goal?"
  );

  if (!confirmed) return;

  await deleteGoal(goal.id);

  window.location.reload();
};
    const handleGenerateRoadmap =
  async () => {
    await generateRoadmap(goal.id);

    alert(
      "Roadmap generated successfully!"
    );
  };
    const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >   
        <h3 className="text-xl font-bold">
  {goal.title}
</h3>

<p className="mt-2">
  Progress: {goal.progress}%
</p>

<div className="w-full bg-gray-200 h-3 rounded mt-2">
  <div
    className="bg-black h-3 rounded"
    style={{
      width: `${goal.progress}%`,
    }}
  />
</div>

<p className="mt-2 text-sm text-gray-600">
  {goal.completedTopics} /
  {goal.totalTopics} Topics
</p>
        <button
            className="bg-green-600 text-white px-4 py-2 rounded mt-3 mr-2"
            onClick={handleGenerateRoadmap}
        >
            Generate Roadmap
        </button>

        <button
            className="bg-black text-white px-4 py-2 rounded mt-3"
            onClick={() =>
            navigate(`/roadmap/${goal.id}`)
            }
    >
            View Roadmap
        </button>
<button
  className="bg-red-600 text-white px-4 py-2 rounded mt-3 ml-2"
  onClick={handleDelete}
>
  Delete Goal
</button>
      <h3>{goal.title}</h3>

      <p>Target: {goal.target_date}</p>

      <p>Hours/Day: {goal.hours_per_day}</p>
    </div>
  );
}

export default GoalCard;