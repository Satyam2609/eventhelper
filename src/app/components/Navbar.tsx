"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Navbar Component
 * 
 * A responsive navigation bar featuring glassmorphism and smooth animations.
 * Adapted for a creamy-white theme with amber accents.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items configuration for easy maintenance
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="w-full bg-[#fffaf0]/80 backdrop-blur-md border-b border-amber-100/30 fixed top-0 left-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* BRAND LOGO */}
          <div className="flex-shrink-0">
            <motion.a
              href="#"
              className="text-2xl font-extrabold text-amber-600 tracking-tight"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              EventHelper
            </motion.a>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-amber-600 font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-amber-500 text-white font-bold rounded-full shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition-all"
            >
              Get Started
            </motion.button>
          </div>

          {/* MOBILE TOGGLE (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 p-2 hover:bg-amber-50 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#fffaf0]/95 backdrop-blur-lg border-b border-amber-100/30 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-slate-700 hover:text-amber-600 font-semibold py-4 border-b border-amber-500/5 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-6">
                <button className="w-full py-4 bg-amber-500 text-white font-bold rounded-2xl shadow-xl">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}