
'use client'
import { useTexts } from '../../lib/texts'

export default function AboutPage() {
  const { t } = useTexts()
  return (
    <main className="text-white">


      {/* Hero 大图 */}
      <section className="relative h-[80vh] min-h-[600px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/about-hero.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="relative h-full flex items-center justify-center">
          {/* 可以在这里添加标题文字，目前保持空白 */}
        </div>
      </section>

      {/* 图下方三段文字 */}
      <section className="py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('about.impact.title')}</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {t('about.impact.content')}
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('about.belief.title')}</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {t('about.belief.content')}
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{t('about.educators.title')}</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {t('about.educators.content')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}