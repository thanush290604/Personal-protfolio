import React from 'react';
import { Home, ArrowLeft, Search, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20"></div>
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

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8 animate-fade-in-up animation-delay-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, even the best AI models sometimes get lost!
            </p>
          </div>

          {/* Suggestions */}
          <div className="mb-12 animate-fade-in-up animation-delay-400">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Search className="text-cyan-400" size={24} />
                <h3 className="text-xl font-semibold text-cyan-400">What you can do:</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-left">
                <li>• Check if the URL is spelled correctly</li>
                <li>• Go back to the previous page</li>
                <li>• Visit the homepage to explore my portfolio</li>
                <li>• Use the AI chatbot to find what you're looking for</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <button
              onClick={goHome}
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <Home size={24} />
              Go to Homepage
            </button>
            
            <button
              onClick={goBack}
              className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-cyan-400/30 transition-all duration-300"
            >
              <ArrowLeft size={24} />
              Go Back
            </button>
          </div>

          {/* AI Assistant Suggestion */}
          <div className="mt-12 animate-fade-in-up animation-delay-800">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Bot className="text-purple-400" size={24} />
                <h3 className="text-lg font-semibold text-purple-400">Need Help?</h3>
              </div>
              <p className="text-gray-300">
                Try asking my AI assistant! Click the chat button in the bottom-left corner 
                to get help finding what you're looking for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;