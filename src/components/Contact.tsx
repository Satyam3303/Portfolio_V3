import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';

const info = [
  { icon:<Mail size={15}/>,   label:'EMAIL',    val:'shivamsatyam209@gmail.com', href:'mailto:shivamsatyam209@gmail.com', color:'var(--green)' },
  { icon:<Phone size={15}/>,  label:'PHONE',    val:'+91 8092769351',            href:'tel:+918092769351',                color:'#3b82f6'      },
  { icon:<MapPin size={15}/>, label:'LOCATION', val:'India',                     href:null,                               color:'#f59e0b'      },
];
const socials = [
  { icon:<Instagram size={16}/>, href:'https://www.instagram.com/satyam_3303/',         label:'IG' },
  { icon:<Linkedin  size={16}/>, href:'https://www.linkedin.com/in/shivam-satyam3303/', label:'LI' },
  { icon:<Github    size={16}/>, href:'https://github.com/Satyam3303',                  label:'GH' },
];

export const Contact = () => {
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' });
  const [sending, setSend]  = useState(false);
  const [ok, setOk]         = useState(false);
  const [err, setErr]       = useState('');
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting)
        entries[0].target.querySelectorAll('.reveal').forEach((el,i) =>
          setTimeout(() => el.classList.add('visible'), i*120));
    }, { threshold:0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setSend(true); setErr('');
    Promise.all([
      emailjs.send(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE1, form, import.meta.env.VITE_PUBLIC_KEY),
      emailjs.send(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE2, form, import.meta.env.VITE_PUBLIC_KEY),
    ]).then(() => { setSend(false); setOk(true); setForm({ name:'', email:'', subject:'', message:'' }); setTimeout(() => setOk(false), 6000); })
      .catch(() => { setSend(false); setErr('TRANSMISSION_FAILED. Retry.'); });
  };

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden"
      style={{ background:'linear-gradient(180deg,#060809 0%,#040607 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(57,255,20,0.2),transparent)' }}/>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="reveal tag mx-auto justify-center mb-3">INITIATE_CONTACT</div>
          <h2 className="reveal text-white mb-4" style={{ fontFamily:'var(--head)', fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:800, letterSpacing:'-0.02em' }}>
            Get In <span style={{ color:'var(--green)' }}>Touch</span>
          </h2>
          <p className="reveal text-sm" style={{ color:'rgba(160,180,160,0.6)', maxWidth:'28rem', margin:'0 auto' }}>
            Open channel for new missions, collaborations, and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-4">
            {info.map(i => (
              <div key={i.label} className="reveal panel flex items-center gap-4 p-4 hover:bg-[rgba(57,255,20,0.02)] transition-colors">
                <div className="w-9 h-9 flex items-center justify-center shrink-0 panel" style={{ color:i.color }}>
                  {i.icon}
                </div>
                <div>
                  <div className="hud mb-0.5" style={{ fontSize:'0.6rem', color:'rgba(57,255,20,0.35)' }}>{i.label}</div>
                  {i.href
                    ? <a href={i.href} className="text-sm hover:text-[var(--green)] transition-colors" style={{ color:'rgba(160,180,160,0.9)' }}>{i.val}</a>
                    : <p className="text-sm" style={{ color:'rgba(160,180,160,0.9)' }}>{i.val}</p>}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="reveal">
              <div className="hud mb-3" style={{ color:'rgba(57,255,20,0.35)', fontSize:'0.6rem' }}>SOCIAL_CHANNELS</div>
              <div className="flex gap-3">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 panel px-3 py-2 hud hover:bg-[rgba(57,255,20,0.06)] transition-colors"
                    style={{ fontSize:'0.65rem', color:'rgba(57,255,20,0.5)' }}>
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Open to work */}
            <div className="reveal panel p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--green)] blink"/>
                <span className="hud" style={{ fontSize:'0.65rem', color:'rgba(57,255,20,0.6)' }}>STATUS: OPEN_TO_OPPORTUNITIES</span>
              </div>
              <p className="text-sm" style={{ color:'rgba(160,180,160,0.6)', fontSize:'0.8rem' }}>
                Available for full-time roles and freelance missions. Ready to deploy.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal panel p-8">
            <div className="hud mb-6" style={{ color:'rgba(57,255,20,0.5)' }}>// SEND_TRANSMISSION</div>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="hud block mb-1.5" style={{ fontSize:'0.62rem', color:'rgba(57,255,20,0.4)' }}>CALLSIGN</label>
                  <input type="text" name="name" value={form.name} onChange={onChange} required className="hud-input" placeholder="your name"/>
                </div>
                <div>
                  <label className="hud block mb-1.5" style={{ fontSize:'0.62rem', color:'rgba(57,255,20,0.4)' }}>CHANNEL</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required className="hud-input" placeholder="your@email.com"/>
                </div>
              </div>
              <div>
                <label className="hud block mb-1.5" style={{ fontSize:'0.62rem', color:'rgba(57,255,20,0.4)' }}>SUBJECT</label>
                <input type="text" name="subject" value={form.subject} onChange={onChange} required className="hud-input" placeholder="mission briefing"/>
              </div>
              <div>
                <label className="hud block mb-1.5" style={{ fontSize:'0.62rem', color:'rgba(57,255,20,0.4)' }}>MESSAGE</label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={5} className="hud-input resize-none" placeholder="your message..."/>
              </div>

              {ok  && <div className="panel p-3 hud" style={{ fontSize:'0.7rem', color:'var(--green)', borderColor:'rgba(57,255,20,0.3)' }}>✓ TRANSMISSION_SENT — Standing by for response.</div>}
              {err && <div className="panel p-3 hud" style={{ fontSize:'0.7rem', color:'#ef4444', borderColor:'rgba(239,68,68,0.3)' }}>{err}</div>}

              <button type="submit" disabled={sending} className="btn-hud w-full justify-center py-3.5 disabled:opacity-40">
                {sending
                  ? <><div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin"/> TRANSMITTING...</>
                  : <><Send size={13}/> SEND_TRANSMISSION</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};