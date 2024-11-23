//
import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Validate environment variables
if (!process.env.PORT) {
  console.error("PORT is not defined in the environment variables!");
  process.exit(1); // Exit if critical variable is missing
} else {
  console.log(`PORT is defined: ${process.env.PORT}`);
}

// Environment Variables
const PORT = process.env.PORT || 5050;

// Import Routes
import userRoutes from "./routes/user-routes.js";
import resourceRoutes from "./routes/resources-routes.js";
import opportunityRoutes from "./routes/opportunities-routes.js";

// Routes
console.log("Setting up routes...");
app.use("/users", userRoutes); // All user-related routes
app.use("/resources", resourceRoutes); // All resource-related routes
app.use("/opportunities", opportunityRoutes); // All opportunity-related routes
console.log("Routes have been set up.");

// Health Check Route
app.get("/", (req, res) => {
  console.log("Health check endpoint hit");
  res.status(200).send("KoiPond API is running!");
});

// Async Error Handler Middleware
const asyncHandler = (fn) => (req, res, next) => {
  console.log(`Handling async request for ${req.method} ${req.url}`);
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error caught:", err.stack);
  if (err.status) {
    // If status is explicitly set (e.g., 404 or 400)
    console.error(`Error status: ${err.status}, message: ${err.message}`);
    res.status(err.status).json({ message: err.message });
  } else {
    // If it's an internal server error or any uncaught error
    console.error(`Internal server error: ${err.message}`);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`KoiPond API is running at http://localhost:${PORT}`);
});
