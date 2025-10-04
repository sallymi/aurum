const adult = [
  { title: 'Intellectual Enrichment', list: ['Bespoke courses on Philosophy, History, Technology, Science, Arts and more'] },
  { title: 'Culture', list: ['Curated visits with professional lecturers at art and architecture institutions'] },
  { title: 'Conversational Fluency', list: ['Bespoke lessons to meet you at your level'] },
  { title: 'Business English', list: ['Tailored business communication training'] }
]

export default function AdultServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Adult Services</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {adult.map((a) => (
            <div key={a.title} className="border border-gray-200 rounded-xl p-8 hover:shadow-xl duration-300 transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{a.title}</h3>
              <ul className="text-gray-600 space-y-2 mb-6">{a.list.map((i) => <li key={i}>• {i}</li>)}</ul>
              <button className="mt-auto px-5 py-2 rounded border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}