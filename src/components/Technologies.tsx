'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaGithub } from "react-icons/fa";
import { SiTensorflow, SiCplusplus, SiAndroidstudio, SiPytorch, SiPandas } from "react-icons/si";
import dynamic from 'next/dynamic';

const ShootingStars = dynamic(() => import('./ShootingStars'), { ssr: false });
const StarsBackground = dynamic(() => import('./StarsBackground'), { ssr: false });

interface TechIconProps {
  Icon: React.ElementType;
  name: string;
  color: string;
  delay: number;
}

const TechIcon: React.FC<TechIconProps> = ({ Icon, name, color, delay }) => (
  <motion.div
    className={`rounded-xl border-2 border-gray-700 p-4 flex flex-col items-center justify-center`}
    whileHover={{ scale: 1.05 }}
    animate={{ y: [0, -5, 0] }}
    transition={{
      y: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
        delay: delay
      }
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <Icon className={`text-5xl ${color}`} />
    <span className="mt-2 text-sm text-white">{name}</span>
  </motion.div>
);

const Technologies: React.FC = () => {
  const techStack = [
    { Icon: FaPython, name: "Python", color: "text-yellow-400", delay: 0 },
    { Icon: SiTensorflow, name: "TensorFlow", color: "text-orange-500", delay: 0.4 },
    { Icon: FaGithub, name: "GitHub", color: "text-white", delay: 0.8 },
    { Icon: SiCplusplus, name: "C++", color: "text-blue-500", delay: 1.2 },
    { Icon: SiAndroidstudio, name: "Android", color: "text-green-500", delay: 1.6 },
    { Icon: SiPytorch, name: "PyTorch", color: "text-red-500", delay: 2.0 },
    { Icon: SiPandas, name: "Pandas", color: "text-purple-500", delay: 2.4 }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
      <ShootingStars />
      <StarsBackground />
      <motion.div
        className="relative z-10 h-full w-full flex flex-col items-center justify-center px-8 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="mb-12 text-4xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technologies
        </motion.h1>
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techStack.map((tech) => (
              <TechIcon
                key={tech.name}
                Icon={tech.Icon}
                name={tech.name}
                color={tech.color}
                delay={tech.delay}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
