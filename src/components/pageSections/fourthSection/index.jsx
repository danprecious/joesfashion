import CustomButton from "@/components/utilities/button";
import Link from "next/link";

import images from '../../../utils/images.json'
import Image from "next/image";


const FourthSection = () => {
  return (
    <section className="lg:flex justify-between">
      <div className="lg:w-[55%] md:py-6 relative lg:px-5 px-4 py-4">
        <div className="relative  border-blue-900">
          <div className="md:w-[100%] w-[100%] h-[30em] custom-grid overflow-hidden">
            <div className="custom-grid bg-slate-900 md:w-[10em] w-full h-[10em]">
                <Image alt="cloth style image" width={500} height={500} src={images.fouthSection1} className="image" />
            </div>
            <div className="custom-grid bg-slate-900 md:w-[10em] w-full h-[12em]">
            <Image alt="cloth style image" width={500} height={500} src={images.fouthSection2} className="image" />

            </div>
            <div className="custom-grid bg-slate-900 md:w-[10em] w-full h-[10em]">
            <Image alt="cloth style image" width={500} height={500} src={images.fouthSection3} className="image" />

            </div>
            <div className="custom-grid bg-slate-900 md:w-[10em] w-full h-[10em]">
            <Image alt="cloth style image" width={500} height={500} src={images.fouthSection4} className="image" />

            </div>
            <div className="custom-grid bg-slate-900 md:w-[10em] w-full h-[12em]">
            <Image alt="cloth style image" width={500} height={500} src={images.fouthSection5} className="image" />

            </div>
            <div className="custom-grid bg-slate-900 md:w-[10em] w-full h-[10em]">
            <Image alt="cloth style image" width={500} height={500} src={images.fouthSection6} className="image" />

            </div>
            <div className="grid-overlay absolute w-[100%] h-[100%]"></div>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] flex flex-col justify-center px-2 md:px-6 my-10 lg:my-0">
        <p className="text-justify text-wrap">
          Experience the ultimate convenience with Joe's Fashion. From vibrant
          Ankara styles to sleek corporate attire and elegant Senator outfits,
          we deliver fashion directly to your doorstep. Wherever you are, trust
          us to provide seamless service that combines quality, style, and
          prompt delivery
        </p>
        <div className="my-10 flex justify-center md:justify-end">
          <Link href="/collection/senators">
            <CustomButton text="See collection"></CustomButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
