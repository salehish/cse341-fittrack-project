require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./database/connect");

const userRoutes = require("./routes/userRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// routes
app.use("/users", userRoutes);
app.use("/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.send("FitTrack API is running ");
});

// error handler (must be registered AFTER routes so it can catch their errors)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    if (
      process.env.MONGO_URI &&
      process.env.MONGO_URI.startsWith("mongodb")
    ) {
      await connectDB();
    } else {
      console.log("MongoDB not configured yet.");
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();