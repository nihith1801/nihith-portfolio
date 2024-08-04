"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import FlipWords from "./ui/FlipWords";
import ShootingStars from './ShootingStars';
import StarsBackground from './StarsBackground';

const RiveComponent = dynamic(
  () => import("@rive-app/react-canvas").then(mod => mod.default),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-gray-800 animate-pulse"></div>
  }
);

const Hero: React.FC = () => {
  const words = ["Python", "TensorFlow", "Data-Science", "Machine-Learning"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(wordInterval);
  }, [words]);

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 text-white relative overflow-hidden">
      <ShootingStars />
      <StarsBackground />
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 z-10">
        <div className="flex flex-col items-start pt-16 lg:pt-24"> {/* Adjusted padding here */}
          <h1 className="text-4xl font-bold mb-7 text-white">
            Hey there!
          </h1>
          <p className="text-2xl font-light">
            I&apos;m Nihith and I specialize in&nbsp;
            <span className="inline-block">
              <FlipWords
                words={words}
                currentIndex={currentWordIndex}
                className="font-bold"
              />
            </span>
          </p>
          <p className="text-xl mt-4">
            I am a passionate developer with expertise in building intelligent systems and data-driven solutions. My work involves creating innovative applications that leverage the power of machine learning and data science.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-[calc(100vh-80px)] lg:h-screen flex items-center justify-center z-10">
        <RiveComponent src="/rive/that's_no_moon!.riv" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
