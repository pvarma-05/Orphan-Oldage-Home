"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <main>
            <section className='flex sm:flex-col-reverse lg:flex-row justify-center items-center sm:h-[120vh] lg:h-[110vh] sm:mx-5 lg:mx-32'>
                <div className='flex flex-col justify-center gap-10 lg:w-1/2 sm:w-full'>
                    <div className='flex'>
                        <h1 className='sm:text-3xl lg:text-5xl font-outfit font-semibold'>
                            About Us
                        </h1>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <h2 className="sm:text-2xl lg:text-4xl font-semibold font-outfit">Our Story</h2>
                        <p className="sm:text-base lg:text-lg font-poppins text-gray-700 leading-relaxed">
                            Founded in <span className="font-bold">[year]</span>, our organization was born out of the need to provide
                            care and shelter for those without family or support. Inspired by personal experiences and a deep sense of
                            empathy, our journey began with a small group of passionate individuals determined to make a difference.
                        </p>
                        <p className="sm:text-base lg:text-lg font-poppins text-gray-700 leading-relaxed">
                            Over the years, we have faced numerous challenges, from securing resources to raising awareness about
                            the plight of orphans and the elderly. With the unwavering support of our community and a dedicated
                            team, we have overcome these obstacles, creating a nurturing environment that countless individuals
                            now call home.
                        </p>
                    </div>
                </div>
                <div className='flex lg:w-1/2 sm:w-full'>
                    <div className='flex sm:justify-center lg:justify-end w-full'>
                        <Image width={600} height={600} alt='hero' src={"/i-1.svg"} draggable={false} />
                    </div>
                </div>
            </section>
            <section className='flex sm:flex-col-reverse lg:flex-row justify-center items-center sm:h-[100vh] lg:h-[110vh] sm:mx-5 lg:mx-32'>
                <div className='flex flex-col justify-center gap-10 sm:w-full lg:w-1/2'>
                    <div className='flex flex-col gap-10'>
                        <h2 className="text-4xl font-semibold font-outfit">Vision, Mission, Values</h2>
                        <div>
                            <h3 className="text-2xl font-semibold font-outfit mb-2">Vision</h3>
                            <p className="text-lg font-poppins text-gray-700">
                                To foster a compassionate community where everyone feels valued and supported.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold font-outfit mb-2">Mission</h3>
                            <p className="text-lg font-poppins text-gray-700">
                                To nurture and empower orphans and elderly people by providing a safe, loving, and supportive home.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold font-outfit mb-2">Core Values</h3>
                            <ul className="text-lg font-poppins text-gray-700 list-disc list-inside">
                                <li>Empathy</li>
                                <li>Integrity</li>
                                <li>Inclusion</li>
                                <li>Resilience</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex sm:w-full lg:w-1/2'>
                    <div className='flex sm:justify-center lg:justify-end w-full'>
                        <Image width={600} height={600} alt='hero' src={"/i-3.svg"} draggable={false} />
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center h-[40vh] sm:mx-5 lg:mx-32">
                <div className="flex flex-col gap-5 sm:items-start lg:items-center">
                    <h2 className="sm:text-2xl lg:text-4xl font-semibold font-outfit text-center">
                        Join Us in Making a Difference
                    </h2>
                    <p className="sm:text-base lg:text-lg font-poppins text-gray-700 sm:text-left lg:text-center leading-relaxed">
                        Your support can bring hope and happiness to those in need. Help us create a brighter future!
                    </p>
                    <div className="flex gap-5 mt-5">
                        <Link href="/donate" className="p-5 bg-[#578E7E] text-white font-medium font-outfit sm:text-xl lg:text-2xl  rounded-xl hover:bg-[#466f65] transition">Donate Now</Link>
                        <Link href="/contact" className="p-5 bg-[#ccddd8] text-black  font-medium font-outfit sm:text-xl lg:text-2xl  rounded-xl hover:bg-gray-700 hover:text-white transition">Contact Us</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}