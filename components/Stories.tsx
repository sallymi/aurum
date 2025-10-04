const stories = [
  { name: 'Gregor', school: 'Aiglon College, Switzerland', gpa: '4 → 7', quote: 'Reached a GPA of 5.70...' },
  { name: 'Tiger', school: 'International School of Monaco', gpa: '3.76 → 7', quote: 'Scored another 7...' },
  { name: 'Maria', school: 'Aiglon College, Switzerland', gpa: 'Above 6', quote: 'Honour Roll...' }
]
export default function Stories() {
  return (
    <section className="py-20 bg-gray-50"><div className="max-w-7xl mx-auto px-6 space-y-16">
      {stories.map((s, i) => (
        <div key={s.name} className={`md:flex items-center gap-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
          <div className="md:w-1/3 h-64 bg-gray-200 rounded-xl" />
          <div className="md:w-2/3"><h4 className="text-3xl font-bold text-gray-900 mb-2">{s.name}</h4><p className="text-sky-500 font-semibold mb-4">{s.school} · GPA {s.gpa}</p><p className="text-lg text-gray-700">“{s.quote}”</p></div>
        </div>))}
    </div></section>
  )
}