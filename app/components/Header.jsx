import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoCodeSharp } from "react-icons/io5";
import { PiPencilLineDuotone } from "react-icons/pi";
import { SlNotebook } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { GrSun } from "react-icons/gr";
import ThemeToggle from "./parts/ThemeToggle";

const navbarLinks = {
  left: [
    {
      link: "/",
      icon: <AiOutlineHome size={17} />,
    },
    {
      link: "/projects",
      icon: <IoCodeSharp size={17} />,
    },
    {
      link: "/hackathons",
      icon: <PiPencilLineDuotone size={17} />,
    },
    {
      link: "/notes",
      icon: <SlNotebook size={17} />,
    },
  ],
  right: [
    {
      link: "/github.com",
      icon: <FaGithub size={17} />,
    },
    {
      link: "/linkedin.com",
      icon: <FaLinkedin size={17} />,
    },
    {
      link: "/twitter.com",
      icon: <FaXTwitter size={17} />,
    },
    {
      link: "/youtube.com",
      icon: <BsYoutube size={17} />,
    },
  ],
};

const Header = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" />
      <div className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 dark:bg-[#0c0c0c] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {navbarLinks.left.map(({ link, icon }, index) => (
          <div
            key={index}
            className="flex aspect-square cursor-pointer items-center hover:w-[60px] justify-center rounded-full"
          >
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-[#3f3f3f] hover:bg-gray-100 hover:text-accent-foreground rounded-full size-9 md:size-12"
              data-state="closed"
              href={link}
            >
              {icon}
            </Link>
          </div>
        ))}
        <div className="w-[1px] bg-gray-200 block h-[40px]" />
        {navbarLinks.right.map(({ link, icon }, index) => (
          <div
            key={index}
            className="flex aspect-square cursor-pointer transition-all duration-500 items-center hover:w-[60px] justify-center rounded-full"
          >
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-[#3f3f3f] hover:bg-gray-100 hover:text-accent-foreground rounded-full size-9 md:size-12"
              data-state="closed"
              href={link}
            >
              {icon}
            </Link>
          </div>
        ))}
        <div className="flex aspect-square cursor-pointer hover:w-[60px] items-center justify-center rounded-full">
          <div
            className="inline-flex items-center justify-center dark:hover:bg-[#3f3f3f] hover:bg-gray-100 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full px-2"
            type="button"
          >
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
