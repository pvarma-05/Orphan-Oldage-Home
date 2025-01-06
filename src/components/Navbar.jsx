"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "Donations", href: "/donations" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <main className='flex h-[12vh] w-full bg-[#578E7E] fixed'>
            <div className='flex justify-center items-center w-full mx-32'>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-3 items-center'>
                        <Image width={60} height={60} alt='Logo' src={"/logo.svg"} draggable={false} />
                        <h1 className='text-[25px] font-medium font-outfit text-white '>Orphan Oldage Home</h1>
                    </div>
                    <div className='flex gap-3'>
                        <ul className="flex gap-5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-3 text-white ${pathname === link.href ? "underline decoration-2 decoration-white underline-offset-4" : "text-white"
                                            }`}
                                    >
                                        <span className="text-lg font-outfit">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}
