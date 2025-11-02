import { motion } from 'framer-motion';
import { Code2, Boxes, Cpu, Database, Cloud } from 'lucide-react';

const stacks = [
  {
    title: 'Android',
    icon: Cpu,
    items: ['Java', 'Kotlin', 'Jetpack', 'Compose'],
    accent: 'from-emerald-400 to-teal-300',
  },
  {
    title: 'Web UI',
    icon: Code2,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Framer Motion'],
    accent: 'from-cyan-400 to-sky-300',
  },
  {
    title: 'Motion & 3D',
    icon: Boxes,
    items: ['GSAP', 'Three.js', 'Spline'],
    accent: 'from-indigo-400 to-violet-300',
  },
  {
    title: 'Backend',
    icon: Database,
    items: ['Python', 'Django', 'Flask', 'FastAPI'],
    accent: 'from-amber-300 to-orange-400',
  },
  {
    title: 'DevOps',
    icon: Cloud,
    items: ['Docker', 'CI/CD', 'Cloud'],
    accent: 'from-pink-400 to-rose-300',
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold"
          style={{ fontFamily: 'Geist, Inter, system-ui' }}
        >
          The toolkit
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-white/70 max-w-2xl"
          style={{ fontFamily: 'IBM Plex Sans, Inter, system-ui' }}
        >
          Languages and frameworks I use to craft interactive, high‑performance products across Android and the web.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stacks.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl`} />
              <div className="relative flex items-center gap-3">
                <s.icon className="h-5 w-5 text-white/90" />
                <h3 className="text-lg font-medium" style={{ fontFamily: 'Mona Sans, Inter, system-ui' }}>{s.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
