const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "FitTrack API",
    description: "API for tracking users and workouts",
    version: "1.0.0",
  },
  host: "cse341-fittrack-project.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";

const endpointsFiles = [
  "./server.js",
  "./controllers/userController.js",
  "./controllers/workoutController.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc);