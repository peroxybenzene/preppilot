const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");

router.patch("/:topicId", async (req, res) => {
  try {
    const { topicId } = req.params;

    const { completed } = req.body;

    const { data, error } = await supabase
      .from("topics")
      .update({
        completed,
      })
      .eq("id", topicId)
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