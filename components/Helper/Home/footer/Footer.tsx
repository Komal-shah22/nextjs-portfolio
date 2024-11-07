import React from 'react';
import { RiContactsBookUploadLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1919] text-[#29b9f1] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-base">Design by Komal Fareed</div>
        <div className="text-base">
          <RiContactsBookUploadLine className="text-[#28cdeb] font-bold" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
