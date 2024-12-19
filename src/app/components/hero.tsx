"use client";
import React from "react";
import styles from "@/app/page.module.css";
import Button from "./button";
import arrow from "../images/arrow.png";
import Image from "next/image";
import { useIntersectionObserver } from "../hooks/intersection_observer";
import FadeIn from "./fadeIn";

function Hero() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: [0.8, 1],
    rootMargin: "40px 0px 40px 0px",
  });

  return (
    <>
      <div className={styles.hero} ref={ref}>
        <h1>
          <span className={`play_write first ${isVisible && "slide_in"}`}>
            Empowering
          </span>
          <FadeIn>Individuals,</FadeIn>
          <span className={`play_write second ${isVisible && "slide_in"}`}>
            Transforming
          </span>
          <FadeIn>communities.</FadeIn>
        </h1>
        <FadeIn>
          <p>
            At The Essence League,we bridge the gaps,foster growth,ignite
            positive change through education,mentorship,entrepreneurship and
            compassion.
          </p>
        </FadeIn>
        <section>
          <FadeIn>
            <Button
              to="mailto:theessenceleague08@gmail.com"
              variant="primary"
              label="Volunteer"
            />
          </FadeIn>
          <FadeIn>
            <Button
              to="mailto:theessenceleague08@gmail.com"
              variant="outline"
              label="Partner With Us"
            />
          </FadeIn>
          <FadeIn>
            <Button to="tel:+233246917723" variant="labeled" label="Donate" />
          </FadeIn>
        </section>
      </div>
      <FadeIn>
        <div className={styles.arrow}>
          <small>explore</small>
          <Image src={arrow} alt="arrow" />
        </div>
      </FadeIn>
    </>
  );
}

export default Hero;
