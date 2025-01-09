"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Donate() {
    return (
        <main>
            <section className="flex flex-col justify-center items-center sm:h-[120vh] lg:h-[112vh] sm:mx-10 lg:mx-32">
                <div className="flex sm:flex-col-reverse lg:flex-row sm:justify-center lg:justify-between w-full gap-5">
                    <div className="flex flex-col justify-center items-center lg:items-start sm:w-full lg:w-1/2 gap-10">
                        <h1 className="sm:text-3xl lg:text-5xl font-outfit font-semibold">
                            Your Contribution,<br />Their Smile
                        </h1>
                        <p className="sm:text-base lg:text-lg font-poppins text-gray-700 leading-relaxed">
                            Every donation you make brings hope, education, and support to those in need. Together, we can build a better future for orphans and the elderly. Your kindness makes an immeasurable difference.
                        </p>
                        <button className="bg-[#578E7E] text-white px-8 py-3 rounded-lg font-poppins text-lg shadow-md hover:bg-[#466f65] transition">
                            Donate Now
                        </button>
                    </div>
                    <div className="flex sm:w-full lg:w-1/2 sm:justify-center lg:justify-end">
                        <Image
                            // src="/donate-hero.svg"
                            src={"/group.jpg"}
                            alt="Donate Illustration"
                            width={600}
                            height={600}
                            draggable={false}
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center lg:h-[112vh] sm:mx-10 lg:mx-32">
                <div className="flex flex-col items-center w-full gap-6">
                    <h2 className="text-4xl font-outfit font-semibold">Why Donate?</h2>
                    <p className="text-lg font-poppins text-gray-700 text-center leading-relaxed max-w-3xl">
                        Donations help us provide shelter, education, medical care, and emotional support to the most vulnerable members of society. By donating, you contribute to creating a loving and nurturing environment for orphans and the elderly.
                    </p>
                </div>
                <div className="flex justify-between items-center gap-10 mt-10">
                    <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
                        <Image
                            src="/education-icon.svg"
                            alt="Education Icon"
                            width={100}
                            height={100}
                        />
                        <h3 className="text-2xl font-outfit font-semibold mt-4">Education</h3>
                        <p className="text-lg font-poppins text-gray-600 text-center">
                            Provide access to quality education for underprivileged children.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
                        <Image
                            src="/healthcare-icon.svg"
                            alt="Healthcare Icon"
                            width={100}
                            height={100}
                        />
                        <h3 className="text-2xl font-outfit font-semibold mt-4">Healthcare</h3>
                        <p className="text-lg font-poppins text-gray-600 text-center">
                            Ensure regular medical checkups and access to healthcare facilities.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
                        <Image
                            src="/shelter-icon.svg"
                            alt="Shelter Icon"
                            width={100}
                            height={100}
                        />
                        <h3 className="text-2xl font-outfit font-semibold mt-4">Shelter</h3>
                        <p className="text-lg font-poppins text-gray-600 text-center">
                            Build a safe and secure home for those in need.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
