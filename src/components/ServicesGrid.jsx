import { Layers, Settings2, Rocket, SlidersHorizontal, GaugeCircle, FileCode2, Bug, Plug } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Shopify Store Setup',
    bullets: [
      'Complete setup from scratch, including theme installation, pages, menus, and settings.',
      'Configure payments, shipping, taxes, and markets.',
    ],
  },
  {
    icon: Layers,
    title: 'Custom Shopify Development',
    bullets: [
      'Full custom themes',
      'Custom sections with theme editor support',
      'Custom layouts and components',
    ],
  },
  {
    icon: Settings2,
    title: 'Adding New Features',
    bullets: [
      'Product bundles, BOGO logic, upsells, sticky ATC, size selectors, custom options',
    ],
  },
  {
    icon: SlidersHorizontal,
    title: 'Custom Sections',
    bullets: [
      'Fully editable sections in the Shopify customizer',
      'Includes sliders, grids, hero sections, FAQs, tabs, image/text layouts',
    ],
  },
  {
    icon: GaugeCircle,
    title: 'Speed Optimization',
    bullets: [
      'Reduce unused code, app removal, compression, minification',
      'Improve speed score & Core Web Vitals',
    ],
  },
  {
    icon: FileCode2,
    title: 'Figma to Shopify',
    bullets: [
      'Pixel-perfect conversion',
      'Responsive & fast',
      'Clean Liquid + CSS + JS',
    ],
  },
  {
    icon: Bug,
    title: 'Bug Fixes & Troubleshooting',
    bullets: [
      'JS errors, Liquid bugs, styling issues, mobile fixes, app conflicts',
    ],
  },
  {
    icon: Plug,
    title: 'Shopify App Integrations',
    bullets: [
      'UpCart, Klaviyo, Loox, PageFly, Gempages, Recharge, etc.',
    ],
  },
]

export default function ServicesGrid({ compact = false }) {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!compact && (
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
            <p className="mt-3 text-slate-300">End-to-end Shopify development with a focus on speed, UX, and conversions.</p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, bullets }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-cyan-400" size={22} />
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
