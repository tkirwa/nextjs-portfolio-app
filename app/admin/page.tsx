import { unstable_noStore as noStore } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getSkills } from "@/lib/services/skills";
import { AddSkillForm } from "./skill/AddSkillForm";
import { EditSkillForm } from "./skill/EditSkillForm";
import { SearchInput } from "./components/SearchInput";
// import { AddProjectForm } from "./project/AddProjectForm";
// import { EditProjectForm } from "./project/EditProjectForm";
// import { AddTagForm } from "./tag/AddTagForm";
// import { EditTagForm } from "./tag/EditTagForm";
// import { ContactList } from "./contact/ContactList";
// import { AddUserForm } from "./user/AddUserForm";
// import { EditUserForm } from "./user/EditUserForm";
// import { SearchInput } from "./components/SearchInput";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: { model: string; query?: string };
}) {
  noStore();

  const selectedModel = searchParams.model || "skill";
  const searchQuery = searchParams.query || "";

  let data: any[] = [];
  let title = "";

  // Fetch data for the selected model with optional search query
  switch (selectedModel) {
    case "project":
      data = await prisma.project.findMany({
        where: {
          OR: [
            { title: { contains: searchQuery } },
            { description: { contains: searchQuery } },
          ],
        },
        orderBy: { createdAt: "desc" },
      });
      title = "Projects";
      break;
    case "tag":
      data = await prisma.tag.findMany({
        where: { name: { contains: searchQuery } },
        orderBy: { name: "asc" },
      });
      title = "Tags";
      break;
    case "contact":
      data = await prisma.contact.findMany({
        where: {
          OR: [
            { name: { contains: searchQuery } },
            { email: { contains: searchQuery } },
          ],
        },
        orderBy: { createdAt: "desc" },
      });
      title = "Contacts";
      break;
    case "user":
      data = await prisma.user.findMany({
        where: {
          OR: [
            { name: { contains: searchQuery } },
            { email: { contains: searchQuery } },
          ],
        },
        orderBy: { createdAt: "desc" },
      });
      title = "Users";
      break;
    case "skill":
    default:
      data = await prisma.skill.findMany({
        where: { name: { contains: searchQuery } },
        orderBy: { createdAt: "asc" },
      });
      title = "Skills";
      break;
  }

  const renderForm = () => {
    switch (selectedModel) {
      case "project":
        return <AddProjectForm />;
      case "tag":
        return <AddTagForm />;
      case "user":
        return <AddUserForm />;
      case "skill":
      default:
        return <AddSkillForm />;
    }
  };

  const renderList = () => {
    switch (selectedModel) {
      case "project":
        return (
          <ul className="space-y-4">
            {data.map((item) => (
              <li key={item.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <EditProjectForm project={item} />
              </li>
            ))}
          </ul>
        );
      case "tag":
        return (
          <ul className="space-y-4">
            {data.map((item) => (
              <li key={item.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <EditTagForm tag={item} />
              </li>
            ))}
          </ul>
        );
      case "contact":
        return <ContactList contacts={data} />;
      case "user":
        return (
          <ul className="space-y-4">
            {data.map((item) => (
              <li key={item.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <EditUserForm user={item} />
              </li>
            ))}
          </ul>
        );
      case "skill":
      default:
        return (
          <ul className="space-y-4">
            {data.map((item) => (
              <li key={item.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <EditSkillForm skill={item} />
              </li>
            ))}
          </ul>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 bg-gray-100 dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Admin Panel</h2>
        <nav className="space-y-2">
          {["skill", "project", "tag", "contact", "user"].map((model) => (
            <a
              key={model}
              href={`/admin?model=${model}`}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                selectedModel === model
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              <span className="capitalize">{model}s</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>

          {/* Dynamic Forms and Lists */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
              Current {title}
            </h2>
            {/* Search Input */}
            <div className="mb-6">
              <SearchInput
                placeholder={`Search ${title.toLowerCase()}...`}
                selectedModel={selectedModel}
              />
            </div>
            {renderForm()}
            {data.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">
                No {title} found.
              </p>
            ) : (
              renderList()
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
