import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Real-Time Price Tracker',
      description:
        'A web application that tracks and compares prices in real-time across Amazon and Flipkart, helping users find the best deals with automated alerts and price history charts.',
      tags: ['React', 'Node.js', 'Web Scraping', 'MongoDB'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Warehouse Management System',
      description:
        'An comprehensive online system for maintaining and managing warehouse operations for dairy products, including inventory tracking, order processing, and automated reporting.',
      tags: ['Full Stack', 'SQL', 'Express', 'Dashboard'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Attendance Management System',
      description:
        'A digital solution for tracking and managing worker attendance with QR code scanning, biometric integration, automated reports, and real-time analytics.',
      tags: ['React', 'Python', 'PostgreSQL', 'Analytics'],
      gradient: 'from-orange-500 to-red-500',
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  y: -15,
                  rotateX: 5,
                  rotateY: 5,
                }}
                className="group relative glass p-8 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
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

                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </motion.button>
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
