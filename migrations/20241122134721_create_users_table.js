export function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary(); // Auto-incrementing ID
    table.string("username").notNullable().unique(); // Unique username
    table.string("email").notNullable().unique(); // Unique email
    table.string("hashed_password").notNullable(); // Hashed password for authentication
    table.string("first_name"); // User's first name
    table.string("last_name"); // User's last name
    table.string("phone_number"); // User's phone number
    table.string("role").defaultTo("user"); // User role: admin, user, etc.
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Default creation timestamp
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")); // Auto-update on modification
  });
}

export function down(knex) {
  return knex.schema.dropTableIfExists("users");
}
