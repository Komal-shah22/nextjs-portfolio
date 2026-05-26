import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import TiltCard from "@/components/Helper/TiltCard";
import { FaGithub, FaEye, FaPause, FaPlay, FaXmark, FaUpRightFromSquare } from "react-icons/fa6";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  technologies: string[];
  category: "Web App" | "UI Clone" | "AI Project" | "Tool";
  date: string;
}

const projects: Project[] = [
    {
      id: "portfolio-html-css",
      title: "Portfolio Html & Css",
      description: "A personal portfolio website built with HTML & CSS.",
      image: "/portfolio-logo.jpeg",
      link: "https://beamish-twilight-4d4b62.netlify.app/",
      github: "https://github.com/Komal-shah22/portfolio-with-html-css.git",
      technologies: ["HTML", "CSS"],
      category: "Web App",
      date: "2023-06",
    },
    {
      id: "countdown-timer",
      title: "CountDown Timer",
      description: "A simple countdown timer built using next.js.",
      image: "/countdown-timer.png",
      link: "https://countdowntimer-app-1zee.vercel.app/",
      github: "https://github.com/Komal-shah22/countdown-timer-app.git",
      technologies: ["Next.js", "React", "TypeScript"],
      category: "Tool",
      date: "2024-01",
    },
    {
      id: "web-application",
      title: "Todo list web aplication",
      description: "A web-based to-do list application for managing tasks.",
      image: "",
      link: "https://drive.google.com/drive/my-drive?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
      github: "https://github.com/Komal-shah22/Hackathon-II.git",
      technologies: ["Next.js", "shell", "python","claude-code","Api"],
      category: "Tool",
      date: "2024-01",
    },
        {
      id: "AI-employ",
      title: "AI Employe",
      description: "An AI-powered application designed to assist with employee management tasks.",
      image: "",
      link: "https://drive.google.com/drive/my-drive?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto",
      github: "https://github.com/Komal-shah22/Personal-AI-Employee.git",
      technologies: ["Next.js", "shell", "python","claude-code","Api","powershall"],
      category: "Tool",
      date: "2024-01",
    },

    {
      id: "weather-app",
      title: "Weather App",
      description: "A sleek and animated weather app built with Next.js, using API to display real-time temperature for any city.",
      image: "/weather-app.png",
      link: "https://project-2-weather-app.netlify.app/",
      github: "https://github.com/Komal-shah22/Weather-app.git",
      technologies: ["Next.js", "React", "API", "CSS"],
      category: "Web App",
      date: "2024-02",
    },
    {
      id: "ecommerce-website",
      title: "E-commerce Website",
      description: "An interactive e-commerce website UI clone.",
      image: "/E-commerce.png",
      link: "https://ui-ux-hackathon-q9sa.vercel.app/",
      github: "https://github.com/Komal-shah22/ui-ux-hackathon",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
      category: "Web App",
      date: "2024-11",
    },
    {
      id: "streamlit-project",
      title: "Streamlit Project",
      description: "Personal Library Manager app built using Streamlit.",
      image: "/streamlit.png",
      link: "https://komal-shah22-personal-library-manager-app-emmkgy.streamlit.app/",
      github: "https://github.com/Komal-shah22/Personal-Library-Manager",
      technologies: ["Python", "Streamlit", "Gemini API"],
      category: "AI Project",
      date: "2024-09",
    },
    {
      id: "Textbook",
      title: "AI spec driven hackathon",
      description: "",
      image: "/weather-app.png",
      link: "https://komal-shah22.github.io/AI-spec-Driven-Hackathon-Textbook/",
      github: "https://github.com/Komal-shah22/AI-spec-Driven-Hackathon-Textbook.git",
      technologies: ["Next.js","javascript" ,"Docusaurus", "API", "claude-code"],
      category: "Web App",
      date: "2024-02",
    },

    {
      id: "agentia-world",
      title: "Agentia-world Clone UI",
      description: "A clone of the Agentia-world website UI.",
      image: "/Agentia-world.png",
      link: "https://agentia-world-ui.netlify.app/",
      github: "https://github.com/Komal-shah22/Agentia-world-ui",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "UI Clone",
      date: "2024-03",
    },
    {
      id: "netflix-clone",
      title: "Netflix Clone",
      description: "A responsive clone of Netflix's homepage.",
      image: "/Netflix.jpeg",
      link: "https://dynamic-hamster-44c832.netlify.app/",
      github: "https://github.com/Komal-shah22/Netflix-Website.git",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "UI Clone",
      date: "2023-08",
    },
    {
      id: "figma-template-3",
      title: 'Figma template clone ',
      description: 'Cloning a Figma template for practice.',
      image: '/figma assigment-3.png',
      link: 'https://figma-assigment-3.netlify.app/',
      github: 'https://github.com/Komal-shah22/figma-assigment-3',
      technologies: ["HTML", "CSS"],
      category: "UI Clone",
      date: "2023-10",
    },
    {
      id: "figma-template-2",
      title: "Figma Template Clone",
      description: "Cloning a Figma template for practice.",
      image: "/figma assigment-2.png",
      link: "https://figma-assigment-2.netlify.app/",
      github: "https://github.com/Komal-shah22/2nd-Assigment",
      technologies: ["HTML", "CSS"],
      category: "UI Clone",
      date: "2023-09",
    },
    {
      id: "resume-generator",
      title: "Resume Generator & Hackathon Project",
      description: "A tool to generate resumes dynamically.",
      image: "/resume.png",
      link: "https://hackathon-resume-nine.vercel.app/",
      github: "https://github.com/Komal-shah22/hackathon-milestone-3.git",
      technologies: ["TypeScript", "HTML", "CSS"],
      category: "Tool",
      date: "2024-10",
    },
    {
      id: "governour-website",
      title: "Governour Website Clone",
      description: "A fully responsive clone of the Governour website.",
      image: "/governour-website-clone.png",
      link: "http://gov-web-clone.netlify.app/results",
      github: "https://github.com/Komal-shah22/Governour-website-clone",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
      category: "UI Clone",
      date: "2024-08",
    },
    {
      id: "blog-website",
      title: "Blog website",
      description: "Participated in a hackathon with this project.",
      image: "/blog-image.png",
      link: "https://blog-website-5a1r.vercel.app/",
      github: "https://github.com/Komal-shah22/blog-website.git",
      technologies: ["Next.js", "React", "TypeScript", "Sanity"],
      category: "Web App",
      date: "2024-12",
    },
    {
      id: "password-strength",
      title: "Password Strength Meter",
      description: "A tool to check the strength of passwords.",
      image: "/password strength meter.png",
      link: "https://komal-shah22-password-strength-meter-password-oruxwp.streamlit.app/",
      github: "https://github.com/Komal-shah22/Password-strength-meter",
      technologies: ["Python", "Streamlit"],
      category: "Tool",
      date: "2024-07",
    },
  ];

