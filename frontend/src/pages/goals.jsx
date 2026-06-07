import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import GoalCard from "../components/GoalCard";
import {createGoal } from "../services/goalsApi";
import {
  getGoalsProgress
} from "../services/goalsProgressApi";
function Goals() {
  const [title, setTitle] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [goals, setGoals] = useState([]);

const fetchGoals = async () => {
  const data =
    await getGoalsProgress();

  console.log(data);

  setGoals(data);
};

  useEffect(() => {
    fetchGoals();
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  
if (
  !title ||
  !targetDate ||
  !hoursPerDay
) {
  alert("Please fill all fields");
  return;
}
  try {
    console.log("Creating goal...");

    const result = await createGoal({
      title,
      target_date: targetDate,
      hours_per_day: Number(hoursPerDay),
    });

    console.log("Result:", result);

    setTitle("");
    setTargetDate("");
    setHoursPerDay("");

    fetchGoals();
  } catch (error) {
    console.error(error);
  }
};
  return (
    <Layout>
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
            Goals
      </h1>

      <h2 className="text-2xl font-semibold mb-4">
            Create Goal
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Goal Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Hours Per Day"
          value={hoursPerDay}
          onChange={(e) => setHoursPerDay(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Create Goal
        </button>
      </form>

      <hr />

      <h2>My Goals</h2>

      {goals.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
    </Layout>
  );
}

export default Goals;