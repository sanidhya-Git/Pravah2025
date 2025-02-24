import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.webp';

export const Footer: React.FC = () => {
  const sections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Team Pravah', href: '#' },
        { label: 'AAVEG', href: '/aveg' },
        { label: 'EVENTS', href: '#' },
        { label: 'About', href: '/about' },
      ],
    },
    {
      title: 'Help Desk',
      links: [
        { label: 'Accommodation', href: '#' },
        { label: 'Bug Report', href: '#' },
        { label: 'Web Team', href: '#' },
      ],
    },
    {
      title: 'SOCIAL MEDIA',
      links: [
        { label: 'Instagram', href: 'https://www.instagram.com/skitpravah?igsh=MXFnMGx4ejlkcnRxbg==' },
        { label: 'Facebook', href: 'https://www.facebook.com/pravah2016' },
        { label: 'YouTube', href: 'https://www.youtube.com/@skitpravah4946' },
        { label: 'Twitter', href: 'https://twitter.com/@pravah_skit' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { label: 'Chief Coordinator Pravah 25', href: '#' },
        { label: 'Event Queries', href: '#' },
        { label: 'Website Head', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative z-[50] border border-black bg-black py-20 text-white">
      <div className="container mx-auto flex flex-col items-start justify-between px-4 md:flex-row">
        <div className="mb-6 flex flex-col items-start md:mb-0">
          <Image src={logo} alt="Logo" width={150} height={50} className="mb-4" />
        </div>
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-32 md:space-y-0">
          {sections.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-2 font-serif text-lg font-bold md:text-xl">{title}</h4>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="font-semibold text-gray-300 hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="ffoter">
        <div className="mt-10 text-center">
          <p className="text-gray-400">
            Developed and designed by &nbsp;
            <a
              href="https://www.linkedin.com/in/sanidhya-mehra-a0310a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              Sanidhya Mehra
            </a>
            &nbsp;,&nbsp;
            <a
              href="https://www.linkedin.com/in/krishnawadhwa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
            >
              Krishna Wadhwa
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
