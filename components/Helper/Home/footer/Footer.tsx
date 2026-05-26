import React from "react";
import { RiArrowUpLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-black/60 backdrop-blur-md border-2 border-gray-700/50 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-base text-[#29b9f1]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Created by Komal Fareed
          </motion.div>
          <motion.div
            className="w-10 h-10 flex items-center justify-center bg-[#00bcd4] rounded-full cursor-pointer hover:bg-[#0097a7] transition duration-300"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            aria-label="Scroll to top"
          >
            <RiArrowUpLine className="text-white text-2xl" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


