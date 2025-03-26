"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = { opacity: 1, transition: { duration: 0.8 } };
  const slideInLeft = { x: 0, opacity: 1, transition: { duration: 0.8 } };
  const slideInRight = { x: 0, opacity: 1, transition: { duration: 0.8 } };
  const stagger = { transition: { staggerChildren: 0.2 } };
  const cardFade = { opacity: 1, y: 0, transition: { duration: 0.6 } };

  return (
    <main className="min-h-screen bg-[#F9F6E6] pt-24">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={fadeIn}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-semibold text-[#578E7E] leading-tight">
              Caring For the Abandoned Building a Loving Home
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-poppins text-gray-700">
              Join us in creating a nurturing environment for orphans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="px-6 py-3 bg-[#578E7E] text-white font-medium font-outfit text-lg rounded-xl hover:bg-[#466f65] transition duration-300">
                Learn More
              </Link>
              <Link href="/donate" className="px-6 py-3 bg-transparent border-2 border-[#578E7E] text-[#578E7E] font-medium font-outfit text-lg rounded-xl hover:bg-[#578E7E] hover:text-white transition duration-300">
                Donate Now
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={slideInRight}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Image src="/i-1.svg" alt="Hero" width={400} height={400} className="max-w-full h-auto" draggable={false} />
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={slideInLeft}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-8 bg-[#578E7E] rounded-xl p-6 sm:p-8"
        >
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image src="/founder.jpg" alt="Founder" width={350} height={350} className="rounded-xl w-full max-w-[350px] h-auto object-cover" draggable={false} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-white text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-semibold">Meet Our Founder</h2>
            <p className="text-sm sm:text-base lg:text-lg font-poppins">
              Our founder, P Srinivas, envisioned a sanctuary where orphans and the elderly could find solace.
            </p>
            <p className="text-sm sm:text-base lg:text-lg font-poppins">
              With dedication and a compassionate team, they’ve transformed lives for hundreds.
            </p>
            <p className="text-sm sm:text-base lg:text-lg font-poppins italic">
              “Together, we can create a world where everyone belongs.” – P Srinivas
            </p>
            <Link href="/contact" className="px-5 py-3 text-[black] bg-[#ccddd8]  font-medium font-outfit text-lg rounded-xl hover:bg-gray-100 transition duration-300 w-fit mx-auto lg:mx-0">
              Contact
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={fadeIn}
          viewport={{ once: true }}
          className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-8"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-semibold text-[#578E7E]">
              About Our Mission
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-poppins text-gray-700">
              We provide a safe haven for orphans and elderly individuals with care and love.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-poppins text-gray-700">
              Through education and support, we empower residents for fulfilling lives.
            </p>
            <Link href="/about" className="px-6 py-3 bg-[#578E7E] text-white font-medium font-outfit text-lg rounded-xl hover:bg-[#466f65] transition duration-300 w-fit mx-auto lg:mx-0">
              Learn More
            </Link>
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={slideInRight}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <Image src="/i-2.svg" alt="About Us" width={400} height={400} className="max-w-full h-auto rounded-xl" draggable={false} />
          </motion.div>
        </motion.div>
      </section>

      {/* Facilities Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={fadeIn}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-semibold text-[#578E7E] mb-10 text-center"
        >
          Our Facilities and Activities
        </motion.h2>
        <motion.div
          initial="initial"
          whileInView={stagger}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
        >
          {[
            { title: "Comfortable Living Spaces", src: "/facility-living.jpg", desc: "Clean, safe accommodations." },
            { title: "Recreational Areas", src: "/facility-recreation.jpg", desc: "Spaces for relaxation and fun." },
            { title: "Nutritious & Medical Care", src: "/facility-meals.jpg", desc: "Meals and health checkups." },
          ].map((facility, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={cardFade}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col bg-[#578E7E] text-white p-4 sm:p-5 rounded-xl shadow-md w-full max-w-sm mx-auto"
            >
              <Image src={facility.src} alt={facility.title} width={300} height={180} className="rounded-lg mb-4 object-cover w-full h-40 sm:h-48" draggable={false} />
              <h3 className="text-lg sm:text-xl font-semibold font-outfit mb-2">{facility.title}</h3>
              <p className="text-sm sm:text-base font-poppins flex-grow">{facility.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={fadeIn}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-semibold text-[#578E7E] mb-10 text-center"
        >
          Voices of Gratitude
        </motion.h2>
        <motion.div
          initial="initial"
          whileInView={stagger}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
        >
          {[
            { quote: "This home gave me a family.", name: "Sarah, Resident", src: "/resident-1.jpg" },
            { quote: "My donation changes lives.", name: "John, Donor", src: "/donor-1.jpg" },
            { quote: "I found love and care here.", name: "Anita, Resident", src: "/resident-2.jpg" },
          ].map((testimonial, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={cardFade}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col items-center bg-[#578E7E] text-white p-4 sm:p-5 rounded-xl shadow-md w-full max-w-sm mx-auto"
            >
              <Image src={testimonial.src} alt={`Testimonial ${index + 1}`} width={80} height={80} className="rounded-full mb-4 object-cover w-20 h-20" draggable={false} />
              <p className="italic text-sm sm:text-base font-poppins text-center mb-3 flex-grow">"{testimonial.quote}"</p>
              <h4 className="text-base sm:text-lg font-semibold font-outfit">{testimonial.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
