"use client";
import React, { useEffect, useState, useCallback } from "react";
// import styles from "@/styles/menu.module.css";
import Image from "next/image";
import MenuNavigationItems from "./menu";
import SearchBar from "./search_bar";
const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  //toggle mobile nav display
  const handleMenuClick = useCallback(() => {
    setMenuClicked(!menuClicked);
  }, [menuClicked]);
  //remove nav upon scroll
  useEffect(() => {
    document.onscroll = () => setMenuClicked(false);
    return () => {
      document.onscroll = null;
    };
  }, [handleMenuClick]);

  return (
    <header className="shadow-md bg-tel-white w-full flex items-center justify-between p-2 h-16 sticky top-0">
      <section>
        <Image src="/images/tel_logo.jpeg" alt="logo" width={60} height={60} />
      </section>
      <MenuNavigationItems menuClicked={menuClicked} />
      <SearchBar />

      {/* <section
        onClick={handleMenuClick}
        className={`${
          menuClicked ? styles.menuClicked : styles.menuClosed
        } lg:invisible`}>
        <span></span>
        <span></span>
        <span></span>
      </section> */}
    </header>
  );
};

export default Header;
