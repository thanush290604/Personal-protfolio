import React, { useState } from 'react';
import { X, Trophy, Award, FileText, Lightbulb, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SkillsModal: React.FC<SkillsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('certificates');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const tabs = [
    { id: 'certificates', label: 'Certificates', icon: Trophy },
    { id: 'awards', label: 'Awards', icon: Award },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'patents', label: 'Patents', icon: Lightbulb },
    { id: 'publications', label: 'Publications', icon: FileText }
  ];

  const content = {
    certificates: [
      {
        title: "IBM Certified Professional - Python",
        description: "Certified in Python programming through IBM SkillsBuild platform",
        image: "/images/ibm-python-cert.jpg"
      },
      {
        title: "IBM Certified Professional - Java",
        description: "Certified in Java programming through IBM SkillsBuild platform",
        image: "/images/ibm-java-cert.jpg"
      },
      {
        title: "IBM Certified Professional - Big Data",
        description: "Certified in Big Data technologies through IBM SkillsBuild platform",
        image: "/images/ibm-bigdata-cert.jpg"
      },
      {
        title: "IBM Certified Professional - Business Intelligence",
        description: "Certified in Business Intelligence through IBM SkillsBuild platform",
        image: "/images/ibm-bi-cert.jpg"
      },
      {
        title: "IBM Certified Professional - Cloud Application Developer",
        description: "Certified in Cloud Application Developer through IBM SkillsBuild platform",
        image: "/images/ibm-cl-cert.jpg"
      },
      {
        title: "IBM Certified Professional - Hadoop 101",
        description: "Certified in Hadoop 101 through IBM SkillsBuild platform",
        image: "/images/ibm-ha-cert.jpg"
      },
      {
        title: "IBM Certified Professional - Moving Data into Hadoop",
        description: "Certified in Moving Data into Hadoop through IBM SkillsBuild platform",
        image: "/images/ibm-mo-cert.jpg"
      },
      {
        title: "IBM Certified Professional - Spark Fundamentals I",
        description: "Certified in Spark Fundamentals I through IBM SkillsBuild platform",
        image: "/images/ibm-spa-cert.jpg"
      },
      {
        title: "Microsoft Azure Fundamentals",
        description: "Microsoft Certified: Azure Fundamentals (2023) - Cloud computing and Azure services",
        image: "/images/azure-cert.jpg"
      },
      {
        title: "CSC Honours Diploma",
        description: "Computer Application Diploma completed from Aug 2018 to Aug 2019",
        image: "/images/csc-diploma.jpg"
      },
      {
        title: "Youth and Peace Building Certification",
        description: "Completed training for Community Leaders by URI South India (Kerala, 2024)",
        image: "/images/youth-peace-cert.jpg"
      },
      {
        title: "Green Leader Certification",
        description: "Certified Green Leader - Completed 10 Billion Green Leader Academy Course",
        image: "/images/green-leader-cert.jpg"
      },
      {
        title: "XAKAL Course Completed",
        description: "PRE-PLACEMENT TRAINING PROGRAMME CONDUCTED BY XAKAL",
        image: "/images/XAKAL.jpg"
      },
      {
        title: "ICON 23",
        description: "The 8th National Conference on Recent Trends in ABCD",
        image: "/images/Icon.jpg"
      },
      {
        title: "SIMATS ENGINEERING",
        description: "Department of Applied Electronics & Machine Learning DIODZ 2023 Technical Symposium",
        image: "/images/SIMATS.jpg"
      },
      {
        title: "Presented paper at NCICT'24",
        description: "Vishwa Pradyog Conference awarded participation certificate",
        image: "/images/NCICT’24.jpg"
      },
      {
        title: "Second Southern Regional Conclave of Students chapter",
        description: "Second Southern Regional Conclave of Students chapter Paper Presentation",
        image: "/images/Second.jpg"
      },
      {
        title: "Volunteer Certificate",
        description: "Dr.APJ Abdul Kalam Satellite Launch Vehicle Mission-2023",
        image: "/images/Abdul Kalam.jpg"
      },
      {
        title: "Volunteered at ROBOTZINDIA.in V9.0 (Anna University, 2024)",
        description: "ROBOTZINDIA V9.o • A NATIONAL LEVEL ROBOTICS EVENT organized by Robotics and Artificial Intelligence Foundation (RAAIF)",
        image: "/images/ROBOTZINDIA.jpg"
      },
      {
        title: "Hindi Proficiency - Pandit Level",
        description: "Certified Pandit in Hindi - Passed all 9 levels of Hindi proficiency exams",
        image: "/images/hindi-pandit-cert.jpg"
      }
    ],
    awards: [
      {
        title: "IGEN Best Volunteer & Achievement Certificate",
        description: "MGR IGEN ENSAVCLUB - Recognized for exceptional volunteer work and achievements",
        image: "/images/igen-best-volunteer.jpg"
      },
      {
        title: "Outstanding Leadership Award",
        description: "IGEN Annual Day 2023 - Acknowledged for exceptional leadership in sustainability projects",
        image: "/images/leadership-award.jpg"
      },
      {
        title: "Patent Award",
        description: "Granted for 'AI Integrated Community Safety Gadgets' by Dr. MGR Educational and Research Institute",
        image: "/images/patent-award.jpg"
      },
      {
        title: "Best Event Organized Award",
        description: "Awarded by Dr. MGR Educational and Research Institute for exceptional event organization",
        image: "/images/best-event-award.jpg"
      },
      {
        title: "Green Volunteer Award 2024",
        description: "Presented by TN Environment Minister at IGEN event for environmental contributions",
        image: "/images/green-volunteer-award.jpg"
      },
      {
        title: "G20 Youth Speaker Recognition",
        description: "IGEN COP YOUTH 2030 - Recognized as youth speaker for climate action initiatives",
        image: "/images/g20-speaker-award.jpg"
      },
      {
        title: "IBM SkillsBuild",
        description: "Hack Challenge 2023 Certificate of Participation successfully completing Hack Challenge 2023.",
        image: "/images/IBM.jpg"
      },
      {
        title: "ECO-ACTIVIST 2024",
        description: "NATIONAL ENVIRONMENT CLIMATE CHANCE FORUM WORLD ENVIRONMENTAL DAY CELEBRATION",
        image: "/images/Eco.jpg"
      },
      {
        title: "NPC Student Appreciation Award",
        description: "Awarded for academic excellence and innovation in AI and technology projects",
        image: "/images/npc-appreciation.jpg"
      }
    ],
    internships: [
      {
        title: "First Internship at College MGR Office",
        description: "Joint Secretary of MGR IGEN ENSAV CLUB (August 2022) - Office Barriers internship",
        image: "/images/first-internship.jpg"
      },
      {
        title: "Teachnook Internship Completion",
        description: "AI Project Completed - Internship completion certificate from Teachnook",
        image: "/images/teachnook-internship.jpg"
      },
      {
        title: "G Cloud Networks Internship",
        description: "Intern at G Cloud Networks - Contributed to video editing, poster design, and website development",
        image: "/images/gcloud-internship.jpg"
      }
    ],
    patents: [
      {
        title: "AI Integrated Community Safety Gadgets",
        description: "Patent Granted (Application No: 202441007573) by Dr. MGR Educational and Research Institute. Final product development completed for AI-driven community safety system with IoT integration.",
        image: "/images/patent-document.jpg"
      }
    ],
    publications: [
      {
        title: "AI-Integrated Community Safety Solutions for Smart Cities",
        description: "K. Thanush, R. Santhosh, et al. 'A Study Towards SDG 11', IEEE, presented and published at SUSTAINED2024. Paper ID: 435, eCF Paper ID: 838746.",
        image: "/images/ieee-publication1.jpg"
      },
      {
        title: "AI-Driven Smart Safety Framework for Community Protection",
        description: "K. Thanush, R. Santhosh, A. Pious Niranjan, et al. 'AI-Driven Smart Safety Framework for Community Protection', IEEE, Best Paper Award at ICDSBS 2025, SRM Institute. Paper ID: 2490.",
        image: "/images/ieee-publication2.jpg"
      }
    ]
  };

  const currentContent = content[activeTab as keyof typeof content];

  // Get the icon for the current active tab
  const getCurrentTabIcon = () => {
    const currentTab = tabs.find(tab => tab.id === activeTab);
    return currentTab ? currentTab.icon : Trophy;
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const maxIndex = currentContent.length - 1;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex > 0 ? currentIndex - 1 : maxIndex);
    } else {
      setSelectedImage(currentIndex < maxIndex ? currentIndex + 1 : 0);
    }
  };

  if (!isOpen) return null;

  const CurrentIcon = getCurrentTabIcon();

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div className="relative w-full max-w-7xl max-h-[90vh] bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              <X size={24} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 p-6 border-b border-white/10">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <IconComponent size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-96">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentContent.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Overlay - Now uses the correct icon for each tab */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <CurrentIcon className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[95vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-3 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black/80 transition-colors duration-200 hover:scale-110"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {currentContent.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black/80 transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-black/80 transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Certificate Image */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden animate-fade-in-up">
              <div className="relative">
                <img
                  src={currentContent[selectedImage].image}
                  alt={currentContent[selectedImage].title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              
              {/* Certificate Info - Also uses correct icon */}
              <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-cyan-400/20 rounded-lg">
                    <CurrentIcon className="text-cyan-400" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentContent[selectedImage].title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {currentContent[selectedImage].description}
                </p>
                
                {/* Image Counter */}
                {currentContent.length > 1 && (
                  <div className="mt-4 text-center">
                    <span className="text-cyan-400 font-medium">
                      {selectedImage + 1} of {currentContent.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillsModal;