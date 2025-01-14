import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
interface menuProps {
  menuClicked: boolean;
}
function MenuNavigationItems({ menuClicked }: menuProps) {
  const pathname = usePathname();

  const Links = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Publications",
      href: "/publications",
    },
    {
      label: "Media",
      href: "/media",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "About us",
      href: "/about-us",
    },
  ];
  return (
    <nav
      className={`${menuClicked ? "menuClicked" : "menuClosed"} flex gap-x-8`}>
      {Links.map(({ href, label }, index) => {
        return (
          <Link
            href={href}
            key={index}
            className={`${
              pathname == href ? "text-tel-blue" : "text-tel-black"
            }`}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export default MenuNavigationItems;
