import { createFileRoute } from '@tanstack/react-router'
import { MapPin, MessageCircle, ExternalLink, ShoppingBag } from 'lucide-react'
import { locations } from '@/data/locations'
import { company } from '@/data/company'
import { PageTransition } from '@/components/ui/PageTransition'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/temukan-kami')({
  component: TemukanKamiPage,
})

function TemukanKamiPage() {
  const offices = locations.filter((l) => l.type === 'office')

  return (
    <PageTransition>
      <main>
        {/* ── Hero ────────────────────────────────────────────── */}
        <section
          className="pt-28 pb-20 text-center relative overflow-hidden"
          style={{ backgroundColor: 'var(--color-cream-dark)' }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 70%, var(--color-green-light), transparent 50%), radial-gradient(circle at 70% 30%, var(--color-yellow), transparent 50%)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
            <AnimatedSection direction="up">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-green)' }}
              >
                Lokasi
              </p>
              <h1
                className="text-4xl sm:text-5xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Temukan SOYSU di Dekatmu
              </h1>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                Kunjungi kantor kami atau pesan langsung via WhatsApp — kami siap melayani seluruh
                Indonesia.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Office Cards ─────────────────────────────────────── */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-12">
              <SectionHeading
                eyebrow="Kantor Kami"
                title="Dua Titik Operasional"
                subtitle="Hadir di Surabaya dan Semarang untuk melayani keluarga Indonesia lebih dekat."
              />
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {offices.map((loc, i) => (
                <AnimatedSection key={loc.id} direction="up" delay={i * 0.15}>
                  <div
                    className="rounded-3xl p-7 flex flex-col gap-6 h-full"
                    style={{
                      backgroundColor: 'var(--color-cream-soft)',
                      boxShadow: 'var(--shadow-hover)',
                      border: '1px solid var(--color-cream-dark)',
                    }}
                  >
                    {/* Icon + label */}
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: 'rgba(45,106,79,0.1)' }}
                      >
                        <MapPin size={22} style={{ color: 'var(--color-green)' }} />
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                          style={{ color: 'var(--color-green)' }}
                        >
                          {loc.label}
                        </p>
                        <h2
                          className="text-xl font-bold"
                          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                        >
                          {loc.city}
                        </h2>
                      </div>
                    </div>

                    {/* Address */}
                    <div
                      className="rounded-2xl px-4 py-3 text-sm leading-relaxed"
                      style={{
                        backgroundColor: 'var(--color-cream-dark)',
                        color: 'var(--color-brown)',
                      }}
                    >
                      {loc.address}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 mt-auto">
                      {loc.mapsUrl && (
                        <Button variant="ghost" size="sm" asChild className="w-full gap-2">
                          <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} />
                            Buka di Google Maps
                          </a>
                        </Button>
                      )}
                      {loc.whatsapp && (
                        <Button variant="primary" size="sm" asChild className="w-full gap-2">
                          <a href={loc.whatsapp} target="_blank" rel="noopener noreferrer">
                            <MessageCircle size={14} />
                            Hubungi via WhatsApp
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reseller Placeholder ─────────────────────────────── */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-cream-soft)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-10">
              <SectionHeading
                eyebrow="Reseller"
                title="Mitra Penjualan"
                subtitle="Jaringan reseller kami terus berkembang. Ingin bergabung atau menemukan reseller terdekat?"
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1}>
              <div
                className="rounded-3xl p-8 flex flex-col md:flex-row md:items-center gap-6 max-w-3xl mx-auto"
                style={{
                  backgroundColor: 'var(--color-cream-dark)',
                  border: '1.5px dashed var(--color-brown)',
                  opacity: 0.8,
                }}
              >
                <div className="flex-1">
                  <p
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                  >
                    Daftar Reseller Segera Hadir
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                    Kami sedang membangun jaringan reseller SOYSU di seluruh Indonesia. Ingin jadi
                    mitra kami atau mengetahui reseller terdekat? Hubungi kami langsung.
                  </p>
                </div>
                <Button variant="outline" size="sm" asChild className="shrink-0 gap-2">
                  <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={14} />
                    Tanya via WA
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Online Order ─────────────────────────────────────── */}
        <section
          className="py-16 lg:py-24 relative overflow-hidden"
          style={{ backgroundColor: 'var(--color-green-dark)' }}
        >
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-10 pointer-events-none"
            style={{ backgroundColor: 'var(--color-yellow)', filter: 'blur(70px)' }}
          />
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <AnimatedSection direction="up">
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
              >
                <ShoppingBag size={28} className="text-white" />
              </div>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-70"
                style={{ color: 'var(--color-cream)' }}
              >
                Order Online
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cream)' }}
              >
                Belum ada toko terdekat?
              </h2>
              <p className="text-base mb-8 opacity-80 leading-relaxed" style={{ color: 'var(--color-cream)' }}>
                Tidak masalah. Pesan langsung via WhatsApp — kami kirim ke seluruh Indonesia dengan
                pengemasan yang aman dan cepat.
              </p>
              <Button variant="secondary" size="lg" asChild className="gap-2">
                <a
                  href={`${company.whatsapp}?text=${encodeURIComponent('Halo SOYSU! Saya ingin pesan produk SOYSU. Bisa bantu info ketersediaan dan pengiriman?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  Order via WhatsApp Sekarang
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
