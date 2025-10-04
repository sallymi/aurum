const cards = [
  {
    title: 'For School & University Students',
    list: ['GCSE, IB, A-Level, SAT', 'University admissions', 'Academic competitions'],
    btn: 'Learn More'
  },
  {
    title: 'For Adults',
    list: ['Language courses', 'Personal enrichment', 'Business planning'],
    btn: 'Learn More'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Services</h2>
        {/* 只留 2 列 + 等高 */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {cards.map((c) => (
            <div
              key={c.title}
              className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{c.title}</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                {c.list.map((i) => <li key={i}>• {i}</li>)}
              </ul>
              <button className="mt-auto px-5 py-2 rounded border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white duration-300 transition">
                {c.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}