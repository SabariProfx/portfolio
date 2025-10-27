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

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-cyan-400 to-primary opacity-30" />

            <div className="space-y-12">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8`}
                >
                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5 }}
                    className="flex-1 glass p-6 rounded-2xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-3 bg-gradient-to-r ${getEventColor(event.type)} text-white`}>
                      {event.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </motion.div>

                  {/* Center icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${getEventColor(event.type)} flex items-center justify-center text-white shadow-lg shadow-primary/50 z-10`}
                  >
                    {event.icon}
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
