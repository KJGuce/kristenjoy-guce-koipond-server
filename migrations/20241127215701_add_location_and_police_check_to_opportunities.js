export function up(knex) {
  return knex.schema.table("opportunities", (table) => {
    // Add new column for location
    table.string("location").notNullable(); // Location of the opportunity

    // Add new column for police check requirement (Yes/No)
    table.boolean("police_check_required").defaultTo(false); // Default to 'No' (false)
  });
}

export function down(knex) {
  return knex.schema.table("opportunities", (table) => {
    // Remove the location and police check requirement columns
    table.dropColumn("location");
    table.dropColumn("police_check_required");
  });
}
