import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Kakashi from '../assets/Kakashi.jpg';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = navItems.map((i) => i.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-teal-500/30 blur-sm group-hover:blur-md transition-all duration-300" />
            <img
              src={Kakashi}
              alt="Logo"
              className="relative w-10 h-10 rounded-full object-cover border-2 border-teal-500/50 group-hover:border-teal-400 transition-all duration-300"
            />
          </div>
          <span className="font-bold text-white text-sm tracking-wide hidden sm:block" style={{ fontFamily: 'Syne, sans-serif' }}>
            Shivam<span className="text-teal-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 btn-primary text-sm py-2.5 px-5">
            Hire Me
          </a>
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-white/[0.06]">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors py-2 border-b border-white/[0.04] ${
                  activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-center mt-2">Hire Me</a>
          </nav>
        </div>
      )}
    </header>
  );
};