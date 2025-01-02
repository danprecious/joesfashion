"use client";

import CustomButton from "@/components/utilities/button";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

import images from '../../../utils/images.json'
import Image from "next/image";

const collection = () => {};

const SecondSection = () => {
  const [active, setActive] = useState("ankara");
  const [midImage, setMidImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeText, setActiveText] = useState("Celebrate culture with vibrant and stylish Ankara designs, blending tradition and modernity for every occasion");

  const catalogue = {
    ankara: [ 
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754313/African_Suit_for_Men_Ankara_Print_Jacket_Coat_and_Pants_2_Pieces_Set_Dshiki_Men_s_Formal_Outfits_owiqpi.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594463/Dresses_For_Women___Fashion_Dress_Online_d9ipvj.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754493/African_Men_Clothing_Kaftan_African_Men_Shirt_and_Dashiki_Mens_Shirt_Casual_wear__oqeslr.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754493/Cop_These_8_Fabulous_Ankara_Styles_For_Men_A_Million_Styles_k5rval.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754493/Fashion_pvux3i.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754493/African_men_s_fashion_shirt_for_men_ustc06.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754311/African_Clothing_for_Men_Dashiki_Printed_Coats_Jacket_and_Pants_2_Piece_Outfits_Plus_Size_Outwear_Wax_Attire_Tracksuit_A1916077_-_AliExpress_200000343_o0sqef.png",
    ],
    coporate: [
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754314/Latest_Attractive_3_Piece_Suit_Designs_for_Men-_Formal_and_Occasion_Outfits_2023_hknjl4.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754314/Double_Breasted_Red_Checked_Men_s_Suit_Golden_6_Button_Casual_Slim_Fit_Classic_Wear_Men_s_Suit_Corporate_Wear_Casual_Wear_twb83z.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754310/fashion_fashionoutfits_trends_style_u9im2f.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594464/OrcaJump_-_Chemise_Hommes_Graphique_Imprim%C3%A9e_3D_Street_Daily_Button-Down_avec_Boutons_Striped_Geometry_Turnd_-_Gray___L_3_jixlla.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594463/order_on_WhatsApp_or_DM_on_Instagram_link_in_profile_z2j1ha.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594462/f256ed41-7dab-43d4-91cc-0f5e216eb909_fyzxjm.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594459/945449f8-2a72-435d-bab3-987c557a370a_ntfy2z.png",
    ],
    senator: [
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1734594459/African_Suits_for_Men_Single_Breasted_Blazer_and_Pants_2_Piece_Set_Dashiki_Outfits_Ankara_Attire_for_Wedding_uyttvg.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754599/9d7e1d31-4eb5-48cb-9630-041e0734501f_zq5avo.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754599/African_men_2_pieces_ow6ydq.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754600/CONTACT_WHATSAPP__221_78_634_93_73_rqzynr.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754602/Item_028___Jide_African_Men_Suit_senator_Wear_african_Clothing_african_Men_Clothing_african_Men_Shirt__dashiki_kaftan_prom_groom_Suit_-_Etsy_syad4m.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754601/f8053032-cf28-47de-9001-a2d1984feb6c_cn8doo.png",
      "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754603/e7d97ec1-d4a6-46a2-abff-02b4a0d3e7da_tt1aif.png",
    ],
  };

  const handleTypeClick = (e) => {
    let key = e.target.name;
    console.log(typeof key);
    setActive(key);
    setActiveText(() => {
      if (key === "ankara") {
        return "Celebrate culture with vibrant and stylish Ankara designs, blending tradition and modernity for every occasion.";
      } else if (key === "coporate") {
        return "Command attention with sleek and professional corporate attire, tailored to elevate your confidence at work and beyond.";
      } else if (key === "senator") {
        return "Exude elegance and class with our expertly crafted Senator wears, perfect for making a statement at any event.";
      }
    });
  };

  return (
    <div className="">
      <div className="md:mx-10 mx-1">
        <div>
          {Object.keys(catalogue).map((key) => {
            // console.log(key)
            return (
              <button
                key={key}
                name={key}
                onClick={handleTypeClick}
                className={`px-1 md:px-3 md:mx-2 mx-1 py-2 text-xs sm:text-sm  border-secondary ${
                  active == key ? "border-b-2 border-black" : "text-stone-400"
                }`}
              >
                {key} wears
              </button>
            );
          })}
        </div>
      </div>
      <div className="md:mx-10 mx-1 my-5">{activeText}</div>
      <div className="md:mx-10 mx-1">
        {Object.keys(catalogue).map((key) => {
          // console.log(key);
          return (
            active === key && (
              <div
                key={key}
                className="h-[20em] flex overflow-x-auto w-full overflow-y-hidden items-center  my-4 py-8"
              >
                {catalogue[key].map((image, index) => {
                  const indexImage =
                    catalogue[key].indexOf(image) === activeIndex;

                  return (
                    <div
                      key={image}
                      onMouseEnter={() =>
                        setActiveIndex(() => catalogue[key].indexOf(image))
                      }
                      className={`${
                        indexImage
                          ? "lg:h-[100%] h-[80%] min-w-[60%] md:min-w-[25%]  bg-amber-400 my-4  transition-all duration-1000"
                          : "h-[40%] min-w-[25%] lg:min-w-[10%]  bg-stone-500 transform"
                      } mx-3 rounded-lg`}
                    >
                      <Image alt="cloth style image" width={500} height={500} src={image} className="image" />
                    </div>
                  );
                })}
              </div>
            )
          );
        })}
      </div>
      <div className="flex justify-center lg:justify-start">
        <Link href="/collection/cooperate">
        <CustomButton text="See Collections">
          <FaArrowCircleRight />
        </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default SecondSection;
