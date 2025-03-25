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

  useEffect(() => {
    const closeMenuOnClickOutside = (e) => {
      if (!document.getElementById("menu-content")?.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("click", closeMenuOnClickOutside);
    }
    return () => document.removeEventListener("click", closeMenuOnClickOutside);
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-[#578E7E] z-50 shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-32 h-20">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="w-10 sm:w-12"
            draggable={false}
          />
          <h1 className="text-base sm:text-lg lg:text-xl font-medium font-outfit text-white">
            Orphan Oldage Home
          </h1>
        </div>
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`text-white text-base lg:text-lg font-outfit transition duration-300 ${
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
        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-content"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-[#578E7E] shadow-md"
          >
            <ul className="flex flex-col gap-4 p-4 sm:p-6">
              {navLinks.map((link) => (
                <li key={link.name} className="text-center">
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-white text-base sm:text-lg font-outfit block py-2 transition duration-300 ${
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
