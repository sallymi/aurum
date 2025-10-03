import Image from 'next/image';
import TutoringIcon from '../components/icons/TutoringIcon';
import UniversityIcon from '../components/icons/UniversityIcon';
import CurriculumIcon from '../components/icons/CurriculumIcon';
import Header from '../components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100" 
        data-class="hero"
      >
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="relative container mx-auto px-6 text-center max-w-4xl">
          <div className="mb-8">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 text-slate-800 tracking-tight"
              data-class="hero-title"
              style={{fontFamily: 'Georgia, serif'}}
            >
              Athena Academia
            </h1>
            <div className="w-24 h-0.5 bg-slate-400 mx-auto mb-8"></div>
          </div>
          <p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-slate-600 leading-relaxed font-light"
            data-class="hero-subtitle"
            style={{fontFamily: 'Georgia, serif'}}
          >
            Fostering discernment, intellectual curiosity, and a lifelong passion for self-enrichment through personalized education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#about" 
              className="inline-block bg-slate-800 text-white py-4 px-8 text-lg font-light transition-all hover:bg-slate-700 border border-slate-800"
              data-class="cta-button"
            >
              Discover Our Approach
            </a>
            <a 
              href="#contact" 
              className="inline-block bg-transparent text-slate-800 py-4 px-8 text-lg font-light transition-all hover:bg-slate-50 border border-slate-800"
              data-class="cta-button-secondary"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-24 bg-white"
        data-class="services"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl font-light text-slate-800 mb-6"
              data-class="section-title"
              style={{fontFamily: 'Georgia, serif'}}
            >
              Student Services
            </h2>
            <div className="w-24 h-0.5 bg-slate-400 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Comprehensive academic support designed to unlock each student's potential and guide them toward excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {/* Student Service 1 */}
             <div 
               className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
               data-class="service-card"
             >
               <h3 
                 className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                 data-class="service-title"
                 style={{fontFamily: 'Georgia, serif'}}
               >
                 8+, 11+, 13+, 16+
               </h3>
               <ul className="text-slate-600 space-y-2 font-light">
                 <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Preparation for written exams</li>
                 <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Assistance with scholarship papers</li>
                 <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Interview preparation</li>
                 <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>School visits</li>
               </ul>
             </div>
            
            {/* Student Service 2 */}
            <div 
              className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
              data-class="service-card"
            >
              <h3 
                className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                data-class="service-title"
                style={{fontFamily: 'Georgia, serif'}}
              >
                500 Greatest Reads
              </h3>
              <ul className="text-slate-600 space-y-2 font-light">
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Practice and cultivate reading comprehension and deep reading skills with literary classics</li>
              </ul>
            </div>
            
            {/* Student Service 3 */}
            <div 
              className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
              data-class="service-card"
            >
              <h3 
                className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                data-class="service-title"
                style={{fontFamily: 'Georgia, serif'}}
              >
                IGSCE, GSCE, IB and A-level
              </h3>
              <ul className="text-slate-600 space-y-2 font-light">
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Our tutors are experienced and professional across the exams on all subjects across the spectrum. The tutors we introduce to students have a thorough knowledge of the various exam boards.</li>
              </ul>
            </div>
            
            {/* Student Service 4 */}
            <div 
              className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
              data-class="service-card"
            >
              <h3 
                className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                data-class="service-title"
                style={{fontFamily: 'Georgia, serif'}}
              >
                International Writing Competitions
              </h3>
              <ul className="text-slate-600 space-y-2 font-light">
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>The John Locke Global Essay Prize</li>
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>The Harvard International Review</li>
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>The Concord Review</li>
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Scholastic Arts and Writing Awards</li>
              </ul>
            </div>
            
            {/* Student Service 5 */}
            <div 
              className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
              data-class="service-card"
            >
              <h3 
                className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                data-class="service-title"
                style={{fontFamily: 'Georgia, serif'}}
              >
                University Admissions
              </h3>
              <ul className="text-slate-600 space-y-2 font-light">
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Developing Application Angle</li>
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Strategic Decision Making</li>
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Curation of College Lists</li>
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Extracurricular Planning</li>
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Personal statements</li>
              </ul>
            </div>
            
            {/* Student Service 6 */}
            <div 
              className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
              data-class="service-card"
            >
              <h3 
                className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                data-class="service-title"
                style={{fontFamily: 'Georgia, serif'}}
              >
                University Support
              </h3>
              <ul className="text-slate-600 space-y-2 font-light">
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Class selection</li>
              </ul>
            </div>
            
            {/* Student Service 7 */}
            <div 
              className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
              data-class="service-card"
            >
              <h3 
                className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                data-class="service-title"
                style={{fontFamily: 'Georgia, serif'}}
              >
                The Grand Tour
              </h3>
              <ul className="text-slate-600 space-y-2 font-light">
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Summer Grand Tour Trip</li>
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Winter Grand Tour Trip</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl font-light text-slate-800 mb-6"
              data-class="section-title"
              style={{fontFamily: 'Georgia, serif'}}
            >
              Adult Services
            </h2>
            <div className="w-24 h-0.5 bg-slate-400 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              Tailored programs for lifelong learners seeking intellectual enrichment and personal growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Adult Service 1 */}
            <div 
              className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
              data-class="service-card"
            >
              <h3 
                className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                data-class="service-title"
                style={{fontFamily: 'Georgia, serif'}}
              >
                Intellectual Enrichment
              </h3>
              <ul className="text-slate-600 space-y-2 font-light">
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Bespoke courses on Philosophy, History, Technology, Science, Arts and more</li>
              </ul>
            </div>
            
            {/* Adult Service 2 */}
            <div 
              className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
              data-class="service-card"
            >
              <h3 
                className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                data-class="service-title"
                style={{fontFamily: 'Georgia, serif'}}
              >
                Culture
              </h3>
              <ul className="text-slate-600 space-y-2 font-light">
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Curated visits with professional lecturers at art and architecture institutions</li>
              </ul>
            </div>
            
            {/* Adult Service 3 */}
            <div 
              className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
              data-class="service-card"
            >
              <h3 
                className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                data-class="service-title"
                style={{fontFamily: 'Georgia, serif'}}
              >
                Conversational fluency
              </h3>
              <ul className="text-slate-600 space-y-2 font-light">
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Bespoke lessons to meet you at your level</li>
              </ul>
            </div>
            
            {/* Adult Service 4 */}
            <div 
              className="bg-slate-50 p-8 border border-slate-200 transition-all hover:border-slate-300 hover:shadow-sm"
              data-class="service-card"
            >
              <h3 
                className="text-xl font-light text-slate-800 mb-6 border-b border-slate-300 pb-3"
                data-class="service-title"
                style={{fontFamily: 'Georgia, serif'}}
              >
                Business English
              </h3>
              <ul className="text-slate-600 space-y-2 font-light">
                <li className="flex items-start"><span className="text-slate-400 mr-2">•</span>Professional English language training for business contexts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 bg-accent bg-opacity-20"
        data-class="about"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src="/images/founder.jpg"
                  alt="Tina Lyberaki Founder"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  data-class="founder-image"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 
                className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary"
                data-class="section-title"
              >
                About Us
              </h2>
              <p 
                className="text-secondary mb-6"
                data-class="about-text"
              >
                Aurum Education has an impact that exceeds a private education institute; it is a platform dedicated to fostering discernment, intellectual curiosity, and a lifelong passion for self-enrichment. Since 2015, we have supported students from all over the world, not just by helping them achieve outstanding academic results and gain admission to top universities in the UK, the US, and Canada, but also by guiding them to cultivate critical thinking coupled by a growth mindset.
              </p>
              <p 
                className="text-secondary"
                data-class="about-text"
              >
                We believe that the significance of education goes far beyond exams and standardized curricula. True learning lies in stimulating curiosity, encouraging students to explore and take intellectual risks, while also helping them establish interdisciplinary connections and use knowledge to understand and interpret the world. Our educators differ in their approach as they inspire a love for the subject through their tailored, bespoke approach. We believe in consistency and a continued approach that helps the student discover the lateral connections in the inter-disciplinary academics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20 bg-light"
        data-class="contact"
      >
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-primary"
            data-class="section-title"
          >
            Get a Consultation
          </h2>
          <div className="max-w-3xl mx-auto">
            <form 
              className="bg-white p-8 rounded-lg shadow-md"
              data-class="contact-form"
            >
              <div className="mb-6">
                <label 
                  htmlFor="name" 
                  className="block text-primary font-medium mb-2"
                  data-class="form-label"
                >
                  姓名
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  data-class="form-input"
                />
              </div>
              <div className="mb-6">
                <label 
                  htmlFor="email" 
                  className="block text-primary font-medium mb-2"
                  data-class="form-label"
                >
                  邮箱
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  data-class="form-input"
                />
              </div>
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-primary font-medium mb-2"
                  data-class="form-label"
                >
                  留言
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  data-class="form-textarea"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-secondary text-white py-3 px-8 rounded-lg font-medium transition-all hover:bg-opacity-90"
                data-class="submit-button"
              >
                提交
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="bg-primary text-white py-10"
        data-class="footer"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div 
              className="mb-6 md:mb-0"
              data-class="footer-logo"
            >
              <h3 className="text-2xl font-heading font-bold">Athena Academia</h3>
            </div>
            <div 
              className="mb-6 md:mb-0"
              data-class="footer-links"
            >
              <ul className="flex flex-wrap justify-center gap-6">
                <li><a href="#" className="hover:text-accent transition-colors">首页</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">服务</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">关于</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">联系</a></li>
              </ul>
            </div>
            <div 
              className="text-center md:text-right"
              data-class="footer-copyright"
            >
              <p>&copy; 2023 Athena Academia. 保留所有权利。</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}