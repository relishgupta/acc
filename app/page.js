"use client"

import Hero from '@/components/Hero'
import TestimonialSection from '@/components/Testimonials'
import AboutIntro from '@/components/AboutIntro'
// import ParallaxSection from '@/components/Parallax'
import WhatWeDoSection from '@/components/WhatWeDo'
import HomeCauses from '@/components/HomeCauses'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro/>
      <HomeCauses/>
      <WhatWeDoSection/>
      {/* <ParallaxSection/> */}
      <TestimonialSection/>
    </>
  )
}
