const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "FitTrack API",
    description: "API for tracking users and workouts",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);