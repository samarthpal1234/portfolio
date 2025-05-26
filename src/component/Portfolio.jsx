import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const languages = [
    { 
      name: "JavaScript",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    { 
      name: "React",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    { 
      name: "Node.js",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "Python",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    { 
      name: "HTML5",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    { 
      name: "CSS3",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    { 
      name: "TailwindCSS",
      imgSrc: "tailwind.png"
    },
    { 
      name: "Git",
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    }
  ];

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}     
      animate={{ opacity: 1 }}       
      exit={{ opacity: 0 }}        
      transition={{ duration: 0.6 }}
    >
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
            }}
            className="text-4xl md:text-5xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Welcome to my Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="text-gray-400 mt-4 text-lg"
          >
            Where creativity meets code
          </motion.p>
        </div>

        {/* Introduction Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 py-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3"
          >
            <h2 className="font-bold text-2xl md:text-3xl text-white mb-6">
              I'm Samarth, a dedicated developer from <span className="text-purple-400">Uttarakhand</span>
            </h2>
            <p className="font-mono text-lg text-gray-300 leading-relaxed">
              loves turning ideas into seamless digital experiences.<br />
              Coding isn't just my job — it's my passion.<br />
              I thrive on solving challenges and building clean efficient solutions that make a real impact.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
            <img 
              src="samarth.jpg"
              alt="Samarth"
              className="w-64 h-64 rounded-2xl shadow-xl object-cover relative z-10"
            />
          </motion.div>
        </div>

        {/* Technologies Section */}
        <div className="py-20 bg-gray-900/50">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-mono text-center mb-16 font-bold text-white"
          >
            Technologies & Skills
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center space-y-4 bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 border border-gray-700/50"
              >
                <motion.img
                  src={lang.imgSrc}
                  alt={lang.name}
                  className="w-16 h-16 object-contain filter drop-shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                />
                <span className="text-white font-mono font-bold text-center">
                  {lang.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-mono text-center mb-16 font-bold text-white"
          >
            Featured Projects
          </motion.h2>

          {/* Container for first project */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 px-4 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="w-full md:w-[480px] group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 border border-gray-700/50"
            >
              <img
                src="economic.png"
                alt="Card image"
                className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-white text-xl font-mono font-semibold mb-2">Building Loss Calculator</h3>
                <p className="text-gray-300 text-sm">Calculate and analyze building losses efficiently</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="flex items-center md:w-1/2"
            >
              <p className="text-white/90 text-lg font-mono leading-relaxed">
                This is a seismic risk analysis tool that predicts building damage and loss during earthquakes using PGA and structural data. It's currently in development and will be live soon to support safer construction planning and earthquake insurance decisions
              </p>
            </motion.div>
          </div>

          {/* Container for second project */}
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="w-full md:w-[480px] group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 border border-gray-700/50"
            >
              <img
                src="weather.png"
                alt="Weather App"
                className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-white text-xl font-mono font-semibold mb-2">Weather App</h3>
                <p className="text-gray-300 text-sm">Real-time weather updates and forecasts</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="flex items-center md:w-1/2"
            >
              <p className="text-white/90 text-lg font-mono leading-relaxed">
                A modern weather application that provides real-time weather information, forecasts, and atmospheric conditions. Built with React and integrates with weather APIs for accurate data.
              </p>
            </motion.div>
          </div>

          {/* GitHub Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <Link 
              to="https://github.com/samarthpal1234" 
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-mono rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View My GitHub Profile
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio
