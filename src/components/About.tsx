import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Title Section */}
          <div className="lg:col-span-2 animate-fade-in-up group">
            <h2 className="text-6xl lg:text-8xl font-bold mb-4 hover:scale-105 transition-transform duration-500 cursor-default">About</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mb-8"></div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 animate-fade-in-up animation-delay-200">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-500 group">
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300">
                <span className="text-cyan-400 font-semibold">B.Tech (CSE - Data Science & AI)</span> graduate 
                and <span className="text-purple-400 font-semibold">AI Engineer</span> with a strong academic record 
                and hands-on experience in AI, machine learning, and community-driven projects. 
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 mt-6 group-hover:text-gray-200 transition-colors duration-300">
                Passionate about <span className="text-purple-400 font-semibold">sustainability</span>, 
                <span className="text-pink-400 font-semibold"> innovative problem-solving</span>, and 
                <span className="text-cyan-400 font-semibold"> creating technologies that make a meaningful difference</span>. 
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 mt-6 group-hover:text-gray-200 transition-colors duration-300">
                Proven leadership, teamwork, and innovation skills, with a commitment to 
                <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"> technological advancements and societal impact</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;