import React, { useState } from 'react';
import { Briefcase, Calendar, ArrowRight, Building2, MapPin } from 'lucide-react';
import { SiOpenai } from "react-icons/si"; 
import { MdOutlineTipsAndUpdates } from "react-icons/md";  // Prompt Engineering (idea/lightbulb icon)
import { FaChartPie } from "react-icons/fa";  // Statistics (pie chart icon)
import { FaFlask } from "react-icons/fa";  // Research (lab flask icon)
import { FaPython, FaAws, FaBrain, FaMicrophone, FaCloud, FaDatabase, FaChartLine, FaJs, FaCode, FaRobot, FaNetworkWired, FaChrome, FaGlobe, FaUserGraduate } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ExperienceSection = () => {
  const { currentTheme } = useTheme();
  const experiences = [
    {
      title: "Research Analyst / Data Scientist",
      company: "Evidence Based Cybersecurity Research Group (EBCS)",
      location: "Atlanta, GA",
      period: "September 2022 - Present",
      achievements: [
        "Building web automation frameworks with Selenium and Chrome/Tor drivers, enhancing scraping efficiency by 70% and accuracy to 90%, while extracting data into relational databases and validating results using SQL queries.",
        "Leveraging Machine Learning, Deep Learning, and NLP to analyze data patterns and trained neural networks to predict emerging threats, using virtual machines for malware protection and advanced cloud clusters for better computing abilities.",
        "Leading a team of 6 data scientists, presenting findings to sponsors, fostering collaboration, and ensuring project success."
      ],
      techStack: ["Web Automation", "Selenium", "Machine Learning", "Deep Learning", "NLP", "SQL", "Deep Learning", "Research"]
    },

    {
      title: "Mathematics Tutor",
      company: "Department of Mathematics and Statistics, GSU",
      location: "Atlanta, GA",
      period: "January 2022 - Present",
      achievements: [
        "Teaching Linear Algebra and Calculus to classes of 15-20 students, clarifying difficult topics and addressing individual math questions.",
        "Collaborating with professors during lectures, proctoring exams, and organizing quizzes in their absence.",
        "Engaging with professors to identify challenging topics, led group study sessions, and tutored over 150+ students, earning the 'Best Tutor Award' for Fall 2023."
      ],
      techStack: ["Linear Algebra", "Calculus", "Teaching", "Academic Support", "Statistics"]
    },

    {
      title: "Data Science / Machine Learning Intern",
      company: "Automatic Data Processing (ADP)",
      location: "Alpharetta, GA",
      period: "May 2024 - August 2024",
      achievements: [
        "Developed and deployed a full-stack Generative AI application using Flask, integrated with AWS services (S3, Lambda, DynamoDB, API gateway) and OpenAI GPT models, implementing hyperparameter tuning for optimized inference latency and response quality.",
        "Conducted in-depth analysis using metrics like ROUGE, BLEU, Levenshtein distance, and Cosine similarity to optimize prompt performance.",
        "Actively managed CI/CD workflows using Jenkins, Splunk, and Postman to ensure seamless application deployment."
      ],
      techStack: ["Generative AI", "AWS", "Python", "Flask", "NLP", "CI/CD", "Machine Learning", "OpenAI", "Prompt Engineering"]
    },
    
    
    {
      title: "Information Technology Intern",
      company: "Lavner Education",
      location: "Sandy Springs, GA",
      period: "June 2023 - August 2023",
      achievements: [
        "Maintained computer hardware and managed inventory, ensuring optimal performance and timely troubleshooting.",
        "Instructed and graded Python, C, Machine Learning, and AI assignments for a class of 50 middle/high school students.",
        "Debugged code performed backups and clean-ups and provided rapid solutions to HQ for efficient workflow."
      ],
      techStack: ["Python", "C", "Machine Learning", "AI", "IT Support", "Teaching"]
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skillIcons = {
    "Neural Networks": <FaBrain className="w-4 h-4 mr-1" />,
    "NLP": <FaMicrophone className="w-4 h-4 mr-1" />,
    "CNN": <FaBrain className="w-4 h-4 mr-1" />,
    "Audio Processing": <FaMicrophone className="w-4 h-4 mr-1" />,
    "Python": <FaPython className="w-4 h-4 mr-1" />,
    "AWS": <FaAws className="w-4 h-4 mr-1" />,
    "Generative AI": <FaBrain className="w-4 h-4 mr-1" />,
    "Cloud Infrastructure": <FaCloud className="w-4 h-4 mr-1" />,
    "Machine Learning": <FaBrain className="w-4 h-4 mr-1" />,
    "Data Analysis": <FaDatabase className="w-4 h-4 mr-1" />,
    "Linear Regression": <FaChartLine className="w-4 h-4 mr-1" />,
    "Web Automation": <FaGlobe className="w-4 h-4 mr-1" />,
    "Deep Learning": <FaBrain className="w-4 h-4 mr-1" />,
    "SQL": <FaDatabase className="w-4 h-4 mr-1" />,
    "Selenium": <FaChrome className="w-4 h-4 mr-1" />,
    "Flask": <FaPython className="w-4 h-4 mr-1" />,
    "CI/CD": <FaCode className="w-4 h-4 mr-1" />,
    "Linear Algebra": <FaChartLine className="w-4 h-4 mr-1" />,
    "Calculus": <FaChartLine className="w-4 h-4 mr-1" />,
    "Teaching": <FaUserGraduate className="w-4 h-4 mr-1" />,
    "Academic Support": <FaUserGraduate className="w-4 h-4 mr-1" />,
    "C": <FaCode className="w-4 h-4 mr-1" />,
    "AI": <FaRobot className="w-4 h-4 mr-1" />,
    "IT Support": <FaNetworkWired className="w-4 h-4 mr-1" />,
    "OpenAI": <SiOpenai className="w-4 h-4 mr-1" />,  // OpenAI logo
    "Prompt Engineering": <MdOutlineTipsAndUpdates className="w-4 h-4 mr-1" />,  // Lightbulb/idea icon
    "Statistics": <FaChartPie className="w-4 h-4 mr-1" />,  // Pie chart for stats
    "Research": <FaFlask className="w-4 h-4 mr-1" />  // Lab flask for research
  };

  return (
    <section id="experience" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>Professional Experience</h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary}`}>
            My journey through various roles in Data Science, AI, and Academic Support
          </p>
        </div>

        <div className="relative">
          <div className="border-l-2 border-gray-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-5/12">
                  <div
                    className={`rounded-xl shadow-lg transition-all duration-300 transform ${
                      hoveredIndex === index ? 'scale-[1.02] shadow-xl' : ''
                    } ${currentTheme.background.secondary} p-6 sm:p-8`}
                  >
                    <div className="mb-6">
                      <h3 className={`text-xl font-bold ${currentTheme.text.primary} flex items-center`}>
                        <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                        {exp.title}
                      </h3>
                      
                      <div className={`mt-2 ${currentTheme.text.secondary} flex items-center`}>
                        <Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div className={`${currentTheme.text.secondary} flex items-center`}>
                          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                        <div className={`${currentTheme.text.secondary} flex items-center`}>
                          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="whitespace-nowrap">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className={`flex items-start ${currentTheme.text.secondary}`}>
                          <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <p>{achievement}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
                        >
                          {skillIcons[tech] || <FaCode className="w-4 h-4 mr-1" />}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-5 h-5 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;