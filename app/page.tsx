import Link from 'next/link'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Menu />
    </main>
  )
}