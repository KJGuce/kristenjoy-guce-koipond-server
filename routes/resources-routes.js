import express from "express";
import * as resourceController from "../controllers/resources-controller.js";
import multer from "multer";
import fs from "fs";
import path from "path";

// Ensure the upload directory exists
const UPLOADS_DIR = path.resolve("uploads");
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage });

const router = express.Router();

// Route for "/resources"
router
  .route("/")
  .get(resourceController.index) // Get all resources
  .post(upload.single("image"), resourceController.add); // Create a new resource with image upload

// Route for "/resources/latest"
router.route("/latest").get(resourceController.latest); // Get latest resources

// Route for "/resources/:id"
router
  .route("/:id")
  .get(resourceController.findOne) // Get a single resource by ID
  .patch(upload.single("image"), resourceController.update) // Update a resource by ID with optional image upload
  .delete(resourceController.remove); // Delete a resource by ID

export default router;
