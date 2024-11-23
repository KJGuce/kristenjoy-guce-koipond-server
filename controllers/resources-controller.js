import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

// Retrieve all resources
const index = async (_req, res) => {
  try {
    const resources = await knex("resources");
    res.status(200).json(resources);
  } catch (err) {
    res.status(400).json({ message: `Error retrieving resources: ${err}` });
  }
};

// Retrieve a single resource by ID
const findOne = async (req, res) => {
  try {
    const resource = await knex("resources")
      .where({ id: req.params.id })
      .first();

    if (!resource) {
      return res
        .status(404)
        .json({ message: `Resource with ID ${req.params.id} not found` });
    }

    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: `Unable to retrieve resource: ${error}` });
  }
};

// Add a new resource
const add = async (req, res) => {
  const {
    name,
    description,
    category,
    quantity,
    location,
    condition,
    image_url,
    user_id,
  } = req.body;

  if (!name?.trim() || !category?.trim()) {
    return res
      .status(400)
      .json({ message: "Name and category are required fields." });
  }

  try {
    const [newResourceId] = await knex("resources").insert({
      name,
      description,
      category,
      quantity: quantity || 0,
      location,
      condition,
      image_url,
      user_id,
    });

    const createdResource = await knex("resources")
      .where({ id: newResourceId })
      .first();
    res.status(201).json(createdResource);
  } catch (error) {
    res.status(500).json({ message: `Unable to create resource: ${error}` });
  }
};

// Update an existing resource
const update = async (req, res) => {
  try {
    const rowsUpdated = await knex("resources")
      .where({ id: req.params.id })
      .update(req.body);

    if (rowsUpdated === 0) {
      return res
        .status(404)
        .json({ message: `Resource with ID ${req.params.id} not found` });
    }

    const updatedResource = await knex("resources")
      .where({ id: req.params.id })
      .first();
    res.status(200).json(updatedResource);
  } catch (error) {
    res.status(500).json({ message: `Unable to update resource: ${error}` });
  }
};

// Delete a resource
const remove = async (req, res) => {
  try {
    const rowsDeleted = await knex("resources")
      .where({ id: req.params.id })
      .delete();

    if (rowsDeleted === 0) {
      return res
        .status(404)
        .json({ message: `Resource with ID ${req.params.id} not found` });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: `Unable to delete resource: ${error}` });
  }
};

export { index, findOne, add, update, remove };
