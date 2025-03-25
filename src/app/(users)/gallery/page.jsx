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
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const images = galleryData[activeTab];

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const navigateLightbox = (direction) => {
    if (lightboxIndex !== null) {
      const newIndex = (lightboxIndex + direction + images.length) % images.length;
      setLightboxIndex(newIndex);
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F6E6] pt-24">
      <section className="flex flex-col items-center min-h-[70vh] px-4 sm:px-6 lg:px-32 py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-semibold text-[#578E7E] mb-8">Gallery</h1>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["All", "Home", "Awards", "News"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-xl font-poppins font-medium text-sm sm:text-base ${
                activeTab === tab
                  ? "bg-[#578E7E] text-white"
                  : "bg-white text-[#578E7E] hover:bg-[#578E7E] hover:text-white"
              } transition duration-300 shadow-md`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 text-white bg-[#578E7E] rounded-full p-2 sm:p-3"
                onClick={() => navigateLightbox(-1)}
              >
                ←
              </button>
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                width={800}
                height={600}
                className="object-contain max-w-full max-h-[85vh]"
              />
              <button
                className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 text-white bg-[#578E7E] rounded-full p-2 sm:p-3"
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
