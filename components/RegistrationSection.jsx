"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function RegistrationSection() {
  return (
    <section className="bg-white py-10 md:py-16 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold leading-tight md:text-center text-gray-900 mb-6 md:mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        NGO Registration Certificate
      </motion.h2>

      <motion.div
        className="relative max-w-xl mx-auto aspect-[4/6] overflow-hidden shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src="/docs/doc1.jpg"
          alt="image1"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
