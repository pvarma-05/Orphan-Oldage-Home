"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className='flex flex-col justify-center items-center sm:h-[120vh] lg:mx-32 sm:mx-5'>
        <div className='flex items-center lg:justify-between sm:flex-col-reverse lg:flex-row w-full'>
          <div className='flex flex-col sm:w-full lg:w-1/2 justify-center sm:gap-5 lg:gap-10'>
            <h1 className='sm:text-3xl lg:text-5xl font-outfit font-semibold'>
              Caring For the Abandoned Building a Loving Home
            </h1>
            <p className='sm:text-lg lg:text-xl font-poppins text-gray-700'>Join us in creating a nurturing environment for orphans.</p>
            <div className='flex gap-5'>
              <Link className='p-5 bg-[#ccddd8] text-black  font-medium font-outfit sm:text-xl lg:text-2xl  rounded-xl hover:bg-gray-700 hover:text-white transition ' href={"/about"}>Learn More</Link>
              <Link className='p-5 bg-[#578E7E] text-white font-medium font-outfit sm:text-xl lg:text-2xl  rounded-xl hover:bg-[#466f65] transition ' href={"/donate"}>Donate Now</Link>
            </div>
          </div>
          <div className='flex sm:w-full lg:w-1/2'>
            <div className='flex justify-end w-full'>
              <Image width={600} height={600} alt='hero' src={"/i-1.svg"} draggable={false} />
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center sm:h-[150vh] lg:h-[120vh] lg:mx-32 sm:mx-0'>
        <div className='flex lg:justify-between sm:justify-center sm:flex-col lg:flex-row sm:items-center sm:gap-5 lg:gap-10 bg-[#578E7E] rounded-lg p-10'>
          <div className='flex sm:w-full lg:w-1/2'>
            <div className='flex justify-center w-full'>
              <Image
                width={450}
                height={450}
                alt='Founder'
                src={"/founder.jpg"}
                draggable={false}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className='flex flex-col sm:w-full lg:w-1/2 justify-center gap-8 text-white'>
            <h2 className='lg:text-4xl sm:text-xl font-outfit font-semibold'>Meet Our Founder</h2>
            <p className='lg:text-lg sm:text-base font-poppins'>
              Our founder, [Founder’s Name], envisioned a sanctuary where orphans and the elderly could find solace, care, and love.
              Inspired by personal experiences and a deep sense of empathy, they started this home to create a family for those without one.
            </p>
            <p className='lg:text-lg sm:text-base font-poppins'>
              With relentless dedication and a compassionate team, [Founder’s Name] has transformed lives, creating a brighter future
              for hundreds of residents. They believe that no one should feel abandoned or alone, and this home is a testament to that vision.
            </p>
            <p className='lg:text-lg sm:text-base font-poppins'>
              “Together, we can create a world where everyone belongs.” – [Founder’s Name]
            </p>
            <Link
              className='self-start mt-5 p-3 bg-[#ccddd8] text-black font-medium font-outfit text-xl rounded-lg hover:bg-gray-700 hover:text-white transition'
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center sm:h-[170vh] lg:h-[120vh] lg:mx-32 sm:mx-5'>
        <div className='flex lg:justify-between sm:justify-center sm:flex-col-reverse sm:items-center lg:flex-row'>
          <div className='flex flex-col sm:w-full lg:w-1/2 justify-center gap-10'>
            <h2 className='sm:text-4xl sm:text-center lg:text-left lg:text-5xl font-outfit font-semibold'>
              About Our Mission
            </h2>
            <p className='sm:text-lg lg:text-xl font-outfit text-gray-700'>
              We are committed to creating a safe haven for orphans and elderly individuals who have no one to turn to. Our mission is to provide care, love, and a sense of belonging for those in need.
            </p>
            <p className='sm:text-lg lg:text-xl font-outfit text-gray-700'>
              Through education, medical support, and engaging activities, we strive to empower our residents to live fulfilling lives. Together, we are building a brighter future, one family at a time.
            </p>
            <div className='flex gap-5'>
              <Link
                className='p-5 bg-[#578E7E] text-white font-medium font-outfit sm:text-lg lg:text-2xl rounded-xl hover:bg-[#466f65] transition'
                href={"/about"}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className='flex sm:w-full lg:w-1/2'>
            <div className='flex justify-end w-full'>
              <Image
                width={700}
                height={700}
                alt='About Us'
                src={"/i-2.svg"}
                draggable={false}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center h-auto lg:mx-32 sm:mx-5 gap-10 '>
        <h2 className='text-4xl font-outfit font-semibold mb-10 text-center'>Our Facilities and Activities</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          <div className='flex flex-col bg-[#578E7E] text-white p-6 rounded-lg shadow-lg'>
            <Image
              width={400}
              height={300}
              alt='Comfortable Living Spaces'
              src={"/facility-living.jpg"}
              className='rounded-lg mb-5 object-cover'
              draggable={false}
            />
            <h3 className='text-xl font-semibold mb-3 font-outfit'>Comfortable Living Spaces</h3>
            <p className='text-gray-200 font-outfit'>
              We provide clean, safe, and comfortable living accommodations designed to offer a homely environment for our residents.
            </p>
          </div>
          <div className='flex flex-col bg-[#578E7E] text-white p-6 rounded-lg shadow-lg'>
            <Image
              width={400}
              height={300}
              alt='Recreational Areas'
              src={"/facility-recreation.jpg"}
              className='rounded-lg mb-5 object-cover'
              draggable={false}
            />
            <h3 className='text-xl font-semibold mb-3 font-outfit'>Recreational Areas</h3>
            <p className='text-gray-200 font-outfit'>
              Our home features dedicated recreational spaces where residents can relax, play games, and enjoy social activities.
            </p>
          </div>
          <div className='flex flex-col bg-[#578E7E] text-white p-6 rounded-lg shadow-lg'>
            <Image
              width={400}
              height={300}
              alt='Nutritious Meals and Medical Care'
              src={"/facility-meals.jpg"}
              className='rounded-lg mb-5 object-cover'
              draggable={false}
            />
            <h3 className='text-xl font-semibold mb-3 font-outfit'>Nutritious & Medical Care</h3>
            <p className='text-gray-200 font-outfit'>
              We ensure the health and well-being of our residents with daily nutritious meals and regular medical checkups.
            </p>
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center h-auto lg:mx-32 sm:mx-5 gap-10 py-16'>
        <h2 className='text-4xl font-outfit font-semibold mb-10 text-center'>Voices of Gratitude</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          <div className='flex flex-col items-center bg-[#578E7E] text-white p-6 rounded-lg shadow-lg'>
            <Image
              width={120}
              height={120}
              alt='Testimonial 1'
              src={"/resident-1.jpg"}
              className='rounded-full mb-5 object-cover'
              draggable={false}
            />
            <p className='italic text-center mb-4 font-outfit'>
              "This home gave me the family I always longed for."
            </p>
            <h4 className='text-lg font-semibold font-outfit'>– Sarah, Resident</h4>
          </div>
          <div className='flex flex-col items-center bg-[#578E7E] text-white p-6 rounded-lg shadow-lg'>
            <Image
              width={120}
              height={120}
              alt='Testimonial 2'
              src={"/donor-1.jpg"}
              className='rounded-full mb-5 object-cover'
              draggable={false}
            />
            <p className='italic text-center mb-4 font-outfit'>
              "Knowing my donation changes lives is incredibly fulfilling."
            </p>
            <h4 className='text-lg font-semibold font-outfit'>– John, Donor</h4>
          </div>
          <div className='flex flex-col items-center bg-[#578E7E] text-white p-6 rounded-lg shadow-lg'>
            <Image
              width={120}
              height={120}
              alt='Testimonial 3'
              src={"/resident-2.jpg"}
              className='rounded-full mb-5 object-cover'
              draggable={false}
            />
            <p className='italic text-center mb-4 font-outfit'>
              "I have found love, care, and a sense of belonging here."
            </p>
            <h4 className='text-lg font-semibold font-outfit'>– Anita, Resident</h4>
          </div>
        </div>
      </section>


    </main>
  )
}
