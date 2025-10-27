import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'sabariprofessional1@gmail.com',
      link: 'mailto:sabariprofessional1@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 8124402853',
      link: 'tel:+918124402853',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/sabarinathan-s-543a8828a',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: '@SabariProfx',
      link: 'https://github.com/SabariProfx',
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text-elegant">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-semibold mb-8 text-white/90">Let's Connect</h3>
              <p className="text-gray-400 text-base mb-8 leading-relaxed font-light">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your visions.
              </p>

              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 glass-minimal p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group border-elegant"
                  >
                    <div className="text-white/60 group-hover:text-white/90 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-light tracking-wider uppercase">{info.label}</div>
                      <div className="text-sm text-white/80 group-hover:text-white transition-colors font-light">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="glass-minimal p-8 rounded-lg space-y-6 border-elegant"
            >
              <div>
                <label className="block text-xs font-light mb-2 text-gray-400 tracking-wider uppercase">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:outline-none focus:border-white/30 transition-all text-white placeholder-gray-600 font-light"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-light mb-2 text-gray-400 tracking-wider uppercase">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:outline-none focus:border-white/30 transition-all text-white placeholder-gray-600 font-light"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-light mb-2 text-gray-400 tracking-wider uppercase">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:outline-none focus:border-white/30 transition-all h-32 resize-none text-white placeholder-gray-600 font-light"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300"
              >
                <span className="text-base tracking-wide">Send Message</span>
                <Send size={18} className="opacity-70" />
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
