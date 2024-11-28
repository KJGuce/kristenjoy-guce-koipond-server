export function up(knex) {
  return knex.schema.alterTable("opportunities", (table) => {
    // Change start_date and end_date to date type
    table.date("start_date").alter();
    table.date("end_date").alter();
  });
}

export function down(knex) {
  return knex.schema.alterTable("opportunities", (table) => {
    // Revert start_date and end_date back to datetime type
    table.datetime("start_date").alter();
    table.datetime("end_date").alter();
  });
}
