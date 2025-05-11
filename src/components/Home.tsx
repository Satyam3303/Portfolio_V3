import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal-400 mb-4 animate-fade-in-up">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            Shivam Satyam
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up animation-delay-400">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 animate-fade-in-up animation-delay-600">
            I build responsive and scalable web applications with modern technologies
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-800">
            <a
              href="https://github.com/Satyam3303"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-satyam3303/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:shivamsatyam209@gmail.com"
              className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-block animate-bounce mt-12"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="text-teal-400" />
          </a>
        </div>
      </div>
    </section>
  );
};