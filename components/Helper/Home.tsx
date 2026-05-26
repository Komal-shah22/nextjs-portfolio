'use client'

import Hero from './Home/Hero/Hero';
import About from './Home/about/About';
import Certifications from './Home/certificate/Certificate';
import Contact from './Home/contact/Contact';
import Footer from './Home/footer/Footer';
import ProjectSlider from './Home/projects/Projects';
import SkillsSection from './Home/skills/SkillsSection';
import { motion } from 'framer-motion';

 const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />

      <About />
      <SkillsSection/>
      <div className='py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto bg-black/60 backdrop-blur-md border-2 border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl'>
          <motion.h1
            id="projects"
            className="gradient-text text-[#2bccf5] text-6xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h1>
          <ProjectSlider />
        </div>
      </div>
      <Certifications />
      <Contact />
      <Footer />

    </div>
  );
};
export default Home


