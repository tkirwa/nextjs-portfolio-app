/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // <-- use class-based dark mode
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
