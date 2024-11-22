import knex from "knex"; // If knex needs to be imported, else you can remove this line

export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("resources").del();

  // Inserts seed entries
  await knex("resources").insert([
    {
      name: "Food Package",
      description:
        "A package of non-perishable food items for families in need.",
      category: "Food",
      quantity: 100,
      location: "Downtown Shelter",
      condition: "New",
      image_url: "http://example.com/images/food-package.jpg",
      user_id: 1, // User 1
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "Sleeping Bags",
      description: "Sleeping bags for homeless individuals in winter.",
      category: "Shelter",
      quantity: 50,
      location: "Community Center",
      condition: "New",
      image_url: "http://example.com/images/sleeping-bag.jpg",
      user_id: 2, // User 2
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "Tents",
      description: "Portable tents for emergency shelter use.",
      category: "Shelter",
      quantity: 30,
      location: "Park Area",
      condition: "Used",
      image_url: "http://example.com/images/tent.jpg",
      user_id: 3, // User 3
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "Medical Kits",
      description: "Basic medical supplies for emergency treatment.",
      category: "Health",
      quantity: 200,
      location: "Health Clinic",
      condition: "New",
      image_url: "http://example.com/images/medical-kit.jpg",
      user_id: 1, // User 1
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "Hygiene Kits",
      description: "Personal hygiene kits for people in need.",
      category: "Health",
      quantity: 150,
      location: "Community Center",
      condition: "New",
      image_url: "http://example.com/images/hygiene-kit.jpg",
      user_id: 2, // User 2
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "Bedding",
      description: "Clean bedding sets for shelters.",
      category: "Shelter",
      quantity: 120,
      location: "Shelter A",
      condition: "New",
      image_url: "http://example.com/images/bedding.jpg",
      user_id: 3, // User 3
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "Clothing",
      description: "Clothing for homeless individuals.",
      category: "Clothing",
      quantity: 250,
      location: "Clothing Drive",
      condition: "Used",
      image_url: "http://example.com/images/clothing.jpg",
      user_id: 1, // User 1
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "Water Bottles",
      description: "Bottled water for distribution.",
      category: "Food",
      quantity: 500,
      location: "Water Station",
      condition: "New",
      image_url: "http://example.com/images/water-bottles.jpg",
      user_id: 2, // User 2
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "First Aid Supplies",
      description: "Essential first aid materials for emergencies.",
      category: "Health",
      quantity: 80,
      location: "Health Center",
      condition: "New",
      image_url: "http://example.com/images/first-aid.jpg",
      user_id: 3, // User 3
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "Flashlights",
      description: "Portable flashlights for emergency use.",
      category: "Supplies",
      quantity: 60,
      location: "Community Warehouse",
      condition: "Used",
      image_url: "http://example.com/images/flashlights.jpg",
      user_id: 1, // User 1
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
