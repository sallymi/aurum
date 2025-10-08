'use client'
import { useEffect, useState } from 'react'
import Modal from './Modal'
import EmailForm from './EmailForm'
import { useTexts } from '../lib/texts'

export default function Header() {
  const { t } = useTexts()
  const [scrolled, setScrolled] = useState(false)
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false)
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl sm:text-2xl font-bold text-sky-500">Aurum Education</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <a href="/about" className="hover:text-sky-500 transition">{t('header.nav.about').toUpperCase()}</a>
          <a href="/student-services" className="hover:text-sky-500 transition">{t('header.nav.studentServices').toUpperCase()}</a>
          <a href="/adult-services" className="hover:text-sky-500 transition">{t('header.nav.adultServices').toUpperCase()}</a>
          <a href="/blog" className="hover:text-sky-500 transition">{t('header.nav.news').toUpperCase()}</a>
          {/* <button 
            onClick={() => setIsNewsletterModalOpen(true)}
            className="hover:text-sky-500 transition"
          >
            {t('header.newsletter').toUpperCase()}
          </button> */}
        </nav>

        {/* Desktop Get in Touch Button */}
        <button 
          onClick={() => setIsConsultationModalOpen(true)}
          className="hidden md:block px-4 py-2 rounded border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition"
        >
          {t('header.getInTouch')}
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-sky-500 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="px-4 py-4 space-y-4">
            <a 
              href="/about" 
              className="block text-gray-700 hover:text-sky-500 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.nav.about').toUpperCase()}
            </a>
            <a 
              href="/student-services" 
              className="block text-gray-700 hover:text-sky-500 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.nav.studentServices').toUpperCase()}
            </a>
            <a 
              href="/adult-services" 
              className="block text-gray-700 hover:text-sky-500 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.nav.adultServices').toUpperCase()}
            </a>
            <a 
              href="/blog" 
              className="block text-gray-700 hover:text-sky-500 transition py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('header.nav.news').toUpperCase()}
            </a>
            <button 
              onClick={() => {
                setIsNewsletterModalOpen(true)
                setIsMobileMenuOpen(false)
              }}
              className="block text-left text-gray-700 hover:text-sky-500 transition py-2"
            >
              {t('header.newsletter').toUpperCase()}
            </button>
            <button 
              onClick={() => {
                setIsConsultationModalOpen(true)
                setIsMobileMenuOpen(false)
              }}
              className="w-full mt-4 px-4 py-3 rounded border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition text-center"
            >
              {t('header.getInTouch')}
            </button>
          </nav>
        </div>
      )}
      {/* Consultation弹窗 */}
      <Modal isOpen={isConsultationModalOpen} onClose={() => setIsConsultationModalOpen(false)}>
        <EmailForm 
          onClose={() => setIsConsultationModalOpen(false)}
          title="Request a Tutor or Consultation"
          description=""
        />
      </Modal>

      {/* Newsletter弹窗 */}
      <Modal isOpen={isNewsletterModalOpen} onClose={() => setIsNewsletterModalOpen(false)}>
        <EmailForm 
          onClose={() => setIsNewsletterModalOpen(false)}
          title="Sign up for our Newsletter"
          description="Stay updated with our latest news, educational insights, and exclusive offers."
        />
      </Modal>
    </header>
  )
}