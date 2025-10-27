import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar, Trophy } from 'lucide-react';

const timelineData = [
  {
    year: "2023",
    title: "Higher Secondary School",
    institution: "Completed Higher Secondary Education",
    description: "Successfully completed higher secondary education with strong focus on science and mathematics.",
    type: "education",
    status: "completed"
  },
  {
    year: "August 2023",
    title: "Started B.Tech at SRMIST",
    institution: "SRMIST Chennai",
    description: "Joined Computer Science Engineering program at SRMIST Chennai, beginning my journey in advanced technology and software development.",
    type: "education",
    status: "ongoing"
  },
  {
    year: "March 2024",
    title: "Java Programming",
    institution: "Oracle Certification",
    description: "Basic Java Programming Language Certification from Oracle, mastering object-oriented programming fundamentals.",
    type: "certification",
    status: "completed"
  },
  {
    year: "September 2024",
    title: "SQL & Databases",
    institution: "Cognitive Classes",
    description: "SQL and Relational Databases Certification from Cognitive Classes, gaining expertise in database management.",
    type: "certification",
    status: "completed"
  },
  {
    year: "March 2025",
    title: "Machine Learning",
    institution: "Simplilearn",
    description: "Machine Learning in Python Certification from Simplilearn, exploring AI algorithms and data science.",
    type: "certification",
    status: "completed"
  },
  {
    year: "August 2025",
    title: "Smart India Hackathon",
    institution: "National Achievement",
    description: "Participated in SIH, India's biggest hackathon, collaborating with talented developers to solve real-world problems.",
    type: "achievement",
    status: "completed"
  },
  {
    year: "October 2025",
    title: "Full Stack Development",
    institution: "Simplilearn",
    description: "Full Stack Development Certification from Simplilearn, mastering modern web development technologies and frameworks.",
    type: "certification",
    status: "completed"
  }
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="relative py-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 mb-6"
          >
            <Calendar className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
            My Journey
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A timeline of my educational milestones and achievements that have shaped my path in technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
          
          {/* Timeline items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25"
                  >
                    {item.type === 'education' ? (
                      <GraduationCap className="w-6 h-6 text-white" />
                    ) : item.type === 'achievement' ? (
                      <Trophy className="w-6 h-6 text-white" />
                    ) : (
                      <Award className="w-6 h-6 text-white" />
                    )}
                  </motion.div>
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="group relative p-6 rounded-2xl glass-minimal backdrop-blur-sm border-elegant shadow-xl transition-all duration-500 hover-theme-purple">
                    {/* Year badge */}
                    <div className="absolute -top-3 left-6">
                      <span className="inline-block px-4 py-1 text-xs font-medium text-blue-300 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                        {item.year}
                      </span>
                    </div>

                    {/* Status indicator */}
                    {item.status === 'ongoing' && (
                      <div className="absolute -top-2 -right-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse" />
                      </div>
                    )}

                    <div className="mt-2">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-blue-400 font-medium mb-3 text-sm">
                        {item.institution}
                      </p>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-slate-400 text-sm">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500/50" />
            <span>Continuing the journey</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
