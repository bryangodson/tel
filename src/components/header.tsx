"use client";
import React, { useState, useCallback } from "react";
import Image from "@/components/image";
import MenuNavigationItems from "./menu";

const Header = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  //toggle mobile nav display
  const handleMenuClick = useCallback(() => {
    setMenuClicked(!menuClicked);
  }, [menuClicked]);

  return (
    <header
      className={`shadow-md bg-tel-white w-full flex items-center justify-between p-2 h-20 sticky top-0 z-30 `}>
      <Image src="/images/tel_logo.jpeg" alt="logo" width={80} height={80} />
      <MenuNavigationItems menuClicked={menuClicked} />

      <section
        onClick={handleMenuClick}
        className={`menu lg:hidden ${
          menuClicked ? "menuClicked" : "menuClosed"
        } `}>
        <span></span>
        <span></span>
        <span></span>
      </section>
    </header>
  );
};

export default Header;
