const services = [
  { title: '8+, 11+, 13+, 16+', list: ['Preparation for written exams', 'Assistance with scholarship papers', 'Interview preparation', 'School visits'] },
  { title: '500 Greatest Reads', list: ['Practice and cultivate reading comprehension and deep reading skills with literary classics'] },
  { title: 'IGSCE, GSCE, IB and A-level', list: ['Experienced tutors across all subjects', 'Thorough knowledge of various exam boards'] },
  { title: 'International Writing Competitions', list: ['John Locke Global Essay Prize', 'Harvard International Review', 'Concord Review', 'Scholastic Arts and Writing Awards'] },
  { title: 'University Admissions', list: ['Developing Application Angle', 'Strategic Decision Making', 'Curation of College Lists', 'Extracurricular Planning', 'Personal statements'] },
  { title: 'University Support & Grand Tour', list: ['Class selection', 'Summer & Winter Grand Tour trips'] }
]

export default function StudentServices() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Student Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-xl p-8 hover:shadow-xl duration-300 transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{s.title}</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                {s.list.map((i) => <li key={i}>• {i}</li>)}
              </ul>
              <button className="mt-auto px-5 py-2 rounded border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}