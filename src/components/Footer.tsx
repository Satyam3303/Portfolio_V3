import { ChevronUp, Heart } from 'lucide-react';
import Kakashi from '../assets/Kakashi.jpg';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/[0.06]" style={{ background: '#050810' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-sm" />
              <img src={Kakashi} alt="Logo" className="relative w-10 h-10 rounded-full object-cover border border-teal-500/40" />
            </div>
            <div>
              <p className="text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>Shivam Satyam</p>
              <p className="text-gray-500 text-xs">Full Stack Developer</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-200">
                {item}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-xl glass border border-white/[0.07] text-gray-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1 shrink-0"
            aria-label="Scroll to top"
          >
            <ChevronUp size={18} />
          </button>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Shivam Satyam. All rights reserved.</p>
          <p className="text-gray-600 text-sm flex items-center gap-1.5">
            Designed & built with <Heart size={13} className="text-red-500 fill-red-500" /> by Shivam Satyam
          </p>
        </div>
      </div>
    </footer>
  );
};