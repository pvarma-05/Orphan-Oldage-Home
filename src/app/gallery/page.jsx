"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <main>
            <section className='flex flex-col justify-center items-center h-[112vh] mx-32'>
                <div className='flex flex-col gap-10 justify-between'>
                    <div className='flex'>
                        <h1 className='text-5xl font-outfit font-semibold'>
                            Gallery
                        </h1>
                    </div>

                </div>
            </section>
        </main>
    );
}