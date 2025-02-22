import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  MapPin, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { 
  FaBrain, 
  FaMicrophone, 
  FaPython, 
  FaAws, 
  FaCloud, 
  FaDatabase, 
  FaChartLine, 
  FaGlobe, 
  FaChrome, 
  FaCode, 
  FaRobot, 
  FaNetworkWired, 
  FaUserGraduate 
} from 'react-icons/fa';
import { SiOpenai } from "react-icons/si";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Research Analyst / Data Scientist",
      company: "Evidence Based Cybersecurity Research Group (EBCS)",
      location: "Atlanta, GA",
      period: "September 2022 - Present",
      achievements: [
        "Building web automation frameworks with Selenium and Chrome/Tor drivers, enhancing scraping efficiency by 70% and accuracy to 90%, while extracting data into relational databases and validating results using SQL queries.",
        "Leveraging Machine Learning, Deep Learning, and NLP to analyze data patterns and trained neural networks to predict emerging threats, using virtual machines for malware protection and advanced cloud clusters for better computing abilities.",
        "Leading a team of 6 data scientists, presenting findings to sponsors, fostering collaboration, and ensuring project success."
      ],
      techStack: ["Web Automation", "Selenium", "Machine Learning", "Deep Learning", "NLP", "SQL", "Research"]
    },
    {
      id: 2,
      title: "Teaching Assistant / Tutor",
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
      id: 3,
      title: "Data Science / Machine Learning Intern",
      company: "Automatic Data Processing (ADP)",
      location: "Alpharetta, GA",
      period: "May 2024 - August 2024",
      achievements: [
        "Developed and deployed a full-stack Generative AI application using Flask, integrated with AWS services (S3, Lambda, DynamoDB, API gateway) and OpenAI GPT models, implementing hyperparameter tuning for optimized inference latency and response quality.",
        "Conducted in-depth analysis using metrics like ROUGE, BLEU, Levenshtein distance, and Cosine similarity to optimize prompt performance.",
        "Actively managed CI/CD workflows using Jenkins, Splunk, and Postman to ensure seamless application deployment."
      ],
      techStack: ["Generative AI", "AWS", "Python", "Flask", "NLP", "CI/CD", "OpenAI", "Prompt Engineering"]
    },
    {
      id: 4,
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

  const skillIcons = {
    "Neural Networks": <FaBrain className="w-4 h-4 mr-1" />,
    "NLP": <FaMicrophone className="w-4 h-4 mr-1" />,
    "Python": <FaPython className="w-4 h-4 mr-1" />,
    "AWS": <FaAws className="w-4 h-4 mr-1" />,
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
    "OpenAI": <SiOpenai className="w-4 h-4 mr-1" />,
    "Prompt Engineering": <MdOutlineTipsAndUpdates className="w-4 h-4 mr-1" />,
    "Statistics": <FaChartPie className="w-4 h-4 mr-1" />,
    "Research": <FaFlask className="w-4 h-4 mr-1" />
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            My journey through various roles in Data Science, AI, and Academic Support
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="w-full text-left p-6 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                    </div>
                    
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      expandedId === exp.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {expandedId === exp.id && (
                <div className="px-6 pb-6">
                  <div className="border-t pt-4 space-y-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-sm">{achievement}</p>
                      </div>
                    ))}
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {skillIcons[tech] || <FaCode className="w-4 h-4 mr-1" />}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;