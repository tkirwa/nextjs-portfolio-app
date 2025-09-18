import { getSkills } from "@/lib/services/skills";

/**
 * A server component to display the list of skills.
 * It fetches the data directly on the server.
 */
export async function Skills() {
  const skills = await getSkills();

  return (
    <section
      id="skills"
      className="py-10 px-0 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        Skills
      </h2>
      {skills.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No skills to display.</p>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded text-center font-medium text-gray-800 dark:text-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
