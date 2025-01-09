"use client";
import React, { useEffect, useState, useCallback } from "react";
import styles from "@/app/page.module.css";
import logo from "../images/tel_logo.png";
import Image from "next/image";
import MenuNavigationItems from "./menu";
const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const handleMenuClick = useCallback(() => {
    setMenuClicked(!menuClicked);
  }, [menuClicked]);
  useEffect(() => {
    document.onscroll = () => setMenuClicked(false);
    return () => {
      document.onscroll = null;
    };
  }, [handleMenuClick]);

  return (
    <header className={styles.header}>
      <section>
        <Image src={logo} alt="logo" />
        <span>The Essence League</span>
      </section>
      <MenuNavigationItems menuClicked={menuClicked} />
      <section
        onClick={handleMenuClick}
        className={`${menuClicked ? styles.menuClicked : styles.menuClosed}`}>
        <span></span>
        <span></span>
        <span></span>
      </section>
    </header>
  );
};

export default Header;
