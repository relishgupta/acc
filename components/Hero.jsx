'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const backgrounds = [
  {
    url: "linear-gradient(rgba(1, 39, 39, 0.8), rgba(1, 39, 39, 0.8)), url('/banners/1.jpg')",
    alt: "Helping Hand Banner"
  },
  {
    url: "linear-gradient(rgba(1, 39, 39, 0.8), rgba(1, 39, 39, 0.8)), url('/banners/5.jpg')",
    alt: "Community Support Banner"
  }
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  const handlePrev = () => setIndex((prev) => (prev === 0 ? backgrounds.length - 1 : prev - 1))
  const handleNext = () => setIndex((prev) => (prev === backgrounds.length - 1 ? 0 : prev + 1))

  return (
    <div className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 mt-16 md:mt-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: backgrounds[index].url,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
          aria-label={backgrounds[index].alt}
        />
      </AnimatePresence>
      {/* Carousel Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-orange-500 hover:text-white text-orange-500 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-orange-500 hover:text-white text-orange-500 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition"
        aria-label="Next Slide"
      >
        &#8594;
      </button>
      {/* Slide Numbering */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 z-20 flex items-center gap-2">
        <span className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold ${index === 0 ? 'bg-orange-500 text-white' : 'bg-white text-orange-500 border border-orange-500'}`}>1</span>
        <span className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold ${index === 1 ? 'bg-orange-500 text-white' : 'bg-white text-orange-500 border border-orange-500'}`}>2</span>
      </div>
      {/* Hero Content */}
      <motion.div
        key={index + '-content'}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 text-white max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Changing Lives, One Act of Kindness at a Time
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300">
          Your support empowers lives and builds brighter futures—join us in creating lasting change.
        </p>
        <a
          href="/donate"
          className="inline-block mt-6 bg-orange-500 hover:bg-[#021a1f] border-2 border-orange-500 text-white hover:text-orange-500 text-md font-semibold px-6 py-3 rounded-md"
        >
          Donate Now <span className="text-lg ml-2">➔</span>
        </a>
      </motion.div>
    </div>
  )
}