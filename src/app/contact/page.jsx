"use client";
import React from 'react';
import Image from 'next/image';

export default function Contact() {
    return (
        <main>
            <section className="flex flex-col justify-center items-center h-[130vh] mx-32">
                <div className="flex flex-col justify-center gap-10 w-full">
                    <div className="flex flex-col justify-center items-center gap-7">
                        <h1 className="text-5xl font-outfit font-semibold">Contact Us</h1>
                        <p className="text-lg font-poppins text-gray-700 text-center leading-relaxed">
                            We’re here to assist you! Reach out to us through any of the following means, and we’ll get back to you promptly.
                        </p>
                    </div>
                    <div className="flex justify-between items-center gap-10 w-full">
                        <div className="flex w-1/2">
                            <div className="flex justify-start w-full">
                                <Image width={600} height={600} alt="Contact Illustration" src={"/i-4.svg"} draggable={false} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-1/2">
                            <div className="flex flex-col gap-5">
                                <div className="bg-[#578E7E] text-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-semibold font-outfit mb-2">Address</h2>
                                    <p className="text-lg font-poppins">
                                        123 Compassionate Lane,<br />
                                        Hope City, Kindness State,<br />
                                        ZIP Code 56789
                                    </p>
                                </div>
                                <div className="bg-[#ccddd8] text-black p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-semibold font-outfit mb-2">Phone</h2>
                                    <p className="text-lg font-poppins">
                                        +1 (234) 567-8901<br />
                                        +1 (234) 567-8902
                                    </p>
                                </div>
                                <div className="bg-[#466f65] text-white p-6 rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-semibold font-outfit mb-2">Mail</h2>
                                    <p className="text-lg font-poppins">
                                        contact@orphanoldagehome.org<br />
                                        support@orphanoldagehome.org
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center h-[90vh] mx-32 gap-10">
                <h2 className="text-4xl font-semibold font-outfit mb-6">Find Us Here</h2>
                <div className="w-full h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3784.665907831098!2d83.65124999999999!3d18.453472199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI3JzEyLjUiTiA4M8KwMzknMDQuNSJF!5e0!3m2!1sen!2sin!4v1736361039540!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}