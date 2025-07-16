import React, { useState } from 'react';
import { Github, ExternalLink, Tag, Code2, Database, BarChart2, Layers, PieChart, Code, LineChart, Cpu, Bot, Globe, PenTool, Search, Server, Zap, Minimize2, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaAws, FaGoogle, FaGem, FaDatabase } from 'react-icons/fa';


const techIcons = { 
  react: <FaReact />, 
  nodejs: <FaNodeJs />, 
  html5: <FaHtml5 />, 
  css3: <FaCss3Alt />, 
  javascript: <FaJs />, 
  python: <FaPython />, 
  aws: <FaAws />, 
  'google cloud': <FaGoogle />, 
  'gemini ai': <FaGem />, 
  mysql: <FaDatabase />,
  // Added technology icons
  'deep learning': <Layers />,
  'machine learning': <Code />,
  'data mining': <Database />,
  'tensorflow': <svg width="24" height="24" viewBox="0 0 32 32" fill="#FF9F43">
    <path d="M26.135,15.87l-5.871-3.395V7.83l-4.523-2.611L11.741,7.795v4.676L5.871,15.9l-0.006,4.637l5.877,3.39v4.662l4.412,2.587l4.477-2.587v-4.662l5.877-3.39L26.508,15.9v-0.03ZM20.264,10.588l-3.4,1.974l-3.428-1.974l3.4-1.974L20.264,10.588ZM16.576,17.82v3.942l-3.4-1.968v-3.942l1.7,0.982L16.576,17.82ZM13.177,12.03l3.4,1.962v3.948l-3.4-1.968V12.03ZM16.87,17.82l1.7-0.986l1.7-0.982v3.942l-3.4,1.968V17.82ZM20.264,13.992l-3.4-1.962v3.942l3.4,1.968V13.992ZM9.977,17.82l1.7-0.986l1.7-0.982v3.942l-3.4,1.968V17.82ZM8.277,15.87l3.4-1.974V9.952l-3.4,1.974V15.87ZM10.277,20.512l-2.006-1.15v-2.312l2.006,1.15V20.512ZM23.729,15.87v-3.943l-3.4-1.974v3.943L23.729,15.87ZM21.729,20.512v-2.312l2-1.15v2.312L21.729,20.512Z" />
  </svg>,
  'cnn': <Layers />,
  'scikit-learn': <svg width="24" height="24" viewBox="0 0 32 32" fill="#F97F51">
    <path d="M16.53 15.025a1.25 1.25 0 0 1 1.697 1.697 1.25 1.25 0 0 1-1.697-1.697z M14.675 13.17a3.75 3.75 0 0 1 5.409 5.409 3.75 3.75 0 0 1-5.409-5.409z M7.676 6.172a7.49 7.49 0 0 1 10.51 10.51 7.49 7.49 0 0 1-10.51-10.51z M5.82 4.316A9.98 9.98 0 0 1 19.883 18.38 9.98 9.98 0 0 1 5.821 4.316z" />
  </svg>,
  'pandas': <svg width="24" height="24" viewBox="0 0 32 32" fill="#1e88e5">
    <path d="M15 2.5v27m4-25v21M6 7.5v18.5m14-15.5v15.5m6-13.5v11.5M10 6v21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  'matplotlib': <LineChart />,
  'seaborn': <PieChart />,
  'llama': <svg width="24" height="24" viewBox="0 0 24 24" fill="#20bf6b">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v6h-2zm0 8h2v2h-2z" />
  </svg>,
  'sql': <Database />,
  'qdrant': <svg width="24" height="24" viewBox="0 0 24 24" fill="#f7b731">
    <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
    <path d="M8 10a2 2 0 100-4 2 2 0 000 4zM16 10a2 2 0 100-4 2 2 0 000 4zM8 18a2 2 0 100-4 2 2 0 000 4zM16 18a2 2 0 100-4 2 2 0 000 4z" fill="#ffffff" />
  </svg>,
  'llm': <BarChart2 />,
  'artificial intelligence': <Bot />,
  'web scraping': <Globe />,
  'gemini api': <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
    <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm5 15.59l-5 2.5v-5.59l5-2.5v5.59zm-5-4.09V7.91l5-2.5v5.59l-5 2.5zm-1-5.59v5.59l-5-2.5V5.41l5 2.5z" />
  </svg>,
  'faiss': <svg width="24" height="24" viewBox="0 0 24 24" fill="#008F8C">
    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
    <path d="M7 12h2v5H7v-5zm4-4h2v9h-2V8zm4 2h2v7h-2v-7z" />
  </svg>,
  'rag': <svg width="24" height="24" viewBox="0 0 24 24" fill="#9C27B0">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    <path d="M5 12c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7-7-3.13-7-7zm2 0c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5z" fill="none" stroke="#9C27B0" strokeWidth="1" />
  </svg>,
  'bert embeddings': <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFC107">
    <path d="M14 5H5C3.9 5 3 5.9 3 7v3c0 1.1.9 2 2 2h9M14 5v7M14 5h5c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-5M5 12h9v7H5v-7M14 12h5v7h-5v-7" />
    <path d="M7 15v-1h1v1H7M7 19v-1h1v1H7M17 15v-1h1v1h-1M17 19v-1h1v1h-1" />
  </svg>,
  'vector database': <Server />,
  'generative ai': <svg width="24" height="24" viewBox="0 0 24 24" fill="#7E57C2">
    <path d="M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
};

