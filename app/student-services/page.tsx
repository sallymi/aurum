'use client'
import Header from '@/components/Header'
import { useEffect } from 'react'
import { useTexts } from '../../lib/texts'

export default function StudentServices() {
  const { t } = useTexts()
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
      <section className="relative h-[80vh] min-h-[600px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/student-service.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl font-bold text-white mb-6">{t('studentServices.hero.title')}</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {t('studentServices.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="service-section relative bg-white border-b border-gray-300 transition-transform duration-700 ease-out">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-300">
              <div className="px-6 py-8 flex items-center">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{t('studentServices.intro')}</h3>
                </div>
              </div>
            </div>
          </div>
          {/* 01 Section */}
          <div className="service-section relative bg-white border-b border-gray-300 transition-transform duration-700 ease-out">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-300">
              <div className="px-6 py-8 flex items-center">
                <div className="w-24 flex-shrink-0">
                  <span className="text-4xl font-bold text-gray-900">01</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900">{t('studentServices.services.greatestReads.title')}</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                <li>{t('studentServices.services.greatestReads.description')}</li>
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
                  <h3 className="text-4xl font-bold text-gray-900">{t('studentServices.services.writingCompetitions.title')}</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                {t('studentServices.services.writingCompetitions.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
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
                  <h3 className="text-4xl font-bold text-gray-900">{t('studentServices.services.grandTour.title')}</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                <li>{t('studentServices.services.grandTour.description')}</li>
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
                  <h3 className="text-4xl font-bold text-gray-900">{t('studentServices.services.curriculumCertifications.title')}</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                <li>{t('studentServices.services.curriculumCertifications.description')}</li>
                
              </ul>
            </div>
          </div>

          {/* 05 Section */}
          {/* <div className="service-section relative bg-white border-b border-gray-300 transition-transform duration-700 ease-out">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-300">
              <div className="px-6 py-8 flex items-center">
                <div className="w-24 flex-shrink-0">
                  <span className="text-4xl font-bold text-gray-900">05</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900">8+, 11+, 13+, 16+</h3>
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
          </div> */}

          {/* 06 Section */}
          <div className="service-section relative bg-white border-b border-gray-300 transition-transform duration-700 ease-out">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-300">
              <div className="px-6 py-8 flex items-center">
                <div className="w-24 flex-shrink-0">
                  <span className="text-4xl font-bold text-gray-900">05</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-gray-900">{t('studentServices.services.universityAdmissions.title')}</h3>
                </div>
              </div>
            </div>
            <div className="px-6 py-12 ml-24">
              <ul className="space-y-4 text-lg text-gray-700">
                {t('studentServices.services.universityAdmissions.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}