import express from "express";
import { connectDB } from "./src/config/db.js";
import router from "./src/router/recipeRouter.js";

const app = express();
app.use(express.json());
app.use("/api/recipes", router);

// Root route for testing
app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB", err);
  });
