// lib/services/projects.ts
import { prisma } from "@/lib/prisma";

export async function getProjects() {
  return await prisma.project.findMany({
    include: {
      tags: {
        select: {
          tag: {
            select: {
              name: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
