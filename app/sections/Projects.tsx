// app/sections/Projects.tsx
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  url?: string | null;
  image?: string | null;
  tags: { tag: { name: string } }[];
}

export default async function Projects() {
  const projects: Project[] = await prisma.project.findMany({
    include: { tags: { include: { tag: true } } },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center md:text-left">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow"
          >
            {project.image && (
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm"
                >
                  {t.tag.name}
                </span>
              ))}
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                Visit Project
              </a>
            )}
          </Card>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="mt-10 text-center">
        <a
          href="/projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          More Projects
        </a>
      </div>
    </section>
  );
}
