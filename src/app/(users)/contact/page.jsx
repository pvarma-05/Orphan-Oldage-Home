"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="w-full pt-24"> {/* Added padding-top to prevent overlap */}
      {/* Contact Section */}
      <section className="flex flex-col justify-center items-center min-h-screen px-4 md:px-10 lg:px-32 py-16">
        <div className="w-full max-w-6xl">
          {/* Title & Description */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-semibold">
              Contact Us
            </h1>
            <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
              We’re here to assist you! Reach out to us through any of the following means, and we’ll get back to you promptly.
            </p>
          </div>

          {/* Contact Details & Image */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Contact Image */}
            <div className="lg:w-1/2 w-full flex justify-center">
              <Image
                width={500}
                height={500}
                alt="Contact Illustration"
                src="/i-4.svg"
                className="max-w-full h-auto"
                draggable={false}
              />
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/2 w-full space-y-6">
              {/* Address */}
              <div className="bg-[#578E7E] text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-semibold font-outfit mb-2">Address</h2>
                <p className="text-base md:text-lg font-poppins">
                  Orphan Old Age Home, Kondampeta,<br />
                  Rajam, Vizianagaram District,<br />
                  Andhra Pradesh, Zip Code 532127
                </p>
              </div>

              {/* Phone */}
              <div className="bg-[#ccddd8] text-black p-6 rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-semibold font-outfit mb-2">Phone</h2>
                <Link href="tel:+917013131858" className="block text-base md:text-lg font-poppins">
                  +91-7013131858 (WhatsApp)
                </Link>
                <Link href="tel:+919885401578" className="block text-base md:text-lg font-poppins">
                  +91-9885401578 (PhonePay)
                </Link>
              </div>

              {/* Email */}
              <div className="bg-[#466f65] text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-semibold font-outfit mb-2">Mail</h2>
                <Link href="mailto:srinivas_p72@yahoo.com" className="block text-base md:text-lg font-poppins">
                  srinivas_p72@yahoo.com
                </Link>
                <Link href="mailto:gptower14@gmail.com" className="block text-base md:text-lg font-poppins">
                  gptower14@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="flex flex-col justify-center items-center min-h-[80vh] px-4 md:px-10 lg:px-32 py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-outfit mb-6 text-center">
          Find Us Here
        </h2>
        <div className="w-full max-w-6xl h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
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
