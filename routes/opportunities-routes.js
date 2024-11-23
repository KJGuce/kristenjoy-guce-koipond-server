import express from "express";
import * as opportunityController from "../controllers/opportunities-controller.js";

const router = express.Router();

// Route for "/opportunities"
router
  .route("/")
  .get(opportunityController.index) // Get all opportunities
  .post(opportunityController.add); // Create a new opportunity

// Route for "/opportunities/:id"
router
  .route("/:id")
  .get(opportunityController.findOne) // Get a single opportunity by ID
  .patch(opportunityController.update) // Update an opportunity by ID
  .delete(opportunityController.remove); // Delete an opportunity by ID

export default router;
