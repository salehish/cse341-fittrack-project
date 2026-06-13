const router = require("express").Router();
const nutritionController = require("../controllers/nutritionController");
const isAuthenticated = require("../middleware/authenticate");

router.get("/", nutritionController.getAllNutrition);
router.get("/:id", nutritionController.getNutritionById);

router.post("/", isAuthenticated, nutritionController.createNutrition);
router.put("/:id", isAuthenticated, nutritionController.updateNutrition);

router.delete("/:id", nutritionController.deleteNutrition);

module.exports = router;