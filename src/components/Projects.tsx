import { useState, useRef, useEffect, useCallback } from "react";
import { Github, Lock } from "lucide-react";

const projects = [
  {
    title: "WhatsApp Clone",
    cat: "web",
    img: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Real-time MERN messaging app — Socket.io live chat, GridFS media uploads, Helmet security, rate limiting, and Winston logging.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "GridFS",
      "Material UI",
    ],
    private: false,
    note: "",
    featured: true,
    github: "https://github.com/Satyam3303/Whatsapp_Clone_Server",
  },
  {
    title: "Company App Revamp",
    cat: "web",
    img: "https://th.bing.com/th/id/OIP.KdMl7hu2xnsb_YSBtJnJaQHaD4?w=343&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    desc: "Migrated enterprise application from ASP.NET → Next.js + Nest.js. Modular architecture, JWT auth, Winston logging, Azure CI/CD pipelines.",
    tech: [
      "Next.js",
      "Nest.js",
      "MSSQL",
      "Azure Pipelines",
      "JWT",
      "Material UI",
      "Winston",
    ],
    private: true,
    note: "NDA Protected",
    featured: true,
    github: "#",
  },
  {
    title: "Career Management System",
    cat: "web",
    img: "https://th.bing.com/th/id/OIP.ZGxzpcC5qjsS3aP66PshAQHaEN?w=326&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    desc: "Full candidate portal built with MERN stack — job listings, profile management, JWT auth, email via Nodemailer, SMS via Twilio.",
    tech: [
      "React.js",
      "Node.js",
      "MySQL",
      "JWT",
      "Nodemailer",
      "Twilio",
      "Material UI",
    ],
    private: true,
    note: "Private Repository",
    featured: false,
    github: "#",
  },
  {
    title: "COVID-19 Vaccination Portal",
    cat: "web",
    img: "https://th.bing.com/th/id/OIP.8hU33q70owOIGFT1fcmYngHaEC?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    desc: "PHP + MySQL vaccination record management system. Track records, manage users, and generate reports via phpMyAdmin.",
    tech: ["PHP", "MySQL", "phpMyAdmin", "HTML", "CSS", "JavaScript"],
    private: false,
    note: "",
    featured: false,
    github: "https://github.com/Satyam3303/Covid-19-Vaccine-Portal",
  },
  {
    title: "ESPN Cricket Comparison",
    cat: "data",
    img: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/HZGU7QHJDFO55DR6YZPG5ZEZSA.jpg",
    desc: "Scraped ESPN Cricinfo stats using Cheerio + Node.js, processed with Python pandas, visualized through interactive Power BI dashboards.",
    tech: ["Cheerio", "JavaScript", "Python", "Pandas", "Power BI"],
    private: false,
    note: "",
    featured: false,
    github: "https://github.com/Satyam3303/ESPN-Cricket-Comparision",
  },
  {
    title: "Floss",
    cat: "web",
    img: "https://th.bing.com/th/id/OIP.YQItAaZbrxbjITUNhfm6BgHaE7?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    desc: "Responsive dental clinic landing page built with pure HTML & CSS — clean layout, mobile-first design.",
    tech: ["HTML", "CSS"],
    private: false,
    note: "",
    featured: false,
    github: "https://github.com/Satyam3303/Floss",
  },
  {
    title: "Tomato Leaf Disease Detection",
    cat: "aiml",
    img: "https://www.thespruce.com/thmb/s7rx-WapSn9CvDHIJNzsjnB8j5g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/septoria-lycopersici--septoria-leaf-spot---ascomycota--common-fungal-leaf-disease-of-tomatoes--tomato-leaf-showing-small-brown-spots-characteristic-of-the-disease-and-some-chlorosis-or-yellowing--franklin-county--ohio--usa-128110613-5b21bd69a474be0038be7f61.jpg",
    desc: "A deep learning application that classifies tomato plant leaf diseases from uploaded images using a CNN model served via FastAPI and React .",
    tech: ["React.js", "Fast API", "Python", "Node.js", "Tensorflow"],
    private: false,
    note: "",
    featured: true,
    github: "https://github.com/Satyam3303/Tomato_Leaf_Disease_Detection",
  },
  {
    title: "Windows XP Simulator",
    cat: "web",
    img: "https://cs4.pikabu.ru/post_img/2015/10/25/6/1445765461_461416548.jpg",
    desc: "A Windows XP desktop experience built with React. Features a full boot sequence, login screen, draggable windows, a working taskbar and apps.",
    tech: ["React.js", "Web Audio API", "Material UI", "HTML5", "Javascript"],
    private: false,
    note: "",
    featured: true,
    github: "https://github.com/Satyam3303/Windows_Xp_Simulator",
  },
  {
    title: "Snake Game",
    cat: "web",
    img: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
    desc: "A modern, neon-styled Snake game built with React 18 — featuring smooth canvas rendering, score tracking and persistent high scores.",
    tech: ["React.js", "HTML5", "Javascript"],
    private: false,
    note: "",
    featured: true,
    github: "https://github.com/Satyam3303/Windows_Xp_Simulator",
  },
  {
    title: "Weather App",
    cat: "web",
    img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*GJqID-iVs0NDF35M",
    desc: "A simple and responsive Angular application that allows users to search for and view real-time weather details for a specific city or location.",
    tech: ["Typescript", "HTML5"],
    private: false,
    note: "",
    featured: true,
    github: "https://github.com/Satyam3303/Angular_Weather_Application",
  },
  {
    title: "Gesture OS",
    cat: "web",
    img: "https://thegadgetflow.com/wp-content/uploads/2019/11/10-Gesture-control-devices-you-need-to-see-to-believe-kai-01.jpg",
    desc: "Control your laptop with hand gestures using just your webcam. No extra hardware needed.",
    tech: ["Javascript", "HTML5", "Electron.js"],
    private: false,
    note: "",
    featured: true,
    github: "https://github.com/Satyam3303/Gesture_OS",
  },
  {
    title: "NSE Intraday Stock Prediction Bot",
    cat: "aiml",
    img: "https://images.moneycontrol.com/static-hindinews/2025/07/20250315034541_sensex_stocks_nifty.jpg?impolicy=website&width=770&height=431",
    desc: "An automated intraday trading signal bot for NSE/BSE stocks built with n8n, powered by Groq AI, data from Yahoo Finance and alerts via Telegram",
    tech: [
      "HTML5",
      "Javascript",
      "n8n",
      "Groq AI",
      "Telegram API",
      "Node.js",
      "Yahoo Finance API",
    ],
    private: false,
    note: "",
    featured: true,
    github: "https://github.com/Satyam3303/Stock_Alert",
  },
    {
    title: "PC Russian Roulette",
    cat: "aiml",
    img: "https://www.kickassfacts.com/wp-content/uploads/2024/03/Russian-roulette-illustration.png",
    desc: "It's basically a guessing game for PC written in python code, if you guess the right number, the program will delete the System32 file",
    tech: [
      "Python",
    ],
    private: false,
    note: "",
    featured: true,
    github: "https://github.com/Satyam3303/PC-Russian-Roulette",
  },
];

