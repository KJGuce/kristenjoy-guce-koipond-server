import usersData from "../seed-data/users-seed-data.js";

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert(usersData);
}
