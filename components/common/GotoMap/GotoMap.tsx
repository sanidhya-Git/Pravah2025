'use client';

import { useGotoMap } from '@/global/stateHooks';
import React from 'react';

// shadcn components
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from '@/components/ui';
import { MapAreaMenu, MapSectionData } from './data';
import { motion } from 'framer-motion';
import { fonts } from '@/fonts';
import Image from 'next/image';
import Link from 'next/link';

export const GotoMap: React.FC = () => {
  const { showGotoMap, toggleShowGotoMap, mapArea, setMapArea } = useGotoMap();

  return (
    <>
      {showGotoMap && (
        <motion.div className="fixed left-[50%] top-[20%] z-[100] flex h-screen w-full -translate-x-1/2 justify-center">
          {MapAreaMenu.filter((menu) => menu.region === mapArea).map((menu, index) => (
            <div key={index}>
              <>
                {menu.links.map((link, index) => (
                  <p key={index}>
                    <Link
                      href={link.href}
                      className={`${fonts.funkyVibes.className} text-center text-[32px] text-white md:text-[48px]`}
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

      <Drawer onClose={() => toggleShowGotoMap(false)} shouldScaleBackground>
        <DrawerTrigger
          onClick={() => toggleShowGotoMap(!showGotoMap)}
          className="fixed right-0 top-0 z-50 m-6 cursor-pointer rounded-full bg-black p-3"
        >
          <p className="text-[12px] uppercase text-white">Menu</p>
        </DrawerTrigger>
        <DrawerContent>
          <>
            <DrawerTitle></DrawerTitle>
            <div className="grid h-[300px] w-full grid-cols-2 gap-4 p-4 md:h-[200px] md:grid-cols-5">
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
          </>
        </DrawerContent>
      </Drawer>
    </>
  );
};
