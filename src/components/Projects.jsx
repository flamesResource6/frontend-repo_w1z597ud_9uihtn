const projects = [
  {
    title: 'Project 1 — Custom Jewelry Store',
    desc: 'Custom product page, upsells, size selector, cart drawer logic.',
  },
  {
    title: 'Project 2 — Fashion Brand Store',
    desc: 'Custom sliders, tabs, mega menu, bundle feature, speed optimization.',
  },
  {
    title: 'Project 3 — Home Decor Store',
    desc: 'Figma-to-Shopify conversion, pixel-perfect UI, SEO setup.',
  },
]

export default function Projects({ compact = false }) {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="mt-3 text-slate-300">A selection of recent Shopify builds and customizations.</p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-white/10 mb-4" />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
