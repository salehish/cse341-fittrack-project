const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Get all users
router.get(
  "/",
  /* #swagger.tags = ['Users'] */
  getAllUsers
);

// Get a user by ID
router.get(
  "/:id",
  /* #swagger.tags = ['Users'] */
  getUserById
);

// Create a new user
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

// Update a user
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

// Delete a user
router.delete(
  "/:id",
  /* #swagger.tags = ['Users'] */
  deleteUser
);

module.exports = router;