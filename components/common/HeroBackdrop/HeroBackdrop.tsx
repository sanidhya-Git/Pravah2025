'use client';

import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState } from 'react';

// Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assets
import { mountain_one, mountain_three, sky } from '@/public';
import { fonts } from '@/fonts';
import { ImageInfo } from '../ImageInfo';
import { useHandleImageInfo } from '@/global/stateHooks';

import logo from '@/public/logo.png'; // Import your logo here

export const HeroBackdrop: React.FC = () => {
  const { setShowImageInfo, setImageInfo } = useHandleImageInfo();
  const container = useRef<HTMLDivElement>(null);

  // imageRefs
  const sky_ref = useRef<HTMLImageElement>(null);
  const mountain_one_ref = useRef<HTMLImageElement>(null);
  const mountain_two_ref = useRef<HTMLImageElement>(null);
  const mountain_three_ref = useRef<HTMLImageElement>(null);
  const pravah_ref = useRef<HTMLDivElement>(null);

  // register scrollTrigger and create timeline
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: 'top top',
        end: 'bottom top',
      },
    });
    timeline
      .fromTo(mountain_one_ref.current, { y: 200 }, { y: -100 })
      .fromTo(pravah_ref.current, { y: 0 }, { y: -200 }, '0')
      .fromTo(mountain_two_ref.current, { y: 100, ease: 'power1.inOut' }, { y: -100 }, '0')
      .fromTo(mountain_three_ref.current, { y: 0, ease: 'power1.inOut' }, { y: -150 }, '0')
      .fromTo(sky_ref.current, { y: 0, ease: 'power1.inOut' }, { y: -100 }, '0');
  }, []);

  const [currentVideo, setCurrentVideo] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Videos
  const videos = ['https://res.cloudinary.com/dyggf8kxd/video/upload/v1733492157/pravah1_jnumef.mp4']; // Replace with your Cloudinary video URLs

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoChange = () => {
    setCurrentVideo((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <>
      <div
        ref={container}
        onClick={() => {
          setShowVideo(true);
          setIsPlaying(true);
        }}
        className="relative z-[30] flex h-screen w-screen items-center justify-center overflow-hidden"
      >
        {/* Logo */}
        <div className="absolute left-4 top-1 z-50 sm:left-2 sm:top-2 md:left-4 md:top-4">
          <Image src={logo} alt="Logo" width={120} height={100} className="h-auto max-h-full w-auto max-w-full" />
        </div>

        {/* Sky */}
        <Image
          src={sky}
          ref={sky_ref}
          alt="sky"
          width={2000}
          height={2000}
          unoptimized
          className="absolute left-0 top-0 w-full object-cover"
        />

        <div
          className="absolute bottom-8 right-[10%] z-50"
          onClick={() => {
            setShowImageInfo(true);
            setImageInfo({
              imageTitle: 'hero backdrop',
              imageDescription: 'hello',
            });
          }}
        >
          <ImageInfo />
        </div>

        <div
          ref={pravah_ref}
          className="w [500px] absolute left-[50%] top-[100px] -translate-x-1/2 text-center leading-none text-[#476b7f]"
        >
          <p className={`text-center ${fonts.funkyVibes.className} text-[120px] sm:text-[80px] md:text-[100px]`}>
            Pravah
          </p>
          <p className={`text-center ${fonts.funkyVibes.className} -mt-3 text-[60px] sm:text-[40px] md:text-[50px]`}>
            2025
          </p>
        </div>

        <Image
          src={mountain_one}
          ref={mountain_one_ref}
          alt="mountain_one"
          width={2000}
          height={2000}
          unoptimized
          className="absolute left-0 top-[80px] z-30"
        />
        <Image
          src={mountain_three}
          ref={mountain_three_ref}
          alt="mountain_three"
          width={2000}
          height={2000}
          unoptimized
          className="absolute right-0 top-[362px] w-full"
        />
      </div>

      <div className="absolute left-0 top-0 z-20 h-screen w-full bg-white" />

      <div className="absolute left-0 top-0 h-full w-full" style={{ zIndex: showVideo ? 100 : -100 }}>
        <div
          className="absolute left-1/2 top-5 flex -translate-x-1/2 items-center gap-3"
          style={{ zIndex: showVideo ? 100 : -100 }}
        ></div>

        <video
          id="background-video"
          ref={videoRef}
          className="min-h-screen w-full object-cover"
          loop
          autoPlay={isPlaying}
          onClick={handleVideoChange}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className="bg-black-500 absolute right-4 top-4 z-50 rounded p-2 text-white"
          onClick={() => {
            setShowVideo(false);
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};
