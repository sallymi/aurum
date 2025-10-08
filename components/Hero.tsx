import { useTexts } from '../lib/texts'

export default function Hero() {
  const { t } = useTexts()
  
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="absolute inset-0 text-gray-200 text-6xl font-bold leading-none select-none pointer-events-none">{t('hero.title').toUpperCase()}</div>
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Aurum Education</h1>
          <p className="text-lg text-gray-700 mb-8">{t('hero.subtitle')}</p>
          {/* 
          <div className="flex gap-4"><button className="px-6 py-3 rounded bg-sky-500 text-white hover:bg-sky-600 transition">Get a Consultation</button><button className="px-6 py-3 rounded border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition">Learn More</button></div>*/}
        </div>
        <div className="relative h-80 bg-gray-200 rounded-xl mt-6">
          <img src="/images/grey-box.jfif" alt="man" className="absolute inset-0 w-full h-full object-cover rounded-xl"/>
        </div>
      </div>
    </section>
  )
}