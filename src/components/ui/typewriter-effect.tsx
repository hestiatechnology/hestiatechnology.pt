"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText.length === fullWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return; // Pause before deleting
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-shimmer">
        {currentText}
      </span>
      <span
        className={cn(
          "ml-1 w-[2px] h-[1em] bg-primary animate-pulse",
          cursorClassName
        )}
      />
    </span>
  );
};
