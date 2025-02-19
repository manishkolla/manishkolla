import React from 'react';
import { Book, Award, Code, Settings, Briefcase, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { FaPython, FaJs, FaHtml5, FaLanguage, FaRobot, FaCss3Alt, FaMicrophone, FaJava, FaDatabase, FaReact, FaNodeJs, FaAws, FaGoogle, FaDocker, FaGitAlt, FaCode, FaCloud, FaBrain, FaRProject, FaWindows, FaLinux, FaUbuntu, FaJenkins, FaChartBar } from 'react-icons/fa';

const AboutSection = () => {
  const { currentTheme } = useTheme();
  
  // Professional experience summary
  const experienceRoles = [
    {
      title: "Data Scientist / ML Engineer",
      duration: "2+ Years",
      description: "Designed and implemented machine learning models and data pipelines for predictive analytics and pattern recognition. Specialized in Python, TensorFlow, and statistical analysis."
    },
    {
      title: "Generative AI Engineer",
      duration: "1 Year",
      description: "Developed cutting-edge generative AI solutions using large language models. Expertise in prompt engineering, fine-tuning, and deploying GenAI applications with OpenAI and Google Gemini."
    },
    {
      title: "Full Stack Engineer",
      duration: "1 Year",
      description: "Built end-to-end web applications using Flask, Django, and RESTful APIs. Implemented responsive designs and integrated frontend systems with backend databases."
    },
    {
      title: "Database Administrator",
      duration: "2+ Years",
      description: "Managed SQL and NoSQL database systems, optimizing query performance and ensuring data integrity. Experience with data modeling, migration, and security implementation."
    },
    {
      title: "Academic Tutor",
      duration: "3+ Years",
      description: "Provided expert guidance in mathematics, computer science, and data analysis. Developed teaching materials and mentored students through complex technical concepts."
    },
    {
      title: "President of Student Organization",
      duration: "1 Years",
      description: "Successfully organized events for 200+ attendees, managed club finances, and oversaw budgeting. Led a team of 15, ensuring smooth execution and impactful outcomes."
    }
  ];

  const skills = {
    languages: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'R', icon: <FaRProject /> },
      { name: 'C', icon: <FaCode /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'NoSQL', icon: <FaDatabase /> }
    ],
    frameworks: [
      { name: 'Django', icon: <FaPython /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Flask', icon: <FaPython /> },
      { name: 'RESTful API', icon: <FaCloud /> },
      { name: 'Selenium', icon: <FaCode /> },
      { name: 'Beautiful Soup', icon: <FaCode /> },
      { name: 'Agile/Scrum', icon: <FaCode /> },
      { name: 'TensorFlow', icon: <FaBrain /> },
      { name: 'Deep Neural Networks', icon: <FaBrain /> }
    ],
    tools: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Google Cloud', icon: <FaGoogle /> },
      { name: 'Jenkins', icon: <FaJenkins /> },
      { name: 'Splunk', icon: <FaCloud /> },
      { name: 'Databricks', icon: <FaCloud /> },
      { name: 'Tableau', icon: <FaChartBar /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Windows', icon: <FaWindows /> },
      { name: 'Linux', icon: <FaLinux /> },
      { name: 'Ubuntu', icon: <FaUbuntu /> }
    ],
    aiAndDevSpecializations: [
      { name: 'Generative AI', icon: <FaBrain /> },
      { name: 'NLP', icon: <FaLanguage /> },
      { name: 'Machine Learning', icon: <FaBrain /> },
      { name: 'Deep Learning', icon: <FaBrain /> },
      { name: 'Prompt Engineering', icon: <FaBrain /> },
      { name: 'OpenAI, Gemini', icon: <FaRobot /> },
    ]
  };

  const certifications = [
    'Google Data Analytics Certificate',
    'Google Project Management Certificate',
    'AWS Fundamentals Specialization',
    'Databricks Generative AI Engineering',
    'CodePath Intro to Cybersecurity',
    'Databricks Lakehouse Fundamentals'
  ];

  return (
    <section id="about" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>About Me</h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary} max-w-3xl mx-auto text-center`}>
          I am passionate about solving complex problems through data and AI. With a strong foundation in computer science and machine learning, I enjoy turning ideas into impactful solutions. Beyond technology, I love staying active through badminton and swimming, as well as exploring new cuisines. I believe that curiosity—whether in data, sports, or food—drives growth and creativity. Whether working on research, development, or mentorship, I am always eager to learn, adapt, and make a meaningful impact.
          </p>
        </div>

        {/* Professional Experience Summary */}
        <div className={`mt-12 ${currentTheme.background.secondary} rounded-xl p-6 shadow-md`}>
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Technical & Leadership Roles</h3>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experienceRoles.map((role, index) => (
              <div 
                key={index} 
                className={`p-5 rounded-lg border ${currentTheme.border.primary} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-blue-50 p-1.5 rounded-full">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className={`ml-2 text-sm font-medium text-blue-600`}>{role.duration}</span>
                </div>
                <h4 className={`text-lg font-medium ${currentTheme.text.primary}`}>{role.title}</h4>
                <p className={`mt-2 text-sm ${currentTheme.text.secondary}`}>{role.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className={`mt-12 ${currentTheme.background.secondary} rounded-xl p-6 shadow-sm`}>
          <div className="flex items-center mb-4">
            <Book className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Education</h3>
          </div>
          <div className="ml-8">
            <h4 className={`font-medium ${currentTheme.text.primary}`}>Georgia State University (Honors College) - Atlanta, GA</h4>
            <p className={currentTheme.text.secondary}>Bachelor of Science in Computer Science</p>
            <p className={currentTheme.text.secondary}>Certificate in Data Science</p>
            <div className="flex items-center mt-2">
              <span className="text-blue-600 font-semibold">GPA: 3.98</span>
              <span className="mx-2">•</span>
              <span className={currentTheme.text.secondary}>Graduation: May 2025</span>
            </div>
            <p className={`mt-2 ${currentTheme.text.secondary}`}>
              <span className="font-medium">Relevant Coursework:</span> Data Mining, AI, ML, Database Systems, Software Engineering, Linear Algebra, Data Structures and Algorithms
            </p>
            <p className={`mt-2 ${currentTheme.text.secondary}`}>
              <span className="font-medium">Awards:</span> President's List (5), Dean's List (2), Undergraduate Research Award Nominee
            </p>
            <p className={`mt-2 ${currentTheme.text.secondary}`}>
              <span className="font-medium">Campus Involvement:</span> Indian Student Organization (President), Mathematical Association of America, Association for Computing Machinery
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Languages */}
          <div className={`rounded-xl p-6 shadow-sm ${currentTheme.background.secondary}`}>
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <span
                  key={skill.name}
                  className={`flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
                >
                  {skill.icon}
                  <span className="ml-2">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className={`rounded-xl p-6 shadow-sm ${currentTheme.background.secondary}`}>
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <span
                  key={skill.name}
                  className={`flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
                >
                  {skill.icon}
                  <span className="ml-2">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className={`rounded-xl p-6 shadow-sm ${currentTheme.background.secondary}`}>
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span
                  key={skill.name}
                  className={`flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
                >
                  {skill.icon}
                  <span className="ml-2">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* AI Tools */}
          <div className={`rounded-xl p-6 shadow-sm ${currentTheme.background.secondary}`}>
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>AI Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.aiAndDevSpecializations.map((skill) => (
                <span
                  key={skill.name}
                  className={`flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
                >
                  {skill.icon}
                  <span className="ml-2">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className={`mt-12 ${currentTheme.background.secondary} rounded-xl p-6 shadow-sm`}>
          <div className="flex items-center mb-5">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className={`text-xl font-semibold ${currentTheme.text.primary}`}>Professional Certifications</h3>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className={`p-4 rounded-lg shadow-sm border ${currentTheme.border.primary} hover:border-blue-300 transition-colors duration-300`}
              >
                <div className="flex flex-col items-center">
                  <p className={`text-center ${currentTheme.text.primary}`}>{cert}</p>
                  <div className="mt-2 w-10 h-0.5 bg-blue-100 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;