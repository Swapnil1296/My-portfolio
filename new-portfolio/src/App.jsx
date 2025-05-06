// App.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Proficiencies from "./components/Proficiencies";
import Experience from "./components/Experience";
import ProfessionalProjects from "./components/ProfessionalProjects";
import UpcomingProjects from "./components/UpcomingProjects";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import PersonalProjects from "./components/PersonalProjects";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 font-mono ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <Header darkMode={darkMode} scrollPosition={scrollPosition} />

      {/* Fixed position theme toggle */}
      <div className="fixed top-24 right-4 z-50 md:top-6 md:right-6">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Introduction darkMode={darkMode} />
            <Proficiencies darkMode={darkMode} />
            <Experience darkMode={darkMode} />
            <ProfessionalProjects darkMode={darkMode} />
            <PersonalProjects darkMode={darkMode} />
            <UpcomingProjects darkMode={darkMode} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
              <SocialLinks darkMode={darkMode} />
              <Contact darkMode={darkMode} />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
