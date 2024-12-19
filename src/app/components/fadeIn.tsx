"use client";
import React, { ReactNode } from "react";
import { useIntersectionObserver } from "../hooks/intersection_observer";
interface FadeInProps {
  children: ReactNode;
  slideFrom?: boolean;
}
function FadeIn({ children, slideFrom }: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: [0.8, 0],
    rootMargin: "20px 0px 20px 0px",
  });
  return (
    <div
      ref={ref}
      className={`${isVisible ? "fade_in" : "fade_out"} ${
        isVisible && slideFrom && "slide_right"
      } ${isVisible && !slideFrom && "slide_left"}`}>
      {children}
    </div>
  );
}

export default FadeIn;
