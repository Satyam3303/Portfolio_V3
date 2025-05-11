import React from 'react';

export const Skills = () => {
  const technicalSkills = [
    { name: 'Jayascript', percentage: 90 },
    { name: 'Typescript', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Express.js', percentage: 75 },
    { name: 'Nest.js', percentage: 70 },
    { name: 'SQL/MSSql Server', percentage: 85 },
    { name: 'MongoDB', percentage: 75 },
    { name: 'React.js', percentage: 85 },
    { name: 'Postman', percentage: 85 },
    { name: 'C++', percentage: 85 },
    { name: 'Python', percentage: 85 },
    { name: 'Tableau', percentage: 85 },
    { name: 'Azure Pipelines', percentage: 85 },
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-teal-500 rounded-full mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I've worked with various technologies throughout my career. Here's a snapshot of my technical expertise and soft skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 rounded-full"
                      style={{ width: `100%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div key={skill} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Docker', 'AWS', 'Azure', 'Figma', 'Postman', 'PGAdmin', 'Azure', 'Jira', 'Confluence',].map((tool) => (
                  <span key={tool} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};