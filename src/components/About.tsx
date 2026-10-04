import { useEffect, useRef } from 'react';
import { Code2, Server, Database, GitBranch } from 'lucide-react';
import Profile from '../assets/profile.jpg';

const highlights = [
  { icon: <Code2 size={14}/>,     label: 'FULL_STACK_DEV' },
  { icon: <Server size={14}/>,    label: 'BACKEND_ARCH'   },
  { icon: <Database size={14}/>,  label: 'DB_DESIGN'      },
  { icon: <GitBranch size={14}/>, label: 'CI_CD_DEVOPS'   },
];

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ob = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting)
        entries[0].target.querySelectorAll('.reveal').forEach((el,i) =>
          setTimeout(() => el.classList.add('visible'), i * 120));
    }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#060809 0%,#080b0a 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(57,255,20,0.3),transparent)' }}/>

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal tag mb-3">OPERATOR_PROFILE</div>
        <h2 className="reveal text-white mb-14" style={{ fontFamily:'var(--head)', fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:800, letterSpacing:'-0.02em' }}>
          About the <span style={{ color:'var(--green)' }}>Engineer</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal">
            <div className="relative float3d" style={{ perspective:'1000px' }}>
              {/* Corner brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2" style={{ borderColor:'var(--green)' }}/>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2" style={{ borderColor:'var(--green)' }}/>
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2" style={{ borderColor:'rgba(57,255,20,0.3)' }}/>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2" style={{ borderColor:'rgba(57,255,20,0.3)' }}/>

              <div className="overflow-hidden" style={{ border:'1px solid rgba(57,255,20,0.2)' }}>
                <img src={Profile} alt="Shivam Satyam" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" style={{ filter:'grayscale(0.6) brightness(0.9)' }}/>
                {/* Scan overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{ background:'repeating-linear-gradient(0deg,rgba(0,0,0,0.04) 0px,rgba(0,0,0,0.04) 1px,transparent 1px,transparent 3px)' }}/>
              </div>

              {/* HUD badge */}
              <div className="absolute bottom-4 left-4 right-4 panel p-3 hud" style={{ background:'rgba(6,8,9,0.92)' }}>
                <div style={{ color:'var(--green)' }}>SHIVAM_SATYAM</div>
                <div style={{ color:'rgba(57,255,20,0.5)' }}>SWE @ ACCENTURE · INDIA</div>
              </div>

              {/* Floating stat */}
              <div className="absolute -top-5 -right-5 panel p-3 hud float3d" style={{ animationDuration:'5s' }}>
                <div className="stat-val text-2xl">2+</div>
                <div style={{ color:'rgba(57,255,20,0.4)', fontSize:'0.6rem' }}>YRS_EXP</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="reveal text-sm leading-relaxed mb-4" style={{ color:'rgba(160,180,160,0.85)' }}>
              Full Stack Engineer with hands-on experience building scalable and secure web applications.
              Currently deployed as <span style={{ color:'var(--green)' }}>Software Engineer at Accenture</span>,
              specializing in frontend development in <span style={{ color:'var(--green)' }}>React.js</span> and backend development with <span style={{ color:'var(--green)' }}>Nest.js</span>, <span style={{ color:'var(--green)' }}>Node.js</span>, and <span style={{ color:'var(--green)' }}>Javascript</span> — focused on
              modular architecture and performance optimization.
            </p>
            <p className="reveal text-sm leading-relaxed mb-4" style={{ color:'rgba(160,180,160,0.7)' }}>
              Contributed to enterprise application migrations (React.js + Node.js/Nest.js), built a real-time
              WhatsApp Clone using MERN + Socket.io, and a Career Management System with JWT and Twilio.
            </p>
            <p className="reveal text-sm leading-relaxed mb-8" style={{ color:'rgba(160,180,160,0.7)' }}>
              Workflow: clean code · Azure DevOps CI/CD · Jira sprint management · Confluence docs.
              B.Tech CSE from XIM University — 8.4 CGPA, university scholarship all four years.
            </p>

            <div className="reveal grid grid-cols-2 gap-3 mb-8">
              {highlights.map(h => (
                <div key={h.label} className="panel flex items-center gap-3 p-3 hover:bg-[rgba(57,255,20,0.04)] transition-colors">
                  <span style={{ color:'var(--green)' }}>{h.icon}</span>
                  <span className="hud" style={{ fontSize:'0.68rem', color:'rgba(57,255,20,0.7)' }}>{h.label}</span>
                </div>
              ))}
            </div>

            <div className="reveal flex gap-4">
              <a href="#contact"  className="btn-hud">[ CONTACT ]</a>
              <a href="#projects" className="btn-ghost">[ PROJECTS ]</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};