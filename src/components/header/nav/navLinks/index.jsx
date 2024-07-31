import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const links = [
    
    {
      name: "About us",
      href: "/about-us",
    },
    {
      name: "Collection",
      href: "/collection/ankara",
    },
    
    {
      name: "Training programme",
      href: "/",
    },
    
  ];

  return (
    <div className="flex justify-between font-semibold">
      {links.map(({ href, name }, index) => {
        return (
          <Link key={name} href={href} className="text-xs">
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
