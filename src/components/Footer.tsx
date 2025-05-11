import { ChevronUp } from "lucide-react";
import Kakashi from "../assets/Kakashi.jpg";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <img style={{ width: "50px", borderRadius: "25px" }} src={Kakashi} />
            <p className="mt-2">Full Stack Developer</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-gray-800 hover:bg-teal-500 text-white p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Shivam Satyam. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p>Designed and developed with ❤️</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
