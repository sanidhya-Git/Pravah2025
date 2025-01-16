'use client';
import React from 'react';
import './About.css';
import Image from 'next/image';
import { logo } from '@/public';
import { fonts } from '@/fonts';

const Hero = () => {
  return (
    <div className="all bg-[#ffffec] p-8">
      <div className="fixed left-0 top-0 z-10 flex h-screen w-full items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          width={2000}
          height={2000}
          className="aspect-square w-[700px] object-cover opacity-40"
        />
      </div>

      <div className="relative z-30">
        <div className="hero">
          <h1 className={`${fonts.funkyVibes.className} mb-11 text-5xl font-bold`}>Annual Techno Cultural Fest</h1>
          <h2 className="hero-subtitle">Pravah 2025</h2>
          <p className="hero-description font-semibold">
            PRAVAH, the Annual College Fest, embodies the realization of a modest dream. This vibrant extravaganza has
            been meticulously organized since its inception and is now gearing up to commemorate 17 years of honoring
            creativity, vitality, and aesthetics in the realms of Sports, Technical, Non-Technical, Social Events and
            Cultural events. With a diverse array of over one hundred events falling under these categories, PRAVAH
            serves as the platform for numerous intra and inter-collegiate competitions. Envisaging a significant
            turnout of approximately 6500+ students from all corners of India across various event domains, PRAVAH
            continues to uphold its tradition of attracting talent on a national scale. Keeping in line with this rich
            legacy, PRAVAH 2025 aspires to draw forth talents from different corners of India, fostering growth in
            literary, technical, cultural, and social skills.
          </p>
          <button className="hero-cta">Explore Pravah 2025</button>
        </div>

        {/* about.jss  */}

        <div className="about">
          <h2 className={`${fonts.funkyVibes.className} about-subTitle mb-0 text-xs`}>About SKIT</h2>
          <h1 className="about-subTitle mb-11 text-5xl">SKIT, Jaipur</h1>
          <p className="about-description font-semibold">
            Inspired by the timeless wisdom of Swami Keshvanand, embarked on its academic journey in the year 2000,
            thanks to the visionaries at the Technocrats and Managers Society of Advanced Learning and Gramothan.SKIT
            has blossomed into a beacon of academic brilliance in Northern India. We take immense pride in fostering
            creativity and personal growth through our diverse range of 35+ clubs which encompass a wide spectrum of
            interests, ranging from recreational to technical to cultural thus creating a multiverse of opportunities
            for our students to explore!
          </p>
        </div>

        {/* card.jss */}

        <div className="card-container">
          <VisionCard />
          <MissionCard />
          <ObjectivesCard />
        </div>
      </div>
    </div>
  );
};

const VisionCard = () => {
  return (
    <div className="card">
      <h2 className="card-title">VISION</h2>
      <p className="card-content">
        PRAVAH aspires to craft the quintessential human experience, where the seeds of lasting friendships are sown,
        and memories are not just made but exalted. It envisions itself as the premier festival in India, embodying the
        very essence of spirited participation and joyous celebration, fueled by the energy of the dynamic young minds
        from national institutes.{' '}
      </p>
    </div>
  );
};

const MissionCard = () => {
  return (
    <div className="card">
      <h2 className="card-title">MISSION</h2>
      <p className="card-content">
        PRAVAH endeavors to establish itself as a versatile platform, a canvas where talents across diverse fields
        converge to embark on a shared journey of learning and collective growth. Through an array of captivating
        cultural, technical, non-technical, sports, literary and social events, PRAVAH seeks to curate an unforgettable
        experience, leaving participants with memories that resonate for a lifetime.{' '}
      </p>
    </div>
  );
};

const ObjectivesCard = () => {
  return (
    <div className="card">
      <h2 className="card-title">OBJECTIVES</h2>
      <p className="card-content">
        To foster a welcoming atmosphere that encourages interaction and joyful celebration. To champion cultural
        diversity and elevate the knowledge and skills of each individual. To advocate for human values, social skills,
        and ethics through a variety of engaging social events. To offer a respite from the monotony of academic
        pursuits. To cultivate leadership, managerial, and entrepreneurship skills among students.{' '}
      </p>
    </div>
  );
};

export default Hero;
