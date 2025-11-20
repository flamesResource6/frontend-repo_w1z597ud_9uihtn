import Navbar from '../components/Navbar'
import ServicesGrid from '../components/ServicesGrid'

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <h1 className="text-4xl font-bold text-white">Services</h1>
          <p className="mt-4 text-slate-300">Expert Shopify development tailored to your brand and goals.</p>
        </div>
        <ServicesGrid />
      </main>
    </div>
  )
}
