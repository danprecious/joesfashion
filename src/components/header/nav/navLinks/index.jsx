import Link from "next/link";
import React from "react";
import { links } from "@/utils/constants";

const NavLinks = () => {

  return (
    <div className="flex justify-between font-semibold">
      {links.map(({ href, name }, index) => {
        return (
          <Link key={name} href={href} className="text-xs mx-1">
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
