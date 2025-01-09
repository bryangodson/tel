"use client";
import React from "react";
import styles from "@/app/page.module.css";
import Button from "./button";
import arrow from "../images/arrow.png";
import Image from "next/image";
import FadeIn from "./fadeIn";
// import heroImage from "../images/hero_image.png";
function Hero() {
  return (
    <>
      <div className={styles.hero_container}>
        {/* <Image src={heroImage} alt="tel community" /> */}
        <div className={styles.hero} id="hero">
          <FadeIn threshold={[0.8, 0]} rootMargin="0px 0px 0px 0px">
            <h1>Empowering Individuals, Transforming communities</h1>
          </FadeIn>
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
      </div>{" "}
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
