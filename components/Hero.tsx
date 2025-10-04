export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="absolute inset-0 text-gray-200 text-6xl font-bold leading-none select-none pointer-events-none">ATHENA ACADEMIA IS NAMED AFTER ATHENA THE GREEK GODDESS OF WISDOM LEARNING AND STRATEGIC THINKING.</div>
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Aurum Education</h1>
          <p className="text-lg text-gray-700 mb-8">Inspired by her legacy, our tutors are not only subject experts, they are mentors who inspire and guide students towards both their academic and life goals.</p>
          {/* 
          <div className="flex gap-4"><button className="px-6 py-3 rounded bg-sky-500 text-white hover:bg-sky-600 transition">Get a Consultation</button><button className="px-6 py-3 rounded border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition">Learn More</button></div>*/}
        </div>
        <div className="h-80 bg-gray-200 rounded-xl" />
      </div>
    </section>
  )
}