import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, BarChart } from "lucide-react";

export default function AboutMe() {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Development",
      description: "Crafting scalable and optimized systems",
      color: "text-blue-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      description: "Developing interactive and high-performing platforms",
      color: "text-green-600",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Optimization",
      description: "Improving performance and user satisfaction",
      color: "text-purple-600",
    },
  ];

  return (
    <section id="about-me-section" className="bg-gradient-to-b from-white mt-12 to-slate-50 py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <img
                src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
                alt="Profile"
                  className="w-full h-auto rounded-2xl shadow-2xl transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
              
              {/* Experience Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white text-gray-800 p-4 rounded-2xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">3+</div>
                  <div className="text-sm font-medium">Years of<br />Experience</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-green-600 font-bold text-lg md:text-xl uppercase mb-3 tracking-wider">
                About Me
              </h3>
              <h4 className="font-bold text-3xl md:text-4xl text-gray-800 leading-tight mb-8">
                A Passionate Software Developer
                <br />
                <span className="text-green-600">Based in Nigeria</span>
              </h4>
              
              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { number: "40%", label: "User Growth" },
                  { number: "30%", label: "Performance" },
                  { number: "25%", label: "SEO Boost" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  I am a dedicated Software Developer with expertise in building efficient, high-performance applications. My focus lies in backend development, crafting scalable systems, and enhancing user experiences with modern web and mobile solutions.
                </p>
                <p>
                  My work includes leading the development of a robust rental platform, Shortlet Bookings, which saw a 40% increase in user registrations and a 25% boost in bookings.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`${skill.color} mb-3`}>
                      {skill.icon}
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-1">{skill.title}</h5>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}