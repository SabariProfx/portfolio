import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl" />
              
              {/* Profile photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-gradient-to-br from-white/5 to-white/10">
                <img 
                  src="/profile.jpg" 
                  alt="Sabarinathan" 
                  className="w-full h-full object-cover grayscale-[30%]"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left max-w-2xl"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Sabarinathan
            </motion.h1>
            
            <div className="text-xl md:text-3xl mb-8 h-16 text-white/60 font-light">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'React Specialist',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              className="text-base md:text-lg text-white/50 mb-3 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              B.Tech (3rd year) — Computer Science Engineering
            </motion.p>
            
            <motion.p
              className="text-sm text-white/40 mb-12 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              SRMIST Chennai
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href="#projects"
                className="glass-minimal px-6 py-3 rounded-lg text-sm font-light hover:bg-white/10 transition-all duration-300 border-elegant"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/90 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-white/30" />
      </motion.div>
    </section>
  );
}
