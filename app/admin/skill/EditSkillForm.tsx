"use client";

import { useState } from "react";
import { editSkill, deleteSkill } from "@/lib/actions";

interface SkillProps {
  skill: {
    id: number;
    name: string;
  };
}

export function EditSkillForm({ skill }: SkillProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(skill.name);

  const handleUpdate = async (formData: FormData) => {
    await editSkill(skill.id, formData.get("name") as string);
    setIsEditing(false); // Exit edit mode after update
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      await deleteSkill(skill.id);
    }
  };

  return (
    <div className="w-full flex justify-between items-center gap-4">
      {isEditing ? (
        // Edit Form
        <form action={handleUpdate} className="flex flex-grow gap-2">
          <input
            type="text"
            name="name"
            defaultValue={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-grow p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 rounded-md font-semibold text-white bg-gray-500 hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </form>
      ) : (
        // Display Mode with Edit and Delete Buttons
        <>
          <span className="text-lg font-medium">{skill.name}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 rounded-md font-semibold text-white bg-yellow-600 hover:bg-yellow-700 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 rounded-md font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
