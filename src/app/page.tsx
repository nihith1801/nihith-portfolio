import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'));
const Hero = dynamic(() => import('@/components/Hero'));
const About = dynamic(() => import('@/components/About'));
const Technologies = dynamic(() => import('@/components/Technologies'));
const Experience = dynamic(() => import('@/components/Experience'));
const Project = dynamic(() => import('@/components/Project'));
const ContactForm = dynamic(() => import('@/components/ContactForm'));

const Home: NextPage = () => {
  return (
    <div className="relative bg-neutral-950">
      <Navbar />
      <div className="flex">
        <div className="flex-grow">
          <section className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pt-16 md:pt-20">
            <Hero />
          </section>
          <section className="min-h-screen bg-neutral-950">
            <About />
          </section>
          <section className="min-h-screen bg-neutral-950">
            <Technologies />
          </section>
          <section className="min-h-screen bg-neutral-950">
            <Experience />
          </section>
          <section className="min-h-screen bg-neutral-950">
            <Project />
          </section>
          <section className="min-h-screen bg-neutral-950">
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;

