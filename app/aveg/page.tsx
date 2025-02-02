'use client';

import React from 'react';
import './style.css';

import { fonts } from '../../fonts/index'; // Corrected import statement

const CardSplit = () => {
  const cardsData = [
    {
      image: 'https://t3.ftcdn.net/jpg/03/10/62/12/360_F_310621281_foEqKBGtGlNWFQRePgdF5BpLOFyTsnzO.jpg',
      title: 'Badminton',
      description: 'Participate in the most exciting badminton event of the year and showcase your talent!',
    },
    {
      image:
        'https://static.vecteezy.com/system/resources/previews/030/696/994/non_2x/football-high-quality-4k-hdr-free-photo.jpg',
      title: 'Football',
      description:
        'Join the action-packed world of football and cheer for your team as they score thrilling goals and defend with passion!',
    },
    {
      image: 'https://images7.alphacoders.com/135/1351757.png',
      title: 'Chess',
      description:
        'Dive into the exciting world of chess and outsmart your opponent with strategic moves and sharp tactics!',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVubmlzfGVufDB8fDB8fHww',
      title: 'Lawn Tennis',
      description:
        'Step onto the court for an exhilarating game of lawn tennis and show off your agility and precision with every powerful serve and swing!',
    },
    {
      image: 'https://wallpapers.com/images/featured/volleyball-6dvotamb3ddiy7qw.jpg',
      title: 'Volleyball',
      description:
        'Jump into the action of volleyball and spike your way to victory with powerful serves and perfect teamwork!',
    },
    {
      image: 'https://img.freepik.com/free-photo/superheroes-are-playing-baseball-3d-rendered-illustration_1057-32197.jpg?t=st=1738521692~exp=1738525292~hmac=300f45c29174cd99caed71e90e57c882998da61430d6654fec814dcf70d88e32&w=740',
      title: 'Gully Cricket',
      description: 'Join the thrilling basketball matches and cheer for your favorite teams!',
    },
    {
      image: 'https://media.newyorker.com/photos/65badc73c17031f273a94a9c/master/pass/240212_r43718.jpg',
      title: 'Basketball',
      description: 'Join the thrilling basketball matches and cheer for your favorite teams!',
    },
    {
      image:
        'https://images.pexels.com/photos/18511482/pexels-photo-18511482.jpeg?cs=srgb&dl=pexels-jenny-k-181141-18511482.jpg&fm=jpg',
      title: 'Table Tennis',
      description:
        'Get ready for a fast-paced game of table tennis and master your reflexes to outplay your opponent with every swift rally!',
    },    
    {
      image: 'https://c1.wallpaperflare.com/preview/317/826/447/dew-tug-of-war-drag-men.jpg',
      title: 'Tug of War',
      description:
        'Join the ultimate test of strength and teamwork in tug of war, where every pull counts towards victory!',
    },
    {
      image: 'https://th.bing.com/th/id/OIP.GynkNrjWYGXwBA7Q4w35HwAAAA?rs=1&pid=ImgDetMain',
      title: 'Satoliya',
      description:
        'Join the ultimate test of strength and teamwork in tug of war, where every pull counts towards victory!',
    },    
    {
      image: 'https://149853888.v2.pressablecdn.com/wp-content/uploads/2020/04/carrom-390956_1920.jpg',
      title: 'Carrom',
      description:
        'Get ready for a fun-filled game of carrom and showcase your skills to sink the coins with precision and finesse!',
    },
    {
      image: 'https://img.freepik.com/free-photo/professional-esports-gamer-back-side-view-rejoices-victory-generative-ai_191095-2019.jpg?t=st=1738521982~exp=1738525582~hmac=da4d95e0ca339551ea71df545ab2e9b8b8b36ae6438d4a53a714944118fe72ea&w=996',
      title: 'E-Sports',
      description:
        'Get ready for a fun-filled game of carrom and showcase your skills to sink the coins with precision and finesse!',
    },     
    {
      image: 'https://wallpapers.com/images/featured/kabaddi-7awdb9vk9aw87dzo.jpg',
      title: 'Kabaddi',
      description:
        'Experience the thrill of kabaddi, where agility, strategy, and teamwork collide in a high-energy battle for victory!',
    },
  ];

  return (
    <main id="  ">
      <h1 className={`${fonts.funkyVibes.className} mb-11 text-5xl font-bold hedding`}>AAVEG&apos;25</h1>
      <p className="titlee">
        Welcome to AAVEG&apos;25!! One of the largest sports events in Jaipur is back with its 25th edition this
        February, that unites the vibrant spirit of the students through the thrill of sports. The annual sports fest of
        SKIT signifies a platform which encourages its participants to face challenges with courage, unwavering
        determination, perseverance and showcasing their sportsmanship. With an addition of celebrating the triumphs
        over setbacks. So get ready to feel the adrenaline rush over the thrilling faces and prove your mettle at the
        sports extravaganza.
      </p>
      <div></div>
      <div className="cardd-grid">
        {/* Dynamically render cards */}
        {cardsData.map((card, index) => (
          <div className="card" tabIndex={0} key={index}>
            <img src={card.image} alt={card.title} />
            <div className="text">
              <h2 data-splitting="">{card.title}</h2>
              <p data-splitting="">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </main>
  
  );
};

export default CardSplit;
