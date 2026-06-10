const express = require("express");
const router = express.Router();

const {
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

router.get("/", getAllWorkouts);
router.get("/:id", getWorkoutById);

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

router.delete("/:id", deleteWorkout);

module.exports = router;