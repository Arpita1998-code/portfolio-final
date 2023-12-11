import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Navbar from '../components/Navbar';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading='My Work' message='This is somse of my recent traveling the world.'/>
      <Portfolio/>
    </div>
  )
}

export default page;
