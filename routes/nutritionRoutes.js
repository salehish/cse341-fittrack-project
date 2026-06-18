const router = require("express").Router();
const nutritionController = require("../controllers/nutritionController");
const isAuthenticated = require("../middleware/authenticate");

router.get(
  "/",
  /* #swagger.tags = ['Nutrition'] */
  nutritionController.getAllNutrition
);
router.get(
  "/:id",
  /* #swagger.tags = ['Nutrition'] */
  nutritionController.getNutritionById
);

router.post(
  "/",
  isAuthenticated,
  /* #swagger.tags = ['Nutrition']
     #swagger.description = 'Create a new nutrition record'
     #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
         $foodName: 'Grilled Chicken Breast',
         $calories: 165,
         $protein: 31
       }
     }
  */
  nutritionController.createNutrition
);
router.put(
  "/:id",
  isAuthenticated,
  /* #swagger.tags = ['Nutrition']
     #swagger.description = 'Update a nutrition record'
     #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
         $foodName: 'Salmon Fillet',
         $calories: 208,
         $protein: 20
       }
     }
  */
  nutritionController.updateNutrition
);

router.delete(
  "/:id",
  /* #swagger.tags = ['Nutrition'] */
  nutritionController.deleteNutrition
);

module.exports = router;