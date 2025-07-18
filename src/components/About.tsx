import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Title Section */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <h2 className="text-6xl lg:text-8xl font-bold mb-4">About</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mb-8"></div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 animate-fade-in-up animation-delay-200">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300">
                <span className="text-cyan-400 font-semibold">B.Tech (CSE - Data Science & AI)</span> graduate 
                and <span className="text-purple-400 font-semibold">AI Engineer</span> with a strong academic record 
                and hands-on experience in AI, machine learning, and community-driven projects. 
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 mt-6">
                Passionate about <span className="text-purple-400 font-semibold">sustainability</span>, 
                <span className="text-pink-400 font-semibold"> innovative problem-solving</span>, and 
                <span className="text-cyan-400 font-semibold"> creating technologies that make a meaningful difference</span>. 
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 mt-6">
                Proven leadership, teamwork, and innovation skills, with a commitment to 
                <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"> technological advancements and societal impact</span>.
              </p>
            </div>

          {/* Professional Links Section */}
          <div className="mt-16 animate-fade-in-up animation-delay-400">
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Professional Profiles & Publications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/thanush29/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/thanush29"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">GitHub</span>
              </a>

              {/* IEEE Author Profile */}
              <a
                href="https://ieeexplore.ieee.org/author/860527343194629"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-blue-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">IEEE Author</span>
              </a>

              {/* Microsoft Learn */}
              <a
                href="https://learn.microsoft.com/en-us/users/thanush29/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 0v11.408h11.408V0H0zm12.594 0v11.408H24V0H12.594zM0 12.594V24h11.408V12.594H0zm12.594 0V24H24V12.594H12.594z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">Microsoft</span>
              </a>

              {/* Google Cloud */}
              <a
                href="https://www.cloudskillsboost.google/public_profiles/4c49b00b-d2ad-4666-9974-36fe86613b8f"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-red-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">Google Cloud</span>
              </a>

              {/* Credly */}
              <a
                href="https://www.credly.com/users/thanush29"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-orange-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0L8.5 8.5 0 12l8.5 3.5L12 24l3.5-8.5L24 12l-8.5-3.5L12 0z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">Credly</span>
              </a>

              {/* ResearchGate */}
              <a
                href="https://www.researchgate.net/profile/Thanush-Kannan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-teal-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.586 0H4.414C1.977 0 0 1.977 0 4.414v15.172C0 22.023 1.977 24 4.414 24h15.172C22.023 24 24 22.023 24 19.586V4.414C24 1.977 22.023 0 19.586 0zM8 19a1 1 0 01-2 0v-6a1 1 0 012 0v6zM7 9a1 1 0 110-2 1 1 0 010 2zm10 10a1 1 0 01-2 0v-2.5c0-1.381-1.119-2.5-2.5-2.5S10 15.119 10 16.5V19a1 1 0 01-2 0v-2.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5V19z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">ResearchGate</span>
              </a>

              {/* Medium */}
              <a
                href="https://medium.com/@thanush29"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-black rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">Medium</span>
              </a>

              {/* Portfolio */}
              <a
                href="https://thanush29-ai.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">Portfolio</span>
              </a>
            </div>

            {/* IEEE Publications Section */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-center mb-6 text-purple-400">IEEE Publications</h4>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <a
                  href="https://ieeexplore.ieee.org/document/11031508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-purple-400 group-hover:text-purple-300">IEEE Publication 1</span>
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200">AI-Integrated Community Safety Solutions for Smart Cities</p>
                </a>

                <a
                  href="https://ieeexplore.ieee.org/document/11073964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-purple-400 group-hover:text-purple-300">IEEE Publication 2</span>
                  </div>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200">AI-Driven Smart Safety Framework for Community Protection</p>
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;