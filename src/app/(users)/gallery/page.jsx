"use client";
import React, { useState } from "react";
import Image from "next/image";

const galleryData = {
  All: [
    { src: "/gallery/home/img1.jpg", category: "Home", alt: "Home 1" },
    { src: "/gallery/home/img2.jpg", category: "Home", alt: "Home 2" },
    { src: "/gallery/awards/img2.jpg", category: "Awards", alt: "Awards 2" },
    { src: "/gallery/awards/img1.jpg", category: "Awards", alt: "Awards 1" },
    { src: "/gallery/news/img1.jpg", category: "News", alt: "News 1" },
    { src: "/gallery/news/img2.jpg", category: "News", alt: "News 2" },
  ],
  Home: [
    { src: "/gallery/home/img1.jpg", category: "Home", alt: "Home 1" },
    { src: "/gallery/home/img2.jpg", category: "Home", alt: "Home 2" },
  ],
  Awards: [
    { src: "/gallery/awards/img1.jpg", category: "Awards", alt: "Awards 1" },
    { src: "/gallery/awards/img2.jpg", category: "Awards", alt: "Awards 2" },
  ],
  News: [
    { src: "/gallery/news/img1.jpg", category: "News", alt: "News 1" },
    { src: "/gallery/news/img2.jpg", category: "News", alt: "News 2" },
  ],
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null); // Index of the current image in the lightbox
  const images = galleryData[activeTab];

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction) => {
    if (lightboxIndex !== null) {
      const newIndex = (lightboxIndex + direction + images.length) % images.length;
      setLightboxIndex(newIndex);
    }
  };

  return (
    <main>
      <section className="flex flex-col items-center min-h-[100vh] gap-8 p-10">
        {/* Header */}
        <h1 className="text-4xl font-outfit font-semibold text-[#578E7E]">Gallery</h1>

        {/* Navigation Bar */}
        <div className="flex gap-2">
          {["All", "Home", "Awards", "News"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md font-poppins font-medium ${
                activeTab === tab ? "bg-[#578E7E] text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking on the image
            >
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-[#578E7E] rounded-full p-2"
                onClick={() => navigateLightbox(-1)}
              >
                ←
              </button>
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-[85vh]"
              />
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-[#578E7E] rounded-full p-2"
                onClick={() => navigateLightbox(1)}
              >
                →
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
