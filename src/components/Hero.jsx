import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 w-full py-28">
        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
          >
            Shopify Developer & OS 2.0 Expert
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl"
          >
            I build high-converting, fast, and scalable Shopify stores — from custom themes to advanced sections, performance, and app integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="/contact" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/20 hover:opacity-95">
              Let’s Work Together
            </a>
            <a href="/projects" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20">
              View Projects
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-300/90">
            {['Dawn','Impulse','Prestige','Broadcast','Motion','Impact','Empire','Custom'].map((t) => (
              <div key={t} className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-center text-xs sm:text-sm">
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 lg:mt-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-3 text-slate-200 text-sm">
              {[ 
                ['1000+','Stores Built'],
                ['5+ yrs','Experience'],
                ['95+','Speed Scores'],
                ['OS 2.0','Custom Sections']
              ].map(([k,v]) => (
                <div key={k} className="rounded-lg bg-black/20 border border-white/10 p-4 text-center">
                  <div className="text-2xl font-bold">{k}</div>
                  <div className="text-slate-400 text-xs mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
