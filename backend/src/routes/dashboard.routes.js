const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");

router.get("/", async (req, res) => {
  try {
    const { count: goalsCount } = await supabase
      .from("goals")
      .select("*", {
        count: "exact",
        head: true,
      });

    const { count: topicsCount } = await supabase
      .from("topics")
      .select("*", {
        count: "exact",
        head: true,
      });

    const { count: completedCount } = await supabase
      .from("topics")
      .select("*", {
        count: "exact",
        head: true,
      })
      .eq("completed", true);

    const progress =
      topicsCount > 0
        ? Math.round(
            (completedCount / topicsCount) * 100
          )
        : 0;

    res.json({
      goals: goalsCount,
      topics: topicsCount,
      completedTopics: completedCount,
      progress,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;