import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { Skills } from '../components/home/Skills';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Experience } from '../components/home/Experience';
import { Achievements } from '../components/home/Achievements';
import { Education } from '../components/home/Education';
import { Contact } from '../components/home/Contact';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  const location = useLocation();

  useEffect(() => {
    // If arriving with a hash e.g. /#projects, scroll smoothly to it
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="space-y-0">
      <Hero onOpenResume={onOpenResume} />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
    </div>
  );
};
