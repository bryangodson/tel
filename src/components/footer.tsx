import React from "react";
import logo from "../images/tel_logo.png";
import Image from "next/image";
function Footer() {
  return (
    <div className="footer">
      <Image src={logo} alt="tel logo" />
      <small>&copy; copyright {new Date().getFullYear()}</small>
      <small>All rights reserved</small>
      <small>The Essence League</small>
    </div>
  );
}

export default Footer;
