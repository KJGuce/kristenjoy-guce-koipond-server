import opportunitiesData from "../seed-data/opportunities-seed-data.js";

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("opportunities").del();

  // Inserts seed entries
  await knex("opportunities").insert(
    opportunitiesData.map((opportunity) => ({
      ...opportunity,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    }))
  );
}
