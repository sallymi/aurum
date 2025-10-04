'use client'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-md`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo文案：Athena → Aurum Education */}
        <a href="/" className="text-2xl font-bold text-sky-500">Aurum Education</a>

        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <a href="/about" className="hover:text-sky-500 transition">ABOUT</a>
          <a href="/student-services" className="hover:text-sky-500 transition">STUDENT SERVICES</a>
          <a href="/" className="w-10 h-10 rounded-full bg-gray-200 border-2 border-sky-500 overflow-hidden hover:scale-105 transition">
            <img src="/images/icon-university.svg" alt="User" className="w-full h-full object-cover" />
          </a>
          <a href="/adult-services" className="hover:text-sky-500 transition">ADULT SERVICES</a>
          <a href="#contact" className="hover:text-sky-500 transition">CONTACT</a>
        </nav>

        <a href="#consultation" className="px-4 py-2 rounded border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition">GET A CONSULTATION</a>
      </div>
    </header>
  )
}