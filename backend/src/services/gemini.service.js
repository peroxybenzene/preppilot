const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

const model =
  genAI.getGenerativeModel({
    model: "gemini-3.5-flash",
  });

const generateRoadmap = async (
  goalTitle,
  targetDate,
  hoursPerDay
) => {
const prompt = `
You are an expert career mentor.

Create a learning roadmap.

Goal:
${goalTitle}

Target Date:
${targetDate}

Available Study Hours Per Day:
${hoursPerDay}

Requirements:

- Create 15-25 learning topics
- Order them from beginner to advanced
- Topics must be actionable and learnable
- Do not include explanations
- Return ONLY a JSON array

Example:

[
  "HTML Fundamentals",
  "CSS Fundamentals",
  "JavaScript Basics"
]
`;

  const result =
    await model.generateContent(
      prompt
    );

  const text =
  result.response.text();

console.log(
  "Gemini Response:"
);

console.log(text);

return JSON.parse(text);
};

module.exports = {
  generateRoadmap,
};