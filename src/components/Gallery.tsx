import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Award, Calendar, MapPin, GraduationCap, Presentation, Lightbulb } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: Award },
    { id: 'mgr', label: 'Dr. M.G.R. Educational And Research Institute', icon: GraduationCap },
    { id: 'presentation', label: 'Presentation Photos', icon: Presentation },
    { id: 'igen', label: 'IGEN', icon: Lightbulb }
  ];

  const galleryItems = [
    // Dr. M.G.R. Educational And Research Institute
    {
      id: 1,
      src: "/images/internship-ceremony.jpg",
      title: "Internship Completion Certificate Ceremony",
      category: "mgr",
      date: "2022",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Internship completion certificate received by college president A.C.S. Arun Kumar sir to me and my teammates."
    },
    {
      id: 2,
      src: "/images/internship-team.jpg",
      title: "Internship Team Group Photo",
      category: "mgr",
      date: "2022",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Group photo with teammates during internship completion ceremony."
    },
    {
      id: 3,
      src: "/images/green-leader-completion.jpg",
      title: "10 Billion Green Leader Academy Course Completion",
      category: "mgr",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Completing the 10 Billion Green Leader Academy Course, alongside our esteemed President and DS&AI HODs."
    },
    {
      id: 4,
      src: "/images/green-leader-group1.jpeg",
      title: "Green Leader Academy - Group Photo 1",
      category: "mgr",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Group photo during Green Leader Academy course completion ceremony."
    },
    {
      id: 5,
      src: "/images/green-leader-group2.jpeg",
      title: "Green Leader Academy - Group Photo 2",
      category: "mgr",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Another group photo from the Green Leader Academy course completion."
    },
    {
      id: 6,
      src: "/images/robotz-volunteer.jpeg",
      title: "ROBOTZINDIA.in V9.0 Volunteer",
      category: "mgr",
      date: "2024",
      location: "Anna University Chennai",
      description: "Volunteered at ROBOTZINDIA.in V9.0 - a NATIONAL LEVEL ROBOTICS EVENT organized by Robotics and Artificial Intelligence Foundation."
    },
    {
      id: 7,
      src: "/images/robotz-team.jpeg",
      title: "ROBOTZINDIA.in V9.0 - Team Photo",
      category: "mgr",
      date: "2024",
      location: "Anna University Chennai",
      description: "Team photo during ROBOTZINDIA.in V9.0 robotics event volunteering."
    },
    {
      id: 8,
      src: "/images/google-cloud-completion.jpeg",
      title: "Google Cloud Study Jam Completion",
      category: "mgr",
      date: "2024",
      location: "Google Developer Student Clubs (DRMGRERI)",
      description: "Completed the Google Cloud Study Jam and received Swag and Skill Badges from Google as a GDSC member."
    },
    {
      id: 9,
      src: "/images/google-cloud-certificate.jpeg",
      title: "Google Cloud Study Jam - Certificate",
      category: "mgr",
      date: "2024",
      location: "Google Developer Student Clubs (DRMGRERI)",
      description: "Certificate and swag received from Google Cloud Study Jam completion Group Photo."
    },
    {
      id: 10,
      src: "/images/devfest-2023.jpeg",
      title: "DevFest 2023 at IIT Madras",
      category: "mgr",
      date: "2023",
      location: "IIT Madras Research Park",
      description: "Attended DevFest 2023 organized by Google Developer Groups Chennai and earned a participation certificate."
    },
    {
      id: 11,
      src: "/images/ai-safety-presentation.jpg",
      title: "AI-Driven Smart Safety Framework Presentation",
      category: "mgr",
      date: "2024",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "AI-Driven Smart Safety Framework for Community Protection prototype presentation with college president."
    },
    {
      id: 12,
      src: "/images/ai-safety-group.jpg",
      title: "AI Safety Framework - Group Photo",
      category: "mgr",
      date: "2024",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Group photo during AI-Driven Smart Safety Framework prototype presentation."
    },

    // IGEN Category
    {
      id: 13,
      src: "/images/ensav-induction.jpg",
      title: "ENSAV CLUB Induction Program",
      category: "igen",
      date: "2022",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "MGR IGEN ENSAV CLUB induction program with keynote speaker Er.Yuvaraj Moorthy from GreeNext (Schneider Electric)."
    },
    {
      id: 14,
      src: "/images/ensav-group.jpg",
      title: "ENSAV CLUB Induction - Group Photo",
      category: "igen",
      date: "2022",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Group photo from the ENSAV CLUB induction program and swearing-in ceremony."
    },
    {
      id: 15,
      src: "/images/sdg4mgr-campaign.jpg",
      title: "SDG4MGR Campaign Participation",
      category: "igen",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Honored to be part of the SDG4MGR campaign, raising SDGs awareness among 25k students in MGR ERI campuses."
    },
    {
      id: 16,
      src: "/images/sdg4mgr-individual.jpg",
      title: "SDG4MGR Campaign - Awareness",
      category: "igen",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Individual photo from SDG4MGR campaign participation, pledging to act for SDGs."
    },
    {
      id: 17,
      src: "/images/sdg4mgr-group.jpg",
      title: "SDG4MGR Campaign - Group Photo",
      category: "igen",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Group photo from SDG4MGR campaign, motivating fellow friends to begin SDG-aligned projects."
    },
    {
      id: 18,
      src: "/images/energathon-winners.jpg",
      title: "IGEN ENERGATHON 2023 Winners Valedictory",
      category: "igen",
      date: "2023",
      location: "Dr. M.G.R. Educational And Research Institute",
      description: "Celebrated Winners Valedictory of IGEN ENERGATHON 2023 conducted in seminar hall."
    },
    {
      id: 19,
      src: "/images/g20-youth-speaker.jpg",
      title: "G20 Youth Speaker Recognition",
      category: "igen",
      date: "2023",
      location: "IGEN COP YOUTH 2030",
      description: "G20 Youth Speaker Recognition at IGEN COP YOUTH 2030 for climate action initiatives."
    },
    {
      id: 20,
      src: "/images/g20-youth-group.jpg",
      title: "G20 Youth Speaker - Group Photo",
      category: "igen",
      date: "2023",
      location: "IGEN COP YOUTH 2030",
      description: "Group photo from G20 Youth Speaker Recognition ceremony."
    },
    {
      id: 21,
      src: "/images/youth-peace-building.jpeg",
      title: "Youth and Peace Building Training",
      category: "igen",
      date: "2024",
      location: "Mar Thoma Youth Centre, Adoor, Kerala",
      description: "Training on Youth and Peace Building for Community Leaders hosted by URI South India Region."
    },

    // Presentation Photos
    {
      id: 22,
      src: "/images/best-paper-award.jpg",
      title: "Best Paper Award - ICDSBS 2025",
      category: "presentation",
      date: "2025",
      location: "SRM Institute",
      description: "AI-Driven Smart Safety Framework for Community Protection - Best Paper Award at ICDSBS 2025."
    },
    {
      id: 23,
      src: "/images/sustained2024-presentation.jpg",
      title: "SUSTAINED2024 Conference Presentation",
      category: "presentation",
      date: "2024",
      location: "SUSTAINED2024 Conference",
      description: "AI-Integrated Community Safety Solutions for Smart Cities presentation at SUSTAINED2024."
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Get the icon for a specific category
  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Award;
  };

  // Get the icon for the current item based on its category
  const getItemIcon = (item: any) => {
    return getCategoryIcon(item.category);
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
    const maxIndex = filteredItems.length - 1;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex > 0 ? currentIndex - 1 : maxIndex);
    } else {
      setSelectedImage(currentIndex < maxIndex ? currentIndex + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A visual journey through my achievements, events, and memorable moments in AI and technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-200">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-cyan-400/30'
                }`}
              >
                <IconComponent size={18} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up animation-delay-400">
          {filteredItems.map((item, index) => {
            const ItemIcon = getItemIcon(item);
            return (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-400/20 backdrop-blur-sm text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/30">
                    {categories.find(cat => cat.id === item.category)?.label}
                  </div>

                  {/* Hover Overlay - Now uses the correct icon for each category */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <ItemIcon className="text-white" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
                <img
                  src={filteredItems[selectedImage].src}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-cyan-400/20 rounded-lg">
                      {(() => {
                        const ItemIcon = getItemIcon(filteredItems[selectedImage]);
                        return <ItemIcon className="text-cyan-400" size={20} />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {filteredItems[selectedImage].title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{filteredItems[selectedImage].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{filteredItems[selectedImage].location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {filteredItems[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Gallery;