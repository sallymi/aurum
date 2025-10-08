import Link from 'next/link'
import { useTexts } from '../lib/texts'

export default function ServicesSingleRow() {
  const { t } = useTexts()
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-stretch">
        {/* 左列：浅色背景 + 男生图遮罩 + Student Services 内容 */}
        <div className="relative overflow-hidden rounded-xl bg-gray-100 min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50" />
          <img src="/images/student-service.jpg" alt="man" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="relative px-6 py-20 md:py-32 text-white">
            <h3 className="text-5xl font-bold mb-4">{t('services.student.title')}</h3>
            <ul className="text-xl space-y-3 mb-8">
              {t('services.student.items').map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          {/* Learn More 按钮固定在左下角 */}
          <Link href="/student-services" className="absolute bottom-6 left-6 px-6 py-3 rounded border-b border-solid border-white text-white hover:text-white hover:border-b-sky-600 duration-300 transition">{t('services.student.learnMore')}</Link>
        </div>

        {/* 右列：深色背景 + 女生图遮罩 + Adult Services 内容 */}
        <div className="relative overflow-hidden rounded-xl bg-gray-900 min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-l from-gray-900 to-black" />
          <img src="/images/adult-service.jpg" alt="blond" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent" />
          <div className="relative px-6 py-20 md:py-32 text-white">
            <h3 className="text-5xl font-bold mb-4">{t('services.adult.title')}</h3>
            <ul className="text-xl space-y-3 mb-8">
              {t('services.adult.items').map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
          {/* Learn More 按钮固定在左下角 */}
          <Link href="/adult-services" className="absolute bottom-6 left-6 px-6 py-3 rounded border-b border-solid border-white text-white hover:text-white hover:border-b-sky-600 duration-300 transition">{t('services.adult.learnMore')}</Link>
        </div>
      </div>
    </section>
  )
}