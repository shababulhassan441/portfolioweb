import React from "react";
import { BentoGridThirdDemo } from "../components/GridLayout";
import { TracingBeamDemo } from "../components/TracingBeam";

const ProductEngineering = () => {
  return (
    <main className=' flex flex-col space-y-10 max-w-[720px] pt-[48px] pb-[24px] mx-auto sm:py-24 px-[24px]"'>
      <BentoGridThirdDemo />
      <TracingBeamDemo />
    </main>
  );
};

export default ProductEngineering;
