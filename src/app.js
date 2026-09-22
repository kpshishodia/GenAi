import express from "express"

const app = express()

app.use(express.json())

// Health check — no auth required
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "GenAi  API is running",
  });
});

export default app