const ProjectCard = ({ project, isHovered, onHover, onLeave }) => {
  const { currentTheme } = useTheme();

  return (
    <div
      className={`rounded-xl shadow-sm overflow-hidden transition-all duration-300 transform ${
        isHovered ? 'scale-[1.02] shadow-md' : ''
      } ${currentTheme.background.secondary}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`relative bg-gray-200 h-64 flex items-center justify-center rounded-xl overflow-hidden shadow-sm transition-all transform ${
          isHovered ? 'scale-[1.02] shadow-md' : ''
        }`}
      >
        
        {project.image ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src={project.image}
              alt={`${project.title} Preview`}
              className="max-w-full max-h-full object-cover"
            />
          </a>
        ) : project.live ? (
          <iframe
            src={project.live}
            className="w-full h-full border-none rounded-xl"
            title={project.title}
          ></iframe>
        ) : (
          <p className="text-gray-500">No preview available</p>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className={`text-xl font-bold ${currentTheme.text.primary}`}>{project.title}</h3>
          <div className="flex space-x-3">
            {project.github && (
              <a href={project.github} target="_blank" className={`${currentTheme.text.secondary} hover:${currentTheme.text.accent} transition-colors`}>
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" className={`${currentTheme.text.secondary} hover:${currentTheme.text.accent} transition-colors`}>
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className={`mt-3 ${currentTheme.text.secondary}`}>{project.description}</p>

        {/* Key Features */}
        <div className="mt-4 space-y-2">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <Code2 className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
              <p className={`${currentTheme.text.secondary} text-sm`}>{feature}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
              >
                {techIcons[tech.toLowerCase()] || <Tag className="w-3 h-3 mr-1" />}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { currentTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Career Wide",
      description: "AI-driven platform connecting students with recruiters, featuring automated recruitment processes and resume insights.",
      features: [
        "Platform spotlights students to recruiters by simplifying the recruitment process",
        "Provides resume insights and improvement suggestions with relevant data",
        "Enhanced candidate chances by 28% through AI-powered optimization",
        "Streamlines candidate search with advanced filters and AI chatbot"
      ],
      technologies: ["Python", "Django", "AWS", "Google Cloud", "Gemini AI", "React"],
      live: "https://careerwideai.com/",
      image: "CareerWide.png",
    },
    {
      title: "MultiRAG Legal Chatbot",
      description: "Research-driven legal chatbot leveraging multi-layered RAG for accurate Title 18 U.S. Code retrieval and response generation.",
      features: [
        "Integrates VoyageLaw-2 and Google Text Embedding for dual-layer semantic encoding",
        "Fuzzy logic-based query scoring enables adaptive retrieval across legal hierarchies",
        "Achieves 97.75% accuracy on 2,000+ user queries with sub-6s response times",
        "Demonstrates scalable, interpretable legal information retrieval for domain-specific agents"
      ],
      technologies: ["Python", "Gemini 2.0 Flash", "Qdrant", "VoyageLaw-2", "Google Text Embedding"],
      github: "https://github.com/Nishchaypat/LawChatBot",
      image: "lawchatbot.png"
    },
    {
      title: "GenAI University Chatbot",
      description: "A CRAG based chatbot designed to optimize network and server load by providing instant answers, bypassing complex navigation.",
      features: [
        "Leveraged CRAG architecture to streamline user interactions and enhance both website efficiency and user experience.",
        "Used Generative AI models to provide accurate responses and reduce server load and network congestion.",
        "Implemented a chatbot that uses real-time data retrieval from various sources to answer user queries instantly.",
        "Applied cutting-edge techniques like semantic search, FAISS, and BERT embeddings for improved response accuracy and speed."
      ],
      technologies: ["Selenium", "Artificial Intelligence", "Web Scraping", "Gemini API", "FAISS", "RAG", "BERT Embeddings", "Vector Database", "Generative AI"],
      github: "https://github.com/manishkolla/GenAI_University_Chatbot",
      image: "genai_chatbot.png",
      date: "Oct 2024 - Dec 2024",
      associatedWith: "Georgia State University"
    },
    {
      title: "Airline Data Analysis",
      description: "Comprehensive analysis of airport delays using Data Mining and Machine Learning techniques to identify delay patterns and root causes.",
      features: [
        "Analyzed large datasets of flight schedules and delays to determine key factors affecting on-time performance.",
        "Utilized clustering algorithms to detect unusual air route behaviors, including early departures and late arrivals.",
        "Developed predictive models to forecast delays based on weather conditions, airline performance, and historical data.",
        "Provided insights for optimizing flight scheduling and minimizing passenger inconvenience."
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Data Mining", "Machine Learning"],
      github: "https://github.com/manishkolla/Airline-Data-Analysis",
      image: "airline_analysis.png"
    },
    {
      title: "Movie Genre Recognition from Posters",
      description: "Deep learning-based classification system that predicts movie genres from posters using Convolutional Neural Networks (CNNs).",
      features: [
        "Built an image classification model leveraging CNN architectures such as LeNet, AlexNet, VGG, and ResNet-50.",
        "Implemented one-hot encoding and image normalization for effective model training and improved accuracy.",
        "Compared different CNN models to determine optimal architecture for genre classification.",
        "Achieved high accuracy in genre prediction, providing insights for automated content categorization."
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "Keras", "CNN"],
      github: "https://github.com/manishkolla/Movie-Genre-Recognition-from-Posters",
      image: "movie_genre_poster.png"
    },

    {
      title: "Zillow Home Value Prediction",
      description: "Developed a machine learning model to predict housing prices in the U.S., addressing market fluctuations and economic factors using sophisticated imputation methods and algorithms.",
      features: [
        "Implemented Random Forest and Linear Regression models to predict housing prices accurately.",
        "Utilized KNN imputation, median replacement, and forward/backward filling to handle missing data.",
        "Applied CRISP-DM methodology to ensure robust data processing and analysis.",
        "Evaluated model performance using metrics like MAE, MSE, and R2 to fine-tune predictions.",
        "Focused on understanding market trends, reducing error, and enhancing prediction reliability despite market volatility."
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/manishkolla/Zillow-Home-Value-Prediction",
      image: "zillow_predictions.png",
      date: "Jan 2024 - Mar 2024",
      associatedWith: "University Project"
    }
  ];

  return (
    <section id="projects" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>Featured Projects</h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary}`}>
            A collection of my most impactful technical projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
