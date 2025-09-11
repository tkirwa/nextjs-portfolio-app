const skills = [
  "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Prisma", "PostgreSQL",
  "DevOps", "Automation", "Operational Strategy", "Team Leadership"
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, idx) => (
          <li key={idx} className="bg-gray-200 px-4 py-2 rounded text-center font-medium">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
