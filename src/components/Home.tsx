import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "Node.js Specialist",
  "Problem Solver",
];

// Animated radar SVG
const Radar = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60" fill="none">
    {/* Circles */}
    <circle
      cx="100"
      cy="100"
      r="90"
      stroke="rgba(57,255,20,0.12)"
      strokeWidth="1"
    />
    <circle
      cx="100"
      cy="100"
      r="65"
      stroke="rgba(57,255,20,0.15)"
      strokeWidth="1"
    />
    <circle
      cx="100"
      cy="100"
      r="40"
      stroke="rgba(57,255,20,0.2)"
      strokeWidth="1"
    />
    <circle
      cx="100"
      cy="100"
      r="15"
      stroke="rgba(57,255,20,0.4)"
      strokeWidth="1"
    />

    {/* Cross lines */}
    <line
      x1="10"
      y1="100"
      x2="190"
      y2="100"
      stroke="rgba(57,255,20,0.1)"
      strokeWidth="0.5"
    />
    <line
      x1="100"
      y1="10"
      x2="100"
      y2="190"
      stroke="rgba(57,255,20,0.1)"
      strokeWidth="0.5"
    />
    <line
      x1="36"
      y1="36"
      x2="164"
      y2="164"
      stroke="rgba(57,255,20,0.06)"
      strokeWidth="0.5"
    />
    <line
      x1="164"
      y1="36"
      x2="36"
      y2="164"
      stroke="rgba(57,255,20,0.06)"
      strokeWidth="0.5"
    />

    {/* Sweep — rotates around center (100,100) */}
    <g
      style={{
        transformOrigin: "100px 100px",
        animation: "radar-sweep 4s linear infinite",
      }}
    >
      {/* Triangle from center: up, then 90deg arc, back to center */}
      <path
        d="M100,100 L100,10 A90,90 0 0,1 190,100 Z"
        fill="url(#radarGrad)"
      />
    </g>

    <defs>
      <radialGradient
        id="radarGrad"
        cx="100"
        cy="100"
        r="90"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="rgba(57,255,20,0)" />
        <stop offset="100%" stopColor="rgba(57,255,20,0.18)" />
      </radialGradient>
    </defs>

    {/* Blips */}
    <circle cx="140" cy="65" r="2.5" fill="var(--green)" opacity="0.8">
      <animate
        attributeName="opacity"
        values="0.8;0.2;0.8"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="60" cy="130" r="2" fill="var(--green)" opacity="0.6">
      <animate
        attributeName="opacity"
        values="0.6;0.1;0.6"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="155" cy="120" r="1.5" fill="var(--green)" opacity="0.5">
      <animate
        attributeName="opacity"
        values="0.5;0.1;0.5"
        dur="2.5s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [status, setStatus] = useState("INITIALIZING");

  // Boot status sequence
  useEffect(() => {
    const steps = [
      "LOADING MODULES",
      "ESTABLISHING CONNECTION",
      "SYSTEM READY",
    ];
    let i = 0;
    const id = setInterval(() => {
      if (i < steps.length) {
        setStatus(steps[i++]);
      } else clearInterval(id);
    }, 700);
    return () => clearInterval(id);
  }, []);

  // Typing
  useEffect(() => {
    const cur = roles[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < cur.length)
      t = setTimeout(
        () => setDisplayed(cur.slice(0, displayed.length + 1)),
        75,
      );
    else if (!deleting && displayed.length === cur.length)
      t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && displayed.length > 0)
      t = setTimeout(
        () => setDisplayed(cur.slice(0, displayed.length - 1)),
        40,
      );
    else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#040607 0%,#060809 60%,#080b0a 100%)",
      }}
    >
      {/* Corner HUDs */}
      <div className="absolute top-20 left-6 hud pointer-events-none">
        <div>
          SYS_STATUS: <span className="text-[var(--green)]">{status}</span>
        </div>
        <div className="mt-1">
          OPERATOR: <span className="text-[var(--green)]">SATYAM_3303</span>
        </div>
        <div className="mt-1">
          LOCATION: <span className="text-[var(--green)]">INDIA</span>
        </div>
      </div>

      <div className="absolute top-20 right-6 hud text-right pointer-events-none">
        <div>
          BUILD: <span className="text-[var(--green)]">V3.0</span>
        </div>
        <div className="mt-1">
          STACK: <span className="text-[var(--green)]">REACT · NODE · JS</span>
        </div>
        <div className="mt-1">
          STATUS: <span className="text-[var(--green)] blink">● ACTIVE</span>
        </div>
      </div>

      {/* Radar — right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-72 h-72 hidden xl:block float3d">
        <Radar />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="max-w-2xl">
          <div className="tag mb-6">TARGET ACQUIRED — PROFILE LOADED</div>

          <h1
            className="font-extrabold text-white mb-3 glitch"
            data-text="SHIVAM SATYAM"
            style={{
              fontFamily: "var(--head)",
              fontSize: "clamp(3rem,8vw,5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
            }}
          >
            SHIVAM SATYAM
          </h1>

          {/* Role typing */}
          <div
            className="flex items-center gap-1 mb-6"
            style={{ minHeight: "2.5rem" }}
          >
            <span className="hud text-lg" style={{ color: "var(--green)" }}>
              [ {displayed}
            </span>
            <span className="blink hud" style={{ color: "var(--green)" }}>
              _
            </span>
            <span className="hud text-lg" style={{ color: "var(--green)" }}>
              ]
            </span>
          </div>

          <p
            className="text-sm leading-relaxed max-w-lg mb-10"
            style={{
              color: "rgba(160,180,160,0.8)",
              fontFamily: "var(--body)",
            }}
          >
            Full Stack Engineer with 2+ years of professional experience.
            Specializing in frontend with{" "}
            <span style={{ color: "var(--green)" }}>React.js</span>, and backend
            architecture with{" "}
            <span style={{ color: "var(--green)" }}>Nest.js</span>,{" "}
            <span style={{ color: "var(--green)" }}>Node.js</span>, and{" "}
            <span style={{ color: "var(--green)" }}>Javascript</span>. Currently
            deployed at <span style={{ color: "var(--green)" }}>Accenture</span>
            .
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-sm">
            {[
              { v: "2+", l: "YRS_EXP" },
              { v: "10+", l: "PROJECTS" },
              { v: "10+", l: "TECH_STACK" },
            ].map((s) => (
              <div key={s.l} className="panel p-3">
                <div className="stat-val">{s.v}</div>
                <div
                  className="hud mt-1"
                  style={{ color: "rgba(57,255,20,0.4)", fontSize: "0.6rem" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-hud">
              [ VIEW_PROJECTS ]
            </a>
            <a href="#contact" className="btn-ghost">
              [ INITIATE_CONTACT ]
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              {
                href: "https://github.com/Satyam3303",
                label: "GH",
                icon: <Github size={16} />,
              },
              {
                href: "https://www.linkedin.com/in/shivam-satyam3303/",
                label: "LI",
                icon: <Linkedin size={16} />,
              },
              {
                href: "mailto:shivamsatyam209@gmail.com",
                label: "ML",
                icon: <Mail size={16} />,
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center gap-2 panel px-3 py-2 hud text-[var(--green)] hover:bg-[rgba(57,255,20,0.08)] transition-colors"
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hud"
        style={{ color: "rgba(57,255,20,0.4)" }}
      >
        <span>SCROLL_DOWN</span>
        <ArrowDown
          size={14}
          className="animate-bounce"
          style={{ color: "var(--green)" }}
        />
      </a>
    </section>
  );
};
