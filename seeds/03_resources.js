import resourcesData from "../seed-data/resources-seed-data.js";

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("resources").del();

  // Inserts seed entries
  await knex("resources").insert(
    resourcesData.map((resource) => ({
      ...resource,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    }))
  );
}
