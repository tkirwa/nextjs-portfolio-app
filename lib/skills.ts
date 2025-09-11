import { PrismaClient } from "@/lib/generated/prisma"
const prisma = new PrismaClient()

export async function getSkills() {
  const skills = await prisma.skill.findMany({
    orderBy: { createdAt: "asc" },
  });

  return skills;
}
