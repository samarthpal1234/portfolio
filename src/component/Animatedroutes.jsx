import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import { AnimatePresence } from 'framer-motion';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
const Animatedroutes = () => {
    const location = useLocation();
    
    return (
        <AnimatePresence>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="container mx-auto px-4">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Contact" element={< Contact/>} />
                           <Route path="/Experience" element={< Experience/>} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
    );
}

export default Animatedroutes;
