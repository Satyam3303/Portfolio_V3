import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Accenture',
    location: 'India',
    duration: 'Nov 2025 – Present',
    current: true,
    color: '#14b8a6',
    description: [
      'Joined as an Associate Software Engineer at Accenture, contributing to enterprise-scale software development projects.',
      'Gaining hands-on experience with software development lifecycle, Agile practices, and industry best practices.',
    ],
  },
  {
    title: 'Node.js Developer',
    company: 'Silicon Techlab',
    location: 'India',
    duration: 'Apr 2024 – Aug 2025',
    current: false,
    color: '#3b82f6',
    description: [
      'Built scalable, modular RESTful APIs and microservices using Nest.js, Node.js, and TypeScript following best practices in architecture and code reusability.',
      'Documented API endpoints, workflows, and deployment processes in Atlassian Confluence for effective knowledge management.',
      'Managed Agile tasks and development tickets using Jira, tracking progress through sprints for timely delivery.',
      'Implemented and maintained CI/CD pipelines in Azure DevOps for automated testing, integration, and smooth deployments.',
    ],
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting)
          entries[0].target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 150)
          );
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1425 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal section-label mb-4">Where I've Worked</div>
        <h2 className="reveal section-heading text-white mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="reveal text-gray-400 max-w-xl mb-16">
          My professional journey — roles where I've contributed my skills and grown as an engineer.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="reveal relative md:pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center -translate-x-1/2 z-10"
                  style={{ background: '#0a0f1e', borderColor: exp.color }}
                >
                  {exp.current && (
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: exp.color }} />
                  )}
                </div>

                {/* Card */}
                <div
                  className="glass rounded-2xl p-6 md:p-8 border border-white/[0.06] exp-card cursor-default"
                  style={{ background: 'rgba(255,255,255,0.025)' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full border mb-1 inline-block"
                        style={{ color: exp.color, borderColor: `${exp.color}40`, background: `${exp.color}10` }}
                      >
                        {exp.current ? '● Current' : 'Completed'}
                      </span>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-gray-500" />
                        <span className="text-gray-400 font-medium">{exp.company}</span>
                        <span className="text-gray-600">·</span>
                        <MapPin size={13} className="text-gray-500" />
                        <span className="text-gray-500 text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm glass px-3 py-1.5 rounded-lg border border-white/[0.06]">
                      <Calendar size={13} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: exp.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};