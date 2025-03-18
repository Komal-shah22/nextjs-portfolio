import { motion } from 'framer-motion';
import React from 'react';
import Image from "next/image"

const skills = [
  { name: 'TypeScript', icon: '/images/typescript.png', percentage: 90 },
  { name: 'JavaScript', icon: '/images/javascript.png', percentage: 85 },
  { name: 'Python', icon: '/images/python-.png', percentage: 80 },
  { name: 'Next.js', icon: '/images/next.png', percentage: 70 },
  { name: 'React.js', icon: '/images/react.png', percentage: 75 },
  { name: 'HTML', icon: '/images/html.png', percentage: 95 },
  { name: 'CSS', icon: '/images/css.png', percentage: 90 },
  { name: 'Git', icon: '/images/git.png', percentage: 70 },
  { name: 'GitHub', icon: '/images/github-skill.png', percentage: 82 },


];

const SkillCard = ({ skill }: { skill: { name: string; icon: string; percentage: number } }) => (
  <div className="flex flex-col items-center">
    <Image
      src={skill.icon}
      alt={`Icon of ${skill.name}`}
      className="w-14 h-12 mb-2"
      width={56} // Required for Next.js
      height={48} // Required for Next.js
      loading="lazy" 
    />
    <span className="mb-2">{skill.name}</span>

    <div className="w-full bg-gray-300 rounded-full h-3 mb-4 overflow-hidden">
      <motion.div
        className="bg-[#58c6f1] h-3 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: `${skill.percentage}%` }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    </div>

    <span>{skill.percentage}%</span>
  </div>
);

const SkillsSection = () => {
  return (
    <section id='skills' className="flex flex-col items-center py-16 bg-black text-[white]">
      <h2 className="skills-bg text-6xl font-bold mb-8 text-[#58c6f1]">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
