import express from "express";
import * as resourceController from "../controllers/resources-controller.js";

const router = express.Router();

// Route for "/resources"
router
  .route("/")
  .get(resourceController.index) // Get all resources
  .post(resourceController.add); // Create a new resource

// Route for "/opportunities/latest"
router.route("/latest").get(resourceController.latest); // Get latest opportunities

// Route for "/resources/:id"
router
  .route("/:id")
  .get(resourceController.findOne) // Get a single resource by ID
  .patch(resourceController.update) // Update a resource by ID
  .delete(resourceController.remove); // Delete a resource by ID

export default router;
