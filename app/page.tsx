'use client';

import React from 'react';

// Components
import { Hero } from '@/components/feature';
import { GotoMap } from '@/components/common';

const Home = () => {
  return (
    <>
      {/* <div className="w-full h-screen bg-pink-500"/> */}
      <GotoMap />
      <Hero />
    </>
  );
};

export default Home;
