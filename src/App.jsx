import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import NavigationBar from './components/Navigation';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WorkingOnSection from './components/WorkingOnSection';
import Interests from './components/InterestSection';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const funFacts = [
  "Did you know Data Science is 90% waiting for code to run?",
  "Did you know 90% of the world's total data was created in just the last 2 years?",
  "Did you know Python was named after 'Monty Python's Flying Circus', not the snake?",
  "Did you know Netflix saves over $1 Billion annually through its AI recommendation engine?",
  "Did you know over 80% of a Data Scientist's time is spent finding and cleaning data?",
  "Did you know AlphaGo trained by playing millions of games against itself?",
  "Did you know the term 'Machine Learning' was coined back in 1959 by Arthur Samuel?",
  "Did you know internet users generate over 500,000 tweets and 5 million Google searches every minute?",
  "Did you know SQL was originally named SEQUEL in the 1970s?",
  "Did you know Deep Blue evaluated 200 million chess positions per second in 1997?"
];

// Calculate comfortable reading duration in ms based on fact character length
const calculateReadingTime = (text) => {
  return Math.max(3000, 1800 + text.length * 30);
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [factIndex] = useState(() => Math.floor(Math.random() * funFacts.length));

  useEffect(() => {
    // Dynamic reading duration based on character length of the chosen fun fact
    const currentFact = funFacts[factIndex];
    const duration = calculateReadingTime(currentFact);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(loadingTimer);
  }, [factIndex]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 max-w-xl">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 transition-all duration-300">
            Loading... {funFacts[factIndex]}
          </p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative">
        <NavigationBar />
        <main>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          {/* <WorkingOnSection /> */}
          <Interests />
          <ContactSection />
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </div>
    </ThemeProvider>
  );
};

export default App;