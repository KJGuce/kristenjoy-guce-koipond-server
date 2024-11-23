import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

// Retrieve all users
const index = async (_req, res) => {
  try {
    const data = await knex("users"); // Use "users" instead of "user"
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving users: ${err}`);
  }
};

// Retrieve a single user by ID
const findOne = async (req, res) => {
  try {
    const usersFound = await knex("users").where({ id: req.params.id });

    if (usersFound.length === 0) {
      return res.status(404).json({
        message: `User with ID ${req.params.id} not found`,
      });
    }

    const userData = usersFound[0];
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve user data for user with ID ${req.params.id}: ${error}`,
    });
  }
};

// Retrieve all posts associated with a user by user ID
const posts = async (req, res) => {
  try {
    const userPosts = await knex("posts") // Adjust table name to "posts"
      .join("users", "posts.user_id", "users.id")
      .select("posts.*") // Select only post fields
      .where({ user_id: req.params.id });

    if (userPosts.length === 0) {
      return res.status(404).json({
        message: `No posts found for user with ID ${req.params.id}`,
      });
    }

    res.status(200).json(userPosts);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve posts for user with ID ${req.params.id}: ${error}`,
    });
  }
};

// Add a new user
const add = async (req, res) => {
  const {
    username,
    email,
    hashed_password,
    first_name,
    last_name,
    phone_number,
    role,
  } = req.body;

  if (!username?.trim() || !email?.trim() || !hashed_password?.trim()) {
    return res.status(400).json({
      message: "Username, email, and password are required fields.",
    });
  }

  try {
    const [newUserId] = await knex("users").insert({
      username,
      email,
      hashed_password,
      first_name,
      last_name,
      phone_number,
      role,
    });

    const createdUser = await knex("users").where({ id: newUserId }).first();
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new user: ${error}`,
    });
  }
};

// Update an existing user
const update = async (req, res) => {
  try {
    const rowsUpdated = await knex("users")
      .where({ id: req.params.id })
      .update(req.body);

    if (rowsUpdated === 0) {
      return res.status(404).json({
        message: `User with ID ${req.params.id} not found`,
      });
    }

    const updatedUser = await knex("users")
      .where({ id: req.params.id })
      .first();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: `Unable to update user with ID ${req.params.id}: ${error}`,
    });
  }
};

// Delete a user
const remove = async (req, res) => {
  try {
    const rowsDeleted = await knex("users")
      .where({ id: req.params.id })
      .delete();

    if (rowsDeleted === 0) {
      return res.status(404).json({
        message: `User with ID ${req.params.id} not found`,
      });
    }

    res.sendStatus(204); // No Content
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete user with ID ${req.params.id}: ${error}`,
    });
  }
};

export { index, findOne, posts, add, update, remove };
