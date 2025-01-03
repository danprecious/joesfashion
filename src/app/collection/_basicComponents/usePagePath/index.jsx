"use client";

import { usePathname } from "next/navigation";

const usePagePath = () => {
  const pathName = usePathname();
  const pathSplit = pathName.split("/");
  const collectionPath = pathSplit[pathSplit.length - 1];

  const title =
    collectionPath.charAt(0).toLocaleUpperCase() + collectionPath.slice(1);
  console.log(title);

  return title;
};

export default usePagePath;
