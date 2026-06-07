import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import GoalCard from "../components/GoalCard";
import { getGoals, createGoal } from "../services/goalsApi";

function Goals() {
  const [title, setTitle] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    const data = await getGoals();
    setGoals(data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createGoal({
      title,
      target_date: targetDate,
      hours_per_day: Number(hoursPerDay),
    });

    setTitle("");
    setTargetDate("");
    setHoursPerDay("");

    fetchGoals();
  };

  return (
    <layout>
    <div style={{ padding: "40px" }}>
      <h1>PrepPilot</h1>

      <h2>Create Goal</h2>

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
    </layout>
  );
}

export default Goals;