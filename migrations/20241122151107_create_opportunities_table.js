export function up(knex) {
  return knex.schema.createTable("opportunities", (table) => {
    table.increments("id").primary(); // Primary key
    table.string("title").notNullable(); // Opportunity title
    table.text("description"); // Opportunity description
    table.string("category").notNullable(); // Opportunity category
    table.datetime("start_date"); // Start date for the opportunity
    table.datetime("end_date"); // End date for the opportunity
    table.boolean("is_active").defaultTo(true); // Is the opportunity active?

    // Foreign key: user_id references users table
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // Timestamps
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("opportunities");
}
