import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Photos from "./components/Photos";
import Projects from "./components/Projects";
import GetInTouch from "./components/GetInTouch";
import Work from "./components/Work";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className=" flex flex-col space-y-10 max-w-[672px] pt-[48px] pb-[24px] mx-auto sm:py-24 px-[24px]">
      <Hero />
      <About />
      <Photos />
      <Work />
      <Education />
      <Projects />
      <GetInTouch />
    </main>
  );
}
