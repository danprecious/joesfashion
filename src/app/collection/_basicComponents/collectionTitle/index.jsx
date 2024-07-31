"use client";

import { usePathname } from "next/navigation";

const CollectionTitle = () => {
  const pathName = usePathname();
  const pathSplit = pathName.split("/");
  const collectionPath = pathSplit[pathSplit.length - 1];

  const title =
    collectionPath.charAt(0).toLocaleUpperCase() + collectionPath.slice(1);
  console.log(title);

  return <div className="text-[2.5rem] font-bold ml-8">#{title}</div>;
};

export default CollectionTitle;
