import express from "express";
import * as opportunityController from "../controllers/opportunities-controller.js";

const router = express.Router();

// Route for "/opportunities/latest" (This should come first to avoid conflicts)
router.route("/latest").get(opportunityController.latest); // Get latest opportunities

// Route for "/opportunities"
router
  .route("/")
  .get(opportunityController.index) // Get all opportunities
  .post(opportunityController.add); // Create a new opportunity

// Route for "/opportunities/:id"
router
  .route("/:id")
  .get(opportunityController.findOne) // Get a single opportunity by ID
  .put(opportunityController.update) // Full update of an opportunity by ID
  .patch(opportunityController.update) // Partial update of an opportunity by ID
  .delete(opportunityController.remove); // Delete an opportunity by ID

export default router;
