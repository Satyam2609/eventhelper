"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";


export default function EventHome() {
  const [displayText, setDisplayText] = useState("");
  const baseText = "Make Every Event Effortless";

  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(baseText.slice(0, i));
      i++;
      if (i > baseText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#fffaf0] overflow-hidden flex flex-col justify-center items-center text-center px-4 pt-20">


      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0], x: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-200 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-100 rounded-full blur-3xl opacity-20"
      />

      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="#fbbf24" strokeWidth="0.1" />
        <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="#fbbf24" strokeWidth="0.1" />
      </svg>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: 45 }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] w-12 h-12 border-2 border-amber-200 rounded-xl opacity-20 hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: -15 }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[10%] w-16 h-16 border-2 border-amber-100 rounded-full opacity-20 hidden md:block"
      />
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-400/40 rounded-full hidden md:block"
          initial={{ x: `${(i * 13.7) % 100}% `, y: `${(i * 23.3) % 100}% `, opacity: 0.1 }}
          animate={{ y: [`${(i * 23.3) % 100}% `, `${((i * 23.3) % 100) - 15}% `, `${(i * 23.3) % 100}% `], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 6 + (i % 8), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        whileHover={{ y: -10, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute right-[5%] top-[25%] hidden lg:block p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl shadow-amber-500/10 border border-white max-w-[200px] z-20"
      >
        <div className="w-10 h-10 bg-amber-100 rounded-lg mb-3 flex items-center justify-center">
          <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="font-bold text-slate-800 text-sm">Summer Gala</div>
        <div className="text-xs text-slate-500">June 24, 2026</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        whileHover={{ y: -10, rotate: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-[5%] bottom-[20%] hidden lg:block p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl shadow-amber-500/10 border border-white max-w-[200px] z-20"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-slate-200" />
          <div className="w-8 h-8 rounded-full bg-slate-300 -ml-5 border-2 border-white" />
          <div className="text-[10px] font-bold text-amber-600 uppercase tracking-tighter">+12 guests</div>
        </div>
        <div className="font-bold text-slate-800 text-sm">Team Retreat</div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
          <div className="bg-amber-400 h-full w-[80%] rounded-full" />
        </div>
      </motion.div>

     
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-amber-700 uppercase bg-amber-50 rounded-full border border-amber-100/50"
        >
          Trusted by 10,000+ Event Organizers
        </motion.div>

        <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight min-h-[1.2em]">
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1 h-12 md:h-16 bg-amber-500 ml-1 translate-y-2"
          />
        </h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Elevate your planning experience with the world's most intuitive event management platform.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-amber-500 text-white font-bold rounded-2xl shadow-xl shadow-amber-500/20 hover:bg-amber-600 transition-all text-lg"
          >
            Start Planning Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-slate-800 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all text-lg"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Logo cloud - build credibility */}
        <motion.div
          className="mt-16 pt-8 border-t border-amber-200/20 flex flex-wrap justify-center gap-10 opacity-40 grayscale"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="font-black text-slate-600 text-xl tracking-tighter">EVENTLY</div>
          <div className="font-black text-slate-600 text-xl tracking-tighter">GATHER.JS</div>
          <div className="font-black text-slate-600 text-xl tracking-tighter">ORGANIZE.ME</div>
        </motion.div>
      </div>

    </div>
  );
}