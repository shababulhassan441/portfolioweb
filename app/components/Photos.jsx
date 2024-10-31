import React from "react";
import { photoGallery } from "../data/data";
const Photos = () => {
  return (
    <section className="">
      <div className=" columns-2 gap-4 sm:columns-3">
        {photoGallery.map(({ image }, index) => {
          return (
            <div key={index}>
              <img className="aspect-w-16 aspect-h-9 mb-4 w-full rounded-lg object-cover" src={image} alt="image" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Photos;
