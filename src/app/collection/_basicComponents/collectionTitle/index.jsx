"use client";

import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import { heroFont } from "@/components/footer";

const CollectionTitle = () => {
  const pathName = usePathname();
  const pathSplit = pathName.split("/");
  const collectionPath = pathSplit[pathSplit.length - 1];

  const title =
    collectionPath.charAt(0).toLocaleUpperCase() + collectionPath.slice(1);
  console.log(title);

  return (
    <div className={`${heroFont.variable}`}>
      <h2 className="text-[2.5rem] font-bold ml-8 font-heroFont">#{title}</h2>
    </div>
  );
};

export default CollectionTitle;
