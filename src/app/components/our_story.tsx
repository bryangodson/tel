"use client";
import React from "react";
import styles from "@/app/page.module.css";
import Image, { StaticImageData } from "next/image";
import { useIntersectionObserver } from "@/app/hooks/intersection_observer";
interface VisionAndStoryProps {
  title: string;
  description: string;
  image: StaticImageData;
  priority?: boolean;
}
function VisionAndStory({
  title,
  description,
  image,
  priority = false,
}: VisionAndStoryProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: [0.6, 0],
    rootMargin: "-20px 0px -20px 0px",
  });

  return (
    <div
      className={`${styles.our_story} ${isVisible ? styles.slide : ""}`}
      ref={ref}>
      <h3>{title}</h3>
      <Image src={image} alt="person" priority={priority} />
      <section>
        <p>{description}</p>
      </section>
    </div>
  );
}

export default VisionAndStory;
