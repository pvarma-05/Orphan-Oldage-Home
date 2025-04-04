"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex min-h-[8vh] w-full bg-[#578E7E]"
    >
      <div className="flex justify-center items-center w-full px-4 sm:px-6 lg:px-32">
        <h1 className="text-white text-sm sm:text-base lg:text-lg font-outfit font-semibold text-center">
          Copyright © 2025. All rights reserved
        </h1>
      </div>
    </motion.footer>
  );
}
