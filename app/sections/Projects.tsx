import { Card } from "@/components/ui/card";

const projects = [
  { title: "NCC Dashboard", description: "Role-based performance tracking aligned with Kenya Power’s strategic goals." },
  { title: "eCommerce Scaffold", description: "Automated Next.js setup with seed logic and modular folder structure." },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="p-6">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
