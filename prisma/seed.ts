import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "NCC Dashboard",
        description: "Role-based performance tracking aligned with Kenya Power’s strategic goals.",
      },
      {
        title: "eCommerce Scaffold",
        description: "Automated Next.js setup with seed logic and modular folder structure.",
      },
      {
        title: "Portfolio Platform",
        description: "Modular Next.js portfolio with Shadcn UI, Tailwind, and Prisma integration.",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
