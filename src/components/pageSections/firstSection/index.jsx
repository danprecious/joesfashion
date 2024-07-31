import CustomButton from "@/components/utilities/button";
import React from "react";

const FirstSection = () => {
  return (
    <section className="lg:flex justify-between">
      <div className="lg:w-[55%] md:py-14 relative lg:px-10 px-4 py-4">
        <div className="flex justify-end border-blue-900">
          <div className="md:w-[80%] w-[100%] h-[20em] bg-orange-800 md:mr-6 mx-2"></div>
          <div className="absolute top-0 left-10 h-[4em] md:h-[7em] w-[4em] md:w-[7em] bg-stone-600 rounded-md"></div>
          <div className="absolute bottom-0 md:left-28 left-20 h-[4em] md:h-[7em] w-[4em] md:w-[7em] bg-stone-600 rounded-md"></div>
          <div className="absolute bottom-10 h-[6em] md:h-[10em] w-[6em] md:w-[10em] bg-stone-600 rounded-md"></div>
          <div className=""></div>
          <div></div>
        </div>
      </div>
      <div className="lg:w-[40%] flex flex-col justify-center px-2 md:px-6 my-10 lg:my-0">
        <p className="text-justify text-wrap">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          repudiandae sunt reprehenderit, dolore deleniti repellendus doloremque
          sint, laborum voluptatem facilis ut hic incidunt dolorem blanditiis
          minima nostrum ullam, praesentium repellat quos dignissimos fugit
          asperiores! Molestiae beatae adipisci, similique vel
        </p>
        <div className="my-10 flex justify-center md:justify-end">
          <CustomButton text="See collection"></CustomButton>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
