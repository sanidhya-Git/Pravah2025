import { create } from 'zustand';
import { ImageInfoPropsType } from '@/types';
import defaultImage from '@/public/default-image.png'; // Import a valid StaticImageData image

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
    image: defaultImage, // Using an actual StaticImageData import
  },
  setImageInfo: (imageInfo) => set({ imageInfo }),
}));
