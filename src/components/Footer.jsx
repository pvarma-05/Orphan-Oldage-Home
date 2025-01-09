"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Footer() {
    // const pathname = usePathname();
    // const navLinks = [
    //     { name: "Home", href: "/" },
    //     { name: "About", href: "/about" },
    //     { name: "Gallery", href: "/gallery" },
    //     { name: "Donations", href: "/donations" },
    //     { name: "Contact", href: "/contact" },
    // ];
    return (
        <main className='flex h-[12vh] w-full bg-[#578E7E]'>
            <div className='flex justify-center items-center w-full sm:mx-5 lg:mx-32'>
                <h1 className='text-white sm:text-lg lg:text-2xl font-outfit font-semibold'>Copyright © 2025. All rights are reserved</h1>
            </div>
        </main>
    )
}
