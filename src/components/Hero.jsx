import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-start">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-xs tracking-[0.3em] text-white/70 uppercase mb-4"
        >
          Android • Web • Full‑Stack
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl leading-tight font-semibold"
        >
          <span style={{ fontFamily: 'Geist, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>
            Futuristic experiences
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400" style={{ fontFamily: 'Mona Sans, Manrope, Inter, system-ui' }}>
            crafted with code
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-white/70"
          style={{ fontFamily: 'IBM Plex Sans, Inter, system-ui' }}
        >
          I build minimal, sleek interfaces with modern motion. Expert in Java/Kotlin for Android, and full‑stack web with Python, Django/Flask/FastAPI — shipped with Docker, sprinkled with 3D & GSAP‑level animations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#stack" className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium shadow/50 shadow-black/30 hover:shadow-black/40 transition-shadow">
            Explore the stack
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm text-white/90 hover:border-white/40 hover:bg-white/5 transition-colors">
            Let’s collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
