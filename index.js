import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Environment Variables
const PORT = process.env.PORT || 5050;

// Import Routes
import userRoutes from "./routes/user-routes.js";
import resourceRoutes from "./routes/resources-routes.js";
import opportunityRoutes from "./routes/opportunities-routes.js";

// Routes
app.use("/users", userRoutes); // All user-related routes
app.use("/resources", resourceRoutes); // All resource-related routes
app.use("/opportunities", opportunityRoutes); // All opportunity-related routes

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).send("KoiPond API is running!");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`KoiPond API is running at http://localhost:${PORT}`);
});
