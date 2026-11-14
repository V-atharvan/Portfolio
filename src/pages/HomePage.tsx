import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { Achievements } from '../sections/Achievements';
import { Education } from '../sections/Education';
import { Contact } from '../sections/Contact';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const navOffset = 76;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onOpenResume={onOpenResume} />

      {/* 2. About Me Section */}
      <About />

      {/* 3. Technical Skills Section */}
      <Skills />

      {/* 4. Featured Projects Section */}
      <Projects />

      {/* 5. Experience and Activities Section */}
      <Experience />

      {/* 6. Achievements Section */}
      <Achievements />

      {/* 7. Education Section */}
      <Education />

      {/* 8. Contact Section */}
      <Contact />
    </div>
  );
};
