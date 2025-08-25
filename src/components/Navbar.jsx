import { useState } from "react";
import { Menu, X } from "lucide-react"; // if you installed lucide-react
// OR: use heroicons if you don’t want extra install
// import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="font-head-f text-3xl font-bold tracking-wide">
          Portfolio.
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About Me</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#blog" className="hover:text-blue-400 transition">Achivement</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* Download CV button (hidden on mobile) */}
        <a
          href="your-cv.pdf"
          download
          className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition"
        >
          Download CV
        </a>

        {/* Hamburger button (only on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About Me</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#blog" className="hover:text-blue-400 transition">Achivement</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            <a
              href="your-cv.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition text-center"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
