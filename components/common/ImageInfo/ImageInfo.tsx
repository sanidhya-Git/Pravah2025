'use client';

import { useHandleImageInfo } from '@/global/stateHooks';
import React from 'react';
import Image from 'next/image';

// shadcn components
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui';
import { DialogTitle } from '@radix-ui/react-dialog';

export const ImageInfo: React.FC = () => {
  const { imageInfo } = useHandleImageInfo();

  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <div className="aspect-square min-w-[20px] max-w-[20px] animate-spin cursor-pointer rounded-full border-[2px] border-dashed border-black bg-black bg-transparent p-[4px]">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-[300px] w-full bg-white px-5">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="relative flex h-[280px] w-full min-w-[250px] max-w-[300px] items-center justify-center overflow-hidden rounded-lg bg-gray-200">
                <Image src={imageInfo.image} alt="image" className="image-contain" />
              </div>
              <div className="flex flex-col">
                <DialogTitle className="text-lg font-semibold">
                  <p>{imageInfo.imageTitle}</p>
                </DialogTitle>
                <p className="text-sm md:text-base">{imageInfo.imageDescription}</p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
