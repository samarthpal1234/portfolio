import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "INDIAN INSTITUTE OF TECHNOLOGY ROORKEE",
      company: "IITR-ICED",
      period: "2025 - Present",
      description: (
        <p className="text-gray-300">
          Developing responsive web applications using React and modern web technologies. Currently working on the Seismic Hazard Assessment project - a comprehensive web platform for earthquake risk analysis.{' '}
          <a 
            href="http://seismichazard.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline transition-colors duration-200"
          >
            Visit Project →
          </a>
        </p>
      ),
      skills: ["React", "TailwindCSS", "REST APIs", "PHP"]
    },
    {
      title: "Web Development Project",
      company: "University Project",
      period: "2025",
      description: "Hospital Management system - Developed a comprehensive healthcare management solution with patient records, appointment scheduling, and medical history tracking.",
      skills: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "Technook Internship",
      company: "Technook",
      period: "2024 Jun - 2024 Sep",
      description: "Contributed to multiple web development projects, focusing on frontend development and UI/UX improvements. Collaborated with senior developers and learned industry best practices.",
      skills: ["JavaScript", "Documentation", "Git", "Collaboration"]
    }
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
            Experience
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and key projects
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-14 bottom-0 w-px bg-gradient-to-b from-purple-500 to-transparent"></div>
              )}

              {/* Experience Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-35px] top-11 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30"></div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-purple-400 font-mono">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 font-mono text-sm bg-gray-700/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>                    <div className="text-gray-300 leading-relaxed">
                      {typeof exp.description === 'string' ? (
                        <p>{exp.description}</p>
                      ) : (
                        exp.description
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.2 + skillIndex * 0.1
                          }}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Experience
