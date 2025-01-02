import React from "react";
import { FaCircleNotch } from "react-icons/fa";
import { heroFont } from "@/components/footer";
import localFont from "next/font/local";
import ContactSection from "@/components/pageSections/contactSection";
import SectionLayout from "@/components/sectionLayout";

import Image from "next/image";

const AboutPage = () => {
  const services = [
    {
      name: "Custom Tailoring",
      icon: <FaCircleNotch />,
      image:
        "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754313/African_Suit_for_Men_Ankara_Print_Jacket_Coat_and_Pants_2_Pieces_Set_Dshiki_Men_s_Formal_Outfits_owiqpi.png",
      textContent:
        "Bring your dream outfit to life with our expert tailoring services. Whether it’s for a special occasion or everyday wear, we create styles that fit you perfectly.",
    },
    {
      name: "Ready-to-wear Collection",
      icon: <FaCircleNotch />,
      image: "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754314/Double_Breasted_Red_Checked_Men_s_Suit_Golden_6_Button_Casual_Slim_Fit_Classic_Wear_Men_s_Suit_Corporate_Wear_Casual_Wear_twb83z.png",
      textContent:
        "Discover a curated selection of pre-designed outfits that are stylish, versatile, and ready to wear. Perfect for when you need a quick fashion fix!",
    },
    {
      name: "Nationwide Delivery",
      icon: <FaCircleNotch />,
      image: "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735757416/Premium_Photo___Free_fast_delivery_service_by_scooter_on_yellow_background_Courier_delivers_food_order_A_man_delivers_a_parcel_around_town_Express_delivery_cartoon_design_AI_Generation_fv9ejw.jpg",
      textContent:
        "Enjoy seamless delivery services across the country. Wherever you are, we’ll bring your favorite fashion pieces straight to your doorstep",
    },
    {
      name: "Style Consultation",
      icon: <FaCircleNotch />,
      image: "https://res.cloudinary.com/dv7vjs0s0/image/upload/v1735754599/9d7e1d31-4eb5-48cb-9630-041e0734501f_zq5avo.png",
      textContent:
        "Not sure what suits you best? Let our fashion experts guide you in selecting outfits that highlight your unique style and personality.",
    },
  ];

  const teamMembers = [
    {
      name: "Mr Joe",
      image: "",
      role: "The Boss",
    },
    {
      name: "Mr Black",
      image: "",
      role: "Worker",
    },
    {
      name: "Mr Yenworo",
      image: "",
      role: "Apprentice",
    },
    {
      name: "Mr Wizz",
      image: "",
      role: "Apprentice",
    },
  ];

  return (
    <section className={`${heroFont.variable} `}>
      <div className="flex lg:mx-16 md:mx-10 md:py-16">
        <div className="md:w-[25%] min-h-[60vh] hidden md:block">
          <div className="flex h-[50%]">
            <div className="w-[50%] border-t-4 border-t-amber-950 animate-pulse border-r-4 "></div>
            <div className="w-[50%] border-t-4 border-t-amber-950 animate-pulse"></div>
          </div>
          <div className="flex h-[50%]">
            <div className="w-[50%] border-r-4 border-b-4 border-l-4 animate-pulse border--amber-950 rounded-b-[4em] rounded-l-[4em]"></div>
            <div className=""></div>
          </div>
        </div>
        <div className="md:w-[75%] ">
          <div className="md:ml-10 px-5">
            <div className="mb-20">
              <h1 className="text-[2em] my-3 font-heroFont">About us</h1>
              <p>
                Joe's Fashion is your go-to destination for style that speaks
                confidence and personality. We bring together the best of
                vibrant cultural designs, modern elegance, and everyday
                versatility. Our mission is simple: to deliver high-quality,
                expertly crafted outfits that make you feel incredible, wherever
                life takes you. From bold Ankara prints to sharp corporate looks
                and timeless Senator styles, we create fashion for every
                occasion. With a commitment to detail, comfort, and customer
                satisfaction, we’re here to redefine how you experience fashion.
                Step into a world of style made just for you!
              </p>
            </div>
            <div className="my-20">
              <h2 className="text-[2rem] my-3 font-heroFont">
                Services we offer
              </h2>
              <div className="custom-grid w-full justify-between py-8">
                {services.map((service, index) => (
                  <div
                    key={service.name}
                    className=" lg:w-[12em]  w-full flex flex-col items-center"
                  >
                    <div className="bg-stone-600 w-full lg:w-[12em] h-[13em] mb-4  rounded-md mx-8">
                      <Image
                        alt="cloth style image"
                        width={500}
                        height={500}
                        src={service.image}
                        className="image"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{service.name}</p>
                      <p className="text-sm py-5">{service.textContent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="my-20">
            <h2 className="text-[2em] my-5">Meet the work team</h2>
            <div className="custom-grid w-full justify-between py-8">
              {
                teamMembers.map((member, index) => <div key={member.name} className="mb-8 mx-5">
                  <div className="w-[15em] h-[15em] lg:w-[10em] lg:h-[10em] rounded-full bg-stone-600"></div>
                  <p className="text-center py-3">{member.name}</p>
                </div>)
              }
            </div>
          </div>
          <div className="my-16">
            <h2 className="text-[2em]">Contact Info</h2>
          </div> */}
          </div>
        </div>
      </div>
      <SectionLayout text="Get an Attire For Your Next Outing">
        <ContactSection />
      </SectionLayout>
    </section>
  );
};

export default AboutPage;
