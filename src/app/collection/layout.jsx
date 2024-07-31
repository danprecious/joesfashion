import CollectionNav from "@/app/collection/_basicComponents/collectionNav";
import Link from "next/link";
import CollectionTitle from "./_basicComponents/collectionTitle";

const CollectionLayout = ({ children }) => {

  return (
    <section className="flex lg:mx-16 md:mx-8 px-3 md:flex-row flex-col">
      <div className="md:w-[30%] md:h-[70vh] h-[50vh]">
       <CollectionTitle />
        <div className="h-[80%] w-full bg-amber-950"></div>
      </div>
      <div className="lg:w-[70%] lg:pl-14 md:pl-8 p-3 ">
        <CollectionNav />
        {children}
      </div>
    </section>
  );
};

export default CollectionLayout;
