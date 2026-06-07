require("dotenv").config();

const express = require("express");
const cors = require("cors");

const goalsRoutes = require("./routes/goals.routes");
const topicsRoutes = require("./routes/topics.routes");
const roadmapRoutes = require("./routes/roadmap.routes");
const topicProgressRoutes = require(
  "./routes/topicProgress.routes"
);

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(
  "/api/topic-progress",
  topicProgressRoutes
);
app.use("/api/goals", goalsRoutes);
app.use("/api/topics", topicsRoutes);
app.use("/api/roadmap", roadmapRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "PrepPilot API Running",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});