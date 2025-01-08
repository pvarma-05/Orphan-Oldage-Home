"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <main>
            <section className='flex flex-col justify-center items-center h-[112vh] mx-32'>
                <div className='flex justify-between'>
                    <div className='flex flex-col  justify-center items-center gap-10'>
                        <h1 className='text-5xl font-outfit font-semibold'>
                            Donate Now
                        </h1>
                    </div>
                </div>
            </section>
        </main>
    );
}