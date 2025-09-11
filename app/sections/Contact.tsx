"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    alert("Message sent!");
  };

  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded h-32"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Send Message
        </button>
      </form>
    </section>
  );
}
