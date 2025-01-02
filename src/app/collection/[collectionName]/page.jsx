"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const AnkaraCollection = () => {
  const pathName = usePathname();
  const pathSplit = pathName.split("/");
  const collectionPath = pathSplit[pathSplit.length - 1];

  const title =
    collectionPath.charAt(0).toLocaleUpperCase() + collectionPath.slice(1);

  const collectionData = [
    {
      name: "ankara",
      images: [
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754313/African_Suit_for_Men_Ankara_Print_Jacket_Coat_and_Pants_2_Pieces_Set_Dshiki_Men_s_Formal_Outfits_owiqpi.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594463/Dresses_For_Women___Fashion_Dress_Online_d9ipvj.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754493/African_Men_Clothing_Kaftan_African_Men_Shirt_and_Dashiki_Mens_Shirt_Casual_wear__oqeslr.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754493/Cop_These_8_Fabulous_Ankara_Styles_For_Men_A_Million_Styles_k5rval.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754493/Fashion_pvux3i.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754493/African_men_s_fashion_shirt_for_men_ustc06.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754311/African_Clothing_for_Men_Dashiki_Printed_Coats_Jacket_and_Pants_2_Piece_Outfits_Plus_Size_Outwear_Wax_Attire_Tracksuit_A1916077_-_AliExpress_200000343_o0sqef.png",
      ],
    },

    {
      name: "senators",
      images: [
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594459/African_Suits_for_Men_Single_Breasted_Blazer_and_Pants_2_Piece_Set_Dashiki_Outfits_Ankara_Attire_for_Wedding_uyttvg.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754599/9d7e1d31-4eb5-48cb-9630-041e0734501f_zq5avo.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754599/African_men_2_pieces_ow6ydq.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754600/CONTACT_WHATSAPP__221_78_634_93_73_rqzynr.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754602/Item_028___Jide_African_Men_Suit_senator_Wear_african_Clothing_african_Men_Clothing_african_Men_Shirt__dashiki_kaftan_prom_groom_Suit_-_Etsy_syad4m.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754601/f8053032-cf28-47de-9001-a2d1984feb6c_cn8doo.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754603/e7d97ec1-d4a6-46a2-abff-02b4a0d3e7da_tt1aif.png",
      ],
    },

    {
      name: "corperate",
      images: [
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754314/Latest_Attractive_3_Piece_Suit_Designs_for_Men-_Formal_and_Occasion_Outfits_2023_hknjl4.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754314/Double_Breasted_Red_Checked_Men_s_Suit_Golden_6_Button_Casual_Slim_Fit_Classic_Wear_Men_s_Suit_Corporate_Wear_Casual_Wear_twb83z.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754310/fashion_fashionoutfits_trends_style_u9im2f.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594464/OrcaJump_-_Chemise_Hommes_Graphique_Imprim%C3%A9e_3D_Street_Daily_Button-Down_avec_Boutons_Striped_Geometry_Turnd_-_Gray___L_3_jixlla.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594463/order_on_WhatsApp_or_DM_on_Instagram_link_in_profile_z2j1ha.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594462/f256ed41-7dab-43d4-91cc-0f5e216eb909_fyzxjm.png",
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594459/945449f8-2a72-435d-bab3-987c557a370a_ntfy2z.png",
      ],
    },
  ];

  const [data, setData] = useState(() => {
    const collection = collectionData.find((item) => item.name === title.toLowerCase());
    return collection || null; // Default to null if no match is found
  });
  console.log(data);
  
  // console.log(collection.images)

  return (
    <div className="p-4 flex custom-grid max-h-[60vh] overflow-y-scroll">
      {data.images.map((image, index) => {
        return (
          <div key={index} className="bg-yellow-900 w-[10em] h-[10em] ">
            <Image
              alt="cloth style image"
              width={500}
              height={500}
              src={image}
              className="image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default AnkaraCollection;
