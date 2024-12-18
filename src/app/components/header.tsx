import React from "react";
import styles from "@/app/page.module.css";
import logo from "../images/tel_logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <div className={styles.header}>
      <section>
        <Image src={logo} alt="logo" />
        <span>The Essence League</span>
      </section>
      <section>
        <span></span>
        <span></span>
        <span></span>
      </section>
    </div>
  );
};

export default Header;
