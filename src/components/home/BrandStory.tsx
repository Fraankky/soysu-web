import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function BrandStory() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden aspect-[4/5] flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--color-cream-dark)',
                  boxShadow: 'var(--shadow-hover)',
                }}
              >
                {/* Placeholder for brand photo */}
                <div className="flex flex-col items-center gap-4 opacity-40">
                  <div
                    className="w-24 h-24 rounded-full"
                    style={{ backgroundColor: 'var(--color-green)' }}
                  />
                  <div
                    className="w-40 h-3 rounded-full"
                    style={{ backgroundColor: 'var(--color-brown)' }}
                  />
                  <div
                    className="w-28 h-3 rounded-full"
                    style={{ backgroundColor: 'var(--color-brown)' }}
                  />
                </div>
              </div>

              {/* Floating accent card */}
              <div
                className="absolute -bottom-6 -right-6 rounded-2xl px-5 py-4 shadow-lg"
                style={{ backgroundColor: 'var(--color-green)', color: 'var(--color-cream)' }}
              >
                <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  2024
                </p>
                <p className="text-sm opacity-80">Berdiri & Resmi</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right">
            <div className="flex flex-col gap-6">
              <p
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: 'var(--color-green)' }}
              >
                Cerita Kami
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Berawal dari Satu Keprihatinan
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                <p>
                  SOYSU lahir bukan dari ruang rapat korporasi, tapi dari dapur seorang ibu dengan latar
                  belakang farmasi yang melihat masalah nyata: balitanya tidak cocok dengan susu sapi,
                  dan susu kedelai yang ada di pasaran tidak ada yang layak diminum.
                </p>
                <p>
                  Bertahun-tahun riset, ratusan eksperimen, dan satu pertanyaan sederhana:{' '}
                  <strong style={{ color: 'var(--color-brown)' }}>
                    "Mengapa susu kedelai harus berbau langu?"
                  </strong>{' '}
                  Jawabannya ada di teknologi — dan itulah yang kami bangun.
                </p>
                <p>
                  Dengan teknologi pemisahan kulit kedelai dan ultrafiltrasi membran, SOYSU menghadirkan
                  susu kedelai yang creamy, bersih, dan lezat. PT SOYSU Global Indonesia resmi berdiri
                  April 2024, dengan sertifikasi halal, NIB, dan NPWP lengkap.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/tentang-kami"
                  className="inline-flex items-center gap-2 font-semibold group transition-colors"
                  style={{ color: 'var(--color-green)' }}
                >
                  Cerita Lengkap Kami
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
