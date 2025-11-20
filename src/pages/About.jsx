import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <p className="mt-6 text-slate-300 text-lg">
            I am a Shopify Developer & Expert with strong experience in custom Shopify theme development, store setup, UI/UX improvements, speed optimization, and advanced Shopify OS 2.0 features.
          </p>
          <p className="mt-4 text-slate-300">
            I have built 1000+ Shopify stores, customized features, fixed bugs, and developed custom solutions for global clients. I specialize in Liquid, JavaScript, HTML, CSS, JSON templates, metafields, custom product logic, and app integrations. I work with premium themes like Dawn, Impulse, Prestige, Broadcast, Motion, Impact, Empire, and more.
          </p>
          <p className="mt-4 text-slate-300">
            My development style is clean, fast, optimized, and SEO-friendly. I combine best practices with attention to detail to deliver high-converting, scalable storefronts.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold mb-2">Experience</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>5+ years of Shopify development experience</li>
                <li>Worked with international e-commerce brands</li>
                <li>Completed 1000+ tasks & custom features</li>
                <li>Specialized in high-converting UI and fast performance</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold mb-2">Core Specialties</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>Theme development with reusable, OS 2.0-compliant sections</li>
                <li>Metafields & dynamic content for flexible merchandising</li>
                <li>Custom product logic, upsells, bundles, and cart enhancements</li>
                <li>Performance optimization and Core Web Vitals improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
