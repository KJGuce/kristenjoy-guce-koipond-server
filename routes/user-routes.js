import express from "express";
import * as userController from "../controllers/users-controller.js";

const router = express.Router();

// Route for "/users"
router
  .route("/")
  .get(userController.index) // Get all users
  .post(userController.add); // Create a new user

// Route for "/users/:id"
router
  .route("/:id")
  .get(userController.findOne) // Get a single user by ID
  .patch(userController.update) // Update a user by ID
  .delete(userController.remove); // Delete a user by ID

// Route for "/users/:id/posts"
router.route("/:id/posts").get(userController.posts); // Get posts for a specific user by ID

export default router;
