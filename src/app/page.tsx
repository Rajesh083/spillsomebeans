import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Contact from '@/components/sections/Contact'
import Location from '@/components/sections/Location'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  )
}