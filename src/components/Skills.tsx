import { useEffect, useRef, useState } from 'react';

const technicalSkills = [
  { name: 'JavaScript',       level: 90, color: '#f59e0b' },
  { name: 'TypeScript',       level: 85, color: '#3b82f6' },
  { name: 'Node.js',          level: 82, color: '#22c55e' },
  { name: 'React.js',         level: 85, color: '#38bdf8' },
  { name: 'Nest.js',          level: 80, color: '#e11d48' },
  { name: 'Express.js',       level: 80, color: '#94a3b8' },
  { name: 'SQL / MSSQL',      level: 85, color: '#a78bfa' },
  { name: 'MongoDB',          level: 78, color: '#4ade80' },
  { name: 'C++ / Python',     level: 85, color: '#fb923c' },
  { name: 'Azure Pipelines',  level: 78, color: '#60a5fa' },
];

const softSkills = [
  'Problem Solving', 'Communication', 'Team Collaboration',
  'Time Management', 'Adaptability', 'Critical Thinking',
];

const tools = [
  'Git', 'GitHub', 'VS Code', 'Visual Studio', 'Docker',
  'AWS', 'Azure', 'Figma', 'Postman', 'PGAdmin', 'Jira', 'Confluence',
];

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
          entries[0].target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 100)
          );
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d1425 0%, #0a0f1e 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal section-label mb-4">What I Know</div>
        <h2 className="reveal section-heading text-white mb-4">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <p className="reveal text-gray-400 max-w-xl mb-16">
          A snapshot of my technical expertise and the tools I use to build professional, scalable web applications.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Technical skills — 3 columns wide */}
          <div className="lg:col-span-3">
            <h3 className="reveal text-white font-bold text-lg mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>
              Technical Proficiency
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <div key={skill.name} className="reveal">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-xs font-mono">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        transform: animated ? `scaleX(${skill.level / 100})` : 'scaleX(0)',
                        background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                        boxShadow: `0 0 10px ${skill.color}44`,
                        transitionDelay: `${i * 80}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="reveal text-white font-bold text-lg mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill) => (
                  <div key={skill} className="reveal glass rounded-xl p-4 border border-white/[0.05] skill-badge text-center">
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="reveal text-white font-bold text-lg mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="reveal skill-badge inline-block bg-white/[0.04] border border-white/[0.08] text-gray-400 text-xs px-3 py-1.5 rounded-full hover:text-teal-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal glass-teal rounded-2xl p-5 border border-teal-500/20">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">Currently Learning</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'GraphQL', 'Redis', 'Kubernetes'].map((item) => (
                  <span key={item} className="text-white text-sm bg-white/[0.06] px-3 py-1 rounded-full border border-white/10">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};