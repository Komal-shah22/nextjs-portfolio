'use client'

import Hero from './Home/Hero/Hero';
import About from './Home/about/About';
import Contact from './Home/contact/Contact';
import Footer from './Home/footer/Footer';
import ProjectSlider from './Home/projects/Projects';
import SkillsSection from './Home/skills/SkillsSection';

 const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      
      <About />
      <SkillsSection/>
      <div className='bg-black'>
      <h1 id="projects"  className="project-bg bg-black  text-[#2bccf5] text-6xl font-bold text-center h-auto pb-20">My Projects</h1>
      </div>
      <ProjectSlider />
      <Contact />
      <Footer />

    </div>
  );
};
export default Home


