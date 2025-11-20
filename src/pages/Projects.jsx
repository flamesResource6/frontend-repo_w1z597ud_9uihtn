import Navbar from '../components/Navbar'
import ProjectsGrid from '../components/Projects'

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <h1 className="text-4xl font-bold text-white">Portfolio</h1>
          <p className="mt-4 text-slate-300">Real-world Shopify builds across fashion, jewelry, and home decor.</p>
        </div>
        <ProjectsGrid />
      </main>
    </div>
  )
}
