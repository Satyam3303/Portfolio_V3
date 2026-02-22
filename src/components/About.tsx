import { useEffect, useRef } from 'react';
import { Code2, Server, Database, GitBranch } from 'lucide-react';
import Profile from '../assets/profile.jpg';

const highlights = [
  { icon: <Code2 size={16} />,    text: 'Full Stack Development' },
  { icon: <Server size={16} />,   text: 'Backend Architecture' },
  { icon: <Database size={16} />, text: 'Database Design' },
  { icon: <GitBranch size={16} />,text: 'CI/CD & DevOps' },
];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting)
          entries[0].target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 120)
          );
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1425 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal section-label mb-4">About Me</div>
        <h2 className="reveal section-heading text-white mb-16">
          Crafting Code with <span className="gradient-text">Purpose</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal flex justify-center lg:justify-start">
            <div className="relative group" style={{ perspective: '1000px' }}>
              {/* Offset decorative borders */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-teal-500/20" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-amber-500/15" />

              <div className="relative rounded-2xl overflow-hidden w-80 h-80 md:w-96 md:h-96 glass-teal transition-transform duration-500">
                <img
                  src={Profile}
                  alt="Shivam Satyam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 via-transparent to-transparent" />
                {/* Name badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl px-4 py-3 border border-white/10">
                    <p className="text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>Shivam Satyam</p>
                    <p className="text-teal-400 text-xs">Full Stack Developer @ Accenture</p>
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -top-6 -right-6 glass-teal rounded-xl p-4 border border-teal-500/25 animate-float" style={{ animationDuration: '5s' }}>
                <div className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>1.5+</div>
                <div className="text-teal-400 text-xs">Yrs Exp</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="reveal text-gray-300 leading-relaxed mb-5">
              I'm a passionate <span className="text-white font-medium">Full Stack Developer</span> with
              hands-on experience building scalable and secure web applications. Currently working as
              a <span className="text-teal-400 font-medium">Software Engineer at Accenture</span>,
              I specialize in backend development with Nest.js, Node.js, and TypeScript.
            </p>
            <p className="reveal text-gray-400 leading-relaxed mb-5">
              I've contributed to projects like revamping enterprise applications with Next.js and
              Nest.js, and built feature-rich applications including a real-time WhatsApp clone
              and a Career Management System using MERN stack, Socket.io, JWT, and Twilio.
            </p>
            <p className="reveal text-gray-400 leading-relaxed mb-8">
              My workflow emphasizes clean code, CI/CD pipelines via Azure DevOps, and efficient
              collaboration through Jira and Confluence.
            </p>

            <div className="reveal grid grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <div
                  key={h.text}
                  className="flex items-center gap-3 glass rounded-lg p-3 border border-white/[0.05] hover:border-teal-500/20 transition-all duration-300 hover:bg-teal-500/5"
                >
                  <span className="text-teal-400">{h.icon}</span>
                  <span className="text-gray-300 text-sm font-medium">{h.text}</span>
                </div>
              ))}
            </div>

            <div className="reveal flex gap-4">
              <a href="#contact" className="btn-primary">Let's Talk</a>
              <a href="#projects" className="btn-outline">My Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};