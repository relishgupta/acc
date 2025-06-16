'use client';

import { motion } from 'framer-motion';
import { GiFireZone, GiMeal, GiBlood } from 'react-icons/gi';
import Link from 'next/link';

const causes = [
  {
    title: 'Forest Fire Response',
    description:
      'Wildfires threaten both wildlife and human lives. We actively engage in firefighting operations and educate local communities on fire prevention strategies.',
    icon: <GiFireZone size={50} className="text-orange-500 mb-4" />,
  },
  {
    title: 'Feeding the Forgotten',
    description:
      'From daily wage earners to border-area victims of conflict and disaster, we serve hot meals and distribute food kits to those most in need — because no one should sleep hungry.',
    icon: <GiMeal size={50} className="text-orange-500 mb-4" />,
  },
  {
    title: 'Blood Donation Camps',
    description:
      'We organize blood donation drives to support hospitals and emergency cases. A single donation can save multiple lives — join us in being the lifeline someone needs.',
    icon: <GiBlood size={50} className="text-orange-500 mb-4" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const WhatWeDoSection = () => {
  return (
    <section className="py-20 md:pt-20 md:pb-0 bg-white px-6 md:px-4 ">
      <div className="md:text-center mb-12">
        <motion.span
          className="bg-orange-100 text-orange-500 font-medium px-5 py-3 rounded-full "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.span>
        
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mt-10 text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Learn More What We Do And Get Involved
        </motion.h2>
      </div>

      <div className="grid gap-10 md:gap-16 md:grid-cols-2 lg:grid-cols-3 max-w-8xl md:px-24 mx-auto ">
        {causes.map((cause, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white px-8 py-10 md:py-16 shadow-md text-center transition hover:shadow-xl "
          >
            {cause.icon}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{cause.title}</h3>
            <p className="text-gray-600 mb-4 text-md">{cause.description}</p>
            <Link href="/causes">
              <button className="border-2 font-semibold cursor-pointer border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition text-sm flex items-center justify-center gap-2 mx-auto">
                Learn More
                <span className="text-lg">➔</span>
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
