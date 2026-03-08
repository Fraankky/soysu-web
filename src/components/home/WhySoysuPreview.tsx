import { Leaf, FlaskConical, Users } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

const reasons = [
  {
    icon: Leaf,
    title: 'Bebas Langu',
    description:
      'Kulit kedelai dipisah sebelum proses penggilingan — menghilangkan enzim lipoksigenase yang menjadi sumber utama aroma tidak sedap.',
    color: 'var(--color-green)',
    bgColor: 'rgba(45,106,79,0.07)',
  },
  {
    icon: FlaskConical,
    title: 'Teknologi Ultrafiltrasi',
    description:
      'Membran penyaringan nano menyaring partikel kasar dan senyawa penyebab langu, menghasilkan tekstur creamy premium yang konsisten setiap batch.',
    color: 'var(--color-brown)',
    bgColor: 'rgba(95,70,51,0.07)',
  },
  {
    icon: Users,
    title: 'Untuk Semua Keluarga',
    description:
      'Dari balita yang alergi susu sapi hingga lansia yang menjaga kesehatan — SOYSU aman, halal bersertifikat MUI, dan cocok untuk seluruh keluarga.',
    color: 'var(--color-original)',
    bgColor: 'rgba(200,169,110,0.1)',
  },
]

export function WhySoysuPreview() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-cream-dark)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="mb-14">
          <SectionHeading
            eyebrow="Mengapa SOYSU?"
            title="Bukan Sekadar Susu Kedelai Biasa"
            subtitle="Tiga inovasi utama yang membuat SOYSU berbeda secara fundamental dari susu kedelai yang pernah kamu coba sebelumnya."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <AnimatedSection key={reason.title} direction="up" delay={i * 0.15}>
                <div
                  className="rounded-3xl p-8 h-full flex flex-col gap-5 transition-shadow duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: 'var(--color-cream-soft)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: reason.bgColor }}
                  >
                    <Icon size={26} style={{ color: reason.color }} strokeWidth={1.8} />
                  </div>
                  <div className="space-y-2">
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
