"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutIntro = () => {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-stretch justify-between px-6 md:px-28 py-16 md:py-24 gap-16 md:gap-16 bg-white">
            {/* Left side - Images */}
            <motion.div
                className="relative w-full lg:w-1/2 aspect-square max-h-[520px]"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Image
                    src="/banners/2.jpg"
                    alt="image1"
                    fill
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                />
            </motion.div>

            {/* Right side - Text content */}
            <motion.div
                className="w-full lg:w-1/2 text-left"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <button className="bg-orange-100 text-orange-500 font-medium px-5 py-2 rounded-full mb-4">
                    About Us
                </button>

                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                    We Help People In Need
                </h2>

                {/* <div className="bg-gray-100 rounded-md p-4 border-b-4 border-orange-500 mb-4 py-6"> */}
                    <p className="text-gray-500 text-lg">
                        “I truly believe that when people come together
                        with purpose, real change is not only possible, it’s inevitable.<span className="hidden md:block text-orange-500">~ZORAWAR SINGH, FOUNDER</span> <br/><span className="md:hidden text-orange-500">~ZORAWAR SINGH, FOUNDER</span>
                    </p>
                    {/* <p className="mt-2 text-orange-500 font-semibold">Zorawar Singh, President/ Chairman</p> */}
                {/* </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6 md:my-0 md:mb-6 ">
                    <div className="bg-orange-50 rounded-lg px-6 py-4 flex flex-col items-center shadow-sm">
                        <span className="text-4xl font-extrabold text-orange-500 mb-2">10,000+</span>
                        <span className="text-gray-700 font-semibold text-center">Meals Provided to the Needy</span>
                    </div>
                    <div className="bg-orange-50 rounded-lg px-6 py-4 flex flex-col items-center shadow-sm">
                        <span className="text-4xl font-extrabold text-orange-500 mb-2">500+</span>
                        <span className="text-gray-700 font-semibold text-center">Girls Supported for Marriage</span>
                    </div>
                    <div className="bg-orange-50 rounded-lg px-6 py-4 flex flex-col items-center shadow-sm">
                        <span className="text-4xl font-extrabold text-orange-500 mb-2">2,000+</span>
                        <span className="text-gray-700 font-semibold text-center">Trees Planted for a Greener Future</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                    <Link href="/about">
                        <span className="bg-orange-500 text-white px-4 md:px-6 py-3 rounded-md flex items-center gap-2 transition">
                            Learn More<span className="text-lg ml-2">➔</span>
                        </span>
                    </Link>

                    <Link href="/contact">
                        <span className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 md:px-6 py-3 rounded-md flex items-center gap-2 transition">
                            Contact us<span className="text-lg ml-2">➔</span>
                        </span>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutIntro;