require("dotenv").config();

const express = require("express");
const cors = require("cors");

const goalsRoutes = require("./routes/goals.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/goals", goalsRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "PrepPilot API Running"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});