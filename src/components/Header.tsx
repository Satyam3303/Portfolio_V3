import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = ['Home','About','Skills','Experience','Projects','Contact'];

export const Header = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState('home');
  const [time, setTime]           = useState('');

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].toLowerCase());
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(navItems[i].toLowerCase()); break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#060809]/95 backdrop-blur-md border-b border-[rgba(57,255,20,0.08)]' : 'bg-transparent'} py-4`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-7 h-7 border border-[var(--green)] relative flex items-center justify-center">
            <div className="w-3 h-3 bg-[var(--green)]" style={{ clipPath: 'polygon(50% 0%,100% 100%,0% 100%)' }} />
            <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t border-l border-[var(--green)]" />
            <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b border-r border-[var(--green)]" />
          </div>
          <span className="hud text-[var(--green)] text-xs flicker">SS_PORTFOLIO</span>
        </a>

        {/* Live time */}
        <div className="hidden md:block hud absolute left-1/2 -translate-x-1/2">
          {time} <span className="opacity-40">UTC+5:30</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`nav-item ${active === item.toLowerCase() ? 'active' : ''}`}>
              {item}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-[var(--green)] p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[#060809]/98">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="block px-6 py-3 nav-item border-b border-[var(--border)]"
              onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};