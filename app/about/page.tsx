
export default function AboutPage() {
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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Aurum Education has an impact that exceeds a private education institute; it is a platform dedicated to fostering discernment, intellectual curiosity, and a lifelong passion for self-enrichment. Since 2015, we have supported students from all over the world, not just by helping them achieve outstanding academic results and gain admission to top universities in the UK, the US, and Canada, but also by guiding them to cultivate critical thinking coupled by a growth mindset.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Belief</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                We believe that the significance of education goes far beyond exams and standardized curricula. True learning lies in stimulating curiosity, encouraging students to explore and take intellectual risks, while also helping them establish interdisciplinary connections and use knowledge to understand and interpret the world.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Educators</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Our educators differ in their approach as they inspire a love for the subject through their tailored, bespoke approach. We believe in consistency and a continued approach that helps the student discover the lateral connections in the inter-disciplinary academics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}