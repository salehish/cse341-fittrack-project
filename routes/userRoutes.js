const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.post(
  "/",
  /* #swagger.tags = ['Users']
     #swagger.description = 'Create a new user'
     #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
         $name: 'Saleh',
         $email: 'saleh@example.com',
         $age: 25
       }
     }
  */
  createUser
);

router.put(
  "/:id",
  /* #swagger.tags = ['Users']
     #swagger.description = 'Update a user'
     #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
         $name: 'Updated Saleh',
         $email: 'updated@example.com',
         $age: 26
       }
     }
  */
  updateUser
);

router.delete("/:id", deleteUser);

module.exports = router;