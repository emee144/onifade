'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Lexance Crypto CEX Exchange',
    description: 'Trade, manage, and track cryptocurrencies with ease using Lexance. Features include real-time market data, secure wallets, and an intuitive interface for web and mobile users.',
    tech: ['Next.js', 'React', 'MongoDB', 'Binance API', 'CoinGecko API', 'Tradingview Chart'],
    link: 'https://lexance.vercel.app',
    repo: 'https://github.com/emee144/lexance.git',
    type: 'Web App',
  },
{
  title: 'NexTrade Web App',
  description: 'Real-time crypto trading platform with secure login, portfolio management, and referral system. Built with Next.js, React, and Framer Motion for smooth animations.',
  tech: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS', 'Node.js', 'Coingecko API', 'Tradingview Chart'],
  link: 'https://nextrade-five.vercel.app',
  repo: 'https://github.com/emee144/nextrade.git',
  type: 'Web App',
},

{
  title: 'Fitness & Nutrition App',
  description: 'Cross-platform mobile app to track daily meals, calories, and macronutrients. Features interactive nutrition cards and real-time calorie totals for better health management.',
  tech: ['React Native', 'Expo', 'JavaScript', 'FlatList', 'StyleSheet'],
  link: '', 
  repo: 'https://github.com/emee144/fitness-app',
},
{
  title: 'Remi Oseni Foundation Website',
  description: 'Community-focused web platform highlighting youth empowerment programs, food support initiatives, and organizational impact in Ibadan, Nigeria. Features dynamic hero sections, program showcases, and testimonials.',
  tech: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS', 'Image Optimization'],
  link: 'https://remiosenifoundation.org', 
  repo: 'https://github.com/emee144/remi-foundation', 
  type: 'Web App',
},
{
  title: 'E-Commerce Backend API',
  description: 'Robust RESTful API for managing products, shopping cart, and orders. Built with Express.js and Node.js, providing secure endpoints and JSON-based communication for full-stack applications.',
  tech: ['Node.js', 'Express.js', 'REST API', 'JavaScript', 'JSON'],
  link: '',
  repo: 'https://github.com/emee144/ecommerce-backend.git',
  type: 'Backend API',
},
{
  title: 'Loan App',
  description: 'Cross-platform financial mobile app for managing accounts, applying for loans, and tracking bills. Built with React Native, Expo, and Supabase for authentication and real-time data, featuring tab-based navigation and custom theming with Dripsy.',
  tech: ['React Native', 'Expo', 'Supabase', 'Dripsy', 'React Navigation'],
  link: '',
  repo: 'https://github.com/emee144/loan-app.git',
  type: 'Mobile App',
},
{
  title: 'ChainPocket',
  description: 'Cross-platform crypto wallet app for managing digital assets, viewing balances, and performing transactions. Built with React Native, Expo, and secure navigation, featuring a bottom-tab interface for easy access to Home and Wallet screens.',
  tech: ['React Native', 'Expo', 'React Navigation', 'Ionicons', 'react-native-get-random-values', 'react-native-url-polyfill'],
  link: '', 
  repo: 'https://github.com/emee144/chainpocket.git',
  type: 'Mobile App',
},
{
  title: 'MiniBlog Web Application',
  description: 'A lightweight blogging platform built with ASP.NET Core Razor Pages using raw SQL with SQLite. Supports creating, viewing, editing, deleting, and interacting with blog posts. Includes image thumbnails, likes and views tracking, live search, dark mode toggle, and a responsive card-based UI without relying on Entity Framework.',
  tech: [
    'ASP.NET Core',
    'Razor Pages',
    'C#',
    'SQLite',
    'Microsoft.Data.Sqlite',
    'HTML',
    'CSS',
    'JavaScript'
  ],
  link: '',
  repo: 'https://github.com/emee144/mini-blog-app',
  type: 'Full-Stack Web Application',
},
{
  title: 'Personal Finance Manager',
  description: 'A web-based personal finance application that helps users track income and expenses, manage budgets, and view financial reports through an interactive dashboard. Includes authentication and modular finance pages for better money management.',
  tech: ['React', 'Vite', 'JavaScript', 'CSS', 'React Router'],
  link: '',
  repo: 'https://github.com/emee144/finance',
},
{
  title: 'Mini Blog Application',
  description: 'A full-stack blog application built with ASP.NET Core that allows users to create, edit, and manage blog posts. Uses Entity Framework Core with SQLite for data persistence and follows MVC architecture with Razor Pages for server-rendered views.',
  tech: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQLite', 'Razor Pages', 'HTML', 'CSS'],
  link: '',
  repo: 'https://github.com/emee144/MyBlogApp',
},
{
  title: 'Movie Streaming & Discovery Platform',
  description: 'A full-stack movie application built with Next.js (App Router) that allows users to browse movies, view embedded trailers, and manage user authentication and dashboard features. Uses Sequelize ORM with MySQL and migration-based schema management for scalable backend data handling.',
  tech: [
    'Next.js',
    'React',
    'JavaScript',
    'Sequelize',
    'MySQL',
    'Tailwind CSS',
    'App Router',
  ],
  link: '',
  repo: 'https://github.com/emee144/my-movie-app',
},
{
  title: 'Web3 Wallet (MetaMask dApp)',
  description: 'A Web3 decentralized application built with Next.js that connects to MetaMask, verifies wallet ownership through message signing, and ensures users are on the Ethereum Mainnet. Includes ENS support, secure auth utilities, and smart contract tooling.',
  tech: [
    'Next.js',
    'React',
    'JavaScript',
    'Tailwind CSS',
    'ethers.js',
    'Solidity',
    'MetaMask',
    'Hardhat',
  ],
  link: '',
  repo: 'https://github.com/emee144/web3-wallet',
}

];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-16"
        >
          Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all group"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    Live →
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300 transition"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}