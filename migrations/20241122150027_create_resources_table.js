export function up(knex) {
  return knex.schema.createTable("resources", (table) => {
    table.increments("id").primary(); // Auto-incrementing ID
    table.string("name").notNullable(); // Name of the resource
    table.string("description"); // Optional description of the resource
    table.string("category"); // Category of the resource
    table.integer("quantity").defaultTo(0); // Quantity of the resource
    table.string("location"); // Location where the resource is available
    table.string("condition"); // Condition of the resource (e.g., new, used, damaged)
    table.string("image_url"); // URL or path to the uploaded image of the resource
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Default creation timestamp
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")); // Auto-update on modification
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("resources");
}
