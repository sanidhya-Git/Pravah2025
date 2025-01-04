'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { logo } from '@/public';
import { cultural_photos } from '@/public';

const DJNightEventPhototCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative min-h-screen w-full bg-[#ffffec]">
      <div className="fixed left-0 top-0 z-10 flex h-screen w-full items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          width={2000}
          height={2000}
          className="aspect-square w-[700px] object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 z-10" ref={containerRef}>
        <Card
          containerRef={containerRef}
          src={cultural_photos.twenty.src}
          alt="Example image"
          rotate="6deg"
          top="20%"
          left="25%"
          className="w-36 md:w-56 lg:w-64 xl:w-72 2xl:w-80"
        />
        <Card
          containerRef={containerRef}
          src={cultural_photos.nineteen.src}
          alt="Example image"
          rotate="12deg"
          top="45%"
          left="60%"
          className="w-24 md:w-48 lg:w-56 xl:w-64 2xl:w-72"
        />
        <Card
          containerRef={containerRef}
          src={cultural_photos.eighteen.src}
          alt="Example image"
          rotate="-6deg"
          top="20%"
          left="40%"
          className="xl:w-112 2xl:w-128 w-52 md:w-80 lg:w-96"
        />
        <Card
          containerRef={containerRef}
          src={cultural_photos.seventeen.src}
          alt="Example image"
          rotate="8deg"
          top="50%"
          left="40%"
          className="2xl:w-112 w-48 md:w-72 lg:w-80 xl:w-96"
        />
        <Card
          containerRef={containerRef}
          src={cultural_photos.sixteen.src}
          alt="Example image"
          rotate="18deg"
          top="20%"
          left="65%"
          className="w-40 md:w-64 lg:w-72 xl:w-80 2xl:w-96"
        />
        <Card
          containerRef={containerRef}
          src={cultural_photos.fifteen.src}
          alt="Example image"
          rotate="-3deg"
          top="35%"
          left="55%"
          className="w-24 md:w-48 lg:w-56 xl:w-64 2xl:w-72"
        />
        {/* Add more Card components as needed */}
      </div>
    </div>
  );
};

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
}

const Card: React.FC<CardProps> = ({ alt, className, containerRef, left, rotate, src, top }) => {
  const [zIndex, setZIndex] = useState<number>(0); // Specify zIndex as number

  const updateZIndex = () => {
    const els = document.querySelectorAll('.drag-elements');

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(window.getComputedStyle(el).getPropertyValue('z-index'));

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge('drag-elements absolute bg-neutral-200 p-1 pb-4', className)}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

export default DJNightEventPhototCards;
