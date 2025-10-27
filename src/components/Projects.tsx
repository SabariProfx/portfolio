import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Smart Teachers Substitution System with School Management',
      description:
        'A comprehensive enterprise-level system for educational institutions featuring intelligent teacher substitution algorithms and AI-powered smart timetable scheduling. Includes student management, attendance tracking, and automated administrative workflows.',
      tags: ['Full Stack', 'AI/ML', 'React', 'Node.js', 'PostgreSQL', 'Algorithms'],
      gradient: 'from-blue-600 via-purple-600 to-pink-600',
      hoverTheme: 'hover-theme-blue',
      featured: true,
      github: 'https://github.com/SabariProfx/school-management-system'
    },
    {
      title: 'Real-Time Price Tracker',
      description:
        'A web application that tracks and compares prices in real-time across Amazon and Flipkart, helping users find the best deals with automated alerts and price history charts.',
      tags: ['React', 'Node.js', 'Web Scraping', 'MongoDB'],
      gradient: 'from-cyan-500 to-blue-500',
      hoverTheme: 'hover-theme-cyan',
      github: 'https://github.com/SabariProfx/pricetracker'
    },
    {
      title: 'Personal Study Assistant',
      description:
        'An intelligent ML-powered study companion that helps students optimize their learning. Features personalized study schedules, progress tracking, smart recommendations, and adaptive learning techniques.',
      tags: ['Machine Learning', 'Python', 'TensorFlow', 'React', 'Flask'],
      gradient: 'from-green-500 to-teal-500',
      hoverTheme: 'hover-theme-cyan',
      github: 'https://github.com/SabariProfx/studyassistant'
    },
    {
      title: 'Dairy Products E-Commerce Platform',
      description:
        'A complete online marketplace for dairy products with inventory management, order processing, payment integration, and real-time delivery tracking for fresh dairy items.',
      tags: ['E-Commerce', 'Full Stack', 'SQL', 'Express', 'Payment Gateway'],
      gradient: 'from-purple-500 to-pink-500',
      hoverTheme: 'hover-theme-purple',
      github: 'https://github.com/SabariProfx/dairy-management'
    },
    {
      title: 'Workers Attendance Management System',
      description:
        'A digital solution for tracking and managing worker attendance with QR code scanning, biometric integration, automated reports, and real-time analytics.',
      tags: ['React', 'Python', 'PostgreSQL', 'Analytics'],
      gradient: 'from-orange-500 to-red-500',
      hoverTheme: 'hover-theme-pink',
      github: 'https://github.com/SabariProfx/workersattendance'
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>

          <div className="space-y-8">
            {/* Featured Project - Full Width */}
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="group relative glass rounded-3xl overflow-hidden transition-all duration-500 hover-theme-blue"
              >
                {/* Featured gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />
                
                <div className="relative z-10 p-10 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                    {/* Left side - Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-4 py-1.5 text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg">
                          ⭐ FLAGSHIP PROJECT
                        </span>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-white font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => window.open(project.github, '_blank')}
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        <Github size={20} />
                        <span>View Source Code</span>
                      </button>
                    </div>
                    
                    {/* Right side - Stats or highlights */}
                    <div className="md:w-64 space-y-4">
                      <div className="glass-minimal p-4 rounded-xl border-elegant">
                        <div className="text-3xl font-bold text-blue-400 mb-1">AI-Powered</div>
                        <div className="text-sm text-gray-400">Smart algorithms for optimal scheduling</div>
                      </div>
                      <div className="glass-minimal p-4 rounded-xl border-elegant">
                        <div className="text-3xl font-bold text-purple-400 mb-1">Full Stack</div>
                        <div className="text-sm text-gray-400">End-to-end enterprise solution</div>
                      </div>
                      <div className="glass-minimal p-4 rounded-xl border-elegant">
                        <div className="text-3xl font-bold text-pink-400 mb-1">Scalable</div>
                        <div className="text-sm text-gray-400">Built for large institutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Regular Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`group relative glass p-8 rounded-2xl overflow-hidden transition-all duration-500 ${project.hoverTheme}`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm glass rounded-full text-primary font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
