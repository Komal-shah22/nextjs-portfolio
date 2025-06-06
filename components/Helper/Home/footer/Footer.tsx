import React from "react";
import { RiArrowUpLine } from "react-icons/ri";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <footer className="w-full bg-[#1a1919] text-[#29b9f1] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-base">Created by Komal Fareed</div>
        <div
          className="w-10 h-10 flex items-center justify-center bg-[#00bcd4] rounded-full cursor-pointer hover:bg-[#0097a7] transition duration-300"
          onClick={scrollToTop}
        >
          <RiArrowUpLine className="text-white text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;


