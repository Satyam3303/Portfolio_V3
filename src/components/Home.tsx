import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

const roles = ['Full Stack Developer', 'Backend Engineer', 'Node.js Specialist', 'Problem Solver'];

export const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const cursorRef = useRef<HTMLSpanElement>(null);

  // Typing animation
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current)
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #050810 0%, #0a0f1e 50%, #0d1425 100%)' }}
    >
      {/* Animated orbs */}
      <div className="orb w-[600px] h-[600px] bg-teal-500/8 -top-40 -right-40" style={{ animationDelay: '0s' }} />
      <div className="orb w-[400px] h-[400px] bg-blue-600/8 top-1/2 -left-32" style={{ animationDelay: '-7s' }} />
      <div className="orb w-[300px] h-[300px] bg-amber-500/6 bottom-20 right-1/4" style={{ animationDelay: '-14s' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Floating 3D ring */}
      <div className="animate-float absolute top-24 right-16 w-64 h-64 hidden lg:block" style={{ animationDuration: '8s' }}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/10 flex items-center justify-center backdrop-blur-sm">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400/20 to-teal-600/5 border border-teal-400/20" />
        </div>
      </div>
      <div className="animate-float absolute bottom-32 left-10 w-40 h-40 hidden lg:block" style={{ animationDuration: '10s', animationDelay: '-4s' }}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-500/8 to-transparent border border-amber-500/10" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="section-label mb-6 animate-fade-in-up opacity-0-init delay-100">
            Hello, World!
          </div>

          <h1
            className="font-extrabold text-white mb-4 animate-fade-in-up opacity-0-init delay-200"
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Shivam <span className="gradient-text">Satyam</span>
          </h1>

          {/* Typing role */}
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up opacity-0-init delay-300" style={{ minHeight: '3rem' }}>
            <span className="text-xl md:text-2xl text-gray-300 font-light">{displayed}</span>
            <span ref={cursorRef} className="inline-block w-0.5 h-6 bg-teal-400 ml-0.5" style={{ transition: 'opacity 0.1s' }} />
          </div>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mb-10 animate-fade-in-up opacity-0-init delay-400">
            I build <span className="text-teal-400 font-medium">responsive & scalable</span> web applications
            with modern technologies — specializing in backend architecture with{' '}
            <span className="text-white font-medium">Nest.js</span>,{' '}
            <span className="text-white font-medium">Node.js</span>, and{' '}
            <span className="text-white font-medium">TypeScript</span>.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10 animate-fade-in-up opacity-0-init delay-500">
            {[
              { value: '1.5+', label: 'Years Exp.' },
              { value: '6+',   label: 'Projects' },
              { value: '10+',  label: 'Technologies' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="stat-number">{stat.value}</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up opacity-0-init delay-600">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">
              <Download size={16} /> Get In Touch
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 animate-fade-in-up opacity-0-init delay-700">
            {[
              { href: 'https://github.com/Satyam3303', label: 'GitHub',   icon: <Github size={18} /> },
              { href: 'https://www.linkedin.com/in/shivam-satyam3303/', label: 'LinkedIn', icon: <Linkedin size={18} /> },
              { href: 'mailto:shivamsatyam209@gmail.com', label: 'Email', icon: <Mail size={18} /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center w-10 h-10 rounded-lg glass border border-white/[0.06] text-gray-400 hover:text-teal-400 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-teal-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
};