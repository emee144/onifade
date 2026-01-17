'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-16"
        >
          About Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
        
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-gray-700 shadow-2xl">
              <img
                src="/profile.jpg" 
                alt="Emmanuel Onifade"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Emmanuel Onifade</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Full-Stack Web & Mobile Developer building high-performance applications with Next.js, React Native, Node.js/Express, C#/ASP.NET, and Microsoft Azure.
              </p>
              <p className="text-lg text-gray-400 mt-6">
                I specialize in creating seamless cross-platform experiences — from responsive web apps to native mobile solutions — with a focus on clean code, scalability, and user-centric design.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Core Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Next.js', 'React', 'React Native', 'Node.js', 'Express',
                  'C# / ASP.NET', 'MySQL', 'MongoDB', 'PostgreSQL', 'SQL Server',
                  'Supabase', 'Firebase', 'Azure', 'Docker', 'Kubernetes'
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800/50 px-4 py-3 rounded-lg text-center text-gray-200 hover:bg-gray-700 transition"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}