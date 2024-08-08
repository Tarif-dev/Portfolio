"use client"
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, title: 'CarbonDex', category: 'Blockchain', image: '/carbondex.png', description: 'A Carbon Credits trading platform on Ethereum.', tech: ['React', 'Solidity', 'Web3.js'] },
  { id: 2, title: 'E-commerce Platform', category: 'Web', image: '/carbondex.png', description: 'Full-stack online store with React and Node.js.', tech: ['React', 'Node.js', 'MongoDB'] },
  { id: 3, title: 'iOS Fitness App', category: 'Mobile', image: '/carbondex.png', description: 'SwiftUI app for tracking workouts and nutrition.', tech: ['Swift', 'SwiftUI', 'HealthKit'] },
  { id: 4, title: 'NFT Marketplace', category: 'Blockchain', image: '/carbondex.png', description: 'Platform for buying and selling unique digital assets.', tech: ['React', 'Solidity', 'IPFS'] },
  { id: 5, title: 'Social Media Dashboard', category: 'Web', image: '/carbondex.png', description: 'Analytics tool for managing multiple social accounts.', tech: ['Vue.js', 'D3.js', 'Node.js'] },
  { id: 6, title: 'Crypto Wallet', category: 'Mobile', image: '/carbondex.png', description: 'Secure mobile wallet for managing cryptocurrencies.', tech: ['React Native', 'Blockchain API', 'Biometrics'] },
]

export default function EnhancedLandingPage() {
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    setMounted(true)
    initScrollAnimations()

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const initScrollAnimations = () => {
    gsap.utils.toArray('section').forEach((section, i) => {
      const heading = section.querySelector('h2')
      gsap.fromTo(
        heading,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-300 text-gray-900'}`}>
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
            <a href="#about" className="text-2xl mb-4 hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="text-2xl mb-4 hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-2xl mb-4 hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-6 pt-24">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            >
              Tarif Hussain
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-12"
            >
              Crafting Digital Experiences at the Frontier of Design & Technology
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg"
              >
                Discover My Portfolio
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="bg-gradient-to-r from-pink-600 to-red-600 text-white px-8 py-4 rounded-full font-bold hover:from-pink-500 hover:to-red-500 transition-all duration-300 shadow-lg"
              >
                Initiate Collaboration
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xl mb-6">
              I&apos;m a passionate developer with a keen eye for design and a love for cutting-edge technologies. With expertise in web, mobile, and blockchain development, I strive to create innovative solutions that push the boundaries of what&apos;s possible in the digital realm.
            </p>
            <p className="text-xl">
              My goal is to blend creativity with technical prowess to deliver exceptional user experiences and drive meaningful impact through technology.
            </p>
          </motion.div>
        </section>

        <section id="projects" className="py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <div className="flex justify-center mb-12 space-x-4 flex-wrap">
            {['All', 'Web', 'Mobile', 'Blockchain'].map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full ${activeCategory === category ? 'bg-purple-600' : 'bg-gray-800'} hover:bg-purple-500 transition-colors duration-300 mb-4`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <Image src={project.image} alt={project.title} width={500} height={500} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="text-xs bg-purple-800 text-purple-200 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="inline-block bg-purple-600 text-sm px-3 py-1 rounded-full">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="skills" className="py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {['JavaScript', 'React', 'Node.js', 'Python', 'Swift', 'Solidity', 'GraphQL', 'AWS'].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">{skill[0]}</span>
                </div>
                <span className="text-center">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="contact" className="py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Get in Touch
          </motion.h2>
          <motion.form 
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300" />
            </div>
            <div className="mb-6">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300" />
            </div>
            <div className="mb-6">
              <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </section>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-0"
            >
              <h3 className="text-2xl font-bold mb-2">Tarif Hussain</h3>
              <p className="text-gray-400">Innovating at the intersection of design & technology</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex space-x-6"
            >
              <a href="#" className="text-3xl hover:text-purple-400 transition-colors duration-300">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-3xl hover:text-purple-400 transition-colors duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-3xl hover:text-purple-400 transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center text-gray-400"
          >
            © {new Date().getFullYear()} Tarif Hussain. All rights reserved.
          </motion.div>
        </div>
      </footer>

      {mounted && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="fixed bottom-8 right-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-purple-600 text-white p-3 rounded-full shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </motion.div>
      )}

      {/* Custom Cursor */}
      {mounted && (
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 bg-purple-500 rounded-full pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        />
      )}

      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-purple-600 text-white p-2 rounded-full"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </motion.button>
    </div>
  )
}
