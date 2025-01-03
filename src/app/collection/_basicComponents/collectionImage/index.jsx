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
        return "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754494/Pin_by_Edmond_on_Mes_enregistrements_in_2022_tl4zlx.png";
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
          return "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754494/Pin_by_Edmond_on_Mes_enregistrements_in_2022_tl4zlx.png";
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
      className="image"
    />
  );
};

export default CollectionImage;
