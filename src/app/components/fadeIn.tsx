"use client";
import React, { ReactNode } from "react";
import { useIntersectionObserver } from "../hooks/intersection_observer";
interface FadeInProps {
  children: ReactNode;
  slideFrom?: boolean;
  threshold?: Array<number>;
  rootMargin?: string;
}
function FadeIn({
  children,
  slideFrom,
  threshold = [0.8, 0],
  rootMargin = "20px 0px 20px 0px",
}: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    rootMargin,
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
