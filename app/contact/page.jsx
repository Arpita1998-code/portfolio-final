import React from 'react'
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading='Contact' message='Submit the form below for more work and quotes.'/>
      <Contact/>
    </div>
  )
}

export default page;
