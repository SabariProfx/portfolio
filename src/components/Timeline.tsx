import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Trophy, GraduationCap } from 'lucide-react';

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      year: '2023',
      title: 'Higher Secondary School',
      description: 'Completed Higher Secondary Education',
      icon: <GraduationCap size={24} />,
      type: 'education',
    },
    {
      year: 'August 2023',
      title: 'Started B.Tech at SRMIST',
      description: 'Joined Computer Science Engineering program at SRMIST Chennai',
      icon: <BookOpen size={24} />,
      type: 'education',
    },
    {
      year: 'March 2024',
      title: 'Java Programming',
      description: 'Basic Java Programming Language Certification from Oracle',
      icon: <Award size={24} />,
      type: 'certification',
    },
    {
      year: 'September 2024',
      title: 'SQL & Databases',
      description: 'SQL and Relational Databases Certification from Cognitive Classes',
      icon: <Award size={24} />,
      type: 'certification',
    },
    {
      year: 'March 2025',
      title: 'Machine Learning',
      description: 'Machine Learning in Python Certification from Simplilearn',
      icon: <Award size={24} />,
      type: 'certification',
    },
    {
      year: 'August 2025',
      title: 'Smart India Hackathon',
      description: 'Participated in SIH, India\'s biggest hackathon',
      icon: <Trophy size={24} />,
      type: 'achievement',
    },
    {
      year: 'October 2025',
      title: 'Full Stack Development',
      description: 'Full Stack Development Certification from Simplilearn',
      icon: <Award size={24} />,
      type: 'certification',
    },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-blue-500 to-cyan-500';
      case 'certification':
        return 'from-purple-500 to-pink-500';
      case 'achievement':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-primary to-cyan-400';
    }
  };

  return (
    <section id="timeline" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 gradient-text">
            My Journey
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="relative"
                >
                  <div className="flex gap-6 items-start">
                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${getEventColor(event.type)} flex items-center justify-center text-white shadow-lg z-10 relative`}
                      style={{ boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)' }}
                    >
                      {event.icon}
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex-1 glass p-6 rounded-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${getEventColor(event.type)} text-white shadow-lg`}>
                          {event.year}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                          {event.type.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{event.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{event.description}</p>
                    </motion.div>
                  </div>

                  {/* Connector Line */}
                  {index < events.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
