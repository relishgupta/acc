import AboutPage from '@/components/AboutPage'
import PageHeading from '@/components/PageHeading'
import TestimonialSection from '@/components/Testimonials'
import React from 'react'

export default function About () {
  return (
    <>
    <PageHeading title="About us" breadcrumbs={["About"]} />
    <AboutPage/>
    <TestimonialSection/>
    </>
  )
}
