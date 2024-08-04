'use client';
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const ShootingStars = dynamic(() => import("./ShootingStars"), { ssr: false });
const StarsBackground = dynamic(() => import("./StarsBackground"), { ssr: false });

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  skills: string[];
}

const ExperienceItem = ({ period, title, company, location, description, skills }: ExperienceItemProps) => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <motion.div
      className="flex flex-col md:flex-row justify-between mb-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <span className="text-gray-400 text-sm">{period}</span>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </motion.div>
    <motion.p
      className="text-gray-300 font-medium mb-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {company}, {location}
    </motion.p>
    <motion.ul
      className="text-gray-300 mb-4 list-disc list-inside"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {description.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          viewport={{ once: true }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
    <motion.div
      className="flex flex-wrap gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
    >
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          className="px-2 py-1 bg-violet-800 text-violet-200 text-xs rounded"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
          viewport={{ once: true }}
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

const experiences = [
  {
    period: "July 2024 - Present",
    title: "ML & LLM Dev Intern",
    company: "Digihumans.ai",
    location: "Remote",
    description: [
      "Developed and implemented AI agents using various Large Language Models (LLMs) to enhance AI capabilities.",
      "Designed and executed robust parsing and data cleaning pipelines to ensure high-quality input for AI models.",
      "Successfully fine-tuned Llama 3.1 using LoRa and QLoRa optimization techniques, significantly improving model efficiency and effectiveness.",
      "Collaborated with cross-functional teams to integrate AI solutions into existing product ecosystems."
    ],
    skills: ["LLMs", "TensorFlow", "PyTorch", "Transformers", "Data Cleaning", "Fine-tuning", "LoRa", "QLoRa"]
  },
  {
    period: "June 2023 – June 2023",
    title: "Data Analyst Intern",
    company: "Hyundai",
    location: "Sriperumbudur, Tamil Nadu",
    description: [
      "Utilized Pandas to clean and preprocess large datasets, enhancing data quality and readability for analysis.",
      "Developed clustering algorithms and regression models for predictive analysis using Scikit-learn.",
      "Created impactful data visualizations using Pandas and Seaborn to support data-driven decision-making processes.",
      "Presented analytical findings and prepared cleaned datasets for future use and analysis."
    ],
    skills: ["Pandas", "Scikit-learn", "Seaborn", "Data Visualization", "Clustering", "Regression"]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-neutral-950 pt-16">
      <ShootingStars />
      <StarsBackground />
      <motion.div
        className="relative z-10 h-full w-full flex flex-col items-center justify-start px-8 py-16"
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
          Experience
        </motion.h1>
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
