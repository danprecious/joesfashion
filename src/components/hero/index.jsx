"use client";
import localFont from "next/font/local";
import images from '../../utils/images.json';

import ImageCard from "./imageCard";
import {motion} from 'framer-motion'

const heroFont = localFont({
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-heroFont",
});



const cardImages = [
  { index: 0, delay: 0.1, height: "40%", width: "20%", minHeight: "17em", orientation: "", imagSrc: images.hero1, imageAlt: "Gold senator wear" },
  { index: 0, delay: 0.2, height: "40%", width: "100%", minHeight: "15em", orientation: "", imagSrc: images.hero2, imageAlt: "A simple, classic shirt" },
  { index: 0, delay: 0.3, height: "60%", width: "100%", minHeight: "15em", orientation: "", imagSrc: images.hero3, imageAlt: "An elegant, gold color, senator wear" },
  { index: 0, delay: 0.1, height: "100%", width: "20%", minHeight: "100%", orientation: "", imagSrc: images.heroMain, imageAlt: "A man in cooperate wear" },
  { index: 0, delay: 0.1, height: "60%", width: "100%", minHeight: "15em", orientation: "", imagSrc: images.hero4, imageAlt: "White senator wear" },
  { index: 0, delay: 0.3, height: "40%", width: "100%", minHeight: "15em", orientation: "", imagSrc: images.hero5, imageAlt: "Couple on green ankara attire" },
  { index: 0, delay: 0.1, height: "40%", width: "20%", minHeight: "17em", orientation: "", imagSrc: images.hero6, imageAlt: "An classic ankara gown for ladies" },
]

const Hero = () => {
  return (
    <div className={`${heroFont.variable}`}>
    
      <div className="justify-center flex">
    <motion.div
     initial={{ opacity: 0, y: -100 }} // Start slightly below and invisible
     animate={{ opacity: 1, y: 0 }}  // Fade in and move up to the final position
     transition={{ duration: 0.5, delay: 1 }} // Animation duration and delay
     className="flex w-full justify-center"
     style={{ display: 'flex', width: '100%', height: '100%' }}>
        <h1 className="text-center w-full font-heroFont lg:text-[4rem] md:text-[2.5rem] text-[3rem] hero-text font-bod max-w-[89%] text-wrap md:max-w-[60%]  mt-4 mb-2">
          Unleash Your Style With Us
        </h1>
    </motion.div>
      </div>


      <div className="relative mx-3 my-2 lg:mt-8 lg:mx-20 h-screen flex  flex-col items-center justify-center lg:flex-row md:justify-between">

        <ImageCard delay={0.7} imgSrc={images.hero1} imgAlt={cardImages[0].imageAlt} height={cardImages[0].height} width={cardImages[0].width} />

        <div className="h-[80%]  flex-col relative w-[20%] mx-3 hidden lg:flex ">
          <ImageCard delay={0.8} imgSrc={images.hero2} imgAlt={cardImages[1].imageAlt} height={cardImages[1].height} width={cardImages[1].width} />
          <ImageCard delay={0.9} imgSrc={images.hero3} imgAlt={cardImages[2].imageAlt} height={cardImages[2].height} width={cardImages[2].width} />

        </div>
        <ImageCard delay={1} imgSrc={images.heroMain} imgAlt={cardImages[3].imageAlt} height={cardImages[3].height} width={cardImages[3].width} />
        <div className="h-[80%] flex-col relative w-[20%] mx-3 hidden lg:flex">
          <ImageCard delay={1.1} imgSrc={images.hero4} imgAlt={cardImages[4].imageAlt} height={cardImages[4].height} width={cardImages[4].width} />
          <ImageCard delay={1.2} imgSrc={images.hero5} imgAlt={cardImages[5].imageAlt} height={cardImages[5].height} width={cardImages[5].width} />

        </div>

        <ImageCard delay={1.3} imgSrc={images.hero6} imgAlt={cardImages[6].imageAlt} height={cardImages[6].height} width={cardImages[6].width} />

      </div>
    </div>

  );
};

export default Hero;