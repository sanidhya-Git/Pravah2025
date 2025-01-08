'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { fonts } from '@/fonts';
import { cultural_photos } from '@/public';
import { HeroBackdrop, ImageInfo } from '@/components/common';
import { motion } from 'framer-motion';
import { useHandleImageInfo } from '@/global/stateHooks';
import Card from '@/components/common/Card/Card';
import { GalleryTwo } from '@/components/feature/gallery/page';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const celebrityImages = [
  '/celebrityimage/1.webp',
  '/celebrityimage/2.webp',
  '/celebrityimage/3.webp',
  '/celebrityimage/4.webp',
  '/celebrityimage/5.png',
  '/celebrityimage/6.png',
  '/celebrityimage/7.jpg',
  '/celebrityimage/8.jpg',
  '/celebrityimage/9.png',
  '/celebrityimage/10.jpg',
];

const CountdownBoxes = () => {
  const targets = useMemo(() => [100, 200, 300, 400], []);
  const [counts, setCounts] = useState(Array(targets.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          if (count < targets[index]) {
            return Math.min(count + Math.ceil(targets[index] / 10), targets[index]);
          }
          return count;
        }),
      );
    }, 100);

    return () => clearInterval(interval);
  }, [targets]);

  return (
    <div className="my-16 flex flex-wrap justify-around">
      {counts.map((count, index) => (
        <motion.div
          key={index}
          className="k m-2 w-full rounded-lg bg-black p-6 text-white shadow-lg sm:w-1/2 md:w-1/4"
          initial={{ opacity: 0, scale: 0.89 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            {count}
          </motion.h3>
          <p className="text-lg">registrations</p>
        </motion.div>
      ))}
    </div>
  );
};

const CelebritySection: React.FC = () => {
  return (
    <section className="my-0 text-center">
      <h2 className={`text-5xl font-bold ${fonts.funkyVibes.className} mb-11`}>Prior-Celebrities</h2>
      <div className="flex w-full items-center justify-center px-4 md:px-8 lg:px-16">
        <Swiper
          slidesPerView={1} // Default for mobile
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2, // For small tablets
            },
            768: {
              slidesPerView: 3, // For larger tablets
            },
            1024: {
              slidesPerView: 4, // For desktops
            },
          }}
        >
          {celebrityImages.map((celebrityDetails, index) => (
            <SwiperSlide key={index} className="pb-8 md:pb-10 lg:pb-12">
              <div className="flex w-full justify-center">
                <Image
                  src={celebrityDetails}
                  alt={`Celebrity ${index + 1}`} // More descriptive alt text
                  width={250} // Adjusted for responsive design
                  height={250} // Adjusted for responsive design
                  className="aspect-square w-full max-w-[250px] rounded-full object-cover object-top"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export const Hero: React.FC = () => {
  const { setImageInfo, setShowImageInfo } = useHandleImageInfo();

  return (
    <>
      <div>
        <HeroBackdrop />
        <div className="relative z-40 w-full bg-[#ffffec] px-2 pt-[50px] md:px-2 lg:px-16 xl:px-[100px]">
          <section className="text-center leading-none">
            <p className={`text-lg md:text-xl lg:text-2xl ${fonts.funkyVibes.className}`}>Welcome to</p>
            <p className={`-mt-2 text-3xl md:text-4xl lg:text-[48px] ${fonts.funkyVibes.className}`}>North India</p>
          </section>

          <section className="flex justify-center md:justify-evenly">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-fit"
            >
              <Image
                src={cultural_photos.four}
                unoptimized
                alt="cultural_photo"
                width={800}
                height={800}
                className="mt-3 w-[300px] md:w-[300px] lg:w-[300px]"
              />
              <div
                className="absolute bottom-[100px] right-0 z-50"
                onClick={() => {
                  setShowImageInfo(true);
                  setImageInfo({
                    imageTitle: 'Losar Festival',
                    imageDescription:
                      'This vibrant illustration showcases the cultural significance of the festival. The three central figures represent protective deities, adorned in colorful costumes and masks, symbolizing the festive spirit. The mountainous landscape reflects the natural environment of Tibet, while prayer flags fluttering in the background convey blessings and good fortune. Losar is a time for family gatherings, feasts, and prayers, celebrating renewal and hope for a prosperous year ahead.',
                  });
                }}
              >
                <ImageInfo />
              </div>
            </motion.div>
          </section>
          <div className="my-3 flex flex-col items-start justify-between md:flex-row">
            <div className="flex w-full flex-col md:w-1/2 md:pr-4">
              {' '}
              {/* Add padding to the right for spacing */}
              <motion.div
                className={`curved-border text-center`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className={`text-4xl font-bold ${fonts.funkyVibes.className}`}>Theme Reveal</h2>
                <br />
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    width="80%"
                    height="301"
                    src="https://www.youtube.com/embed/HVL4Fgel8S4?si=Cw06vipSycFKiymv"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <br />
              </motion.div>
            </div>

            <div className="flex w-full flex-col md:w-1/2 md:pl-4">
              {' '}
              {/* Add padding to the left for spacing */}
              <motion.div
                className={`curved-border text-center`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className={`text-4xl font-bold ${fonts.funkyVibes.className}`}>Logo Reveal</h2>
                <br />
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    width="80%"
                    height="301"
                    src="https://www.youtube.com/embed/DyuUx1obJ_M?si=vErZx_7EbwskjJVo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <br />
              </motion.div>
            </div>
          </div>
          <section className="text-center leading-none">
            <p className={`-mt-2 text-3xl md:text-4xl lg:text-[48px] ${fonts.funkyVibes.className}`}>west India</p>
          </section>

          <section className="flex justify-center md:justify-evenly">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-fit"
            >
              <Image
                src={cultural_photos.one}
                unoptimized
                alt="cultural_photo"
                width={200}
                height={200}
                className="mt-3 w-[300px] md:w-[300px] lg:w-[300px]"
              />
              <div
                className="absolute bottom-[100px] right-0 z-50"
                onClick={() => {
                  setShowImageInfo(true);
                  setImageInfo({
                    imageTitle: 'खम्मा खणी',
                    imageDescription:
                      'The image you sent represents the phrase "खम्मा खणी" in Hindi. This is a common greeting in the state of Rajasthan, India, and is similar to saying "Excuse me" or "Pardon me." It is a polite way to get someone’s attention or to apologize for any inconvenience.',
                  });
                }}
              >
                <ImageInfo />
              </div>
            </motion.div>
          </section>

          <section className="my-16 text-center">
            <motion.h2
              className={`text-3xl font-bold ${fonts.funkyVibes.className} mb-8`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              PRAVAH 24 HIGHLIGHT
            </motion.h2>
            <CountdownBoxes />
          </section>

          <section className="text-center leading-none">
            <p className={`-mt-2 text-3xl md:text-4xl lg:text-[48px] ${fonts.funkyVibes.className}`}>central India</p>
          </section>

          <section className="flex justify-center md:justify-evenly">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-fit"
            >
              <Image
                src={cultural_photos.two}
                unoptimized
                alt="cultural_photo"
                width={200}
                height={200}
                className="mt-3 w-[300px] md:w-[300px] lg:w-[300px]"
              />
              <div
                className="absolute bottom-[100px] right-0 z-50"
                onClick={() => {
                  setShowImageInfo(true);
                  setImageInfo({
                    imageTitle: 'Ayodhya',
                    imageDescription:
                      'Ayodhya, located in the Indian state of Uttar Pradesh, is one of the most sacred cities in Hinduism. Known as the birthplace of Lord Rama, the seventh incarnation of Lord Vishnu, it holds immense spiritual and cultural significance. Ayodhya is prominently mentioned in the ancient Indian epic, the Ramayana, where it is described as a prosperous and holy kingdom ruled by King Dasharatha. The city is renowned for the Ram Mandir, a temple dedicated to Lord Rama, symbolizing faith, devotion, and cultural heritage. Ayodhya’s rich history, ancient temples, and connection to Sanatan Dharma make it a revered pilgrimage destination for millions of devotees worldwide.',
                  });
                }}
              >
                <ImageInfo />
              </div>
            </motion.div>
          </section>

          <motion.div
            className="my-2 mt-5 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className={`text-center ${fonts.funkyVibes.className} text-3xl md:text-4xl lg:text-5xl`}>Glimpses</p>
            <GalleryTwo />
          </motion.div>

          <section className="text-center leading-none">
            <p className={`-mt-2 text-3xl md:text-4xl lg:text-[48px] ${fonts.funkyVibes.className}`}>East India</p>
          </section>

          <section className="flex justify-center md:justify-evenly">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-fit"
            >
              <Image
                src={cultural_photos.three}
                unoptimized
                alt="cultural_photo"
                width={200}
                height={200}
                className="mt-3 w-[300px] md:w-[300px] lg:w-[300px]"
              />
              <div
                className="absolute bottom-[100px] right-0 z-50"
                onClick={() => {
                  setShowImageInfo(true);
                  setImageInfo({
                    imageTitle: 'Buddhist Temple',
                    imageDescription:
                      'The structure in the image resembles a Pagoda or Buddhist Temple, commonly seen in East Asian countries like China, Japan, and Korea. These temples are integral to Buddhist and Taoist traditions and are often used for worship, meditation, and housing sacred relics. The distinct architectural features, such as the curved, tiered roofs, elevated platforms, and vibrant colors, are characteristic of East Asian religious structures. In Japan, such buildings may be referred to as Shinto Shrines or Buddhist Temples, while in China, they are often called Pagodas. The design emphasizes harmony, spirituality, and connection to nature, central to Eastern culture.',
                  });
                }}
              >
                <ImageInfo />
              </div>
            </motion.div>
          </section>

          <motion.div
            className="my-2 mt-5 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className={`text-center ${fonts.funkyVibes.className} text-3xl md:text-4xl lg:text-5xl`}>Events</p>
          </motion.div>

          <div>
            <Card
              i={1}
              title="Thirak"
              description="The content of Thirak."
              src={cultural_photos.seventeen}
              url="thirakeventphoto"
              color="#FFF5EB"
              range={[0, 10]}
              targetScale={1}
            />
            <Card
              i={1}
              title="Sur"
              description="The content of SUR."
              src={cultural_photos.sixteen}
              url="sureventphoto"
              color="#FFEBD6"
              range={[0, 10]}
              targetScale={1}
            />
            <Card
              i={1}
              title="Rawaz"
              description="The content of Rawaz."
              src={cultural_photos.fifteen}
              url="rawazeventphoto"
              color="#FFE0C2"
              range={[0, 10]}
              targetScale={1}
            />
            <Card
              i={1}
              title="Celebrity Night"
              description="The content of Celebrity Night."
              src={cultural_photos.thirteen}
              url="celebiritynighteventphoto"
              color="#FFD6AD"
              range={[0, 10]}
              targetScale={1}
            />
            <Card
              i={1}
              title="DJ Night"
              description="The content of the DJ Night."
              src={cultural_photos.fourteen}
              url="djnighteventphoto"
              color="#FFCC99"
              range={[0, 10]}
              targetScale={1}
            />
          </div>

          <section className="text-center leading-none">
            <p className={`-mt-2 text-3xl md:text-4xl lg:text-[48px] ${fonts.funkyVibes.className}`}>south India</p>
          </section>

          <section className="flex justify-center md:justify-evenly">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-fit"
            >
              <Image
                src={cultural_photos.eleven}
                unoptimized
                alt="cultural_photo"
                width={200}
                height={200}
                className="mt-3 w-[300px] md:w-[300px] lg:w-[300px]"
              />
              <div
                className="absolute bottom-[100px] right-0 z-50"
                onClick={() => {
                  setShowImageInfo(true);
                  setImageInfo({
                    imageTitle: 'Kettuvallams',
                    imageDescription:
                      'The image showcases Keralas houseboats, known as Kettuvallams, which are an integral part of South Indian culture. Traditionally used to transport goods like rice and spices, these boats now serve as floating homes for tourists exploring Keralas scenic backwaters. Crafted from eco-friendly materials like bamboo and wood, houseboats reflect Kerala’s sustainable architecture and rich craftsmanship. They offer serene journeys through lush landscapes, coconut gro ves, and peaceful villages. The backwaters, a unique network of canals and lakes, are central to Kerala’s tourism and local life. These houseboats symbolize Kerala’s natural beauty, cultural heritage, and the state’s renowned hospitality.',
                  });
                }}
              >
                <ImageInfo />
              </div>
            </motion.div>
          </section>

          <CelebritySection />
        </div>
      </div>
    </>
  );
};
export default Hero;
