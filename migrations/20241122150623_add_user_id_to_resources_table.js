export function up(knex) {
  return knex.schema.alterTable("resources", (table) => {
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE"); // Adds the user_id column with foreign key constraints
  });
}

export function down(knex) {
  return knex.schema.alterTable("resources", (table) => {
    table.dropColumn("user_id"); // Removes the user_id column in case of rollback
  });
}
