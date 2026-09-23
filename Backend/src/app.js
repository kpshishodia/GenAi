import express from "express"
import userRouter from "./routes/auth.route.js"

const app = express()

app.use(express.json())

// Health check — no auth required
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "GenAi  API is running",
  });
});

app.use("/api/v1/auth", userRouter);

export default app