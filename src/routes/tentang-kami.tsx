import { createFileRoute } from '@tanstack/react-router'
import { useRef } from 'react'
import { usePageMeta } from '@/hooks/usePageMeta'
import { motion, useInView } from 'framer-motion'
import {
  Shield,
  FileText,
  Building2,
  Hash,
  CheckCircle2,
  Target,
  Eye,
} from 'lucide-react'
import { company } from '@/data/company'
import { team } from '@/data/team'
import { PageTransition } from '@/components/ui/PageTransition'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/home/CTASection'

export const Route = createFileRoute('/tentang-kami')({
  component: TentangKamiPage,
})

/* ─── Timeline Item ──────────────────────────────────────────── */
function TimelineItem({
  year,
  event,
  index,
}: {
  year: string
  event: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`flex gap-6 items-start ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-row`}
    >
      {/* Content card */}
      <div
        className="flex-1 rounded-2xl p-5 lg:max-w-sm"
        style={{
          backgroundColor: 'var(--color-cream-soft)',
          boxShadow: 'var(--shadow-card)',
          border: '1px solid var(--color-cream-dark)',
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-1"
          style={{ color: 'var(--color-green)' }}
        >
          {year}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown)' }}>
          {event}
        </p>
      </div>

      {/* Dot */}
      <div className="flex flex-col items-center shrink-0 pt-1">
        <div
          className="w-4 h-4 rounded-full border-4 z-10"
          style={{
            backgroundColor: 'var(--color-cream)',
            borderColor: 'var(--color-green)',
          }}
        />
      </div>

      {/* Spacer (desktop mirror) */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */
function TentangKamiPage() {
  usePageMeta(
    'Tentang Kami — SOYSU',
    'Kenali PT SOYSU GLOBAL INDONESIA — misi, visi, tim, perjalanan perusahaan, dan komitmen kami menghadirkan susu kedelai premium untuk keluarga Indonesia.',
  )

  const legalItems = [
    { icon: Building2, label: 'Nama Perusahaan', value: company.name },
    { icon: FileText, label: 'Akta Pendirian', value: company.akta },
    { icon: Hash, label: 'NIB', value: company.nib },
    { icon: Hash, label: 'NPWP', value: company.npwp },
    { icon: Shield, label: 'No. Sertifikat Halal', value: company.halal },
    {
      icon: Building2,
      label: 'Kantor Utama',
      value: `${company.offices[0].address}`,
    },
    {
      icon: Building2,
      label: 'Kantor Cabang',
      value: `${company.offices[1].address}`,
    },
  ]

  return (
    <PageTransition>
      <main>
        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <section
          className="pt-28 pb-20 relative overflow-hidden text-center"
          style={{ backgroundColor: 'var(--color-cream-dark)' }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 80%, var(--color-green-light) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--color-yellow) 0%, transparent 50%)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
            <AnimatedSection direction="up">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-green)' }}
              >
                Tentang Kami
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Kami Bukan Sekadar Susu Kedelai.
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                SOYSU lahir dari riset ilmiah, cinta seorang ibu, dan keyakinan bahwa susu kedelai
                seharusnya bisa dinikmati semua orang — tanpa kompromi rasa.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 2. Our Story ────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimatedSection direction="left">
                <div className="relative">
                  <div
                    className="rounded-3xl aspect-[4/5] flex items-center justify-center overflow-hidden"
                    style={{
                      backgroundColor: 'var(--color-cream-dark)',
                      boxShadow: 'var(--shadow-hover)',
                    }}
                  >
                    <div className="flex flex-col items-center gap-6 opacity-30 p-8">
                      <div
                        className="w-28 h-28 rounded-full"
                        style={{ backgroundColor: 'var(--color-green)' }}
                      />
                      <div className="space-y-3 w-full">
                        {[80, 60, 70, 50].map((w, i) => (
                          <div
                            key={i}
                            className="h-3 rounded-full mx-auto"
                            style={{
                              width: `${w}%`,
                              backgroundColor: 'var(--color-brown)',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-4 shadow-lg"
                    style={{ backgroundColor: 'var(--color-green)', color: 'var(--color-cream)' }}
                  >
                    <p
                      className="text-3xl font-bold"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Apr 2024
                    </p>
                    <p className="text-sm opacity-80">PT Resmi Berdiri</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="flex flex-col gap-6">
                  <div>
                    <p
                      className="text-sm font-semibold uppercase tracking-widest mb-2"
                      style={{ color: 'var(--color-green)' }}
                    >
                      Cerita Kami
                    </p>
                    <h2
                      className="text-3xl sm:text-4xl font-bold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      Dari Dapur Penelitian ke Meja Makan Keluarga
                    </h2>
                  </div>
                  <div
                    className="space-y-4 text-base leading-relaxed"
                    style={{ color: 'var(--color-brown-soft)' }}
                  >
                    <p>
                      Perjalanan SOYSU dimulai bukan dari modal besar atau laboratorium canggih,
                      tapi dari satu keprihatinan nyata: seorang ibu dengan latar belakang farmasi
                      yang anaknya tidak cocok dengan susu sapi, dan tidak menemukan susu kedelai
                      yang layak diminum.
                    </p>
                    <p>
                      Selama bertahun-tahun, Aisyah Nur Nabila — Komisaris SOYSU — meneliti
                      teknologi pengolahan kedelai dari perspektif ilmu farmasi. Hasilnya: dua
                      inovasi kunci yang mengubah segalanya. Pertama, pemisahan kulit kedelai
                      (dehulling) yang menghilangkan sumber aroma langu. Kedua, ultrafiltrasi
                      membran yang menghasilkan tekstur creamy premium.
                    </p>
                    <p>
                      April 2024, PT Soysu Global Indonesia resmi berdiri. Lengkap dengan
                      sertifikasi halal MUI, NIB, dan NPWP. Bukan startup iseng — ini perusahaan
                      yang dibangun di atas fondasi ilmu pengetahuan dan cinta untuk keluarga.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 3. Vision & Mission ─────────────────────────────── */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: 'var(--color-cream-soft)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-12">
              <SectionHeading eyebrow="Arah Kami" title="Visi & Misi" />
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Vision */}
              <AnimatedSection direction="left">
                <div
                  className="rounded-3xl p-8 h-full flex flex-col gap-5"
                  style={{
                    backgroundColor: 'var(--color-green)',
                    boxShadow: 'var(--shadow-hover)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Eye size={20} className="text-white" />
                    </div>
                    <h3
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Visi
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-white/90">
                    {company.vision}
                  </p>
                </div>
              </AnimatedSection>

              {/* Mission */}
              <AnimatedSection direction="right">
                <div
                  className="rounded-3xl p-8 h-full flex flex-col gap-5"
                  style={{
                    backgroundColor: 'var(--color-cream-soft)',
                    border: '2px solid var(--color-cream-dark)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-green)', opacity: 0.12 }}
                    />
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center -ml-10"
                      style={{ backgroundColor: 'rgba(45,106,79,0.1)' }}
                    >
                      <Target size={20} style={{ color: 'var(--color-green)' }} />
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      Misi
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {company.missions.map((m, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle2
                          size={18}
                          className="shrink-0 mt-0.5"
                          style={{ color: 'var(--color-green)' }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                          {m}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 4. Timeline ─────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-14 text-center">
              <SectionHeading eyebrow="Perjalanan" title="Dari Riset ke Realita" />
            </AnimatedSection>

            {/* Timeline line */}
            <div className="relative">
              <div
                className="absolute left-[calc(50%-1px)] lg:left-[calc(50%-1px)] top-0 bottom-0 w-0.5 hidden lg:block"
                style={{ backgroundColor: 'var(--color-cream-dark)' }}
              />
              {/* Mobile: left line */}
              <div
                className="absolute left-[calc(1rem+7px)] top-0 bottom-0 w-0.5 lg:hidden"
                style={{ backgroundColor: 'var(--color-cream-dark)' }}
              />

              <div className="flex flex-col gap-8">
                {company.timeline.map((item, i) => (
                  <TimelineItem key={item.year} year={item.year} event={item.event} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Legality ─────────────────────────────────────── */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: 'var(--color-cream-dark)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-12">
              <SectionHeading
                eyebrow="Legalitas"
                title="Transparan & Terpercaya"
                subtitle="Kami percaya kepercayaan dibangun dengan transparansi. Semua informasi legal SOYSU terbuka untuk publik."
              />
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {legalItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <AnimatedSection key={item.label} direction="up" delay={i * 0.08}>
                    <div
                      className="rounded-2xl p-5 flex gap-4 items-start"
                      style={{
                        backgroundColor: 'var(--color-cream-soft)',
                        boxShadow: 'var(--shadow-card)',
                        border: '1px solid var(--color-cream)',
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: 'rgba(45,106,79,0.1)' }}
                      >
                        <Icon size={16} style={{ color: 'var(--color-green)' }} />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                          style={{ color: 'var(--color-green)' }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-sm font-medium leading-snug"
                          style={{ color: 'var(--color-brown)' }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── 6. Team ─────────────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-12">
              <SectionHeading
                eyebrow="Tim Kami"
                title="Orang-Orang di Balik SOYSU"
                subtitle="Dibangun oleh mereka yang percaya bahwa inovasi pangan bisa mengubah kualitas hidup keluarga Indonesia."
              />
            </AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-3xl mx-auto">
              {team.map((member, i) => (
                <AnimatedSection key={member.id} direction="up" delay={i * 0.15} className="flex-1">
                  <div
                    className="rounded-3xl p-8 flex flex-col items-center text-center gap-5 h-full"
                    style={{
                      backgroundColor: 'var(--color-cream-soft)',
                      boxShadow: 'var(--shadow-hover)',
                      border: '1px solid var(--color-cream-dark)',
                    }}
                  >
                    {/* Avatar placeholder */}
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                      style={{ backgroundColor: i === 0 ? 'var(--color-green)' : 'var(--color-brown)' }}
                    >
                      {member.name
                        .split(' ')
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold mb-1"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: 'var(--color-green)' }}
                      >
                        {member.role}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                      {member.bio}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </PageTransition>
  )
}
