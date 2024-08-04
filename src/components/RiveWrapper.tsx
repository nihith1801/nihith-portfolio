'use client';

import { useEffect, useState } from 'react';
import { useRive, Layout, Fit, Alignment, useStateMachineInput } from '@rive-app/react-canvas';

export default function RiveWrapper() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { RiveComponent, rive } = useRive({
    src: "/rive/cat_following_the_mouse.riv",
    stateMachines: "State Machine 1",
    artboard: "Cat",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center
    }),
  });

  const hoverEnter = useStateMachineInput(rive, "State Machine 1", "hover_hit_enter");
  const hoverExit = useStateMachineInput(rive, "State Machine 1", "hover_hit_exit");

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-full bg-neutral-800"></div>; // Placeholder
  }

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => hoverEnter && hoverEnter.fire()}
      onMouseLeave={() => hoverExit && hoverExit.fire()}
    >
      <div className="w-full h-full flex items-center justify-center">
        <RiveComponent />
      </div>
    </div>
  );
}
