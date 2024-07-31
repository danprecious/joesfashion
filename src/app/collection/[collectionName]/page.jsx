import React from "react";

const AnkaraCollection = () => {
  const data = [
    {
      name: "ankara",
      images: ["//", "//", "//", "//", "//", "//", "//", "//"],
    },
  ];

  const [collection] = data;
// console.log(collection.images)

  return (
    <div className="p-4 flex custom-grid max-h-[60vh] overflow-y-scroll">{
      collection.images.map(({images}, index) => {
        return (
          <div
            key={index}
            className="bg-yellow-900 w-[10em] h-[10em] "
          ></div>
        );
      })}
    </div>
  );
};

export default AnkaraCollection;
