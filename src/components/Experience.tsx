import { useEffect, useRef } from "react";
import { CheckCircle2, Calendar } from "lucide-react";

const exps = [
  {
    title: "Software Engineer",
    company: "Accenture",
    duration: "Nov 2025 — Present",
    current: true,
    color: "var(--green)",
    points: [
      "Developed in-house web applications using React.js, Node.js, Express.js, and MongoDB to streamline internal workflows and reduce manual effort.",
      "Built RESTful APIs and responsive React interfaces with Redux and Material-UI, including authentication, data validation, and role-based access.",
      "Designed MongoDB schemas and optimized queries for reliable data storage and fast retrieval.",
      "Built and maintained Syndigo PIM workflows for product data enrichment, validation, and publishing, improving data quality through validation rules and automation.",
      "Collaborated with product owners, QA, and stakeholders to gather requirements, ship features iteratively, and document and support deployments.",
    ],
  },
  {
    title: "Node.js Developer",
    company: "Silicon Techlab",
    duration: "Apr 2024 — Aug 2025",
    current: false,
    color: "#3b82f6",
    points: [
      "Designed and developed REST APIs enabling efficient collection, validation, and processing of operational data.",
      "Automated backend workflows, improving processing efficiency and reducing manual intervention.",
      "Performed data validation, error analysis, and system monitoring to ensure data integrity and reliability.",
      "Created technical documentation and analytical reports supporting project planning and implementation.",
      "Collaborated within Agile teams using Jira and Confluence to deliver technology solutions aligned with business requirements.",
    ],
  },
];

export const Experience = () => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting)
          entries[0].target
            .querySelectorAll(".reveal")
            .forEach((el, i) =>
              setTimeout(() => el.classList.add("visible"), i * 140),
            );
      },
      { threshold: 0.1 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#060809 0%,#080b0a 100%)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,rgba(57,255,20,0.2),transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal tag mb-3">DEPLOYMENT_HISTORY</div>
        <h2
          className="reveal text-white mb-4"
          style={{
            fontFamily: "var(--head)",
            fontSize: "clamp(2rem,4vw,2.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Work <span style={{ color: "var(--green)" }}>Experience</span>
        </h2>
        <p
          className="reveal text-sm mb-14"
          style={{ color: "rgba(160,180,160,0.6)", maxWidth: "32rem" }}
        >
          Active deployments and completed missions in the field.
        </p>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px tl-line hidden md:block" />
          <div className="space-y-8">
            {exps.map((e, i) => (
              <div key={i} className="reveal relative md:pl-16">
                {/* Dot */}
                <div
                  className="absolute left-4 top-6 w-5 h-5 hidden md:flex items-center justify-center -translate-x-1/2 z-10"
                  style={{
                    border: `1px solid ${e.color}`,
                    background: "var(--bg)",
                  }}
                >
                  {e.current && (
                    <span
                      className="w-2 h-2 blink"
                      style={{ background: e.color, display: "block" }}
                    />
                  )}
                </div>

                <div className="panel p-6 md:p-8 hover:bg-[rgba(57,255,20,0.02)] transition-colors group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div
                        className="hud mb-1"
                        style={{
                          fontSize: "0.65rem",
                          color: e.current ? "var(--green)" : "#3b82f6",
                        }}
                      >
                        {e.current
                          ? "● ACTIVE_DEPLOYMENT"
                          : "✓ MISSION_COMPLETE"}
                      </div>
                      <h3
                        className="text-white text-lg font-bold mb-1"
                        style={{ fontFamily: "var(--head)" }}
                      >
                        {e.title}
                      </h3>
                      <div
                        className="hud"
                        style={{
                          color: "rgba(57,255,20,0.5)",
                          fontSize: "0.7rem",
                        }}
                      >
                        {e.company}
                      </div>
                    </div>
                    <div
                      className="panel flex items-center gap-2 px-3 py-1.5 hud"
                      style={{
                        fontSize: "0.65rem",
                        color: "rgba(57,255,20,0.4)",
                      }}
                    >
                      <Calendar size={11} /> {e.duration}
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {e.points.map((p, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm"
                        style={{ color: "rgba(160,180,160,0.75)" }}
                      >
                        <CheckCircle2
                          size={13}
                          className="mt-0.5 shrink-0"
                          style={{ color: e.color }}
                        />
                        {p}
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
