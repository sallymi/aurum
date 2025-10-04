'use client'
import Header from '@/components/Header'
import { useEffect } from 'react'

export default function StudentServices() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.service-section')
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // 当section进入视口时开始动画
        if (rect.top < windowHeight * 0.8) {
          section.classList.add('animate-slide-up')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 初始检查
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  <main className="bg-white text-gray-900">
    

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/about-hero.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl font-bold text-white mb-6">Excellent Academic Support for Every Student</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Individual academic support for school and university students—from international exams to admission to top tier schools and universities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          {/* 01 Section */}
          <div className="service-section relative bg-white border-b border-gray-300 transition-transform duration-700 ease-out">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-300">
              <div className="px-6 py-8 flex items-center">
                <div className="w-24 flex-shrink-0">
                  <span className="text-4xl font-bold text-gray-900">01</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900">GCSE, IB, and A-Level</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                <li>• Preparation for written exams</li>
                <li>• Assistance with scholarship papers</li>
                <li>• Interview preparation</li>
                <li>• School visits</li>
              </ul>
            </div>
          </div>

          {/* 02 Section */}
          <div className="service-section relative bg-white border-b border-gray-300 transition-transform duration-700 ease-out">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-300">
              <div className="px-6 py-8 flex items-center">
                <div className="w-24 flex-shrink-0">
                  <span className="text-4xl font-bold text-gray-900">02</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900">500 Greatest Reads</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                <li>• Practice and cultivate reading comprehension and deep reading skills with literary classics</li>
              </ul>
            </div>
          </div>

          {/* 03 Section */}
          <div className="service-section relative bg-white border-b border-gray-300 transition-transform duration-700 ease-out">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-300">
              <div className="px-6 py-8 flex items-center">
                <div className="w-24 flex-shrink-0">
                  <span className="text-4xl font-bold text-gray-900">03</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900">IGSCE, GSCE, IB and A-level</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                <li>• Our tutors are experienced and professional across the exams on all subjects across the spectrum</li>
                <li>• The tutors we introduce to students have a thorough knowledge of the various exam boards</li>
              </ul>
            </div>
          </div>

          {/* 04 Section */}
          <div className="service-section relative bg-white border-b border-gray-300 transition-transform duration-700 ease-out">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-300">
              <div className="px-6 py-8 flex items-center">
                <div className="w-24 flex-shrink-0">
                  <span className="text-4xl font-bold text-gray-900">04</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900">International Writing Competitions</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                <li>• The John Locke Global Essay Prize</li>
                <li>• The Harvard International Review</li>
                <li>• The Concord Review</li>
                <li>• Scholastic Arts and Writing Awards</li>
              </ul>
            </div>
          </div>

          {/* 05 Section */}
          <div className="service-section relative bg-white border-b border-gray-300 transition-transform duration-700 ease-out">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-300">
              <div className="px-6 py-8 flex items-center">
                <div className="w-24 flex-shrink-0">
                  <span className="text-4xl font-bold text-gray-900">05</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900">University Admissions</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                <li>• Developing Application Angle</li>
                <li>• Strategic Decision Making</li>
                <li>• Curation of College Lists</li>
                <li>• Extracurricular Planning</li>
                <li>• Personal statements</li>
              </ul>
            </div>
          </div>

          {/* 06 Section */}
          <div className="service-section relative bg-white border-b border-gray-300 transition-transform duration-700 ease-out">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-300">
              <div className="px-6 py-8 flex items-center">
                <div className="w-24 flex-shrink-0">
                  <span className="text-4xl font-bold text-gray-900">06</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900">University Support & Grand Tour</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                <li>• Class selection</li>
                <li>• The Grand Tour — Summer Grand Tour Trip</li>
                <li>• The Grand Tour — Winter Grand Tour Trip</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}