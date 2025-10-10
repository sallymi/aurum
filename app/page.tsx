import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/ServicesFlat'        // Athena
import AboutUs from '@/components/AboutUs'          // Aurum
import StudentServices from '@/components/StudentServices' // Aurum
import AdultServices from '@/components/AdultServices'     // Aurum
import Stories from '@/components/Stories'          // Athena
import Steps from '@/components/Steps'              // Athena
import Consultation from '@/components/Consultation' // Aurum
import Footer from '@/components/Footer'            // Athena

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <section className="py-12 bg-white"></section>
      {/* <AboutUs /> */}
      {/* <StudentServices /> */}
      {/* <AdultServices /> */}
      {/* <Stories /> */}
      {/* <Steps /> */}
      {/* <Consultation /> */}
      <Footer />
    </>
  )
}