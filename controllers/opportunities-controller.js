import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

// Retrieve all opportunities
const index = async (_req, res) => {
  try {
    const opportunities = await knex("opportunities");
    res.status(200).json(opportunities);
  } catch (err) {
    res.status(400).json({ message: `Error retrieving opportunities: ${err}` });
  }
};

// Retrieve a single opportunity by ID
const findOne = async (req, res) => {
  try {
    const opportunity = await knex("opportunities")
      .where({ id: req.params.id })
      .first();

    if (!opportunity) {
      return res
        .status(404)
        .json({ message: `Opportunity with ID ${req.params.id} not found` });
    }

    res.status(200).json(opportunity);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Unable to retrieve opportunity: ${error}` });
  }
};

// Add a new opportunity
const add = async (req, res) => {
  const {
    title, // Correct field name
    description,
    category,
    start_date,
    end_date,
    location, // Handle this field
    police_check_required, // Handle this field
  } = req.body;

  // Validate required fields
  if (!title?.trim() || !category?.trim() || !start_date || !end_date) {
    return res.status(400).json({
      message: "Title, category, start date, and end date are required fields.",
    });
  }

  try {
    // Insert new opportunity into the database
    const [newOpportunityId] = await knex("opportunities").insert({
      title, // Map `title` correctly
      description,
      category,
      start_date,
      end_date,
      location: location?.trim() || "Not specified", // Provide default value
      police_check_required: police_check_required === "Yes", // Convert to boolean
      is_active: true, // Default active state
    });

    // Retrieve the newly created opportunity for response
    const createdOpportunity = await knex("opportunities")
      .where({ id: newOpportunityId })
      .first();

    res.status(201).json(createdOpportunity);
  } catch (error) {
    res.status(500).json({ message: `Unable to create opportunity: ${error}` });
  }
};

// Update an existing opportunity
const update = async (req, res) => {
  try {
    const rowsUpdated = await knex("opportunities")
      .where({ id: req.params.id })
      .update(req.body);

    if (rowsUpdated === 0) {
      return res
        .status(404)
        .json({ message: `Opportunity with ID ${req.params.id} not found` });
    }

    const updatedOpportunity = await knex("opportunities")
      .where({ id: req.params.id })
      .first();
    res.status(200).json(updatedOpportunity);
  } catch (error) {
    res.status(500).json({ message: `Unable to update opportunity: ${error}` });
  }
};

// Delete an opportunity
const remove = async (req, res) => {
  try {
    const rowsDeleted = await knex("opportunities")
      .where({ id: req.params.id })
      .delete();

    if (rowsDeleted === 0) {
      return res
        .status(404)
        .json({ message: `Opportunity with ID ${req.params.id} not found` });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: `Unable to delete opportunity: ${error}` });
  }
};

// Retrieve latest opportunities (e.g., based on created_at or start_date)
const latest = async (_req, res) => {
  try {
    const latestOpportunities = await knex("opportunities")
      .orderBy("created_at", "desc") // or "start_date"
      .limit(5); // Limit to 5 or any other number you prefer

    res.status(200).json(latestOpportunities);
  } catch (err) {
    res
      .status(400)
      .json({ message: `Error retrieving latest opportunities: ${err}` });
  }
};

export { index, findOne, add, update, remove, latest };
