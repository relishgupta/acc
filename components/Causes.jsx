"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function Causes({ title, description, donationText, images }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="min-h-screen px-6 md:px-20 py-10 bg-white flex flex-col items-center justify-center text-black">
            <div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight md:text-center">{title}</h2>
            <p className="text-gray-600 text-lg max-w-4xl mb-6 md:text-center">{description}</p>
            <p className="text-md font-semibold mb-4 text-orange-600 md:text-center">{donationText}</p>
            <Link
                href="/donate"
                className="bg-orange-500 text-white px-6 py-3 rounded-md md:text-center block w-fit md:mx-auto"
                >
                Donate Now
            </Link>
                </div>
            {/* Desktop Layout */}
            {!isMobile && (
                <div className="mt-12 flex gap-4 justify-center items-center">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative transition-all duration-500 hover:scale-105 hover:z-10 scale-95 aspect-[3/4] flex-1 min-w-[250px] max-w-xs overflow-hidden shadow-xl rounded-lg"
                        >
                            <Image
                                src={src}
                                alt={`cause-${idx}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}
            {/* Mobile Carousel */}
            {isMobile && (
                <div className="mt-10 w-full max-w-md">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={12}
                        slidesPerView={1.5}
                        navigation
                        centeredSlides
                        loop
                    >
                        {images.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative aspect-[3/5] w-full rounded-lg overflow-hidden shadow-xl">
                                    <Image
                                        src={src}
                                        alt={`cause-${idx}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </section>
    );
}
