import { ChevronUp } from 'lucide-react';

const nav = ['Home','About','Skills','Experience','Projects','Contact'];

export const Footer = () => (
  <footer className="relative border-t" style={{ background:'#040607', borderColor:'rgba(57,255,20,0.08)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(57,255,20,0.3),transparent)' }}/>

    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border flex items-center justify-center" style={{ borderColor:'rgba(57,255,20,0.4)' }}>
            <div className="w-3 h-3" style={{ background:'var(--green)', clipPath:'polygon(50% 0%,100% 100%,0% 100%)' }}/>
          </div>
          <div>
            <div className="hud" style={{ color:'var(--green)', fontSize:'0.7rem' }}>SHIVAM_SATYAM</div>
            <div className="hud" style={{ color:'rgba(57,255,20,0.35)', fontSize:'0.6rem' }}>FULL_STACK_ENGINEER</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-6">
          {nav.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} className="nav-item">{n}</a>
          ))}
        </nav>

        <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
          className="panel flex items-center justify-center w-9 h-9 hover:bg-[rgba(57,255,20,0.08)] transition-colors"
          style={{ color:'var(--green)' }} aria-label="Top">
          <ChevronUp size={16}/>
        </button>
      </div>

      <div className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-3"
        style={{ borderColor:'rgba(57,255,20,0.06)' }}>
        <div className="hud" style={{ fontSize:'0.62rem', color:'rgba(57,255,20,0.25)' }}>
          © {new Date().getFullYear()} SHIVAM_SATYAM — ALL RIGHTS RESERVED
        </div>
        <div className="hud" style={{ fontSize:'0.62rem', color:'rgba(57,255,20,0.25)' }}>
          DESIGNED & BUILT BY SS <span style={{ color:'var(--green)' }}>✦</span>
        </div>
      </div>
    </div>
  </footer>
);