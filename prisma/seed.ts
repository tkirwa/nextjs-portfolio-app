import { PrismaClient } from "../lib/generated/prisma";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // 1️⃣ Seed Tags
  const tagNames = ["Next.js", "Tailwind", "MySQL", "Prisma", "Shadcn UI", "TypeScript"];

  const tagRecords = await Promise.all(
    tagNames.map((name) =>
      prisma.tag.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );
  console.log(`✅ Seeded ${tagRecords.length} tags`);

  // 2️⃣ Seed Projects
  const projects = [
    {
      title: "NCC Dashboard – Contact Centre",
      slug: "ncc-dashboard",
      description: "Role-based performance tracking aligned with Kenya Power’s strategic goals.",
      url: "https://ncc.example.com",
      image: "https://images.unsplash.com/photo-1668396292026-4ff360c16355",
      tags: ["Next.js", "MySQL", "Prisma"],
    },
    {
      title: "eCommerce Scaffold",
      slug: "ecommerce-scaffold",
      description: "Automated Next.js setup with seed logic and modular folder structure.",
      url: "https://ecommerce.example.com",
      image: "https://images.unsplash.com/photo-1683313107043-283d0319a11e",
      tags: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
      title: "Portfolio Platform",
      slug: "portfolio-platform",
      description: "Modular Next.js portfolio with Shadcn UI, Tailwind, and Prisma integration.",
      url: "https://portfolio.example.com",
      image: "https://images.unsplash.com/photo-1663882658055-40f1d4249867",
      tags: ["Next.js", "Tailwind", "Shadcn UI", "Prisma"],
    },
    {
      title: "Car Dealership & Autoparts",
      slug: "car-dealership-autoparts",
      description: "Platform for buying and selling cars and auto parts with inventory management.",
      url: "https://cardealership.example.com",
      image: "https://images.unsplash.com/photo-1625969893982-3d5417fa2d9e",
      tags: ["Next.js", "Tailwind", "MySQL"],
    },
  ];

  for (const project of projects) {
    const createdProject = await prisma.project.upsert({
      where: { slug: project.slug },
      update: {},
      create: {
        title: project.title,
        slug: project.slug,
        description: project.description,
        url: project.url,
        image: project.image,
        tags: {
          create: project.tags.map((tagName) => ({
            tag: { connect: { name: tagName } },
          })),
        },
      },
    });
    console.log(`📌 Project created: ${createdProject.title}`);
  }

  // 3️⃣ Seed Skills
  const skillNames = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Prisma",
    "PostgreSQL",
    "DevOps",
    "Automation",
    "Operational Strategy",
    "Team Leadership",
  ];

  const skillRecords = await Promise.all(
    skillNames.map((name) =>
      prisma.skill.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );
  console.log(`✅ Seeded ${skillRecords.length} skills`);

  // 4️⃣ Seed Users
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "Admin User",
      password: "admin123", // In a real app, hash this!
      role: "admin",
      phone: faker.phone.number(),
    },
  });
  console.log(`✅ Seeded admin user with email: ${adminUser.email}`);

  const regularUsers = Array.from({ length: 5 }).map(() => ({
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: "user123", // In a real app, hash this!
    role: "user",
    phone: faker.phone.number(),
  }));

  const createdUsers = await prisma.user.createMany({
    data: regularUsers,
    skipDuplicates: true,
  });

  console.log(`✅ Seeded ${createdUsers.count} regular users.`);

  console.log("🌱 Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
