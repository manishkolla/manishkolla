import React, { useState } from 'react';
import {
  Activity, 
  Globe2,
  Tv,
  Dumbbell,
  Waves,
  Gamepad2,
  Utensils
} from 'lucide-react';

import { useTheme } from '../context/ThemeContext';

const InterestSection = () => {
  const { currentTheme } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const interests = [
    {
      title: "Badminton & Swimming",
      icon: Activity,
      description: "Enjoy playing badminton with friends and swimming recreationally to stay fit, have fun, and relieve stress.",
    },
    {
      title: "Cooking",
      icon: Utensils,
      description: "Loves winding down after work by cooking and experimenting with new recipes. The kitchen is my whiteboard for creative culinary ideas.",
    },
    {
      title: "Travelling & Exploring New Cuisines",
      icon: Globe2,
      description: (
        <>
          Passionate about visiting new places and experiencing diverse cultures through food. Check out my restaurant list on{" "}
          <a
            href="https://beliapp.co/app/Manish_K"
            target="_blank"
            rel="noopener noreferrer"
            className={`${currentTheme.text.accent} hover:underline font-semibold`}
          >
            Beli
          </a>!
        </>
      ),
    },
    {
      title: "Favorite Shows",
      icon: Tv,
      description: (
        <>
          The Office<br />
          Big Bang Theory<br />
          Modern Family<br />
          Suits
        </>
      ),
    }
  ];

  return (
    <section id="interests" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>
            Hobbies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`rounded-xl transition-all duration-300 transform shadow-lg cursor-pointer
                ${hoveredCard === index ? 'scale-105 shadow-xl' : 'scale-100'}
                ${currentTheme.background.secondary} p-6 flex flex-col items-center text-center`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {interest.image ? (
                <img src={interest.image} alt={interest.title} className="w-16 h-16 mb-4 rounded-full object-cover" />
              ) : (
                <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <interest.icon className="w-8 h-8 text-blue-600" />
                </div>
              )}
              <h3 className={`text-lg font-bold ${currentTheme.text.primary} mb-2`}>
                {interest.title}
              </h3>
              <p className={`${currentTheme.text.secondary} text-sm`}> 
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestSection;
