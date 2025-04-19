"use client";
import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
          <span className="text-lg font-semibold text-gray-900">logo.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Solutions
          </Link>

          <Link
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            About Us
          </Link>

          <Link
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Resources
          </Link>
        </div>

        {/* Contact Button (Always Visible) */}
        <div className="hidden md:flex">
          <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            <PhoneCall size={16} />
            <span className="text-sm font-medium">Contact Us</span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3">
          <Link
            href="#"
            className="block text-sm font-medium text-gray-700 hover:text-black"
          >
            Solutions
          </Link>
          <Link
            href="#"
            className="block text-sm font-medium text-gray-700 hover:text-black"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="block text-sm font-medium text-gray-700 hover:text-black"
          >
            Resources
          </Link>
          <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition mt-3">
            <PhoneCall size={16} />
            <span className="text-sm font-medium">Contact Us</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
