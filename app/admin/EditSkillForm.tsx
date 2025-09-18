"use client";

import { useState } from 'react';
import { editSkill } from '@/lib/actions';

export function EditSkillForm({ skill }: { skill: { id: number; name: string } }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(skill.name);

  if (isEditing) {
    return (
      <form
        action={() => {
          editSkill(skill.id, newName);
          setIsEditing(false);
        }}
        className="flex gap-2 items-center"
      >
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="p-1 border rounded text-sm dark:bg-gray-800"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-sm transition-colors"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded text-sm transition-colors"
        >
          Cancel
        </button>
      </form>
    );
  }

  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-800 dark:text-gray-100 font-bold">{skill.name}</p>
      <button
        onClick={() => setIsEditing(true)}
        className="bg-yellow-600 hover:bg-yellow-700 text-white py-1 px-3 rounded-md text-sm transition-colors"
      >
        Edit
      </button>
    </div>
  );
}