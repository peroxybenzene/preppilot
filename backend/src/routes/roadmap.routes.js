const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");

const {
  generateRoadmap,
} = require("../services/gemini.service");

router.post("/:goalId", async (req, res) => {
  try {
    const { goalId } = req.params;

    const existingTopics =
      await supabase
        .from("topics")
        .select("id")
        .eq("goal_id", goalId);

    if (
      existingTopics.data &&
      existingTopics.data.length > 0
    ) {
      return res.status(400).json({
        error:
          "Roadmap already exists",
      });
    }

    const { data: goal } =
      await supabase
        .from("goals")
        .select("*")
        .eq("id", goalId)
        .single();

    const roadmap =
      await generateRoadmap(
        goal.title,
        goal.target_date,
        goal.hours_per_day
      );

    const topics = roadmap.map(
      (topic) => ({
        goal_id: goalId,
        name: topic,
      })
    );

    const { data, error } =
      await supabase
        .from("topics")
        .insert(topics)
        .select();

    if (error) {
      return res.status(400).json(
        error
      );
    }

    res.json(data);

  } catch (err) {
  console.error(
    "ROADMAP ERROR:",
    err
  );

  res.status(500).json({
    error: err.message,
  });
}
});

module.exports = router;