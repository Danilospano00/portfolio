import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ImpactNumbers from '@/components/sections/ImpactNumbers'
import Experience from '@/components/sections/Experience'
import OpenSource from '@/components/sections/OpenSource'
import Stack from '@/components/sections/Stack'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="impact">
        <ImpactNumbers />
      </section>
      <About />
      <Experience />
      <OpenSource />
      <Stack />
      <Contact />
      <Footer />
    </main>
  )
}
