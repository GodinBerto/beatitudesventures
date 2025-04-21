"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src={"/logo1.png"}
            alt="logo"
            width={100}
            height={100}
            className="w-30 h-12 object-cover"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#about-us"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            About Us
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Services
          </Link>

          <Link
            href="#technologies"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Technologies
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Testimonials
          </Link>
        </div>

        {/* Contact Button (Always Visible) */}
        <div className="hidden md:flex">
          <Link href="#contact-us">
            <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              <span className="text-sm font-medium">Contact Us</span>
            </button>
          </Link>
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
            href="#about-us"
            className="text-sm font-medium text-gray-700 hover:text-black block"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-gray-700 hover:text-black block"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>

          <Link
            href="#technologies"
            className="text-sm font-medium text-gray-700 hover:text-black block"
            onClick={() => setIsOpen(false)}
          >
            Technologies
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-gray-700 hover:text-black block"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link href="#contact-us" onClick={() => setIsOpen(false)}>
            <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              <span className="text-sm font-medium">Contact Us</span>
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
