const express = require("express");
const router = express.Router();

const {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

// Get all workouts
router.get(
  "/",
  /* #swagger.tags = ['Workouts'] */
  getAllWorkouts
);

// Get a workout by ID
router.get(
  "/:id",
  /* #swagger.tags = ['Workouts'] */
  getWorkoutById
);

// Create a new workout
router.post(
  "/",
  /* #swagger.tags = ['Workouts']
     #swagger.description = 'Create a new workout'
     #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
         $userId: '6a2874f8bb7af044f2853b52',
         $type: 'Running',
         $duration: 30,
         $caloriesBurned: 250
       }
     }
  */
  createWorkout
);

// Update a workout
router.put(
  "/:id",
  /* #swagger.tags = ['Workouts']
     #swagger.description = 'Update a workout'
     #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
         $type: 'Cycling',
         $duration: 45,
         $caloriesBurned: 400
       }
     }
  */
  updateWorkout
);

// Delete a workout
router.delete(
  "/:id",
  /* #swagger.tags = ['Workouts'] */
  deleteWorkout
);

module.exports = router;