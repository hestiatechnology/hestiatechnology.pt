import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-[9999] hidden md:block transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Main dot */}
      <div
        className={cn(
          "h-2 w-2 rounded-full bg-primary transition-all duration-300 ease-out",
          isPointer ? "h-4 w-4 opacity-50" : "opacity-100"
        )}
      />
      {/* Outer ring */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary transition-all duration-500 ease-out",
          isPointer ? "h-12 w-12 border-2 opacity-100" : "scale-50 opacity-0"
        )}
      />
    </div>
  );
};

export default CustomCursor;
