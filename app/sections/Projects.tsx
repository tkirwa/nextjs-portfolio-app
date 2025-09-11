"use client";

import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "NCC Dashboard",
    description:
      "Role-based performance tracking aligned with Kenya Power’s strategic goals.",
  },
  {
    title: "eCommerce Scaffold",
    description:
      "Automated Next.js setup with seed logic and modular folder structure.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center md:text-left">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
