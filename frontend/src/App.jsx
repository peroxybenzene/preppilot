import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    const response = await fetch(
      "http://localhost:5000/api/goals"
    );

    const data = await response.json();

    setGoals(data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(
      "http://localhost:5000/api/goals",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          target_date: targetDate,
          hours_per_day: Number(hoursPerDay),
        }),
      }
    );

    setTitle("");
    setTargetDate("");
    setHoursPerDay("");

    fetchGoals();
  };

  return (
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
        <div key={goal.id}>
          <h3>{goal.title}</h3>

          <p>
            Target: {goal.target_date}
          </p>

          <p>
            Hours/Day: {goal.hours_per_day}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;