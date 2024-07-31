"use client";

import CustomButton from "@/components/utilities/button";
import { useState, useRef, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const collection = () => {};

const SecondSection = () => {
  const [active, setActive] = useState("ankara");
  const [midImage, setMidImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeText, setActiveText] = useState("Ankara is good");

  const catalogue = {
    ankara: [
      "image1",
      "image2",
      "image3",
      "image4",
      "image5",
      "image6",
      "image7",
    ],
    coporate: [
      "coporateimage1",
      "image2",
      "image3",
      "image4",
      "image5",
      "image6",
      "image7",
    ],
    senator: [
      "senatorimage1",
      "image2",
      "image3",
      "image4",
      "image5",
      "image6",
      "image7",
    ],
  };

  const handleTypeClick = (e) => {
    let key = e.target.name;
    console.log(typeof key);
    setActive(key);
    setActiveText(() => {
      if (key === "ankara") {
        return "Ankara is good";
      } else if (key === "coporate") {
        return "Coporate is good";
      } else if (key === "senator") {
        return "Senator is good";
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
      <div className="">
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

                  if (indexImage) {
                    // console.log("found");
                    // console.log(index);
                  }
                  return (
                    <div
                      key={image}
                      onMouseEnter={() =>
                        setActiveIndex(() => catalogue[key].indexOf(image))
                      }
                      className={`${
                        indexImage
                          ? "lg:h-[100%] h-[80%] min-w-[60%] md:min-w-[25%]  bg-amber-400 my-4  transition-transform duration-300"
                          : "h-[40%] min-w-[25%] lg:min-w-[10%]  bg-stone-500 transform"
                      } mx-3 rounded-lg`}
                    >
                      {image}
                    </div>
                  );
                })}
              </div>
            )
          );
        })}
      </div>
      <div className="flex justify-center lg:justify-start">
        <CustomButton text="See all Collections">
          <FaArrowCircleRight />
        </CustomButton>
      </div>
    </div>
  );
};

export default SecondSection;
