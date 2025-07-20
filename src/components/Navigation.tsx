import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onOpenSkillsModal: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onOpenSkillsModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#profiles', label: 'Profiles' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-cyan-500/10' : 'bg-black/40 backdrop-blur-md'
    } border border-white/20 rounded-2xl px-3 py-2 max-w-fit`}>
      <div className="flex items-center justify-center gap-1">
        {/* Logo/Name */}
        <button
          onClick={() => scrollToSection('#home')}
          className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 px-2 py-1 whitespace-nowrap"
        >
          Thanush
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`px-2 py-1 rounded-lg transition-all duration-300 text-xs whitespace-nowrap hover:scale-105 ${
                activeSection === item.href.slice(1)
                  ? 'text-cyan-400 bg-cyan-400/20 shadow-lg shadow-cyan-400/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Credentials Button */}
        <button
          onClick={onOpenSkillsModal}
          className="hidden lg:flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-lg hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 text-xs whitespace-nowrap"
        >
          <Trophy size={12} />
          Creds
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-1 hover:scale-110 transition-transform duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 p-3 bg-black/95 backdrop-blur-xl rounded-xl border border-white/20 animate-fade-in-up">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm ${
                activeSection === item.href.slice(1)
                  ? 'text-cyan-400 bg-cyan-400/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onOpenSkillsModal();
              setIsMenuOpen(false);
            }}
            className="w-full mt-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 text-sm"
          >
            <Trophy size={14} />
            Creds
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;