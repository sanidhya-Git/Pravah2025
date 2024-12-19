import { indian_region } from '@/public';
import { MapArea } from '@/types';
import { StaticImageData } from 'next/image';



export const MapSectionData: {
  slug: MapArea;
  backgroundimage:StaticImageData;
  text: string;
}[] = [
  {
    slug: 'north',
    backgroundimage: indian_region.north,
    text: 'North India',
  },
  {
    slug: 'west',
    backgroundimage: indian_region.west,
    text: 'West India',
  },
  {
    slug: 'central',
    backgroundimage: indian_region.central,
    text: 'Central India',
  },
  {
    slug: 'east',
    backgroundimage: indian_region.east,
    text: 'East India',
  },
  {
    slug: 'south',
    backgroundimage: indian_region.south,
    text: 'South India',
  },
];

export const MapAreaMenu: {
  region: MapArea;

  links: {
    label: string;
    href: string;
  }[];
}[] = [
  {
    region: 'north',

    links: [
      { label: 'Home', href: '' },
      { label: 'About', href: '/about' },
      { label: 'Register', href: '/' },
    ],
  },
  {
    region: 'west',
    links: [
      { label: 'Events', href: '/' },
      { label: 'Contact', href: '/' },
    ],
  },
  {
    region: 'central',
    
    links: [
      { label: 'Sponsors', href: '/' },
      { label: 'Become a Sponsor', href: '/' },
    ],
  },
  {
    region: 'east',
    links: [
      { label: 'Aaveg', href: '/' },
      { label: 'Campus Ambassador', href: '/' },
    ],
  },
  {
    region: 'south',
    
    links: [
      { label: 'Social', href: '/' },
      { label: 'Core Team', href: '/' },
    ],
  },
];
