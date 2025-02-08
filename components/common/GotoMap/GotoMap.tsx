'use client';

import { useGotoMap } from '@/global/stateHooks';
import React from 'react';

import { Button } from '@/components/ui';
import { MapAreaMenu, MapSectionData } from './data';
import { motion } from 'framer-motion';
import { fonts } from '@/fonts';
import Image from 'next/image';
import Link from 'next/link';

import { AnimatePresence } from 'framer-motion';

export const GotoMap: React.FC = () => {
  const { showGotoMap, toggleShowGotoMap, mapArea, setMapArea } = useGotoMap();

  return (
    <>
      <Button
        type="button"
        className="fixed right-0 top-0 z-50 m-6 cursor-pointer rounded-full bg-black p-3"
        onClick={() => toggleShowGotoMap(!showGotoMap)}
      >
        Menu
      </Button>

      <div
        className={`fixed z-[100] h-screen w-full transition-colors duration-200 ${showGotoMap ? 'bg-black/70' : 'pointer-events-none bg-transparent'} `}
        onClick={() => {
          toggleShowGotoMap(false);
        }}
      ></div>

      <AnimatePresence>
        {showGotoMap && (
          <motion.div
            initial={{
              opacity: 0,
              transitionDuration: '100',
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transitionDuration: '50',
            }}
            className="fixed left-[50%] top-[20%] z-[200] flex w-full -translate-x-1/2 justify-center"
          >
            {MapAreaMenu.filter((menu) => menu.region === mapArea).map((menu, index) => (
              <div key={index} className="flex flex-col items-center">
                <>
                  {menu.links.map((link, index) => (
                    <p key={index}>
                      <Link
                        href={link.href}
                        className={`${fonts.funkyVibes.className} text-center text-[32px] text-white md:text-[48px]`}
                        onClick={() => {
                          toggleShowGotoMap(false);
                        }}
                      >
                        {link.label}
                      </Link>
                    </p>
                  ))}
                </>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showGotoMap && (
          <motion.div
            initial={{
              bottom: '-100%',
            }}
            animate={{
              // y: 50,
              bottom: 0,
            }}
            exit={{
              // y: 0,
              bottom: '-100%',
            }}
            className={`fixed z-[200] h-[200px] w-full bg-white duration-75`}
          >
            <div className="grid h-[200px] w-full grid-cols-2 gap-4 p-4 md:h-[200px] md:grid-cols-5">
              {MapSectionData.map((section, index) => (
                <div
                  key={index}
                  className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-200 p-3"
                  onClick={() => {
                    setMapArea(section.slug);
                  }}
                >
                  <div className="absolute left-0 top-0 h-full w-full bg-black">
                    <Image
                      src={section.backgroundimage}
                      alt={section.text}
                      layout="fill"
                      objectFit="cover"
                      className="object-top opacity-50"
                    />
                  </div>
                  <p
                    className={`relative z-10 text-xs font-semibold uppercase text-white md:text-sm ${section.slug === mapArea && 'underline'}`}
                  >
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
