"use client";

import { links } from "@/utils/constants";
import { GlobalState } from "@/stateManager/context";
import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const path = usePathname();
  console.log(path);
  const { state } = useContext(GlobalState);

  return (
    <div
      className={
        state.toggleNav == true
          ? `flex absolute right-0 top-24 w-full z-50 bg-white  border`
          : `hidden `
      }
    >
      <div className="w-full flex flex-col right-0 top-5">
        {links.map((link, index) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className={`${
                path == link.href
                  ? `text-amber-950 font-bold border-b-amber-950`
                  : ``
              } px-10 py-8 text-right  flex justify-end`}
            >
              <p className="border-b-4 text-right">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const MobileMenuButton = () => {
  const { state, dispatch } = useContext(GlobalState);
  const { toggleNav } = state;

  const handleToggle = () => {
    dispatch({ type: "NAV_TOGGLE", payload: !toggleNav });
  };

  return (
    <div>
      <button onClick={() => handleToggle()}>
        <BiMenu />
      </button>
    </div>
  );
};
