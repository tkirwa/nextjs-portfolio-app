// import { PrismaClient } from './lib/generated/prisma'

import { PrismaClient } from "@/lib/generated/prisma"

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...');

  // 1. Seed Tags
  const tagNames = ['Next.js', 'Tailwind', 'MySQL', 'Prisma', 'Shadcn UI', 'TypeScript'];

  const tagRecords = await Promise.all(
    tagNames.map(async (name) =>
      prisma.tag.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );

  console.log(`✅ Seeded ${tagRecords.length} tags`);

  // 2. Seed Projects
  const projects = [
    {
      title: 'NCC Dashboard',
      slug: 'ncc-dashboard',
      description: 'Role-based performance tracking aligned with Kenya Power’s strategic goals.',
      url: 'https://ncc.example.com',
      image: '/images/ncc-dashboard.png',
      tags: ['Next.js', 'MySQL', 'Prisma'],
    },
    {
      title: 'eCommerce Scaffold',
      slug: 'ecommerce-scaffold',
      description: 'Automated Next.js setup with seed logic and modular folder structure.',
      url: 'https://ecommerce.example.com',
      image: '/images/ecommerce-scaffold.png',
      tags: ['Next.js', 'Tailwind', 'TypeScript'],
    },
    {
      title: 'Portfolio Platform',
      slug: 'portfolio-platform',
      description: 'Modular Next.js portfolio with Shadcn UI, Tailwind, and Prisma integration.',
      url: 'https://portfolio.example.com',
      image: '/images/portfolio-platform.png',
      tags: ['Next.js', 'Tailwind', 'Shadcn UI', 'Prisma'],
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

  console.log('🌱 Seeding completed.');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });