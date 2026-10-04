import { useEffect, useRef, useState } from 'react';

const tech = [
  { name:'JavaScript',      pct:90, color:'#f59e0b' },
  { name:'TypeScript',      pct:85, color:'#3b82f6' },
  { name:'Node.js',         pct:82, color:'#22c55e' },
  { name:'React.js',        pct:85, color:'#38bdf8' },
  { name:'Nest.js',         pct:80, color:'#e11d48' },
  { name:'Express.js',      pct:80, color:'#94a3b8' },
  { name:'SQL / MSSQL',     pct:85, color:'#a78bfa' },
  { name:'MongoDB',         pct:78, color:'#4ade80' },
  { name:'C++ / Python',    pct:85, color:'#fb923c' },
  { name:'Azure Pipelines', pct:78, color:'#60a5fa' },
];
const soft  = ['PROBLEM_SOLVING','COMMUNICATION','TEAM_COLLAB','TIME_MGMT','ADAPTABILITY','CRITICAL_THINKING'];
const tools = ['Git','GitHub','VS Code','Visual Studio','Docker','AWS','Azure','Figma','Postman','PGAdmin','Jira','Confluence'];

export const Skills = () => {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !on) {
        setOn(true);
        entries[0].target.querySelectorAll('.reveal').forEach((el,i) =>
          setTimeout(() => el.classList.add('visible'), i * 80));
      }
    }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [on]);

  return (
    <section id="skills" ref={ref} className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#080b0a 0%,#060809 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(57,255,20,0.2),transparent)' }}/>

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal tag mb-3">CAPABILITY_MATRIX</div>
        <h2 className="reveal text-white mb-4" style={{ fontFamily:'var(--head)', fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:800, letterSpacing:'-0.02em' }}>
          Skills & <span style={{ color:'var(--green)' }}>Expertise</span>
        </h2>
        <p className="reveal text-sm mb-14" style={{ color:'rgba(160,180,160,0.6)', maxWidth:'32rem' }}>
          Technical capability assessment — proficiency levels and active toolchain.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Bars */}
          <div className="lg:col-span-3">
            <div className="hud mb-6" style={{ color:'rgba(57,255,20,0.5)' }}>// TECHNICAL_PROFICIENCY</div>
            <div className="space-y-5">
              {tech.map((s,i) => (
                <div key={s.name} className="reveal">
                  <div className="flex justify-between mb-1.5">
                    <span className="hud" style={{ fontSize:'0.7rem', color:'rgba(160,180,160,0.8)' }}>{s.name}</span>
                    <span className="hud" style={{ fontSize:'0.65rem', color:'rgba(57,255,20,0.4)' }}>{s.pct}%</span>
                  </div>
                  <div className="prog-track">
                    <div className="prog-fill" style={{
                      transform: on ? `scaleX(${s.pct/100})` : 'scaleX(0)',
                      background: `linear-gradient(90deg,${s.color}80,${s.color})`,
                      boxShadow: `0 0 8px ${s.color}60`,
                      transitionDelay: `${i*70}ms`,
                    }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="hud mb-4" style={{ color:'rgba(57,255,20,0.5)' }}>// SOFT_SKILLS</div>
              <div className="grid grid-cols-2 gap-2">
                {soft.map(s => (
                  <div key={s} className="reveal panel p-3 hover:bg-[rgba(57,255,20,0.04)] transition-colors">
                    <span className="hud" style={{ fontSize:'0.62rem', color:'rgba(57,255,20,0.6)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="hud mb-4" style={{ color:'rgba(57,255,20,0.5)' }}>// TOOLS_&_PLATFORMS</div>
              <div className="flex flex-wrap gap-2">
                {tools.map(t => (
                  <span key={t} className="reveal hud px-2.5 py-1 hover:bg-[rgba(57,255,20,0.08)] transition-colors"
                    style={{ fontSize:'0.65rem', border:'1px solid rgba(57,255,20,0.12)', color:'rgba(57,255,20,0.5)', cursor:'default' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning */}
            <div className="reveal panel p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[var(--green)] blink"/>
                <span className="hud" style={{ fontSize:'0.65rem', color:'rgba(57,255,20,0.6)' }}>CURRENTLY_LEARNING</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js','GraphQL','Redis','Kubernetes'].map(t => (
                  <span key={t} className="hud px-2.5 py-1" style={{ fontSize:'0.65rem', border:'1px solid rgba(57,255,20,0.25)', color:'var(--green)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};