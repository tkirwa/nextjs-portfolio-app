"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/70 backdrop-blur-md px-6 py-4 flex items-center justify-between text-white">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold">Tonny Kirwa</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8">
        <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden">
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
