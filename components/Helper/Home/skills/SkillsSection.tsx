'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Image from "next/image"
import TiltCard from '@/components/Helper/TiltCard';

const skills = [
  { name: 'TypeScript', icon: '/images/typescript.png', percentage: 90, category: 'AI & Languages' },
  { name: 'JavaScript', icon: '/images/javascript.png', percentage: 85, category: 'AI & Languages' },
  { name: 'Python', icon: '/images/python-.png', percentage: 80, category: 'AI & Languages' },
  { name: 'Next.js', icon: '/images/next.png', percentage: 70, category: 'Web Development' },
  { name: 'React.js', icon: '/images/react.png', percentage: 75, category: 'Web Development' },
  { name: 'HTML', icon: '/images/html.png', percentage: 95, category: 'Web Development' },
  { name: 'CSS', icon: '/images/css.png', percentage: 90, category: 'Web Development' },
  { name: 'Git', icon: '/images/git.png', percentage: 70, category: 'Tools' },
  { name: 'GitHub', icon: '/images/github-skill.png', percentage: 82, category: 'Tools' },
  { name: 'Claude Code', icon: '/images/claude-code.png', percentage: 80, category: 'Tools' },
  { name: 'MongoDB', icon: '/images/mongodb.png', percentage: 70, category: 'Web Development' },
  { name: 'OpenAI Agent SDK', icon: '/images/openai-agent-sdk.png', percentage: 75, category: 'Tools' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const SkillCard = ({ skill }: { skill: { name: string; icon: string; percentage: number } }) => (
  <TiltCard className="h-full">
    <div className="flex flex-col items-center bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 shadow-xl hover:border-[#58c6f1]/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(88,185,230,0.15)] cursor-pointer h-full">
      <div className="relative w-14 h-12 mb-3 transform hover:scale-110 transition-transform duration-300">
        <Image
          src={skill.icon}
          alt={`${skill.name} icon`}
          layout="fill"
          objectFit="contain"
          loading="lazy"
        />
      </div>
      <span className="mb-2 font-semibold text-[#d1e8f8]">{skill.name}</span>

      <div className="w-full bg-gray-800 rounded-full h-2 mb-3 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-[#58c6f1] to-[#2bccf5] h-2 rounded-full"
          initial={{ width: '0%' }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </div>

      <span className="text-sm font-bold text-[#58c6f1]">{skill.percentage}%</span>
    </div>
  </TiltCard>
);

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'AI & Languages', 'Web Development', 'Tools'];

  const filteredSkills = skills.filter(
    (skill) => activeTab === 'All' || skill.category === activeTab
  );

  return (
    <section id='skills' className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-black/60 backdrop-blur-md border-2 border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
        <motion.h2
          className="gradient-text text-5xl sm:text-6xl font-bold mb-8 text-[#58c6f1] text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTab === tab
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white bg-transparent hover:bg-gray-800/30'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#58c6f1] to-[#2bccf5] rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white min-h-[300px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="h-full"
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
