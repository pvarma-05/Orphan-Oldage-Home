"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F9F6E6] pt-24">
      {/* Contact Info Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-outfit font-semibold text-[#578E7E]">Contact Us</h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg font-poppins text-gray-700">
              Reach out to us—we’re here to assist you!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/i-4.svg"
                alt="Contact Illustration"
                width={400}
                height={400}
                className="max-w-full h-auto"
                draggable={false}
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="bg-[#578E7E] text-white p-5 rounded-xl shadow-md">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold font-outfit mb-2">Address</h2>
                <p className="text-sm sm:text-base lg:text-lg font-poppins">
                  Orphan Old Age Home, Kondampeta,<br />
                  Rajam, Vizianagaram District,<br />
                  Andhra Pradesh, Zip Code 532127
                </p>
              </div>
              <div className="bg-[#ccddd8] text-black p-5 rounded-xl shadow-md">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold font-outfit mb-2">Phone</h2>
                <Link href="tel:+917013131858" className="block text-sm sm:text-base lg:text-lg font-poppins">
                  +91-7013131858 (WhatsApp)
                </Link>
                <Link href="tel:+919885401578" className="block text-sm sm:text-base lg:text-lg font-poppins">
                  +91-9885401578 (PhonePay)
                </Link>
              </div>
              <div className="bg-[#578E7E] text-white p-5 rounded-xl shadow-md">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold font-outfit mb-2">Mail</h2>
                <Link href="mailto:srinivas_p72@yahoo.com" className="block text-sm sm:text-base lg:text-lg font-poppins">
                  srinivas_p72@yahoo.com
                </Link>
                <Link href="mailto:gptower14@gmail.com" className="block text-sm sm:text-base lg:text-lg font-poppins">
                  gptower14@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-32 py-12">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold font-outfit text-[#578E7E] mb-6 text-center">
          Find Us Here
        </h2>
        <div className="w-full max-w-6xl h-[300px] sm:h-[350px] lg:h-[450px] rounded-xl overflow-hidden shadow-md">
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
