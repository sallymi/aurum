import Link from 'next/link'

export default function ServicesSingleRow() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-stretch">
        {/* 左列：浅色背景 + 男生图遮罩 + Student Services 内容 */}
        <div className="relative overflow-hidden rounded-xl bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50" />
          <img src="/images/man.png" alt="man" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="relative px-6 py-20 md:py-32 text-white">
            <h3 className="text-5xl font-bold mb-4">Student Services</h3>
            <ul className="text-xl space-y-3 mb-8">
              <li>• 8+, 11+, 13+, 16+ </li>
              <li>• 500 Greatest Reads </li>
              <li>• IGSCE, GSCE, IB & A-level </li>
              <li>• International Writing Competitions </li>
              <li>• University Admissions</li>
              <li>• University Support & Grand Tour </li>
            </ul>
            <Link href="/student-services" className="px-6 py-3 rounded border-b border-solid border-black text-black hover:text-white hover:border-b-sky-600 duration-300 transition">Learn More</Link>
          </div>
        </div>

        {/* 右列：深色背景 + 女生图遮罩 + Adult Services 内容 */}
        <div className="relative overflow-hidden rounded-xl bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-l from-gray-900 to-black" />
          <img src="/images/blond.png" alt="blond" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent" />
          <div className="relative px-6 py-20 md:py-32 text-white">
            <h3 className="text-5xl font-bold mb-4">Adult Services</h3>
            <ul className="text-xl space-y-3 mb-8">
              <li>• Intellectual Enrichment </li>
              <li>• Culture </li>
              <li>• Conversational Fluency </li>
              <li>• Business English </li>
            </ul>
            <Link href="/adult-services" className="px-6 py-3 rounded border-b border-solid border-sky-500 text-sky-500 hover:text-white hover:border-b-sky-600 duration-300 transition">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}