'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function AboutPage() {
    return (
        <section className="bg-white py-16 md:pt-28 md:pb-10  px-6 md:px-28 overflow-hidden">
            <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <button className="bg-orange-100 text-orange-500 font-medium px-5 py-2 rounded-full mb-4">
                        About Us
                    </button>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        <span className="text-orange-500">Together </span>for a Better Tomorrow<br />
                    </h2>

                    <p className="text-gray-500 text-lg">
                        Founded in 2003, our organization has been dedicated to transforming lives through sustainable development, education, and community empowerment. With a focus on long-term impact, we work hand-in-hand with local communities to create meaningful change and a brighter future for all.
                    </p>

                    {/* STATS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                        <div className="bg-orange-50 rounded-lg px-6 py-4 flex flex-col items-center shadow-sm">
                            <span className="text-4xl font-extrabold text-orange-500 mb-2">
                                <CountUp end={10000} duration={2} separator="," />+
                            </span>
                            <span className="text-gray-700 font-semibold text-center">Meals Provided to the Needy</span>
                        </div>
                        <div className="bg-orange-50 rounded-lg px-6 py-4 flex flex-col items-center shadow-sm">
                            <span className="text-4xl font-extrabold text-orange-500 mb-2">
                                <CountUp end={500} duration={2} separator="," />+
                            </span>
                            <span className="text-gray-700 font-semibold text-center">Girls Supported for Marriage</span>
                        </div>
                        <div className="bg-orange-50 rounded-lg px-6 py-4 flex flex-col items-center shadow-sm">
                            <span className="text-4xl font-extrabold text-orange-500 mb-2">
                                <CountUp end={2000} duration={2} separator="," />+
                            </span>
                            <span className="text-gray-700 font-semibold text-center">Trees Planted for a Greener Future</span>
                        </div>
                    </div>

                </motion.div>

                {/* RIGHT IMAGE STACK */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[320px] md:h-[400px]"
                >
                    {/* Back Image */}
                    <div className="relative w-full md:w-[85%] aspect-[16/13]">
                        <Image
                            src="/banners/9.jpg"
                            alt="image1"
                            fill
                            className="object-cover shadow-lg "
                            sizes="(max-width: 768px) 100vw, 85vw"
                        />
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
