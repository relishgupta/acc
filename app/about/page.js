import AboutPage from '@/components/AboutPage'
import FounderSection from '@/components/FounderSection'
import PageHeading from '@/components/PageHeading'
import RegistrationSection from '@/components/RegistrationSection'
import TestimonialSection from '@/components/Testimonials'
import React from 'react'

export default function About () {
  return (
    <>
    <PageHeading title="About us" breadcrumbs={["About"]} />
    <AboutPage/>
    <FounderSection/>
    <RegistrationSection/>
    <TestimonialSection/>
    </>
  )
}
