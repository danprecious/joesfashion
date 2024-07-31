import HeroSection from "@/components/hero";
import ContactSection from "@/components/pageSections/contactSection";
import FifthSection from "@/components/pageSections/fifthSection";
import FirstSection from "@/components/pageSections/firstSection";
import FourthSection from "@/components/pageSections/fourthSection";
import SecondSection from "@/components/pageSections/secondSection";
import ThirdSection from "@/components/pageSections/thirdSection";
import SectionLayout from "@/components/sectionLayout";
import CustomButton from "@/components/utilities/button";

const Homepage = () => {
  return (
    <>
      <div className="">
        <HeroSection />
        <SectionLayout text="Elevate Your Wardrobe With Our Elegant Styles">
          <FirstSection />
        </SectionLayout>
        <SectionLayout text="Explore our Fashion Catalogue">
          <SecondSection />
        </SectionLayout>
        <SectionLayout text="Have Your Attire Delivered to You, Anywhere">
          <ThirdSection />
        </SectionLayout>
        <SectionLayout text="Modern Styles, Made Perfectly For You">
          <FourthSection />
        </SectionLayout>
        <SectionLayout text="What Our Customers Say">
          <FifthSection />
        </SectionLayout>
        <SectionLayout text="Get an Attire For Your Next Outing">
          <ContactSection />
        </SectionLayout>
      </div>
    </>
  );
};

export default Homepage;
