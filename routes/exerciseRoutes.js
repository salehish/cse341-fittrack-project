const router = require("express").Router();
const exerciseController = require("../controllers/exerciseController");
const isAuthenticated = require("../middleware/authenticate");

router.get(
  "/",
  /* #swagger.tags = ['Exercises'] */
  exerciseController.getAllExercises
);
router.get(
  "/:id",
  /* #swagger.tags = ['Exercises'] */
  exerciseController.getExerciseById
);

router.post(
  "/",
  isAuthenticated,
  /* #swagger.tags = ['Exercises']
     #swagger.description = 'Create a new exercise'
     #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
         $name: 'Barbell Squat',
         $muscleGroup: 'Legs',
         $duration: 20
       }
     }
  */
  exerciseController.createExercise
);
router.put(
  "/:id",
  isAuthenticated,
  /* #swagger.tags = ['Exercises']
     #swagger.description = 'Update an exercise'
     #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
         $name: 'Front Squat',
         $muscleGroup: 'Legs',
         $duration: 25
       }
     }
  */
  exerciseController.updateExercise
);

router.delete(
  "/:id",
  /* #swagger.tags = ['Exercises'] */
  exerciseController.deleteExercise
);

module.exports = router;