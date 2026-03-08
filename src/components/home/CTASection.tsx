import { Link } from '@tanstack/react-router'
import { MapPin, MessageCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/button'
import { company } from '@/data/company'

export function CTASection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-green-dark)' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10"
        style={{ backgroundColor: 'var(--color-green-light)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: 'var(--color-yellow)', filter: 'blur(80px)' }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection direction="up">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-70"
            style={{ color: 'var(--color-cream)' }}
          >
            Siap Mencoba?
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cream)' }}
          >
            Sudah siap mencoba SOYSU?
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto leading-relaxed opacity-80"
            style={{ color: 'var(--color-cream)' }}
          >
            Temukan SOYSU di toko terdekat atau pesan langsung via WhatsApp. Kami siap melayani
            seluruh Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="gap-2"
            >
              <Link to="/temukan-kami">
                <MapPin size={18} />
                Temukan Toko Terdekat
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="gap-2"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                color: 'var(--color-cream)',
                borderRadius: 'var(--radius-pill)',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
            >
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                Hubungi via WhatsApp
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
