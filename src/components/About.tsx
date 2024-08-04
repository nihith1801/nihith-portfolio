'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const AboutContent = dynamic(() => import('./AboutContent'), { ssr: false });
const ShootingStars = dynamic(() => import('./ShootingStars'), { ssr: false });
const StarsBackground = dynamic(() => import('./StarsBackground'), { ssr: false });
const RiveWrapper = dynamic(() => import('./RiveWrapper'), { ssr: false });

const Loading = () => <div>Loading...</div>; // Simple loading component

export default function About() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-neutral-950 antialiased">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-neutral-900"></div>
        <Suspense fallback={<Loading />}>
          <ShootingStars />
          <StarsBackground />
        </Suspense>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row h-full w-full">
        <div className="flex-1 flex items-center justify-center md:justify-start px-8 text-left text-white">
          <Suspense fallback={<Loading />}>
            <AboutContent />
          </Suspense>
        </div>
        <div className="flex-1">
          <Suspense fallback={<Loading />}>
            <RiveWrapper />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
