import React from "react";
import { heroFont } from "@/components/footer";
import localFont from "next/font/local";
import SectionLayout from "@/components/sectionLayout";
import ContactSection from "@/components/pageSections/contactSection";
import Image from "next/image";

const Training = () => {
  const photos = [
    {
      id: "1",
      imgSrc:
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735891206/Bespoke_Tailoring_ymu6t2.jpg",
      alt: "",
      orientation: "dowm",
    },
    {
      id: "2",
      imgSrc:
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735891206/chittleboroughandmorgan_ohfjww.jpg",
      alt: "",
      orientation: "up",
    },
    {
      id: "3",
      imgSrc:
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735891206/175c7373-00a7-4528-b6b1-ef4dbf7437a7_swvrsu.jpg",
      alt: "",
      orientation: "down",
    },
    {
      id: "4",
      imgSrc:
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735891205/Serna_tailor_shop_bdm829.jpg",
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
              className={`bg-stone-900 rounded-md md:w-[15em] w-full h-[10em] md:h-[15em] p-5 ${
                image.orientation == "up" ? "lg:mt-[4em] hidden md:flex" : ""
              }`}
            >
              <Image
                alt="cloth style image"
                width={500}
                height={500}
                src={image.imgSrc}
                className="image rounded-md"
              />
            </div>
          );
        })}
      </div>

      <div className="lg:mx-[15%] mb-20 px-3">
        <div className=" my-20">
          <h3 className="font-bold text-center lg:text-left text-[2rem] font-heroFont">
            We Accept trainees
          </h3>
          <p className="mt-5">
            At Joe’s Fashion, we’re passionate about nurturing talent and
            inspiring creativity. Our training program offers hands-on
            experience in design, tailoring, and fashion business skills.
            Whether you’re starting fresh or enhancing your expertise, our
            experienced team guides you every step of the way. Gain real-world
            insights, master the art of crafting stunning outfits, and take the
            first step toward a successful career in fashion. Join us today and
            transform your passion into expertise!
          </p>
        </div>

        <div className="">
          <h3 className="font-bold text-[2rem] font-heroFont text-center lg:text-left">
            Training Durations
          </h3>
          <ul className="lg:mx-10 mt-5">
            <li className="list-disc">
              <strong>6 Months Program: </strong>
              <span>
                designed for beginners seeking foundational skills in tailoring,
                pattern making, and basic fashion design.
              </span>
            </li>
            <li className="list-disc">
              <strong>1 Year Program: </strong>
              ideal for intermediate learners ready to deepen their expertise in
              sewing techniques, creative design, and finishing touches.
            </li>
            <li className="list-disc">
              <strong>1 Year, 6 Months Program: </strong>a comprehensive course
              covering advanced tailoring, fashion business essentials, and
              hands-on industry experience.
            </li>
            <li className="list-disc">
              <strong>2+ Years Program: </strong>
              perfect for aspiring professionals aiming to master couture
              designs, bespoke tailoring, and entrepreneurial skills to launch
              their brand.
            </li>
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
