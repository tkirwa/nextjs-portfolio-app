import { prisma } from "@/lib/prisma";

const skills = await prisma.skill.findMany();

export default async function Skills() {
  const skills = await prisma.skill.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      {/* <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center md:text-left">
        Skills
      </h2> */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        Skills
      </h2>
      {/* <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        Get in Touch
      </h2> */}
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded text-center font-medium text-gray-800 dark:text-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
