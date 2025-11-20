import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ServicesGrid compact />
        <Projects compact />
        <Testimonials />
        <CTA />
      </main>
    </div>
  )
}
