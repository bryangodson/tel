import Link from "next/link";
import React from "react";
interface menuProps {
  menuClicked: boolean;
}
function MenuNavigationItems({ menuClicked }: menuProps) {
  const Links = [
    {
      label: "Home",
      href: "/#hero",
    },

    {
      label: "Our programs",
      href: "/#programs",
    },
    {
      label: "Contact us",
      href: "mailto:theessenceleague08@gmail.com",
    },
    {
      label: "volunteer",
      href: "mailto:theessenceleague08@gmail.com",
    },
    {
      label: "donate",
      href: "tel:+233246917723",
    },
  ];
  return (
    <nav className={`${menuClicked ? "menuClicked" : "menuClosed"}`}>
      {Links.map(({ href, label }, index) => {
        return (
          <Link href={href} key={index}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export default MenuNavigationItems;
