import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png';
// import font from '@/public/font.ttf';
export const Footer: React.FC = () => {
  return (
    <footer className="z-[50] relative border border-black bg-black py-10 text-white">
      <div className="container mx-auto flex items-start justify-between px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Image src={logo} alt="Logo" width={150} height={50} className="mb-4" />
        </div>

        {/* Links Section */}
        <div className="flex space-x-32">
          <div>
            <h4 className="mb-2 font-serif font-bold">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  Team Pravah
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  AAVEG
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  EVENTS
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  CAMPUS AMBASSDOR
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-serif font-bold">Help Desk</h4>
            <ul>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  Accomodation
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  Bug Report
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  Web Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-serif font-bold">SOCIAL MEDIA</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/skitpravah?igsh=MXFnMGx4ejlkcnRxbg=="
                  className="font-semibold text-gray-300 hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/pravah2016" className="font-semibold text-gray-300 hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@skitpravah4946"
                  className="font-semibold text-gray-300 hover:underline"
                >
                  youtube
                </a>
              </li>
              <li>
                <a href="https://twitter.com/@pravah_skit" className="font-semibold text-gray-300 hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-serif font-bold">Contact Us</h4>
            <ul>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  cheif Coordinator Pravah 25
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  event Queries
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-300 hover:underline">
                  Website Head
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-gray-400">Developed and designed by Pravah WebTeam. </p>
      </div>
    </footer>
  );
};
