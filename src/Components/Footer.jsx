import React from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const contactCards = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "Lagos, Nigeria",
      link: "https://maps.google.com/?q=Lagos,Nigeria",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Mail",
      content: "ebubeuzor17@gmail.com",
      link: "mailto:ebubeuzor17@gmail.com",
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Ebubeuzor" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/ebube-uzor-19a4a2247/" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-bold text-2xl md:text-3xl mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-sm">
            Let's connect! 👋
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          {contactCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500/10 text-green-400 rounded-lg p-2 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-0.5 group-hover:text-green-400 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-4 mb-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800/50 p-2 rounded-lg hover:bg-gray-700/50 hover:text-green-400 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Ebube Uzor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}