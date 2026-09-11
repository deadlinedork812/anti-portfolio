import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ApproachSection from './components/ApproachSection';
import ExperienceSection from './components/ExperienceSection';
import PlaygroundSection from './components/PlaygroundSection';
import NotesSection from './components/NotesSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'approach', 'experience', 'playground', 'notes', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Fixed Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Fixed Top Bar Header */}
      <TopHeader />

      {/* Main Content Scroll Container */}
      <main className="main-content">
        <HeroSection 
          onExploreWork={() => scrollToSection('projects')} 
          onViewApproach={() => scrollToSection('approach')} 
        />
        <AboutSection />
        <ProjectsSection />
        <ApproachSection />
        <ExperienceSection />
        <PlaygroundSection />
        <NotesSection />
        <ContactSection />
      </main>
    </div>
  );
}
