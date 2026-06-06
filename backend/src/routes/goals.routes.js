const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("goals")
      .select("*")
      .order("created_at", { ascending: false });

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

router.post("/", async (req, res) => {
  try {
    const { title, target_date, hours_per_day } = req.body;

    const { data, error } = await supabase
      .from("goals")
      .insert([
        {
          title,
          target_date,
          hours_per_day,
        },
      ])
      .select();

    if (error) {
      return res.status(400).json(error);
    }

    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;