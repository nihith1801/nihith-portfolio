'use client';
import { motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image';
import dynamic from 'next/dynamic';

const ShootingStars = dynamic(() => import("./ShootingStars"), { ssr: false });
const StarsBackground = dynamic(() => import("./StarsBackground"), { ssr: false });

// Import the local images
import MedicalMLImage from '../assets/images/medical-ml.jpg';
import PokedexImage from '../assets/images/pokedex.jpeg';
import VanGoghImage from '../assets/images/van_gogh.jpeg';
import RetinopathyImage from '../assets/images/diabetic_retino.jpeg';

interface ProjectItemProps {
  title: string;
  period: string;
  description: string[];
  skills: string[];
  image: StaticImageData; // Updated to accept StaticImageData type
  href: string;
}

const ProjectItem = ({ title, period, description, skills, image, href }: ProjectItemProps) => (
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
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
        <Image src={image} alt={title} className="w-full h-auto rounded-lg" width={500} height={300} layout="responsive" />
      </div>
      <div className="md:w-1/2">
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
      </div>
    </div>
  </motion.div>
);

const projects = [
  {
    title: "Diabetic Retinopathy Classification Model",
    period: "January 2024",
    description: [
      "Engineered a diabetes stage classification model using 45,000 retinal scan images.",
      "Utilized Pandas to clean and visualize the data for better understanding and balancing the classes.",
      "Defined an attention model focusing on features like dilation based on pixel values to improve accuracy and efficiency.",
      "Implemented CNN and data augmentation in TensorFlow, training the model through incremental and distributed learning."
    ],
    skills: ["Python", "TensorFlow", "Pandas", "CNN", "Data Augmentation"],
    image: RetinopathyImage,
    href: "#"
  },
  {
    title: "Medical-ML",
    period: "May 2024",
    description: [
      "Designed and implemented models to predict conditions from Brain Tumor MRI, Bone Fracture X-rays, and Ultrasound images using TensorFlow.",
      "Architected a Streamlit web application to host models, enabling healthcare professionals to upload scans and receive predictions instantly.",
      "Conducted extensive validation and testing to ensure the models' accuracy and reliability."
    ],
    skills: ["Python", "TensorFlow", "Streamlit", "Medical Imaging"],
    image: MedicalMLImage,
    href: "https://github.com/nihith1801/ml-conversionsa/tree/main"
  },
  {
    title: "Van Gogh and Monet Neural Style Transfer",
    period: "June 2024",
    description: [
      "Constructed a model using Neural Style Transfer (NST) to transform artworks into the styles of Van Gogh and Monet.",
      "Implemented NST using VGG16 to extract style and content features, and a custom fine-tuned Stable Diffusion model for stylistic fidelity."
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "Neural Style Transfer", "VGG16", "Stable Diffusion"],
    image: VanGoghImage,
    href: "#"
  },
  {
    title: "Pokedex App",
    period: "July 2024",
    description: [
      "Architected an Android app with comprehensive Pokedex and music player functionalities.",
      "Integrated user authentication with Firebase, fetched Pokémon data using PokeAPI, and generated summaries with Gemini API. Also integrated a chatbot within the app with Gemini.",
      "Engineered a classification model that can accurately classify about 183 Pokémon. Implemented PyTorch for development and TensorFlow for conversion into a mobile-usable model.",
      "Incorporated text-to-speech using FakeYou API for TTS conversion of the summaries and chatbot responses, photo capture with CameraX, and image recognition with the trained model.",
      "Integrated Spotify API for music playback and designed the UI based on a dark mode, futuristic Figma design."
    ],
    skills: ["Flutter", "Firebase", "TensorFlow", "PokeAPI", "Gemini API", "Spotify API", "PyTorch", "CameraX", "FakeYou API"],
    image: PokedexImage,
    href: "#"
  }
];

export default function Project() {
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
          Projects
        </motion.h1>
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
