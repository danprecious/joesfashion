"use client";

import Image from "next/image";
import usePagePath from "../usePagePath";
import { useEffect, useState } from "react";

const CollectionImage = () => {
  const title = usePagePath();

  console.log(title);

  const [image, setImage] = useState(() => {
    switch (title) {
      case "Ankara":
        return "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754313/African_Suit_for_Men_Ankara_Print_Jacket_Coat_and_Pants_2_Pieces_Set_Dshiki_Men_s_Formal_Outfits_owiqpi.png";
      case "Senators":
        return "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754600/CONTACT_WHATSAPP__221_78_634_93_73_rqzynr.png";
      case "Corperate":
        return "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754310/fashion_fashionoutfits_trends_style_u9im2f.png";
    }
  });

  useEffect(() => {
    setImage(() => {
      switch (title) {
        case "Ankara":
          return "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754313/African_Suit_for_Men_Ankara_Print_Jacket_Coat_and_Pants_2_Pieces_Set_Dshiki_Men_s_Formal_Outfits_owiqpi.png";
        case "Senators":
          return "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754600/CONTACT_WHATSAPP__221_78_634_93_73_rqzynr.png";
        case "Corperate":
          return "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754310/fashion_fashionoutfits_trends_style_u9im2f.png";
      }
    });
  }, [title]);

  return (
    <Image
      alt="cloth style image"
      width={500}
      height={500}
      src={image}
      className="object-contain w-full h-[100%]"
    />
  );
};

export default CollectionImage;
