"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";

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

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <main className='flex h-[88px] w-full bg-[#578E7E] fixed z-50'>
            <div className='flex justify-between items-center w-full sm:mx-10 md:mx-32'>
                {/* Logo Section */}
                <div className='flex items-center gap-3'>
                    <Image width={60} height={60} alt='Logo' src={"/logo.svg"} draggable={false} />
                    <h1 className='sm:text-2lg lg:text-[25px] font-medium font-outfit text-white'>Orphan Oldage Home</h1>
                </div>

                {/* Hamburger Menu for Small & Medium Devices */}
                <div className='lg:hidden'>
                    <button
                        className='text-white focus:outline-none'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div
                    className={`lg:flex items-center gap-5 transition-all duration-300 ${menuOpen ? "block" : "hidden"} absolute lg:static top-[12vh] left-0 w-full lg:w-auto bg-[#578E7E] lg:bg-transparent`}
                >
                    <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-5 p-5 lg:p-0">
                        {navLinks.map((link) => (
                            <li key={link.name} className="mb-2 lg:mb-0">
                                <Link
                                    href={link.href}
                                    onClick={handleLinkClick} // Close menu on link click
                                    className={`text-white block ${pathname === link.href ? "underline decoration-2 decoration-white underline-offset-4" : "text-white"
                                        }`}
                                >
                                    <span className="text-lg font-outfit">{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}
