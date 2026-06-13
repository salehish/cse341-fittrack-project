const router = require("express").Router();
const exerciseController = require("../controllers/exerciseController");
const isAuthenticated = require("../middleware/authenticate");

router.get("/", exerciseController.getAllExercises);
router.get("/:id", exerciseController.getExerciseById);

router.post("/", isAuthenticated, exerciseController.createExercise);
router.put("/:id", isAuthenticated, exerciseController.updateExercise);

router.delete("/:id", exerciseController.deleteExercise);

module.exports = router;