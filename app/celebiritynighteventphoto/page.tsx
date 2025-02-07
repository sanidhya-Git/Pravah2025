'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { logo } from '@/public';
import { cultural_photos } from '@/public';

const Cards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#ffffec]">
      <div className="fixed left-0 top-0 z-10 flex h-screen w-full items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          width={2000}
          height={2000}
          className="aspect-square w-[70vw] max-w-[700px] object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 z-10" ref={containerRef}>
        {Object.entries(cultural_photos).map(([key, photo], index) => (
          <Card
            key={key}
            containerRef={containerRef}
            src={photo.src}
            alt={`Example image ${index + 1}`}
            rotate={`${(index % 2 === 0 ? 1 : -1) * (index + 3)}deg`}
            top={`${20 + index * 10}%`}
            left={`${25 + (index % 3) * 15}%`}
            className="w-36 md:w-56 lg:w-64 xl:w-72"
          />
        ))}
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
  const [zIndex, setZIndex] = useState(0);

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
      className={twMerge('drag-elements absolute w-full max-w-[200px] bg-neutral-200 p-1 pb-4', className)}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

export default Cards;
