import Navbar from '../components/Navbar'

export default function Contact() {
  const email = 'hello@yourshopify.dev'
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Contact</h1>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Let’s build a fast, modern, and profitable Shopify store. Contact me for collaboration.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold mb-2">Get in touch</h3>
              <p className="text-slate-300 text-sm">Email: <a className="underline" href={`mailto:${email}`}>{email}</a></p>
              <p className="text-slate-300 text-sm mt-2">Timezone: Flexible — I work with global clients.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-semibold mb-2">Project Starter</h3>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>1) Share brand URL or Figma</li>
                <li>2) List required features</li>
                <li>3) Mention deadlines</li>
                <li>4) I’ll send a plan, timeline, and quote</li>
              </ul>
              <a href={`mailto:${email}`} className="inline-flex items-center justify-center mt-6 rounded-md bg-gradient-to-tr from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/20 hover:opacity-95">Start a Project</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
