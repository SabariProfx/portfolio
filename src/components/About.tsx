import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Palette } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: <Code2 size={40} />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications with modern technologies',
    },
    {
      icon: <Database size={40} />,
      title: 'Backend & Databases',
      description: 'Designing scalable systems and working with SQL and NoSQL databases',
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with attention to detail',
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            I'm a third-year Computer Science Engineering student at SRMIST Chennai with a passion for
            creating innovative web solutions. I enjoy competitive programming, contributing to
            open-source projects, and continuously learning new technologies.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="glass-minimal p-8 rounded-2xl transition-all duration-500 animate-float border-elegant hover-theme-purple"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-primary mb-6">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
