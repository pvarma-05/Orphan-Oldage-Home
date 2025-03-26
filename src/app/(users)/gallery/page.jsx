"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryData = {
  All: [
    { src: "/gallery/home/img1.jpg", category: "Home", alt: "Home 1" },
    { src: "/gallery/home/img2.jpg", category: "Home", alt: "Home 2" },
    { src: "/gallery/home/img3.jpg", category: "Home", alt: "Home 3" },
    { src: "/gallery/home/img4.jpg", category: "Home", alt: "Home 4" },
    { src: "/gallery/home/img5.jpg", category: "Home", alt: "Home 5" },
    { src: "/gallery/home/img6.jpg", category: "Home", alt: "Home 6" },
    { src: "/gallery/home/img7.jpg", category: "Home", alt: "Home 7" },
    { src: "/gallery/home/img8.jpg", category: "Home", alt: "Home 8" },
    { src: "/gallery/home/img9.jpg", category: "Home", alt: "Home 9" },
    { src: "/gallery/home/img10.jpg", category: "Home", alt: "Home 10" },
    { src: "/gallery/home/img11.jpg", category: "Home", alt: "Home 11" },
    { src: "/gallery/home/img12.jpg", category: "Home", alt: "Home 12" },
    { src: "/gallery/home/img13.jpg", category: "Home", alt: "Home 13" },
    { src: "/gallery/home/img14.jpg", category: "Home", alt: "Home 14" },
    { src: "/gallery/home/img15.jpg", category: "Home", alt: "Home 15" },
    { src: "/gallery/home/img16.jpg", category: "Home", alt: "Home 16" },
    { src: "/gallery/home/img17.jpg", category: "Home", alt: "Home 17" },
    { src: "/gallery/home/img18.jpg", category: "Home", alt: "Home 18" },
    { src: "/gallery/home/img19.jpg", category: "Home", alt: "Home 19" },
    { src: "/gallery/home/img20.jpg", category: "Home", alt: "Home 20" },
    { src: "/gallery/home/img21.jpg", category: "Home", alt: "Home 21" },
    { src: "/gallery/home/img22.jpg", category: "Home", alt: "Home 22" },
    { src: "/gallery/awards/img1.jpg", category: "Awards", alt: "Awards 1" },
    { src: "/gallery/awards/img2.jpg", category: "Awards", alt: "Awards 2" },
    { src: "/gallery/awards/img3.jpg", category: "Awards", alt: "Awards 3" },
    { src: "/gallery/awards/img4.jpg", category: "Awards", alt: "Awards 4" },
    { src: "/gallery/awards/img5.jpg", category: "Awards", alt: "Awards 5" },
    { src: "/gallery/awards/img6.jpg", category: "Awards", alt: "Awards 6" },
    { src: "/gallery/awards/img7.jpg", category: "Awards", alt: "Awards 7" },
    { src: "/gallery/awards/img8.jpg", category: "Awards", alt: "Awards 8" },
    { src: "/gallery/awards/img9.jpg", category: "Awards", alt: "Awards 9" },
    { src: "/gallery/awards/img10.jpg", category: "Awards", alt: "Awards 10" },
    { src: "/gallery/awards/img11.jpg", category: "Awards", alt: "Awards 11" },
    { src: "/gallery/awards/img12.jpg", category: "Awards", alt: "Awards 12" },
    { src: "/gallery/awards/img13.jpg", category: "Awards", alt: "Awards 13" },
    { src: "/gallery/news/img1.jpg", category: "News", alt: "News 1" },
    { src: "/gallery/news/img2.jpg", category: "News", alt: "News 2" },
    { src: "/gallery/news/img3.png", category: "News", alt: "News 3" },
    { src: "/gallery/news/img4.jpg", category: "News", alt: "News 4" },
    { src: "/gallery/news/img5.jpg", category: "News", alt: "News 5" },
    { src: "/gallery/news/img6.jpg", category: "News", alt: "News 6" },
    { src: "/gallery/news/img7.jpg", category: "News", alt: "News 7" },
    { src: "/gallery/news/img8.jpg", category: "News", alt: "News 8" },
    { src: "/gallery/news/img9.jpg", category: "News", alt: "News 9" },
    { src: "/gallery/news/img10.jpg", category: "News", alt: "News 10" },
    { src: "/gallery/news/img11.jpg", category: "News", alt: "News 11" },
    { src: "/gallery/news/img12.jpg", category: "News", alt: "News 12" },
    { src: "/gallery/news/img13.jpg", category: "News", alt: "News 13" },
    { src: "/gallery/news/img14.jpg", category: "News", alt: "News 14" },
  ],
  Home: [
    { src: "/gallery/home/img1.jpg", category: "Home", alt: "Home 1" },
    { src: "/gallery/home/img2.jpg", category: "Home", alt: "Home 2" },
    { src: "/gallery/home/img3.jpg", category: "Home", alt: "Home 3" },
    { src: "/gallery/home/img4.jpg", category: "Home", alt: "Home 4" },
    { src: "/gallery/home/img5.jpg", category: "Home", alt: "Home 5" },
    { src: "/gallery/home/img6.jpg", category: "Home", alt: "Home 6" },
    { src: "/gallery/home/img7.jpg", category: "Home", alt: "Home 7" },
    { src: "/gallery/home/img8.jpg", category: "Home", alt: "Home 8" },
    { src: "/gallery/home/img9.jpg", category: "Home", alt: "Home 9" },
    { src: "/gallery/home/img10.jpg", category: "Home", alt: "Home 10" },
    { src: "/gallery/home/img11.jpg", category: "Home", alt: "Home 11" },
    { src: "/gallery/home/img12.jpg", category: "Home", alt: "Home 12" },
    { src: "/gallery/home/img13.jpg", category: "Home", alt: "Home 13" },
    { src: "/gallery/home/img14.jpg", category: "Home", alt: "Home 14" },
    { src: "/gallery/home/img15.jpg", category: "Home", alt: "Home 15" },
    { src: "/gallery/home/img16.jpg", category: "Home", alt: "Home 16" },
    { src: "/gallery/home/img17.jpg", category: "Home", alt: "Home 17" },
    { src: "/gallery/home/img18.jpg", category: "Home", alt: "Home 18" },
    { src: "/gallery/home/img19.jpg", category: "Home", alt: "Home 19" },
    { src: "/gallery/home/img20.jpg", category: "Home", alt: "Home 20" },
    { src: "/gallery/home/img21.jpg", category: "Home", alt: "Home 21" },
    { src: "/gallery/home/img22.jpg", category: "Home", alt: "Home 22" },
  ],
  Awards: [
    { src: "/gallery/awards/img1.jpg", category: "Awards", alt: "Awards 1" },
    { src: "/gallery/awards/img2.jpg", category: "Awards", alt: "Awards 2" },
    { src: "/gallery/awards/img3.jpg", category: "Awards", alt: "Awards 3" },
    { src: "/gallery/awards/img4.jpg", category: "Awards", alt: "Awards 4" },
    { src: "/gallery/awards/img5.jpg", category: "Awards", alt: "Awards 5" },
    { src: "/gallery/awards/img6.jpg", category: "Awards", alt: "Awards 6" },
    { src: "/gallery/awards/img7.jpg", category: "Awards", alt: "Awards 7" },
    { src: "/gallery/awards/img8.jpg", category: "Awards", alt: "Awards 8" },
    { src: "/gallery/awards/img9.jpg", category: "Awards", alt: "Awards 9" },
    { src: "/gallery/awards/img10.jpg", category: "Awards", alt: "Awards 10" },
    { src: "/gallery/awards/img11.jpg", category: "Awards", alt: "Awards 11" },
    { src: "/gallery/awards/img12.jpg", category: "Awards", alt: "Awards 12" },
    { src: "/gallery/awards/img13.jpg", category: "Awards", alt: "Awards 13" },
  ],
  News: [
    { src: "/gallery/news/img1.jpg", category: "News", alt: "News 1" },
    { src: "/gallery/news/img2.jpg", category: "News", alt: "News 2" },
    { src: "/gallery/news/img3.png", category: "News", alt: "News 3" },
    { src: "/gallery/news/img4.jpg", category: "News", alt: "News 4" },
    { src: "/gallery/news/img5.jpg", category: "News", alt: "News 5" },
    { src: "/gallery/news/img6.jpg", category: "News", alt: "News 6" },
    { src: "/gallery/news/img7.jpg", category: "News", alt: "News 7" },
    { src: "/gallery/news/img8.jpg", category: "News", alt: "News 8" },
    { src: "/gallery/news/img9.jpg", category: "News", alt: "News 9" },
    { src: "/gallery/news/img10.jpg", category: "News", alt: "News 10" },
    { src: "/gallery/news/img11.jpg", category: "News", alt: "News 11" },
    { src: "/gallery/news/img12.jpg", category: "News", alt: "News 12" },
    { src: "/gallery/news/img13.jpg", category: "News", alt: "News 13" },
    { src: "/gallery/news/img14.jpg", category: "News", alt: "News 14" },
  ],
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const images = galleryData[activeTab];

  const fadeIn = { opacity: 1, transition: { duration: 0.8 } };
  const stagger = { transition: { staggerChildren: 0.1 } };
  const imageFade = { opacity: 1, y: 0, transition: { duration: 0.6 } };
  const hoverScale = { whileHover: { scale: 1.05 }, transition: { duration: 0.3 } };

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
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={fadeIn}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-semibold text-[#578E7E] mb-8"
        >
          Gallery
        </motion.h1>
        <motion.div
          initial="initial"
          whileInView={stagger}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {["All", "Home", "Awards", "News"].map((tab) => (
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              key={tab}
              className={`px-4 py-2 rounded-xl font-poppins font-medium text-sm sm:text-base ${activeTab === tab
                ? "bg-[#578E7E] text-white"
                : "bg-white text-[#578E7E] hover:bg-[#578E7E] hover:text-white"
                } transition duration-300 shadow-md`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          initial="initial"
          whileInView={stagger}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
        >
          {images.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={imageFade}
              viewport={{ once: true }}
              {...hoverScale}
              key={index}
              className="overflow-hidden rounded-xl shadow-md cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                className="object-cover w-full h-64 transition-transform duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
          </motion.div>
        )}
      </section>
    </main>
  );
}
