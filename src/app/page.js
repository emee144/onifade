'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Projects from './projects/page';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Emmanuel Onifade
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-medium text-gray-400 mb-8">
            Full-Stack Web & Mobile Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
            Full-Stack & Mobile Developer specializing in Next.js, React, React Native, Node.js/Express, C#/ASP.NET, and Microsoft Azure solutions. I build performant web & mobile apps with databases like MySQL, MongoDB, PostgreSQL, SQL Server, Supabase, and Firebase.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="/projects"
              className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition"
              download
            >
              Download Resume
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-x-6 gap-y-3 text-gray-400 text-base"
          >
            <a 
              href="mailto:anuemmanuela1@gmail.com"
              className="hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span aria-hidden="true">✉</span> anuemmanuela1@gmail.com
            </a>
            
            <a 
              href="tel:+2349048065026"
              className="hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span aria-hidden="true">📞</span> +234 904 806 5026
            </a>
            
            <a 
              href="https://linkedin.com/in/emmanuel-onifade-811848319"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span aria-hidden="true">in</span> LinkedIn
            </a>
            
            <a 
              href="https://github.com/emee144"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <span aria-hidden="true">GitHub</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl"
        >
          <img
            src="/profile.jpg"
            alt="Emmanuel Onifade"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <Projects />
    </main>
  );
}