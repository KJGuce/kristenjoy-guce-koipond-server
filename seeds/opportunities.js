export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("opportunities").del();

  // Inserts seed entries
  await knex("opportunities").insert([
    {
      title: "Food Drive Volunteer",
      description:
        "Help collect and distribute food items to families in need.",
      category: "Volunteer",
      start_date: "2024-12-01 08:00:00",
      end_date: "2024-12-07 18:00:00",
      is_active: true,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Shelter Support Assistant",
      description:
        "Assist with the setup and maintenance of a local homeless shelter.",
      category: "Volunteer",
      start_date: "2024-12-02 09:00:00",
      end_date: "2024-12-16 18:00:00",
      is_active: true,
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Medical Aid Distribution",
      description: "Provide medical aid supplies to individuals in need.",
      category: "Health",
      start_date: "2024-12-03 08:00:00",
      end_date: "2024-12-24 18:00:00",
      is_active: true,
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Clothing Donation Drive",
      description: "Collect donations of clothing for the homeless.",
      category: "Donation",
      start_date: "2024-12-01 08:00:00",
      end_date: "2024-12-07 18:00:00",
      is_active: true,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Bedding Setup at Shelter",
      description:
        "Assist with organizing and distributing bedding for shelter guests.",
      category: "Volunteer",
      start_date: "2024-12-08 09:00:00",
      end_date: "2024-12-18 18:00:00",
      is_active: true,
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Hygiene Kit Assembly",
      description: "Help assemble hygiene kits for individuals in need.",
      category: "Health",
      start_date: "2024-12-01 08:00:00",
      end_date: "2024-12-14 18:00:00",
      is_active: true,
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Emergency Shelter Setup",
      description:
        "Assist in setting up temporary shelters during emergency situations.",
      category: "Emergency",
      start_date: "2024-12-05 08:00:00",
      end_date: "2024-12-08 18:00:00",
      is_active: true,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Food Package Distribution",
      description: "Help distribute food packages to local families in need.",
      category: "Food",
      start_date: "2024-12-06 08:00:00",
      end_date: "2024-12-13 18:00:00",
      is_active: true,
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "First Aid Training",
      description:
        "Volunteer to provide first aid training to community members.",
      category: "Training",
      start_date: "2024-12-04 09:00:00",
      end_date: "2024-12-08 18:00:00",
      is_active: true,
      user_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      title: "Clothing Sorting",
      description: "Sort and organize clothing donations for distribution.",
      category: "Donation",
      start_date: "2024-12-09 08:00:00",
      end_date: "2024-12-13 18:00:00",
      is_active: true,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};