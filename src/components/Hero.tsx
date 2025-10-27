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
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-75 blur-xl"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              
              {/* Profile photo - Add your image here */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/50 bg-gradient-to-br from-primary/20 to-cyan-500/20 backdrop-blur-sm">
                {/* Placeholder - Replace with your image */}
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold gradient-text">
                  S
                </div>
                {/* To use your photo, uncomment this and add your image to public folder:
                <img 
                  src="/your-photo.jpg" 
                  alt="Sabarinathan" 
                  className="w-full h-full object-cover"
                />
                */}
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 glow-text"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sabarinathan
            </motion.h1>
            
            <div className="text-2xl md:text-4xl mb-8 h-20 gradient-text font-semibold">
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
              className="text-xl md:text-2xl text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              B.Tech (3rd year) — Computer Science Engineering
            </motion.p>
            
            <motion.p
              className="text-lg text-gray-400 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              SRMIST Chennai
            </motion.p>

            <motion.div
              className="flex gap-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href="#projects"
                className="glass px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-dark transition-all duration-300 transform hover:scale-105 animate-glow"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="bg-primary text-dark px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={40} className="text-primary" />
      </motion.div>
    </section>
  );
}
