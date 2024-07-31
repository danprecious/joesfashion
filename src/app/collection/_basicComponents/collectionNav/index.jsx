"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CollectionNav = () => {
  const pathName = usePathname();
  // console.log(pathName);

  const collectionLinks = [
    { name: "Ankara Wears", href: "/collection/ankara" },
    { name: "Cooperate Wears", href: "/collection/cooperate" },
    { name: "Senator Wears", href: "/collection/senators" },
  ];

  return (
    <div className="mb-10">
      {collectionLinks.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          className={`md:mr-5  mx-1 py-2 text-xs sm:text-sm  border-secondary ${
            pathName == link.href ? "border-b-2 border-black" : "text-stone-400"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default CollectionNav;
