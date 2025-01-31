"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
    return (
        <main>
            <section className="flex flex-col justify-center items-center sm:h-[130vh] lg:h-[130vh] sm:mx-10 lg:mx-32">
                <div className="flex flex-col justify-center gap-10 w-full">
                    <div className="flex flex-col justify-center items-center gap-7">
                        <h1 className="sm:text-3xl lg:text-5xl font-outfit font-semibold">Contact Us</h1>
                        <p className="sm:text-base lg:text-lg font-poppins text-gray-700 text-center leading-relaxed">
                            We’re here to assist you! Reach out to us through any of the following means, and we’ll get back to you promptly.
                        </p>
                    </div>
                    <div className="flex sm:justify-center sm:flex-col lg:flex-row lg:justify-between items-center gap-10 w-full">
                        <div className="flex lg:w-1/2 sm:w-full">
                            <div className="flex sm:justify-center lg:justify-start w-full">
                                <Image width={600} height={600} alt="Contact Illustration" src={"/i-4.svg"} draggable={false} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center sm:w-full lg:w-1/2">
                            <div className="flex flex-col gap-5">
                                <div className="bg-[#578E7E] text-white p-6 rounded-lg shadow-lg">
                                    <h2 className="sm:text-xl lg:text-2xl font-semibold font-outfit mb-2">Address</h2>
                                    <p className="sm:text-base lg:text-lg font-poppins">
                                        Orphan old age home, Kondampeta,<br />
                                        Rajam, Vizianagaram District,<br />
                                        Andhra Pradesh, Zip Code 532127

                                    </p>
                                </div>
                                <div className="bg-[#ccddd8] text-black p-6 rounded-lg shadow-lg">
                                    <h2 className="sm:text-xl lg:text-2xl font-semibold font-outfit mb-2">Phone</h2>
                                    <Link
                                        href={"tel:+91701313185"}
                                        className='sm:text-base lg:text-lg font-poppins'
                                    >
                                        +91-701313185 (Whatsapp)
                                    </Link>
                                    <br />
                                    <Link
                                        href={"tel:+919885401578"}
                                        className='sm:text-base lg:text-lg font-poppins'
                                    >
                                        +91-9885401578 (Phonepay)
                                    </Link>
                                </div>
                                <div className="bg-[#466f65] text-white p-6 rounded-lg shadow-lg">
                                    <h2 className="sm:text-xl lg:text-2xl font-semibold font-outfit mb-2">Mail</h2>
                                    <Link
                                        href={"mailto:srinivas_p72@yahoo.com"}
                                        className='sm:text-sm lg:text-lg font-poppins'
                                    >
                                        srinivas_p72@yahoo.com
                                    </Link>
                                    <br />
                                    <Link
                                        href={"mailto:gptower14@gmail.com"}
                                        className='sm:text-sm lg:text-lg font-poppins'
                                    >
                                        gptower14@gmail.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center sm:h-[90vh] lg:h-[90vh] sm:mx-10 lg:mx-32 gap-10">
                <h2 className="sm:text-2xl lg:text-4xl font-semibold font-outfit mb-6">Find Us Here</h2>
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