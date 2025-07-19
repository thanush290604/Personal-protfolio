import React from 'react';

const ProfessionalProfiles: React.FC = () => {
  return (
    <section id="profiles" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-black to-purple-900/10"></div>
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
            Profiles & Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional profiles, certifications, and published research contributions
          </p>
        </div>

        {/* Professional Profiles */}
        <div className="mb-16 animate-fade-in-up animation-delay-200">
          <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Professional Profiles</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
              <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">Microsoft Learn</span>
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

            {/* Forem */}
            <a
              href="https://forem.com/thanush29"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center bg-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.73 11.93C7.73 13.65 9.13 15.05 10.85 15.05C12.57 15.05 13.97 13.65 13.97 11.93C13.97 10.21 12.57 8.81 10.85 8.81C9.13 8.81 7.73 10.21 7.73 11.93ZM24 12C24 18.63 18.63 24 12 24C5.37 24 0 18.63 0 12C0 5.37 5.37 0 12 0C18.63 0 24 5.37 24 12Z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">Forem</span>
            </a>

            {/* Google Developers */}
            <a
              href="https://developers.google.com/profile/u/thanush29"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center bg-green-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 text-center">Google Dev</span>
            </a>
          </div>
        </div>

        {/* Research Publications */}
        <div className="animate-fade-in-up animation-delay-400">
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-400">Research Publications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a
              href="https://ieeexplore.ieee.org/document/11031508"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-bold text-purple-400 group-hover:text-purple-300">IEEE Publication</span>
                  <p className="text-sm text-gray-400">SUSTAINED2024 Conference</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                AI-Integrated Community Safety Solutions for Smart Cities
              </h4>
              <p className="text-sm text-gray-300 group-hover:text-gray-200 leading-relaxed">
                A comprehensive study towards SDG 11 focusing on AI-driven community safety systems and smart city implementations.
              </p>
            </a>

            <a
              href="https://ieeexplore.ieee.org/document/11073964"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-bold text-purple-400 group-hover:text-purple-300">IEEE Publication</span>
                  <p className="text-sm text-gray-400">ICDSBS 2025 - Best Paper Award</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                AI-Driven Smart Safety Framework for Community Protection
              </h4>
              <p className="text-sm text-gray-300 group-hover:text-gray-200 leading-relaxed">
                Award-winning research on AI-driven safety frameworks, recognized with Best Paper Award at ICDSBS 2025, SRM Institute.
              </p>
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default ProfessionalProfiles;