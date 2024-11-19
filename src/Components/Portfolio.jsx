import React from "react";
import { Link } from "react-router-dom";
import RSSFood from "../assets/rssfood.png";
import Foxwrld from "../assets/photo2.png";
import Shortlet from "../assets/photo3.png";
import OTKGroupImage from "../assets/image.png";
import SupernarImage from "../assets/supernar.png"

export default function Portfolio() {
  const projects = [
    {
      title: "Shortlet Bookings",
      date: "August 2023 - Present",
      emoji: "🏠",
      image: Shortlet,
      description: "Built the backend for Lagos' fastest-growing rental platform. Implemented real-time booking updates with WebSockets and smart caching, making the platform blazing fast. Rebuilt the booking flow from scratch, cutting booking time from 5 minutes to under 2 minutes.",
      stack: ["Laravel", "MySQL", "React", "PHP", "Javascript"],
      link: "https://shortletbooking.com/"
    },    
    {
      title: "OTK Group - OTK Group Industries",
      date: "August 2024 - Present",
      emoji: "🏢",
      image: OTKGroupImage,
      description: "Revamped OTK's export platform with a custom CMS and modern product catalog. Built an affiliate system that's already bringing in partners from across West Africa. The site now loads in under 2 seconds and ranks on page 1 for key industry terms.",
      stack: ["Laravel", "MySQL", "Javascript", "CMS Development", "SEO Optimization"],
      link: "https://www.otkgroup.com.ng/"
    },    
    {
      title: "RSS Food - OTK Group Industries",
      date: "August 2024 - Present",
      emoji: "🏢",
      image: RSSFood,
      description: "Created RSS Food's delivery platform with location-based pricing using Google Maps. The backend serves responses in under 100ms, and the intuitive UI has customers raving. Added smart caching that cut our server costs in half.",
      stack: ["Laravel", "React", "MySQL", "RESTful APIs", "CMS Development", "SEO Optimization"],
      link: "https://www.neatmanindustrial.com/"
    },
    {
      title: "Foxwrld",
      date: "August 2023",
      emoji: "👖",
      image: Foxwrld,
      description: "Built Foxwrld's e-commerce engine from the ground up. Added bank-grade security that stopped thousands of bot attacks. The site handles peak Black Friday traffic without breaking a sweat, serving 100k+ daily visitors.",
      stack: ["Laravel", "React", "MySQL"],
      link: "https://foxwrld.com/"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20" id="portfolio-section">
      <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-16">
          <h3 className="text-green-600 font-bold text-lg md:text-xl uppercase mb-3">
            Portfolio
          </h3>
          <h4 className="font-bold text-3xl md:text-4xl text-gray-800 leading-tight">
            Software Development Showcase 🧩
          </h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-800">
                    {project.title} <span className="text-2xl ml-1">{project.emoji}</span>
                  </h2>
                  <span className="text-sm text-green-600 font-semibold">{project.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  to={project.link} 
                  target="_blank" 
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}