import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Thanush's AI assistant. I have comprehensive knowledge about his portfolio, resume, and achievements. Ask me anything about his experience, projects, skills, education, or career goals!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const portfolioData = {
    personal: {
      name: "Thanush Kannan",
      title: "AI Engineer",
      email: "thanushkannan.ai@gmail.com",
      phone: "+91 9840650939",
      location: "Chennai, Tamil Nadu, India",
      linkedin: "https://www.linkedin.com/in/thanush29/",
      github: "https://github.com/thanush29",
      twitter: "https://x.com/Thanush_29"
    },
    education: {
      degree: "B.Tech in Computer Science Engineering - Data Science & AI",
      institution: "Dr. M.G.R. Educational And Research Institute",
      status: "Final Year Student",
      specialization: "Data Science and Artificial Intelligence",
      additionalEducation: [
        "CSC Honours Diploma in Computer Applications (Aug 2018 - Aug 2019)",
        "Hindi Proficiency - Pandit Level (Passed all 9 levels)",
        "Green Leader Academy Course Completion"
      ]
    },
    experience: [
      {
        role: "Intern",
        company: "G Cloud Networks",
        duration: "Jun 2024 - Aug 2024",
        responsibilities: [
          "Contributed to video editing and multimedia content creation",
          "Designed professional posters and marketing materials",
          "Assisted in website development and digital presence enhancement",
          "Collaborated on various technical and creative projects"
        ]
      },
      {
        role: "SDG Researcher & Volunteer",
        company: "IGEN (Innovation for Green Energy Network)",
        duration: "Jul 2022 - Present",
        responsibilities: [
          "Researched Sustainable Development Goals (SDGs) implementation",
          "Contributed to AI-driven community safety projects",
          "Developed websites for sustainability initiatives",
          "Organized key projects like IGEN MINUSCO2 and ENERGYTHON",
          "Led SDG4MGR campaign reaching 25k+ students"
        ]
      },
      {
        role: "Volunteer",
        company: "Institution of Engineers India (IEI)",
        duration: "Jan 2023 - Jun 2024",
        responsibilities: [
          "Created poster designs for engineering events and campaigns",
          "Organized and managed ENVIRONTHON event",
          "Promoted engineering and technology awareness",
          "Coordinated technical workshops and seminars"
        ]
      }
    ],
    projects: [
      {
        title: "AI Integrated Community Safety Gadgets",
        description: "Developed an AI-driven system for community safety with gas leak, fire, and medical emergency alerts. Features IoT hardware integration and real-time communication systems.",
        technologies: ["IoT", "NodeMCU", "AI/ML", "Sensors", "Proteus", "Real-time Systems"],
        status: "Patent Granted (Application No: 202441007573)",
        github: "https://github.com/thanush29/AI-Integrated-community-safety-gadgets.git",
        impact: "Addresses SDG 11 - Sustainable Cities and Communities"
      },
      {
        title: "Stock Price Prediction Using Machine Learning",
        description: "Built a sophisticated stock price prediction model using LSTM (Long Short-Term Memory) networks for accurate forecasting through historical data analysis.",
        technologies: ["Python", "LSTM", "Machine Learning", "Data Analysis", "TensorFlow", "Pandas"],
        github: "https://github.com/thanush29/Stock_Forcasting_web_app",
        features: ["Historical data processing", "Real-time predictions", "Web-based interface"]
      },
      {
        title: "Safe Zone Detection Using YOLO V8",
        description: "Developed a real-time safe zone detection system for IBM Hackathon using YOLO V8, integrating advanced object detection and image processing for automated safety alerts.",
        technologies: ["YOLO V8", "Computer Vision", "Python", "Object Detection", "OpenCV"],
        github: "https://github.com/thanush29/SBSPS-Challenge-10022-SafeZone-Real-time-Video-Analytics-for-Industrial-Safety-main.git",
        achievement: "IBM Hackathon Project"
      }
    ],
    skills: {
      programming: ["Python", "Java", "JavaScript", "TypeScript", "C++"],
      aiml: [
        "Machine Learning", "Deep Learning", "LSTM Networks", "YOLO V8", 
        "Computer Vision", "Natural Language Processing", "TensorFlow", "PyTorch"
      ],
      technologies: [
        "IoT Development", "NodeMCU", "React.js", "Node.js", "Tailwind CSS", 
        "Git", "Docker", "REST APIs"
      ],
      cloud: ["Microsoft Azure", "IBM Cloud", "Google Cloud Platform"],
      databases: ["SQL", "NoSQL", "MongoDB", "PostgreSQL"],
      tools: ["Proteus", "Arduino IDE", "VS Code", "Jupyter Notebook", "Figma"]
    },
    certifications: [
      "IBM Certified Professional - Python Programming",
      "IBM Certified Professional - Java Programming", 
      "IBM Certified Professional - Big Data Technologies",
      "IBM Certified Professional - Business Intelligence",
      "IBM Certified Professional - Cloud Application Developer",
      "IBM Certified Professional - Hadoop 101",
      "IBM Certified Professional - Moving Data into Hadoop",
      "IBM Certified Professional - Spark Fundamentals I",
      "Microsoft Azure Fundamentals (2023)",
      "Youth and Peace Building Certification (URI South India)",
      "Green Leader Certification (10 Billion Green Leader Academy)"
    ],
    achievements: [
      {
        title: "Patent Granted",
        description: "AI Integrated Community Safety Gadgets (Application No: 202441007573)",
        year: "2024"
      },
      {
        title: "Best Paper Award",
        description: "AI-Driven Smart Safety Framework for Community Protection at ICDSBS 2025, SRM Institute",
        year: "2025"
      },
      {
        title: "IEEE Publications",
        description: "Published research on AI-Integrated Community Safety Solutions for Smart Cities",
        year: "2024"
      },
      {
        title: "Green Volunteer Award 2024",
        description: "Presented by TN Environment Minister for environmental contributions",
        year: "2024"
      },
      {
        title: "G20 Youth Speaker Recognition",
        description: "IGEN COP YOUTH 2030 for climate action initiatives",
        year: "2023"
      },
      {
        title: "Outstanding Leadership Award",
        description: "IGEN Annual Day 2023 for exceptional leadership in sustainability projects",
        year: "2023"
      }
    ],
    interests: [
      "Artificial Intelligence and Machine Learning",
      "Sustainable Technology Development",
      "Smart City Solutions",
      "Community Safety Systems",
      "IoT and Embedded Systems",
      "Environmental Conservation",
      "Youth Leadership and Mentoring",
      "Research and Innovation"
    ],
    careerGoals: [
      "Develop AI solutions that create meaningful societal impact",
      "Contribute to sustainable technology and smart city initiatives",
      "Lead innovative projects in AI-driven safety and security systems",
      "Mentor young engineers and promote STEM education",
      "Bridge the gap between technology and community needs"
    ],
    publications: [
      {
        title: "AI-Integrated Community Safety Solutions for Smart Cities",
        authors: "K. Thanush, R. Santhosh, et al.",
        conference: "SUSTAINED2024",
        description: "A Study Towards SDG 11, IEEE Paper ID: 435, eCF Paper ID: 838746"
      },
      {
        title: "AI-Driven Smart Safety Framework for Community Protection", 
        authors: "K. Thanush, R. Santhosh, A. Pious Niranjan, et al.",
        conference: "ICDSBS 2025, SRM Institute",
        description: "Best Paper Award recipient, IEEE Paper ID: 2490"
      }
    ]
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Personal Information
    if (message.includes('name') || message.includes('who is') || message.includes('about thanush')) {
      return `Thanush Kannan is an AI Engineer and final-year B.Tech student specializing in Computer Science Engineering with Data Science & AI. He's passionate about developing AI solutions that create meaningful societal impact, particularly in community safety and sustainable technology.`;
    }

    // Contact Information
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
      return `You can contact Thanush through:\n• Email: ${portfolioData.personal.email}\n• Phone: ${portfolioData.personal.phone}\n• LinkedIn: ${portfolioData.personal.linkedin}\n• GitHub: ${portfolioData.personal.github}\n• Twitter: ${portfolioData.personal.twitter}`;
    }

    // Education
    if (message.includes('education') || message.includes('study') || message.includes('degree') || message.includes('college') || message.includes('university')) {
      return `Education Background:\n• ${portfolioData.education.degree}\n• Institution: ${portfolioData.education.institution}\n• Status: ${portfolioData.education.status}\n\nAdditional Education:\n${portfolioData.education.additionalEducation.map(edu => `• ${edu}`).join('\n')}`;
    }

    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('internship')) {
      return `Professional Experience:\n\n${portfolioData.experience.map(exp => 
        `${exp.role} at ${exp.company} (${exp.duration}):\n${exp.responsibilities.map(resp => `• ${resp}`).join('\n')}`
      ).join('\n\n')}`;
    }
    
    // Projects
    if (message.includes('project') || message.includes('built') || message.includes('developed') || message.includes('portfolio')) {
      return `Key Projects:\n\n${portfolioData.projects.map(project => 
        `${project.title}:\n${project.description}\n• Technologies: ${project.technologies.join(', ')}\n• GitHub: ${project.github}${project.status ? `\n• Status: ${project.status}` : ''}`
      ).join('\n\n')}`;
    }
    
    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('technical')) {
      return `Technical Skills:\n\n• Programming: ${portfolioData.skills.programming.join(', ')}\n• AI/ML: ${portfolioData.skills.aiml.join(', ')}\n• Technologies: ${portfolioData.skills.technologies.join(', ')}\n• Cloud: ${portfolioData.skills.cloud.join(', ')}\n• Databases: ${portfolioData.skills.databases.join(', ')}\n• Tools: ${portfolioData.skills.tools.join(', ')}`;
    }
    
    // Achievements & Awards
    if (message.includes('achievement') || message.includes('award') || message.includes('recognition') || message.includes('honor')) {
      return `Notable Achievements:\n\n${portfolioData.achievements.map(achievement => 
        `${achievement.title} (${achievement.year}):\n${achievement.description}`
      ).join('\n\n')}`;
    }

    // Certifications
    if (message.includes('certificate') || message.includes('certification') || message.includes('certified')) {
      return `Professional Certifications:\n\n${portfolioData.certifications.map(cert => `• ${cert}`).join('\n')}`;
    }

    // Publications & Research
    if (message.includes('publication') || message.includes('research') || message.includes('paper') || message.includes('ieee')) {
      return `Research Publications:\n\n${portfolioData.publications.map(pub => 
        `"${pub.title}"\nAuthors: ${pub.authors}\nConference: ${pub.conference}\n${pub.description}`
      ).join('\n\n')}`;
    }

    // Patent
    if (message.includes('patent') || message.includes('invention') || message.includes('intellectual property')) {
      const patent = portfolioData.projects.find(p => p.status?.includes('Patent'));
      return `Patent Information:\n\n${patent?.title}\n${patent?.description}\n• Status: ${patent?.status}\n• Technologies: ${patent?.technologies.join(', ')}\n• Impact: ${patent?.impact}`;
    }
    
    // AI/ML specific
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning') || message.includes('ml')) {
      return `Thanush's AI/ML Expertise:\n\n• Specialization: ${portfolioData.skills.aiml.join(', ')}\n\nKey AI Projects:\n• AI Integrated Community Safety Gadgets (Patent Granted)\n• Stock Price Prediction using LSTM\n• Safe Zone Detection using YOLO V8\n\nResearch Focus: AI-driven community safety, smart cities, and sustainable technology solutions.`;
    }

    // Career Goals
    if (message.includes('goal') || message.includes('future') || message.includes('career') || message.includes('aspiration')) {
      return `Career Goals & Aspirations:\n\n${portfolioData.careerGoals.map(goal => `• ${goal}`).join('\n')}`;
    }

    // Interests
    if (message.includes('interest') || message.includes('passion') || message.includes('hobby') || message.includes('like')) {
      return `Interests & Passions:\n\n${portfolioData.interests.map(interest => `• ${interest}`).join('\n')}`;
    }

    // Location
    if (message.includes('location') || message.includes('where') || message.includes('based') || message.includes('live')) {
      return `Thanush is based in ${portfolioData.personal.location}. He's currently pursuing his final year of B.Tech at Dr. M.G.R. Educational And Research Institute.`;
    }

    // Resume/CV
    if (message.includes('resume') || message.includes('cv') || message.includes('download')) {
      return `You can download Thanush's complete resume from the contact section of his portfolio. The resume contains detailed information about his education, experience, projects, certifications, and achievements.`;
    }

    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('good')) {
      return `Hello! I'm Thanush's AI assistant with comprehensive knowledge about his portfolio and resume. I can help you learn about his:\n• Education & Experience\n• AI/ML Projects & Research\n• Technical Skills & Certifications\n• Achievements & Publications\n• Career Goals & Interests\n\nWhat would you like to know?`;
    }

    // Default response with suggestions
    return `I have comprehensive information about Thanush Kannan from his portfolio and resume. I can help you with:\n\n• Personal & Contact Information\n• Education & Academic Background\n• Professional Experience & Internships\n• AI/ML Projects & Technical Skills\n• Certifications & Achievements\n• Research Publications & Patents\n• Career Goals & Interests\n\nPlease ask me about any specific topic you're interested in!`;
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <>
      {/* Chat Toggle Button - Positioned on the left side */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full transition-all duration-500 hover:scale-110 shadow-2xl animate-pulse ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 shadow-red-500/30' 
            : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-2xl hover:shadow-cyan-500/40'
        }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white transform scale-x-[-1]" />}
        
        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
        )}
      </button>

      {/* Chat Window - Positioned on the right side */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl border border-cyan-400/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 text-white animate-gradient-x">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full animate-bounce">
                <Bot size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Thanush AI Assistant</h3>
                <p className="text-sm opacity-90">Portfolio & Resume Expert</p>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 h-80 overflow-y-auto space-y-4 bg-gradient-to-b from-transparent to-black/20">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="p-2 bg-cyan-400/20 rounded-full flex-shrink-0 border border-cyan-400/30">
                    <Bot size={16} className="text-cyan-400" />
                  </div>
                )}
                
                <div
                  className={`max-w-[75%] p-3 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] ${
                    message.isBot
                      ? 'bg-white/10 text-gray-200 border-white/10 hover:bg-white/15'
                      : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/20'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-70 mt-2 text-right">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {!message.isBot && (
                  <div className="p-2 bg-purple-400/20 rounded-full flex-shrink-0 border border-purple-400/30">
                    <User size={16} className="text-purple-400" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="p-2 bg-cyan-400/20 rounded-full flex-shrink-0 border border-cyan-400/30">
                  <Bot size={16} className="text-cyan-400" />
                </div>
                <div className="bg-white/10 p-3 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="p-4 border-t border-white/10 bg-gradient-to-t from-black/20 to-transparent">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about education, projects, skills..."
                className="flex-1 p-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/25"
              >
                <Send size={16} />
              </button>
            </div>
            
            {/* Quick Suggestions */}
            <div className="flex flex-wrap gap-2 mt-3">
              {['Projects', 'Skills', 'Experience', 'Contact'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInputText(suggestion.toLowerCase())}
                  className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
