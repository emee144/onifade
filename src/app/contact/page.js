'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-16"
        >
          Get in Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm currently open to new opportunities — freelance projects, full-time roles, collaborations, or just interesting conversations about web/mobile development, Azure, or React Native.
              </p>
              <p className="text-gray-400 mt-4">
                Reach out if you'd like to work together or chat!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <a
                href="mailto:anuemmanuela1@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition"
                aria-label="Email"
              >
                <img src="/email.png" width="70" height="70" alt="Email" className="hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://linkedin.com/in/emmanuel-onifade-811848319"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
                aria-label="LinkedIn"
              >
                <img src="/linkedin.png" width="70" height="70" alt="LinkedIn" className="hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://github.com/emee144"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
                aria-label="GitHub"
              >
                <img src="/github.png" width="70" height="70" alt="GitHub" className="hover:scale-110 transition-transform" />
              </a>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition mt-6"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 p-8 rounded-xl border border-gray-800"
          >
            <p className="text-gray-300 text-lg mb-6">
              The easiest way to reach me is by email:
            </p>
            <a
              href="mailto:anuemmanuela1@gmail.com"
              className="block text-2xl md:text-3xl font-medium text-blue-400 hover:text-blue-300 transition break-all"
            >
              anuemmanuela1@gmail.com
            </a>
            <p className="text-gray-400 mt-8">
              I usually respond within 3 minutes. Looking forward to hearing from you!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}