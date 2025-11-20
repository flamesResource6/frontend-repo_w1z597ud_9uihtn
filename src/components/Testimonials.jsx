const testimonials = [
  {
    name: 'Emma C., Fashion Brand Founder',
    quote: 'Lightning-fast delivery and pixel-perfect implementation. Our conversion rate improved immediately.'
  },
  {
    name: 'Liam R., DTC Director',
    quote: 'A true Shopify expert. Great communication and thoughtful problem-solving from start to finish.'
  },
  {
    name: 'Sophia M., Jewelry Store Owner',
    quote: 'The custom product logic and cart drawer enhancements were exactly what we needed. 10/10 experience.'
  },
  {
    name: "Noah K., Startup CEO",
    quote: 'Clean, optimized code and a polished UI. Site speed jumped and SEO foundations are solid.'
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What Clients Say</h2>
          <p className="mt-3 text-slate-300">Results-focused delivery with excellent communication.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <p className="mt-4 text-xs text-slate-400">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
