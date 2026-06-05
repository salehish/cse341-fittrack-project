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
app.use(errorHandler);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// connect DB
if (
  process.env.MONGO_URI &&
  process.env.MONGO_URI.startsWith("mongodb")
) {
  connectDB();
} else {
  console.log("MongoDB not configured yet.");
}

// routes
app.use("/users", userRoutes);
app.use("/workouts", workoutRoutes);

app.get("/", (req, res) => {
  res.send("FitTrack API is running ");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});