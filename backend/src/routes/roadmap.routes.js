const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");
const {
  placementRoadmap,
} = require("../services/roadmap.service");

router.post("/:goalId", async (req, res) => {
  try {
    const { goalId } = req.params;

    const topics = placementRoadmap.map((topic) => ({
      goal_id: goalId,
      name: topic,
    }));

    const { data, error } = await supabase
      .from("topics")
      .insert(topics)
      .select();

    if (error) {
      return res.status(400).json(error);
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;