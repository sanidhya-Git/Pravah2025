import Image from "next/image";
import React from "react";
import logo from '@/public/logo.png';
// import font from '@/public/font.ttf';
export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10  z-[50] relative border border-black">
      <div className="container mx-auto flex justify-between items-start px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Image src={logo} alt="Logo" width={150} height={50} className="mb-4" />
        </div>

        {/* Links Section */}
        <div className="flex space-x-32">
          <div>
            <h4 className="font-bold mb-2 font-serif">Quick Links</h4>
            <ul>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">Team Pravah</a></li>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">AAVEG</a></li>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">EVENTS</a></li>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">CAMPUS AMBASSDOR</a></li>
            </ul>
          </div>
          <div>

            <h4 className="font-bold mb-2 font-serif">Help Desk</h4>
            <ul>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">Accomodation</a></li>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">Bug Report</a></li>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">Web Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 font-serif">SOCIAL MEDIA</h4>
            <ul>
              <li><a href="https://www.instagram.com/skitpravah?igsh=MXFnMGx4ejlkcnRxbg==" className="text-gray-300 hover:underline font-semibold">Instagram</a></li>
              <li><a href="https://www.facebook.com/pravah2016" className="text-gray-300 hover:underline font-semibold">Facebook</a></li>
              <li><a href="https://www.youtube.com/@skitpravah4946" className="text-gray-300 hover:underline font-semibold">youtube</a></li>
              <li><a href="https://twitter.com/@pravah_skit" className="text-gray-300 hover:underline font-semibold">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 font-serif">Contact Us</h4>
            <ul>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">cheif Coordinator Pravah 25</a></li>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">event Queries</a></li>
              <li><a href="#" className="text-gray-300 hover:underline font-semibold">Website Head</a></li>
            </ul>
          </div>

        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-400 ">Developed and designed by Pravah WebTeam. </p>
      </div>



    </footer>
  )
}