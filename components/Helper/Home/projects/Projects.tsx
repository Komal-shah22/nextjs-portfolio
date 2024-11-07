
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaGithub, FaEye } from 'react-icons/fa6';

const projects = [
  {
    title: 'Portfolio Html & Css',
    description: 'A personal portfolio website built with html & css .',
    image: '/portfolio-logo.jpeg',
    link: 'https://beamish-twilight-4d4b62.netlify.app/',
    github: 'https://github.com/Komal-shah22/portfolio-with-html-css.git',
  },
  {
    title: 'countDownTimer',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
    image: '/countdowntimer.png',
    link: 'https://yourecommerce.com',
    github: 'https://github.com/Komal-shah22/CountdownTimer.git',
  },
  {
    title: 'Youtube Clone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing .',
    image: '/youtube.png',
    link: 'https://yourchatapp.com',
    github: 'https://github.com/youtubeclone',
  },
  {
    title: 'Wikipidia clone',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. .',
    image: 'wikipidia.jpeg',
    link: 'https://yourblog.com',
    github: 'https://github.com/wikipediaclone',
  },
  {
    title: 'Netfilix clone',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. .',
    image: 'Netflix.jpeg',
    link: 'https://dynamic-hamster-44c832.netlify.app/',
    github: 'https://github.com/Komal-shah22/Netflix-Website.git',
  },
];

const ProjectCard = ({ project, isActive, position }: { project: any; isActive: boolean; position: number }) => {
  return (
    <>
    {/* <h1 id="projects"  className="project-bg bg-black  text-[#2bccf5] text-5xl font-bold text-center h-auto pb-20">My Projects</h1> */}

    <motion.div className={`bg-[black] absolute w-[300px] h-[400px] p-4 rounded-lg shadow-lg border-[2px] transition-transform duration-500 ${isActive ? 'z-20' : 'z-10'}`}
      style={{ transform: `translateX(${position * 100}%)` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.8 }}>

      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="bg-transparent p-4 rounded-b-lg">
        <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
        <p className="text-white mb-4">{project.description}</p>

        <div className="flex space-x-4">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-300">
            <FaEye size={24} />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500 transition duration-300">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </motion.div>
    </>
  );
};

const ProjectSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="bg-black relative w-full flex items-center justify-center py-12">
      <button
        onClick={handlePrev}
        className="absolute left-4 ml-36 bg-[#45d4e7] text-white p-4 rounded-full shadow-md hover:bg-[#39a2f8] transition duration-300 z-30">
        &#8592;
      </button>

      <button
        onClick={handleNext}
        className="absolute  mr-36 right-4 bg-[#34d2e7] text-white p-4 rounded-full shadow-md hover:bg-[#39a2f8] transition duration-300 z-30">
        &#8594;
      </button>

      <div className="bg-black relative w-[320px] h-[450px]">
        {projects.map((project, index) => {
          const position = index - activeIndex;
          return (
            <ProjectCard key={index} project={project} isActive={index === activeIndex} position={position} />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSlider;



