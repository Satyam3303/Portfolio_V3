import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Node JS Developer",
      company: "Silicon Techlab",
      duration: "Apr 2024 - Aug 2025",
      description: [
        "Worked as a Backend Developer using Nest.js to build scalable, modular RESTful APIs and microservices following best practices in architecture and code reusability",
        "Creating clean, efficient, secure, and scalable backend APIs with Node.js, Nest.js, and TypeScript, ensuring high performance, maintainability, and client and user experience",
        "Documenting API endpoints, workflows, and deployment processes using Atlassian Confluence, enabling effective team collaboration and knowledge management.",
        "Managing Agile tasks and development tickets using Jira, tracking progress through sprints and ensuring timely bug fixes and feature delivery",
        "Implementing and maintaining CI/CD pipelines in Azure DevOps, enabling automated testing, integration, and smooth deployments of services with minimal downtime",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Accenture",
      duration: "Nov 2025 - Present",
      description: [
        "Joined as an associate software engineer at Accenture, contributing to various projects and gaining experience in software development lifecycle and best practices",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-teal-500 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My professional journey and roles where I've contributed my skills
            and expertise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 bg-gray-200"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div key={index} className="my-8">
                <div
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card side */}
                  <div
                    className={`md:w-1/2 flex justify-center ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    } mb-6 md:mb-0`}
                  >
                    <div className="relative">
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-teal-500 -left-2.5 md:left-auto md:-right-2.5"></div>

                      {/* Card */}
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm max-w-md transition-transform hover:scale-105 duration-300">
                        <div className="flex items-center mb-2 text-teal-500">
                          <Calendar size={18} className="mr-2" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>

                        <div className="flex items-center mb-3">
                          <Briefcase size={20} className="mr-2 text-gray-600" />
                          <h3 className="text-xl font-semibold text-gray-800">
                            {exp.title}
                          </h3>
                        </div>

                        <p className="text-gray-700 mb-3">{exp.company}</p>

                        <ul className="text-gray-600 space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="inline-block w-5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Empty opposite side */}
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
