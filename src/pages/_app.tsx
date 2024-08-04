import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the Navbar and TracingBeam components
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: true });
const TracingBeam = dynamic(() => import('@/components/TracingBeam'), { ssr: false });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative bg-neutral-950">
      <Navbar />
      <div className="flex">
        <TracingBeam className="sticky top-0 h-screen">
          {/* You can pass content or children here */}
          <div />
        </TracingBeam>
        <div className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            <Component {...pageProps} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
