"use client";

// import { addSkill } from "@/lib/actions/skills/add";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { addSkill } from "@/lib/actions";

export function AddSkillForm() {
  const { pending } = useFormStatus();
  const [toast, setToast] = useState({
    message: "",
    type: "",
  });

  const handleSubmit = async (formData: FormData) => {
    try {
      await addSkill(formData);
      setToast({ message: "Skill added successfully!", type: "success" });
    } catch (error) {
      console.error(error);
      setToast({ message: "Failed to add skill.", type: "error" });
    }
    // Automatically hide the toast after 3 seconds
    setTimeout(() => {
      setToast({ message: "", type: "" });
    }, 3000);
  };

  const toastClasses = toast.type === "success"
    ? "bg-green-500 text-white"
    : "bg-red-500 text-white";

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
        Add New Skill
      </h2>
      <form action={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
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
      {toast.message && (
        <div
          className={`absolute bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-sm font-medium ${toastClasses}`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}
