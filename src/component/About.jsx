import React from 'react'
import { motion } from 'framer-motion'
import { saveAs } from 'file-saver'

const About = () => {
  const downloadPdf = () => {
    fetch('/document.pdf')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        saveAs(blob, 'Samarth_Resume.pdf');
      })
      .catch(error => {
        console.error('Error downloading the file:', error);
      });
  };

  const skills = [
    { category: "Frontend", items: ["React", "HTML5", "CSS3", "JavaScript", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Python"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman", "Figma"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Communication", "Time Management"] }
  ];

  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            About Me
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with code and creativity
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
                <h2 className="text-2xl font-mono font-bold text-white mb-4">Who I Am</h2>
                <p className="text-gray-300 leading-relaxed">
                  I'm a dedicated full-stack developer with a passion for building innovative web solutions. Based in Uttarakhand, India, I specialize in creating responsive and user-friendly applications that solve real-world problems.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
                <h2 className="text-2xl font-mono font-bold text-white mb-4">My Journey</h2>
                <p className="text-gray-300 leading-relaxed">
                  Starting with a curiosity for technology, I've developed a strong foundation in modern web development. Through continuous learning and hands-on experience, I've honed my skills in both frontend and backend technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50">
                  <h3 className="text-xl font-mono font-bold text-white mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + skillIndex * 0.1 }}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education & Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <h2 className="text-2xl font-mono font-bold text-white mb-6">Education & Future Goals</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Education</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li>
                      <span className="font-semibold">Bachelor of Technology</span>
                      <p className="text-sm text-gray-400">Computer Science & Engineering</p>
                      <p className="text-sm text-gray-400">2021 - 2025</p>                      <motion.button
                        onClick={downloadPdf}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-mono rounded-lg transition-colors duration-300 border border-gray-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Resume
                      </motion.button>
                    </li>
                  </ul>
                  
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Future Goals</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Master Web development</li>
                    <li>• Contribute to open-source projects</li>
                    <li>• Lead innovative tech projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
