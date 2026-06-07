function GoalCard({ goal }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{goal.title}</h3>

      <p>Target: {goal.target_date}</p>

      <p>Hours/Day: {goal.hours_per_day}</p>
    </div>
  );
}

export default GoalCard;