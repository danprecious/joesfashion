import CustomButton from "@/components/utilities/button";

const FourthSection = () => {
  return (
    <section className="lg:flex justify-between">
      <div className="lg:w-[55%] md:py-6 relative lg:px-5 px-4 py-4">
        <div className="relative  border-blue-900">
          <div className="md:w-[100%] w-[100%] h-[30em] custom-grid overflow-hidden">
            <div className="custom-grid bg-slate-900 w-[10em] h-[10em]"></div>
            <div className="custom-grid bg-slate-900 w-[10em] h-[12em]"></div>
            <div className="custom-grid bg-slate-900 w-[10em] h-[10em]"></div>
            <div className="custom-grid bg-slate-900 w-[10em] h-[10em]"></div>
            <div className="custom-grid bg-slate-900 w-[10em] h-[12em]"></div>
            <div className="custom-grid bg-slate-900 w-[10em] h-[10em]"></div>
            <div className="grid-overlay absolute w-[100%] h-[100%]">
          </div>

            </div>
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

export default FourthSection;
