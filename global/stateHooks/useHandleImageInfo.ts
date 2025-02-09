import { create } from 'zustand';
import { ImageInfoPropsType } from '@/types';
import Image from 'next/image'; // Correct import
import { StaticImageData } from 'next/image';

export type HandleImageInfoState = {
  showImageInfo: boolean;
  setShowImageInfo: (showImageInfo: boolean) => void;
  imageInfo: ImageInfoPropsType;
  setImageInfo: (imageInfo: ImageInfoPropsType) => void;
};

export const useHandleImageInfo = create<HandleImageInfoState>((set) => ({
  showImageInfo: false,
  setShowImageInfo: (showImageInfo) => set({ showImageInfo }),
  imageInfo: {
    imageTitle: '',
    imageDescription: '',
    image: {} as StaticImageData, // Correct type for Next.js images
  },
  setImageInfo: (imageInfo) => set({ imageInfo }),
}));
