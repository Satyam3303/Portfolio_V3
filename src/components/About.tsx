import React from 'react';
import Profile from '../assets/profile.jpg';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-100">
              <img
                src={Profile}
                alt="Profile"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
              <div className="w-20 h-1 bg-teal-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
            I'm a passionate Full Stack Developer with hands-on experience 
            in building scalable and secure web applications using modern technologies. 
            Currently working as a Software Engineer at Silicon Techlab, 
            I specialize in backend development with Nest.js, Node.js, and TypeScript, 
            focusing on modular architecture and performance optimization.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            I’ve contributed to real-world projects like revamping enterprise 
            applications with Next.js and Nest.js, and built feature-rich 
            applications including a real-time WhatsApp clone and a 
            Career Management System using the MERN stack, Socket.io, JWT, and cloud services like Twilio.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
            My workflow emphasizes clean code, CI/CD pipelines via Azure DevOps, and efficient collaboration 
            through Jira and Confluence. I’m also proficient in React.js, MongoDB, MySQL, 
            and have a strong foundation in C++ and Python.

            Driven by problem-solving and innovation, I aim to create robust, maintainable software solutions 
            that enhance user experiences and business outcomes.
            </p>
            <a
              href="#contact"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};