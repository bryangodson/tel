import React from "react";
import styles from "@/app/page.module.css";
import Button from "./button";
import arrow from "../images/arrow.png";
import Image from "next/image";
function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <h1>
          <span className="play_write"> Empowering</span> Individuals,
          <span className="play_write"> Transforming</span> communities.
        </h1>
        <p>
          At The Essence League,we bridge the gaps,foster growth,ignite positive
          change through education,mentorship,entrepreneurship and compassion.
        </p>
        <section>
          <Button
            to="mailto:theessenceleague08@gmail.com"
            variant="primary"
            label="Volunteer"
          />
          <Button
            to="mailto:theessenceleague08@gmail.com"
            variant="outline"
            label="Partner With Us"
          />
        </section>
      </div>
      <div className={styles.arrow}>
        <small>explore</small>
        <Image src={arrow} alt="arrow" />
      </div>
    </>
  );
}

export default Hero;
