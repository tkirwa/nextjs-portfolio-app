import { prisma } from "@/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";
import { AddSkillForm } from "./skill/AddSkillForm";
import { EditSkillForm } from "./skill/EditSkillForm";

// This component is a Server Component, so it's safe to use Prisma and Server Actions directly.
export default async function AdminPage() {
  // Disable caching for this page to ensure we always get the latest data.
  noStore();
  
  // Fetch all skills from the database. This happens on the server.
  const skills = await prisma.skill.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Admin Dashboard
        </h1>

        {/* This is a Client Component for adding new skills. */}
        <AddSkillForm />

        {/* Display the list of skills with edit and delete functionality. */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
            Current Skills
          </h2>
          <ul className="space-y-4">
            {skills.map((skill) => (
              <li 
                key={skill.id} 
                className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                {/* Each skill item is a Client Component to handle its own state. */}
                <EditSkillForm skill={skill} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