const filters = [
  { l: "ALL", v: "all" },
  { l: "WEB", v: "web" },
  { l: "DATA", v: "data" },
  { l: "AI/ML", v: "aiml" },
];

// ── Individual card with 3D tilt ──────────────────────────────────────────
const Card = ({ p }: { p: (typeof projects)[0] }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateZ(8px)`;
    el.style.transition = "transform 0.08s ease";
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    el.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="panel overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Image */}
      <div
        className="relative aspect-video overflow-hidden"
        style={{ background: "#080b0a" }}
      >
        {p.img ? (
          <img
            src={p.img}
            alt={p.title}
            className="w-full h-full object-cover opacity-60 hover:opacity-85 transition-all duration-500"
            style={{
              filter: "grayscale(0.4)",
              transform: "scale(1)",
              transitionDuration: "600ms",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.06)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 grid-bg">
            <span className="text-3xl">⌨️</span>
            <span
              className="hud"
              style={{ fontSize: "0.6rem", color: "rgba(57,255,20,0.3)" }}
            >
              NO_PREVIEW_AVAILABLE
            </span>
          </div>
        )}

        {p.featured && (
          <div
            className="absolute top-3 left-3 hud px-2 py-1"
            style={{
              background: "rgba(57,255,20,0.9)",
              color: "#000",
              fontSize: "0.6rem",
            }}
          >
            FEATURED
          </div>
        )}

        {/* bottom gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #060809 0%, transparent 60%)",
          }}
        />
        {/* scanlines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg,rgba(0,0,0,0.06) 0px,rgba(0,0,0,0.06) 1px,transparent 1px,transparent 3px)",
          }}
        />
      </div>

      {/* Body */}
      <div className="p-5">
        <h3
          className="text-white font-bold mb-2"
          style={{ fontFamily: "var(--head)", fontSize: "1rem" }}
        >
          {p.title}
        </h3>
        <p
          className="leading-relaxed mb-4"
          style={{ color: "rgba(160,180,160,0.7)", fontSize: "0.82rem" }}
        >
          {p.desc}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="hud px-2 py-0.5"
              style={{
                fontSize: "0.6rem",
                border: "1px solid rgba(57,255,20,0.12)",
                color: "rgba(57,255,20,0.45)",
              }}
            >
              {t}
            </span>
          ))}
          {p.tech.length > 5 && (
            <span
              className="hud px-2 py-0.5"
              style={{ fontSize: "0.6rem", color: "rgba(57,255,20,0.3)" }}
            >
              +{p.tech.length - 5}
            </span>
          )}
        </div>

        {/* Footer */}
        <div
          className="pt-4 border-t"
          style={{ borderColor: "rgba(57,255,20,0.08)" }}
        >
          {p.private ? (
            <div
              className="group relative inline-flex items-center gap-2 hud cursor-not-allowed"
              style={{ fontSize: "0.65rem", color: "rgba(57,255,20,0.25)" }}
            >
              <Lock size={12} /> RESTRICTED_ACCESS
              <div
                className="absolute bottom-full mb-2 left-0 opacity-0 group-hover:opacity-100 transition-opacity panel px-3 py-1.5 hud whitespace-nowrap z-10"
                style={{
                  fontSize: "0.6rem",
                  color: "rgba(57,255,20,0.6)",
                  background: "var(--bg)",
                }}
              >
                {p.note}
              </div>
            </div>
          ) : (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hud hover:text-[var(--green)] transition-colors"
              style={{ fontSize: "0.65rem", color: "rgba(57,255,20,0.4)" }}
            >
              <Github size={13} /> VIEW_SOURCE
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Main section ──────────────────────────────────────────────────────────
export const Projects = () => {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  // Key insight: derive filtered list fresh each render
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  // Reveal cards whenever `filtered` changes (i.e. filter changes)
  const revealCards = useCallback(() => {
    // Small timeout lets React re-render the new cards into the DOM first
    setTimeout(() => {
      const cards = document.querySelectorAll("#projects .card-reveal");
      cards.forEach((el, i) => {
        el.classList.remove("card-visible");
        // Force reflow so the removal registers before we re-add
        void (el as HTMLElement).offsetHeight;
        setTimeout(() => el.classList.add("card-visible"), i * 80);
      });
    }, 20);
  }, []);

  // Trigger on mount (initial) via IntersectionObserver
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) revealCards();
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) ob.observe(sectionRef.current);
    return () => ob.disconnect();
  }, [revealCards]);

  // Trigger every time filter changes
  useEffect(() => {
    revealCards();
  }, [filter, revealCards]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #080b0a 0%, #060809 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(57,255,20,0.2), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal tag mb-3">MISSION_ARCHIVE</div>
        <h2
          className="reveal text-white mb-4"
          style={{
            fontFamily: "var(--head)",
            fontSize: "clamp(2rem,4vw,2.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Featured <span style={{ color: "var(--green)" }}>Projects</span>
        </h2>
        <p
          className="reveal text-sm mb-10"
          style={{ color: "rgba(160,180,160,0.6)", maxWidth: "32rem" }}
        >
          Completed and active missions — full-stack applications and data
          systems.
        </p>

        {/* Filters */}
        <div className="flex gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.v}
              onClick={() => setFilter(f.v)}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "10px 20px",
                border: `1px solid ${filter === f.v ? "var(--green)" : "rgba(57,255,20,0.25)"}`,
                background: filter === f.v ? "var(--green)" : "transparent",
                color: filter === f.v ? "#000" : "rgba(57,255,20,0.55)",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                if (filter !== f.v) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(57,255,20,0.6)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "var(--green)";
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== f.v) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(57,255,20,0.25)";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(57,255,20,0.55)";
                }
              }}
            >
              [ {f.l} ]
            </button>
          ))}
        </div>

        {/* Grid — cards use card-reveal / card-visible instead of reveal / visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="card-reveal"
              style={{
                opacity: 0,
                transform: "translateY(16px)",
                transition:
                  "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <Card p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
