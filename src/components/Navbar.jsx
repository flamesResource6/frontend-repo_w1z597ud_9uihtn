import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/10'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">Shopify Expert</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/services">Services</NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-tr from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow ring-1 ring-white/20 hover:opacity-95 transition">
              Start a Project
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-200">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-3 space-y-1">
            <NavItem to="/" >Home</NavItem>
            <NavItem to="/about" >About</NavItem>
            <NavItem to="/services" >Services</NavItem>
            <NavItem to="/projects" >Projects</NavItem>
            <NavItem to="/contact" >Contact</NavItem>
          </div>
        </div>
      )}
    </header>
  )
}
