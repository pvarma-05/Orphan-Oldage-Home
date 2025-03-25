"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#F9F6E6] pt-24">
      {/* Our Story Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-outfit font-semibold text-[#578E7E]">About Us</h1>
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold font-outfit text-[#578E7E]">Our Story</h2>
            <p className="text-sm sm:text-base lg:text-lg font-poppins text-gray-700">
              Founded in [year], we provide care and shelter for those without family or support.
            </p>
            <p className="text-sm sm:text-base lg:text-lg font-poppins text-gray-700">
              With community support, we’ve created a nurturing home for many over the years.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/i-1.svg"
              alt="Hero"
              width={400}
              height={400}
              className="max-w-full h-auto"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold font-outfit text-[#578E7E] text-center lg:text-left">
              Vision, Mission, Values
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold font-outfit text-[#578E7E] mb-2">Vision</h3>
                <p className="text-sm sm:text-base lg:text-lg font-poppins text-gray-700">
                  A compassionate community where everyone feels valued.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold font-outfit text-[#578E7E] mb-2">Mission</h3>
                <p className="text-sm sm:text-base lg:text-lg font-poppins text-gray-700">
                  Nurture and empower orphans and elderly with a loving home.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold font-outfit text-[#578E7E] mb-2">Core Values</h3>
                <ul className="text-sm sm:text-base lg:text-lg font-poppins text-gray-700 list-disc list-inside">
                  <li>Empathy</li>
                  <li>Integrity</li>
                  <li>Inclusion</li>
                  <li>Resilience</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/i-3.svg"
              alt="Vision"
              width={400}
              height={400}
              className="max-w-full h-auto"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex flex-col items-center justify-center min-h-[50vh] px-4 sm:px-6 lg:px-32 py-12">
        <div className="flex flex-col gap-6 items-center text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold font-outfit text-[#578E7E]">
            Join Us in Making a Difference
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-poppins text-gray-700 max-w-2xl">
            Your support brings hope and happiness to those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/donate"
              className="px-6 py-3 bg-[#578E7E] text-white font-medium font-outfit text-lg rounded-xl hover:bg-[#466f65] transition duration-300"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-transparent border-2 border-[#578E7E] text-[#578E7E] font-medium font-outfit text-lg rounded-xl hover:bg-[#578E7E] hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
