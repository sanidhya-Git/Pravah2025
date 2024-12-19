'use client';

import React from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion, useInView, resolveMotionValue } from 'framer-motion';
import { useRef } from 'react';
// import { RoundedButton } from '@/components/common';
import Link from 'next/link';
import { cultural_photos } from '@/public';

export const GalleryTwo = () => {
  const container = useRef(null);
  const showMoreLinkContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ['start start', 'end end'],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  const pictures = [
    {
      src: cultural_photos.fourteen,
      scale: scale1,
    },
    {
      src: cultural_photos.seventeen,
      scale: scale2,
    },
    {
      src: cultural_photos.thirteen,
      scale: scale3,
    },
    {
      src: cultural_photos.fifteen,
      scale: scale4,
    },
    {
      src: cultural_photos.nineteen,
      scale: scale5,
    },
    {
      src: cultural_photos.eighteen,
      scale: scale6,
    },
  ];

  return (
    <>
    <div ref={container} className="relative h-[300vh]">
      
      <div className="sticky top-0 h-[100vh] overflow-hidden">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center`}
            >
              <motion.div
                className={`relative ${
                  index === 1
                    ? 'left-[5vw] top-[-30vh] h-[30vh] w-[35vw]'
                    : index === 2
                      ? 'left-[-25vw] top-[-10vh] h-[40vh] w-[18vw]'
                      : index === 3
                        ? 'left-[25.5vw] top-[10vh] h-[40vh] w-[20vw]'
                        : index === 4
                          ? 'left-[5vw] top-[27.5vh] h-[25vh] w-[10vw]'
                          : index === 5
                            ? 'left-[-9vw] top-[30vh] h-[30vh] w-[15vw]'
                            : index === 6
                              ? 'left-[25vw] top-[22.5vh] h-[15vh] w-[15vw]'
                              : index === 7
                                ? 'left-[25vw] top-[22.5vh] h-[15vh] w-[15vw]'
                                : 'h-[25vh] w-[25vw]'
                }`}
              >
                <Image
                  src={src}
                  fill
                  alt="image"
                  // unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
    <div className="w-full h-[5px]"/>

    </>
  );
};
