import { useState, useRef, useEffect } from 'react';
import { Github, Lock } from 'lucide-react';

const projects = [
  {
    title: 'Private Company Application Revamp',
    category: 'web',
    image: 'https://th.bing.com/th/id/OIP.KdMl7hu2xnsb_YSBtJnJaQHaD4?w=343&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    description: 'Migrated enterprise application from ASP.NET to Next.js + Nest.js, improving performance and developer experience.',
    technologies: ['Next.js', 'Nest.js', 'MSSQL', 'Azure Pipelines', 'JWT', 'Material UI'],
    github: '#',
    isPrivate: true,
    privateNote: 'Company Project — NDA Protected',
    featured: true,
  },
  {
    title: 'WhatsApp Clone',
    category: 'web',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Real-time messaging app mimicking WhatsApp with media sharing and live chat using MERN + Socket.io.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'GridFS'],
    github: 'https://github.com/Satyam3303/Whatsapp_Clone_Server',
    isPrivate: false,
    privateNote: '',
    featured: true,
  },
  {
    title: 'Career Management System',
    category: 'web',
    image: 'https://th.bing.com/th/id/OIP.ZGxzpcC5qjsS3aP66PshAQHaEN?w=326&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    description: 'Full-featured career portal for managing candidate profiles and job applications with third-party integrations.',
    technologies: ['React.js', 'Node.js', 'MySQL', 'JWT', 'Nodemailer', 'Twilio'],
    github: 'https://github.com/subhabratastl/STL_career_management_system',
    isPrivate: true,
    privateNote: 'Private Repository',
    featured: false,
  },
  {
    title: 'COVID-19 Vaccination Portal',
    category: 'web',
    image: 'https://th.bing.com/th/id/OIP.8hU33q70owOIGFT1fcmYngHaEC?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    description: 'PHP-based COVID-19 vaccination management portal for tracking records and user data with MySQL backend.',
    technologies: ['PHP', 'MySQL', 'phpMyAdmin', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Satyam3303/Covid-19-Vaccine-Portal',
    isPrivate: false,
    privateNote: '',
    featured: false,
  },
  {
    title: 'ESPN Cricket Comparison',
    category: 'dataanalytics',
    image: null,
    description: 'Data analytics project comparing cricket player stats scraped from ESPN Cricinfo, visualized via Power BI.',
    technologies: ['Web Scraping', 'Cheerio', 'JavaScript', 'Python', 'Power BI'],
    github: 'https://github.com/Satyam3303/ESPN-Cricket-Comparision',
    isPrivate: false,
    privateNote: '',
    featured: false,
  },
  {
    title: 'Floss',
    category: 'web',
    image: 'https://th.bing.com/th/id/OIP.YQItAaZbrxbjITUNhfm6BgHaE7?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    description: 'A clean dental clinic website built with pure HTML and CSS focused on responsive design.',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/Satyam3303/Floss',
    isPrivate: false,
    privateNote: '',
    featured: false,
  },
];

const filters = [
  { name: 'All', value: 'all' },
  { name: 'Web Dev', value: 'web' },
  { name: 'Data Analytics', value: 'dataanalytics' },
];

// Individual card with 3D mouse tilt
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateZ(10px)`;
    el.style.transition = 'transform 0.1s ease';
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    el.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="reveal glass rounded-2xl overflow-hidden border border-white/[0.06] cursor-default"
      style={{ transformStyle: 'preserve-3d', background: 'rgba(255,255,255,0.025)', animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-teal-900/30 to-slate-900/50">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center dot-grid">
            <span className="text-4xl">📊</span>
          </div>
        )}
        {project.featured && (
          <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/90 text-white backdrop-blur-sm">
            Featured
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded-md bg-white/[0.05] border border-white/[0.07] text-gray-400">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs px-2 py-1 rounded-md bg-white/[0.05] text-gray-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
          {project.isPrivate ? (
            <div className="group relative flex items-center gap-1.5 text-gray-600 text-sm cursor-not-allowed">
              <Lock size={14} />
              <span>Private</span>
              <div className="absolute bottom-full mb-2 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-gray-300 text-xs rounded-lg py-1.5 px-3 pointer-events-none whitespace-nowrap border border-white/10 z-10">
                {project.privateNote}
              </div>
            </div>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              <Github size={15} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting)
          entries[0].target.querySelectorAll('.reveal').forEach((el, i) =>
            setTimeout(() => el.classList.add('visible'), i * 100)
          );
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d1425 0%, #0a0f1e 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-teal-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal section-label mb-4">What I've Built</div>
        <h2 className="reveal section-heading text-white mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="reveal text-gray-400 max-w-xl mb-10">
          A collection of projects showcasing my skills in building full-stack web applications and data solutions.
        </p>

        {/* Filters */}
        <div className="reveal flex flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25'
                  : 'glass border border-white/[0.07] text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};