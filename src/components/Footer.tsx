import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 flex items-center gap-2">
            © {new Date().getFullYear()} Sabarinathan — Built with{' '}
            <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" /> and React
          </p>
          
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/sabarinathan-s-543a8828a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SabariProfx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
