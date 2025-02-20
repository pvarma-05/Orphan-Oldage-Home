"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenuOnClickOutside = (e) => {
      if (!document.getElementById("menu-content")?.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", closeMenuOnClickOutside);
    } else {
      document.removeEventListener("click", closeMenuOnClickOutside);
    }

    return () => document.removeEventListener("click", closeMenuOnClickOutside);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-[#578E7E] z-50 shadow-md">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-32 h-[88px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image width={60} height={60} alt="Logo" src="/logo.svg" draggable={false} />
          <h1 className="text-[18px] md:text-[25px] font-medium font-outfit text-white">
            Orphan Oldage Home
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-white text-lg font-outfit transition duration-300 ${
                  pathname === link.href
                    ? "underline decoration-2 decoration-white underline-offset-4"
                    : "hover:text-gray-200"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[88px] left-0 w-full bg-[#578E7E] shadow-lg"
          >
            <ul className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <li key={link.name} className="text-center">
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-white text-lg font-outfit block py-2 transition duration-300 ${
                      pathname === link.href
                        ? "underline decoration-2 decoration-white underline-offset-4"
                        : "hover:text-gray-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
