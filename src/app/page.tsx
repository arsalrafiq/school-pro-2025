import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import TrustedBy from './components/TrustedBy'
import AdditionalFeatures from './components/AdditionalFeatures'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useRouter } from 'next/navigation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <TrustedBy />
      <div className="flex-grow">
        <section id="features" className="py-16">
          <Features />
          <AdditionalFeatures />
        </section>
        <section id="pricing" className="py-16">
          <Pricing />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  )
}
