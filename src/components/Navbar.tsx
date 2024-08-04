"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import logo from '../assets/nw.webp';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Navbar.module.scss';

const Navbar: React.FC = () => {
  const [invertLogo, setInvertLogo] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  const handleScroll = useCallback(() => {
    if (logoRef.current) {
      const rect = logoRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const element = document.elementFromPoint(x, y);
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const rgb = bgColor.match(/\d+/g);
        if (rgb) {
          const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
          setInvertLogo(brightness > 128);
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-2 px-4">
      <div className="flex flex-shrink-0 items-center">
        <Image
          ref={logoRef}
          src={logo}
          alt="logo"
          className={`transition-all duration-300 ${invertLogo ? 'invert' : ''}`}
          width={120}
          height={120}
        />
      </div>
      <div className={styles.cta__wrapper}>
        <a href="https://www.linkedin.com/in/nihith-wudali-808478247/" target="_blank" rel="noopener noreferrer" className={styles.cta__button}>
          <FaLinkedin className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
        </a>
        <a href="https://github.com/nihith1801" target="_blank" rel="noopener noreferrer" className={`${styles.cta__button} ml-4`}>
          <FaGithub className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" />
        </a>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
