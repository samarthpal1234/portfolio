import React from 'react'
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import {  Link} from "react-router-dom";


const Home = () => {
  return (
    <motion.div
    className="home"
    initial={{ opacity: 0, y: 100 }}     
    animate={{ opacity: 1, y: 0 }}       
    exit={{ opacity: 0, y: -50 }}        
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
 <div className="min-h-screen bg-gradient-to-l from-gray-700 to-grey-800">

      <div className='container mx-auto px-4 py-16'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='w-full lg:w-1/2'>
            <img
              src="profile.jpg"
              alt="Floating"
className='w-full max-w-lg mx-auto rounded-3xl shadow-2xl'

              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </div>

          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <h1 className="text-4xl lg:text-6xl font-bold font-mono text-white mb-6">
              Hi, I am{' '}
              <span className="block mt-2">
                <ReactTyped
                  strings={['Samarth Pal', 'Web Developer', 'Programmer']}
                  typeSpeed={100}
                  backSpeed={50}
                  backDelay={500}
                  loop
              className="text-purple-800 font-sans underline"

                />
              </span>
            </h1>
            <p className="text-lg text-white max-w-2xl leading-relaxed">
              I'm passionate about creating beautiful, responsive, and user-friendly web applications. With expertise in modern web technologies, I bring ideas to life through clean and efficient code. Join in with my journey!
            </p>
            
     <motion.div
  whileHover={{ scale: 1.02 }}  
  whileTap={{ scale: 1.05 }}     
>
  <Link
    to="/Portfolio"
    className="mt-7 inline-block px-4 py-2 bg-lime-200 font-mono text-black rounded-lg shadow-2xl hover:bg-lime-300 hover:text-indigo-600 transition-all duration-300 hover:underline"
  >
    Get started
  </Link>
</motion.div>

          </div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default Home
