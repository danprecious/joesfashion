import React from "react";
import { heroFont } from "@/components/footer";
import localFont from "next/font/local";
import SectionLayout from "@/components/sectionLayout";
import ContactSection from "@/components/pageSections/contactSection";

const Training = () => {
  const photos = [
    {
      id: "1",
      imgSrc: "1",
      alt: "",
      orientation: "dowm",
    },
    {
      id: "2",
      imgSrc: "2",
      alt: "",
      orientation: "up",
    },
    {
      id: "3",
      imgSrc: "3",
      alt: "",
      orientation: "down",
    },
    {
      id: "4",
      imgSrc: "4",
      alt: "",
      orientation: "up",
    },
  ];

  return (
    <section className={`${heroFont.variable} `}>
      <div className="py-6 px-3 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 m-auto items-center place-items-center">
        {photos.map((image) => {
          return (
            <div
              key={image.id}
              className={`bg-stone-900 rounded-md md:w-[15em] w-full h-[10em] md:h-[15em] ${
                image.orientation == "up" ? "lg:mt-[4em] hidden md:flex" : ""
              }`}
            ></div>
          );
        })}
      </div>

      <div className="lg:mx-[15%] mb-20 px-3">
        <div className=" my-20">
          <h3 className="font-bold text-center lg:text-left text-[2rem] font-heroFont">
            We Accept trainees
          </h3>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            modi odit saepe vero fugit ea ad adipisci, totam quod nisi non?
            Obcaecati tempore optio explicabo distinctio necessitatibus nemo
            sint perspiciatis minus delectus voluptas maxime id quaerat
            dignissimos autem, adipisci dolores atque, illum maiores fugiat nisi
            expedita, aspernatur quia? Voluptate, molestias! Consequuntur
            voluptatum aspernatur aut, officia nulla maiores enim voluptate
            ipsam quis fugit similique explicabo perferendis ab non qui
            molestias. Ratione vitae vero itaque deserunt sint eum. Corporis,
            dolore voluptas quasi ipsa quidem minus labore nam fugiat quas culpa
            ipsam consequatur ea optio rerum praesentium accusamus ut ex
            provident. Molestias, unde?
          </p>
        </div>

        <div className="">
          <h3 className="font-bold text-[2rem] font-heroFont text-center lg:text-left">
            Training Durations
          </h3>
          <ul className="lg:mx-10 mt-5">
            <li className="list-disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste maxime incidunt, eligendi praesentium deleniti.</li>
            <li className="list-disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste maxime incidunt, eligendi praesentium deleniti.</li>
            <li className="list-disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste maxime incidunt, eligendi praesentium deleniti.</li>
            <li className="list-disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste maxime incidunt, eligendi praesentium deleniti.</li>
          </ul>
        </div>
      </div>
      <SectionLayout text="Learn more about our training programme">
          <ContactSection />
        </SectionLayout>
    </section>
  );
};

export default Training;