// Project Modal Component
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web App":
        return "bg-green-500";
      case "UI Clone":
        return "bg-purple-500";
      case "AI Project":
        return "bg-blue-500";
      case "Tool":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#58b9e6] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <FaXmark size={20} />
        </button>

        {/* Project Image */}
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          {/* Category Badge */}
          <div className={`absolute top-4 left-4 ${getCategoryColor(project.category)} text-white px-4 py-2 rounded-full font-semibold shadow-lg`}>
            {project.category}
          </div>

          {/* Date Badge */}
          <div className="absolute top-4 right-16 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-gray-600">
            {formatDate(project.date)}
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#58b9e6] mb-4">
            {project.title}
          </h2>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-700/50 text-gray-200 px-4 py-2 rounded-lg border border-gray-600 hover:border-[#58b9e6] hover:bg-gray-600/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#58b9e6] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#39a2f8] transition-colors flex items-center justify-center gap-2"
            >
              <FaUpRightFromSquare size={18} />
              View Live Demo
            </Link>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <FaGithub size={20} />
              View Source Code
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({
  project,
  isActive,
  position,
  onViewDetails,
}: {
  project: Project;
  isActive: boolean;
  position: number;
  onViewDetails: () => void;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web App":
        return "bg-green-500/80";
      case "UI Clone":
        return "bg-purple-500/80";
      case "AI Project":
        return "bg-blue-500/80";
      case "Tool":
        return "bg-orange-500/80";
      default:
        return "bg-gray-500/80";
    }
  };

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <motion.div
      className={`absolute w-[90%] sm:w-[320px] h-[480px] p-4 rounded-xl shadow-2xl border-[2px] transition-all duration-500 bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm ${
        isActive ? "z-20 border-[#58b9e6] shadow-[#58b9e6]/50" : "z-10 border-gray-700"
      }`}
      style={{ transform: `translateX(${position * 100}%)` }}
      initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.8,
        rotateY: isActive ? 0 : -10
      }}
      whileHover={{
        scale: isActive ? 1.03 : 0.8,
        y: isActive ? -5 : 0,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <TiltCard className="h-full w-full">
        <div className="w-full h-40 relative overflow-hidden rounded-lg group">
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
          )}

          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            layout="fill"
            objectFit="cover"
            className={`rounded-lg transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered && isActive ? 'scale-110' : 'scale-100'}`}
            priority={isActive}
            onLoadingComplete={() => setImageLoaded(true)}
          />

          {/* Hover Overlay */}
          <AnimatePresence>
            {isHovered && isActive && (
              <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={onViewDetails}
                  className="bg-[#58b9e6] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#39a2f8] transition-colors flex items-center gap-2"
                >
                  <FaEye size={20} />
                  View Details
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Badge */}
          <motion.div
            className={`absolute top-2 right-2 ${getCategoryColor(project.category)} text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg`}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.category}
          </motion.div>

          {/* Date Badge */}
          <motion.div
            className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-gray-600"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {formatDate(project.date)}
          </motion.div>
        </div>

        <div className="bg-transparent p-4 rounded-b-lg flex flex-col h-[calc(100%-10rem)]">
          <motion.h3
            className="text-xl font-bold text-blue-400 mb-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-white text-sm mb-3 flex-grow overflow-hidden line-clamp-3"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.description}
          </motion.p>

          {/* Technology Tags */}
          <motion.div
            className="flex flex-wrap gap-1.5 mb-3"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.technologies.slice(0, 4).map((tech, index) => (
              <motion.span
                key={index}
                className="bg-gray-700/50 text-gray-200 text-xs px-2 py-1 rounded-md border border-gray-600 hover:border-[#58b9e6] hover:bg-gray-600/50 transition-all cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-gray-400 text-xs px-2 py-1">
                +{project.technologies.length - 4} more
              </span>
            )}
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300 hover:scale-110"
              aria-label={`View ${project.title} live demo`}
            >
              <FaEye size={24} />
            </Link>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300 hover:scale-110"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <FaGithub size={24} />
            </Link>
          </motion.div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

const ProjectSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Filter projects based on category and search
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Reset active index when filters change
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory, searchQuery]);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
  }, [filteredProjects.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsPlaying(true);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || filteredProjects.length === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isPlaying, filteredProjects.length, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === "Escape") {
          closeModal();
        }
        return;
      }

      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredProjects.length, selectedProject, handleNext, handlePrev]);

  // Swipe gestures for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }

    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  const categories = ["All", "Web App", "UI Clone", "AI Project", "Tool"];

  return (
    <div className="w-full">
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>

      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search projects by name, description, or technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-2xl px-4 py-3 bg-black/60 backdrop-blur-md border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#58b9e6] transition-colors"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#58b9e6] text-white scale-105"
                  : "bg-black/60 backdrop-blur-md text-gray-300 border border-gray-600 hover:border-[#58b9e6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-center text-gray-400 text-sm">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {/* Project Slider */}
      {filteredProjects.length > 0 ? (
        <motion.div
          ref={sliderRef}
          className="relative w-full flex flex-col items-center justify-center py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Project Counter */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold z-30 border border-gray-600">
            {activeIndex + 1} / {filteredProjects.length}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white p-3 rounded-full shadow-md hover:bg-[#39a2f8] transition duration-300 z-30 hover:scale-110 border border-gray-600"
            aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
          >
            {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 md:left-16 bg-[#45d4e7] text-white p-3 sm:p-4 rounded-full shadow-md hover:bg-[#39a2f8] transition duration-300 z-30 hover:scale-110"
            aria-label="Previous project"
          >
            &#8592;
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 md:right-16 bg-[#34d2e7] text-white p-3 sm:p-4 rounded-full shadow-md hover:bg-[#39a2f8] transition duration-300 z-30 hover:scale-110"
            aria-label="Next project"
          >
            &#8594;
          </button>

          <div className="relative w-[90%] sm:w-[320px] h-[530px] flex justify-center">
            {filteredProjects.map((project, index) => {
              const position = index - activeIndex;
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isActive={index === activeIndex}
                  position={position}
                  onViewDetails={() => openModal(project)}
                />
              );
            })}
          </div>

          {/* Indicator Dots */}
          <div className="flex gap-2 mt-8">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-8 h-3 bg-[#58b9e6]"
                    : "w-3 h-3 bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Keyboard hint */}
          <p className="text-gray-400 text-sm mt-4 text-center">
            Use arrow keys ← → to navigate | Space to pause/play | Click card for details
          </p>
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-4 px-6 py-2 bg-[#58b9e6] text-white rounded-lg hover:bg-[#39a2f8] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectSlider;

