import { prisma } from "@/lib/prisma";

export async function getSkills() {
  const skills = await prisma.skill.findMany({
    orderBy: { createdAt: "asc" },
  });

  return skills;
}
