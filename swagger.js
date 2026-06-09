const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "FitTrack API",
    description: "API for tracking users and workouts",
  },
  host: "cse341-fittrack-project.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";

const endpointsFiles = [
  "./server.js",
  "./routes/userRoutes.js",
  "./routes/workoutRoutes.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc);