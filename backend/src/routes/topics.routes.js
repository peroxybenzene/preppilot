const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");

router.get("/:goalId", async (req, res) => {
  try {
    const { goalId } = req.params;

    const { data, error } = await supabase
      .from("topics")
      .select("*")
      .eq("goal_id", goalId)
      .order("created_at", {
        ascending: true,
      });

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