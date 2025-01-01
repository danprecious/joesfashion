import React from "react";
import localFont from "next/font/local";
import { heroFont } from "@/components/footer";

const Logo = () => {
  return (
    <div className={`${heroFont.variable}`}>
      <p className="font-heroFont font-bold">
        Joes'<span className="text-amber-950">Fashion</span>
      </p>
    </div>
  );
};

export default Logo;
