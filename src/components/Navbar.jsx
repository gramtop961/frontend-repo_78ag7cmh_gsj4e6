import { motion } from 'framer-motion';
import { Rocket, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-white/90 hover:text-white">
          <Rocket className="h-5 w-5" />
          <span className="text-sm tracking-widest uppercase">Dev Portfolio</span>
        </motion.a>
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-6">
          <a href="#stack" className="text-white/70 hover:text-white text-sm">Stack</a>
          <a href="#contact" className="text-white/70 hover:text-white text-sm inline-flex items-center gap-2">
            <Mail className="h-4 w-4" /> Contact
          </a>
        </motion.nav>
      </div>
    </header>
  );
}
