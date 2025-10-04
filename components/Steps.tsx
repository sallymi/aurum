const steps = [
  { title: 'Personal Consultation', desc: 'Explore performance, mindset, strengths.' },
  { title: 'Match Tutor', desc: 'Resonates with personality & learning pace.' },
  { title: 'Custom Learning Plan', desc: 'Individual pacing and depth.' },
  { title: 'Continuous Feedback', desc: 'Turn ambition into action.' }
]
export default function Steps() {
  return (
    <section className="py-20 bg-white"><div className="max-w-5xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
      {steps.map((s, i) => (
        <div key={s.title}><div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-500 text-white flex items-center justify-center text-2xl font-bold">{i + 1}</div><h5 className="text-xl font-semibold mb-2">{s.title}</h5><p className="text-gray-600">{s.desc}</p></div>))}
    </div></section>
  )
}