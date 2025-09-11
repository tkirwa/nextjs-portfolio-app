"use client";
import { useState, useContext } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 dark:bg-black/70 backdrop-blur-md px-6 py-4 flex items-center justify-between text-black dark:text-white">
      <div className="text-2xl font-bold">Tonny Kirwa</div>

      <ul className="hidden md:flex space-x-8">
        <li><a href="#hero" className="hover:text-gray-500 dark:hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-500 dark:hover:text-gray-300">About</a></li>
        <li><a href="#projects" className="hover:text-gray-500 dark:hover:text-gray-300">Projects</a></li>
        <li><a href="#skills" className="hover:text-gray-500 dark:hover:text-gray-300">Skills</a></li>
        <li><a href="#contact" className="hover:text-gray-500 dark:hover:text-gray-300">Contact</a></li>
      </ul>

      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button onClick={toggleTheme}>
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white dark:bg-black flex flex-col items-center space-y-4 py-4 md:hidden text-black dark:text-white">
          <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
