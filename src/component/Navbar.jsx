import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About" },
    { path: "/Portfolio", label: "Portfolio" },
    { path: "/Experience", label: "Experience" },
    { path: "/Contact", label: "Contact" }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className='sticky top-0 z-50 backdrop-blur-md'
    >
      <div className='bg-gray-900/90 border-b border-gray-800'>
        <div className='container mx-auto px-4 h-16'>
          <div className='flex justify-between items-center h-full'>
            
            {/* Logo and Name */}
            <motion.div 
              className='flex items-center gap-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <img 
                  src="/samarth.jpg" 
                  className="relative h-10 w-10 object-cover rounded-full" 
                  alt="Samarth"
                />
              </div>
              <span className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Samarthpal
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-1'>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className='px-4 py-2 text-gray-300 font-medium rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200'
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className='md:hidden text-gray-300 hover:text-white focus:outline-none'
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute left-0 right-0 top-16 bg-gray-900/95 border-b border-gray-800 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className='block px-4 py-2 text-gray-300 rounded-lg hover:text-white hover:bg-gray-800/50 transition-all duration-200'
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
