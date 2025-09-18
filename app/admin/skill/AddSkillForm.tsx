"use client";

import { addSkill } from "@/lib/actions";
import { useFormStatus } from "react-dom";

export function AddSkillForm() {
  const { pending } = useFormStatus();

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
        Add New Skill
      </h2>
      <form action={addSkill} className="flex flex-col sm:flex-row gap-4 items-center">
        <input
          type="text"
          name="name"
          placeholder="Skill Name"
          className="flex-grow w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-colors"
          required
        />
        <button
          type="submit"
          disabled={pending}
          className="w-full sm:w-auto px-6 py-3 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-200"
        >
          {pending ? "Adding..." : "Add Skill"}
        </button>
      </form>
    </div>
  );
}
