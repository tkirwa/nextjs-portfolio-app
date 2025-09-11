"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Get in Touch
        </h2>
        <p className="mb-8 text-lg md:text-xl leading-relaxed">
          I’m open to collaboration, freelance projects, and full-time opportunities.
          Feel free to drop me a message and I’ll get back to you as soon as possible.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="px-4 py-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
