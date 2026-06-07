const express = require("express");
const router = express.Router();

const supabase = require("../config/supabase");

router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("topics")
      .select("*")
      .eq("completed", false)
      .order("created_at", {
        ascending: true,
      })
      .limit(1);

    if (error) {
      return res.status(400).json(error);
    }

    res.json(
      data.length
        ? data[0]
        : null
    );
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;