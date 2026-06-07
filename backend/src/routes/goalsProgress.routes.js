const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");

router.get("/", async (req, res) => {
  try {
    const { data: goals } =
      await supabase
        .from("goals")
        .select("*");

    const result = [];

    for (const goal of goals) {
      const { count: totalTopics } =
        await supabase
          .from("topics")
          .select("*", {
            count: "exact",
            head: true,
          })
          .eq("goal_id", goal.id);

      const {
        count: completedTopics,
      } = await supabase
        .from("topics")
        .select("*", {
          count: "exact",
          head: true,
        })
        .eq("goal_id", goal.id)
        .eq("completed", true);

      const progress =
        totalTopics > 0
          ? Math.round(
              (completedTopics /
                totalTopics) *
                100
            )
          : 0;

      result.push({
        ...goal,
        totalTopics,
        completedTopics,
        progress,
      });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;