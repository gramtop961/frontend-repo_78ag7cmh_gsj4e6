import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-lg font-medium" style={{ fontFamily: 'Geist, Inter, system-ui' }}>Let’s build something memorable</h4>
            <p className="text-white/70 text-sm mt-1">Open to freelance, contracts, and collaborations.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/40 hover:bg-white/5 transition-colors">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/40 hover:bg-white/5 transition-colors">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </motion.div>
        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Crafted with care.</p>
      </div>
    </footer>
  );
}
