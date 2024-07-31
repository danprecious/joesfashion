"use client"

import { useState } from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const reviewsData = [
  {
    name: "Jackson",
    image: "",
    reviewMessage:
      "Absolutely stellar! I brought in a custom design and they excuted flawlessly. The attention to detail was impeccable, and the turnaround time was impressive. Will definitely be back for future tailoring needs",
  },
  {
    name: "Samson D.",
    image: "",
    reviewMessage:
      "This is the best tailoring experience I've ever had. The tailor's skill is unparalleled, and their dedictaion to perfection is evident in the stiches. My suit fits better than i ever imagoned possible. Thank you Joe's Fashion!",
  },
];
const FifthSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length);
  }

  return (
    <section className="flex justify-center relative mb-15">
      {
        reviewsData.map(({reviewMessage, name, image}, index) => {
          return <div key={index} className={`${index == currentIndex ? "hidden" : "flex"} flex-col w-[60%]`}>
            
                <p className="text-center py-5 text-[1.2rem]">"{reviewMessage}"</p>
                <div className="flex justify-center py-10 items-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-stone-700 mx-2"></div>
                    <div>
                      <p>{name}</p>
                    </div>
                </div>
          </div>
        })
      }

      <button onClick={handlePrev} className="absolute left-0 top-[50%]"><BiLeftArrowCircle className="text-[2rem]"/></button>
      <button onClick={handlePrev} className="absolute right-0 top-[50%]"><FaArrowCircleRight className="text-[2rem]"/></button>
    </section>
  );
};

export default FifthSection;
