'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        name: 'Amarjeet Sharma',
        role: 'Social Worker',
        review: 'The plantation drive organized by Anmol Cultural Club was remarkable. It brought awareness and greenery to our area.',
    },
    {
        name: 'Kamlesh Kumari',
        role: 'Housewife',
        review: 'This NGO helped poor family girls by providing ration and also supported them during marriage. Truly grateful.',
    },
    {
        name: 'Gurnam Singh',
        role: 'Retired Captain',
        review: 'They stood beside war victims, offering food and shelter when it was needed the most. Salute to their service.',
    },
    {
        name: 'Seema Kumari',
        role: 'Housewife',
        review: 'Anmol Cultural Club empowered local women through education and training. I feel more confident and independent.',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2 },
    }),
};

const TestimonialSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white py-12 md:py-24 px-6 md:px-0">
            <div className="max-w-6xl mx-auto md:text-center mb-12">
                <button className="bg-orange-100 text-orange-500 font-medium px-5 py-2 rounded-full mb-6">
                    Testimonials
                </button>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">What People Say About Us</h2>
                <p className="text-gray-500 text-lg leading-relaxed">Voices from the community we serve</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-8xl mx-auto md:px-28">
                {testimonials.map((t, i) => {
                    const isActive = i === activeIndex;
                    return (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            onMouseEnter={() => setActiveIndex(i)}
                            className={`p-6 shadow-md transition-colors duration-300 cursor-pointer 
                ${isActive ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'}`}
                        >
                            <FaQuoteLeft
                                className={`text-3xl mb-4 transition-colors duration-300 
                  ${isActive ? 'text-white' : 'text-orange-500'}`}
                            />
                            <p className="text-lg mb-4">{t.review}</p>
                            <p className="font-semibold">{t.name}</p>
                            <p className="text-sm">{t.role}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default TestimonialSection;
