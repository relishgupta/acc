"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="bg-white py-10 md:py-20 px-6 md:px-28">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold md:text-center text-gray-900 mb-6 md:mb-16 leading-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Leadership
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Founder */}
        <motion.div
          className="text-center bg-white p-6 shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2 text-orange-500">President / Chairman</h3>
          <div className="relative aspect-square w-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
            <Image
              src="/Founder.jpg"
              alt="image2"
              fill
              className="object-cover"
            />
          </div>
          <p className="italic text-md text-gray-600">
            "Empathy, action, and vision — that’s how change begins."
          </p>
          <p className="mt-2 font-medium text-gray-900">— Zorawar Singh</p>
        </motion.div>

        {/* Vice President */}
        <motion.div
          className="text-center bg-white p-6 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2 text-orange-500">Vice President</h3>
          <div className="relative aspect-square w-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
            <Image
              src="/vp.jpg"
              alt="image2"
              fill
              className="object-cover"
            />
          </div>
          <p className="italic text-md text-gray-600">
            "Together, compassion and commitment can turn hope into reality."
          </p>
          <p className="mt-2 font-medium text-gray-900">— Jujhar Singh</p>
        </motion.div>
      </div>
    </section>
  );
}
