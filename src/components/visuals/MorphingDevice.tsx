"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MorphingDeviceProps {
  state: "laptop" | "tablet" | "phone";
  children: React.ReactNode;
}

// Device Configurations
const configs = {
  laptop: {
    width: "36rem",
    height: "22rem", 
    borderRadius: "1.5rem",
    baseOpacity: 1,
    baseRotateX: 75,
    baseTranslateY: -16, // Pull base up slightly to hide under curve
    baseTranslateZ: 0,
    // Laptop view: Slightly angled
    wrapperRotateY: -25,
    wrapperRotateX: 10,
    wrapperRotateZ: 0,
  },
  tablet: {
    width: "24rem", 
    height: "32rem", 
    borderRadius: "2rem",
    baseOpacity: 0,
    baseRotateX: 90,
    baseTranslateY: 20,
    baseTranslateZ: -50, // Hide it further back
    // Tablet view: More straight on but still tilted
    wrapperRotateY: 25,
    wrapperRotateX: -10,
    wrapperRotateZ: 2,
  },
  phone: {
    width: "24.2rem", 
    height: "48.4rem", 
    borderRadius: "2.5rem",
    baseOpacity: 0,
    baseRotateX: 90,
    baseTranslateY: 20,
    baseTranslateZ: -50,
    // Phone view: Held in hand angle
    wrapperRotateY: -30,
    wrapperRotateX: 15,
    wrapperRotateZ: -5,
  }
};

export const MorphingDevice = ({ state, children }: MorphingDeviceProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  
  // Use layout effect to set initial state immediately before paint
  React.useLayoutEffect(() => {
    const config = configs[state];
    
    // Set initial properties immediately
    gsap.set(wrapperRef.current, {
      width: config.width,
      height: config.height,
      rotateY: config.wrapperRotateY,
      rotateX: config.wrapperRotateX,
      rotateZ: config.wrapperRotateZ,
    });

    gsap.set([screenRef.current, backRef.current], {
      borderRadius: config.borderRadius,
    });

    gsap.set(baseRef.current, {
      opacity: config.baseOpacity,
      rotateX: config.baseRotateX,
      y: config.baseTranslateY,
      z: config.baseTranslateZ,
    });
  }, []); // Run only once on mount to set initial position

  // Handle transitions
  useEffect(() => {
    // Skip the first render as useLayoutEffect handled it
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const config = configs[state];
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: "power3.inOut" } });

    // Animate Wrapper Size
    tl.to(wrapperRef.current, {
      width: config.width,
      height: config.height,
    }, 0);

    // Animate Screen & Back Radius
    tl.to([screenRef.current, backRef.current], {
      borderRadius: config.borderRadius,
    }, 0);

    // Animate Base (Keyboard)
    tl.to(baseRef.current, {
      opacity: config.baseOpacity,
      rotateX: config.baseRotateX,
      y: config.baseTranslateY,
      z: config.baseTranslateZ,
    }, 0);

    // Animate POV Rotation
    tl.to(wrapperRef.current, {
      rotateY: config.wrapperRotateY,
      rotateX: config.wrapperRotateX,
      rotateZ: config.wrapperRotateZ,
    }, 0);
    
  }, [state]);

  // Floating Animation
  useEffect(() => {
    gsap.to(wrapperRef.current, {
        y: -15,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });
  }, []);

  return (
    <div 
        ref={containerRef} 
        className="relative flex items-center justify-center perspective-[2000px] w-full h-full"
    >
      {/* 3D Wrapper: Controls Size & Rotation */}
      <div 
        ref={wrapperRef}
        className="relative transform-style-3d transition-transform duration-700"
      >
        
        {/* Screen (Front Face) */}
        <div 
            ref={screenRef}
            className="absolute inset-0 bg-background border-[8px] border-slate-800 dark:border-slate-700 shadow-2xl overflow-hidden transform-style-3d backface-hidden z-20"
        >
            {/* Camera Dot */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black/20 z-50"></div>
            
            {/* Content Area */}
            <div className="w-full h-full overflow-hidden bg-slate-50 dark:bg-slate-900">
                {children}
            </div>

            {/* Screen Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-40 mix-blend-overlay"></div>
        </div>

        {/* Device Thickness/Back */}
        <div 
            ref={backRef}
            className="absolute inset-0 bg-slate-800 transform-style-3d -z-10"
            style={{ 
                transform: "translateZ(-12px)", 
                boxShadow: "0 20px 60px -10px rgba(0,0,0,0.6)"
            }}
        ></div>

        {/* Laptop Base (Keyboard area) */}
        <div 
            ref={baseRef}
            className="absolute left-1/2 -translate-x-1/2 w-full h-[24rem] bg-slate-700 rounded-b-2xl origin-top transform-style-3d"
            style={{ 
                top: "100%", // Attached to the bottom edge
                zIndex: -1,
                borderBottom: "12px solid #1e293b" 
            }}
        >
            {/* Trackpad area */}
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-slate-600/50 rounded-lg shadow-inner"></div>
            
            {/* Keyboard visual hint */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[35%] bg-slate-800/50 rounded-md"></div>
        </div>

      </div>
    </div>
  );
};
