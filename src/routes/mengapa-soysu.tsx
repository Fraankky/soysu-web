import { createFileRoute, Link } from '@tanstack/react-router'
import { usePageMeta } from '@/hooks/usePageMeta'
import { X, Check, ArrowRight, Leaf, Droplets, Recycle } from 'lucide-react'
import { PageTransition } from '@/components/ui/PageTransition'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/mengapa-soysu')({
  component: MengapaSoysuPage,
})

/* ─── Comparison Table Data ──────────────────────────────────── */
const comparisonRows = [
  { aspect: 'Aroma Langu', soysu: 'Tidak Ada', others: 'Kuat' },
  { aspect: 'Tekstur', soysu: 'Creamy Premium', others: 'Encer / Kasar' },
  { aspect: 'Proses Dehulling', soysu: true, others: false },
  { aspect: 'Ultrafiltrasi Membran', soysu: true, others: false },
  { aspect: 'Bebas Laktosa', soysu: true, others: true },
  { aspect: 'Bebas Pengawet', soysu: true, others: false },
  { aspect: 'Halal Bersertifikat', soysu: true, others: 'Tergantung Produk' },
  { aspect: 'Konsistensi Produksi', soysu: 'Terstandarisasi', others: 'Bervariasi' },
]

const sustainability = [
  {
    icon: Leaf,
    title: 'Produksi Zero Waste',
    desc: 'Ampas kedelai (okara) yang kaya serat dan protein tidak dibuang — didistribusikan sebagai pakan ternak, menutup loop produksi secara lokal.',
  },
  {
    icon: Droplets,
    title: 'Hemat Sumber Daya',
    desc: 'Produksi susu kedelai menggunakan 95% lebih sedikit air dan menghasilkan jejak karbon 3–4x lebih rendah dibanding susu sapi per liter.',
  },
  {
    icon: Recycle,
    title: 'Kemasan Bertanggung Jawab',
    desc: 'Dalam proses transisi menuju kemasan yang 100% dapat didaur ulang — karena komitmen lingkungan bukan slogan, tapi program nyata.',
  },
]

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: 'rgba(45,106,79,0.15)' }}>
        <Check size={13} style={{ color: 'var(--color-green)' }} strokeWidth={2.5} />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}>
        <X size={13} className="text-red-400" strokeWidth={2.5} />
      </span>
    )
  }
  return <span>{value}</span>
}

/* ─── Page ───────────────────────────────────────────────────── */
function MengapaSoysuPage() {
  usePageMeta(
    'Mengapa SOYSU — Inovasi Susu Kedelai Premium',
    'Temukan perbedaan SOYSU: teknologi dehulling & ultrafiltrasi yang menghilangkan langu dan menghasilkan tekstur creamy premium. Perbandingan langsung vs susu kedelai biasa.',
  )

  return (
    <PageTransition>
      <main>
        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <section
          className="pt-28 pb-20 text-center relative overflow-hidden"
          style={{ backgroundColor: 'var(--color-green-dark)' }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25% 75%, var(--color-green-light), transparent 55%), radial-gradient(circle at 75% 25%, var(--color-yellow), transparent 55%)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
            <AnimatedSection direction="up">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-70"
                style={{ color: 'var(--color-cream)' }}
              >
                Keunggulan Kami
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cream)' }}
              >
                Bukan Hanya Berbeda. Kami Lebih Baik.
              </h1>
              <p className="text-lg leading-relaxed opacity-80" style={{ color: 'var(--color-cream)' }}>
                Setiap klaim yang kami buat punya alasan ilmiah di baliknya. Ini bukan marketing
                — ini fakta dari laboratorium ke botol.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 2. The Problem ──────────────────────────────────── */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-12">
              <SectionHeading
                eyebrow="Masalahnya"
                title="Apa yang Salah dengan Susu Kedelai Biasa?"
                subtitle="Dua masalah yang sudah puluhan tahun menghambat adopsi susu kedelai di Indonesia — dan bagaimana kami menyelesaikannya."
              />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  no: '01',
                  problem: 'Aroma Langu',
                  cause: 'Enzim lipoksigenase dalam kulit kedelai mengoksidasi asam lemak, menghasilkan senyawa volatil (hexanal, heptanal) yang menimbulkan bau tidak sedap.',
                  impact: 'Membuat mayoritas konsumen Indonesia enggan minum susu kedelai meski tahu manfaatnya.',
                },
                {
                  no: '02',
                  problem: 'Tekstur Encer & Kasar',
                  cause: 'Proses penyaringan konvensional meninggalkan partikel serat kasar yang tidak terlarut, menghasilkan tekstur berpasir dan tidak konsisten.',
                  impact: 'Pengalaman minum yang tidak menyenangkan, jauh dari kenyamanan susu sapi atau susu nabati premium lainnya.',
                },
              ].map((item, i) => (
                <AnimatedSection key={item.no} direction="up" delay={i * 0.15}>
                  <div
                    className="rounded-3xl p-7 h-full flex flex-col gap-4"
                    style={{
                      backgroundColor: 'var(--color-cream-soft)',
                      border: '1.5px solid var(--color-cream-dark)',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <span
                      className="text-5xl font-bold opacity-10"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      {item.no}
                    </span>
                    <h3
                      className="text-xl font-bold -mt-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      Masalah: {item.problem}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-green)' }}>
                          Penyebab Ilmiah
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                          {item.cause}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-brown)' }}>
                          Dampaknya
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                          {item.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Solution 1: Dehulling ────────────────────────── */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: 'var(--color-cream-dark)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimatedSection direction="left">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-green)' }}>
                      Solusi #1
                    </p>
                    <h2
                      className="text-3xl sm:text-4xl font-bold mb-3"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      Pemisahan Kulit Kedelai (Dehulling)
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                      Kulit ari kedelai mengandung enzim lipoksigenase — sumber utama aroma langu.
                      SOYSU memisahkan kulit ini menggunakan mesin khusus{' '}
                      <strong style={{ color: 'var(--color-brown)' }}>sebelum proses penggilingan</strong>,
                      menghilangkan masalah dari akarnya, bukan sekadar menutupinya.
                    </p>
                  </div>

                  {/* Before / After */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Tanpa Dehulling', items: ['Aroma langu kuat', 'Tekstur kasar', 'Rasa pahit getir'], bad: true },
                      { label: 'Dengan Dehulling', items: ['Aroma bersih netral', 'Dasar tekstur halus', 'Rasa murni kedelai'], bad: false },
                    ].map((col) => (
                      <div
                        key={col.label}
                        className="rounded-2xl p-4 flex flex-col gap-3"
                        style={{
                          backgroundColor: col.bad ? 'rgba(239,68,68,0.06)' : 'rgba(45,106,79,0.08)',
                          border: `1.5px solid ${col.bad ? 'rgba(239,68,68,0.2)' : 'rgba(45,106,79,0.2)'}`,
                        }}
                      >
                        <p className="text-xs font-bold" style={{ color: col.bad ? '#ef4444' : 'var(--color-green)' }}>
                          {col.label}
                        </p>
                        {col.items.map((item) => (
                          <div key={item} className="flex gap-2 items-center">
                            {col.bad
                              ? <X size={12} className="text-red-400 shrink-0" />
                              : <Check size={12} style={{ color: 'var(--color-green)' }} className="shrink-0" />
                            }
                            <span className="text-xs" style={{ color: 'var(--color-brown-soft)' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Infographic placeholder */}
              <AnimatedSection direction="right">
                <div
                  className="rounded-3xl p-8 flex flex-col gap-6"
                  style={{ backgroundColor: 'var(--color-cream-soft)', boxShadow: 'var(--shadow-hover)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-center" style={{ color: 'var(--color-green)' }}>
                    Alur Proses Dehulling
                  </p>
                  {[
                    { step: '1', label: 'Kedelai Utuh', sub: 'Dengan kulit ari (sumber langu)' },
                    { step: '2', label: 'Pemisahan Kulit', sub: 'Mesin dehulling eksklusif' },
                    { step: '3', label: 'Biji Kedelai Bersih', sub: 'Bebas enzim lipoksigenase' },
                    { step: '4', label: 'Siap Digiling', sub: 'Basis sempurna tanpa langu' },
                  ].map((s, i, arr) => (
                    <div key={s.step} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                        style={{ backgroundColor: 'var(--color-green)' }}
                      >
                        {s.step}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold" style={{ color: 'var(--color-brown)' }}>{s.label}</p>
                        <p className="text-xs" style={{ color: 'var(--color-brown-soft)' }}>{s.sub}</p>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-0.5 h-4 absolute ml-5 mt-12" style={{ backgroundColor: 'var(--color-green)', opacity: 0.3 }} />
                      )}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 4. Solution 2: Ultrafiltrasi ────────────────────── */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Flow diagram */}
              <AnimatedSection direction="left" className="lg:order-2">
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-center mb-2" style={{ color: 'var(--color-green)' }}>
                    Alur Teknologi Ultrafiltrasi
                  </p>
                  {[
                    { emoji: '🌱', label: 'Kedelai Pilihan', color: 'var(--color-green)' },
                    { emoji: '⚙️', label: 'Penggilingan Presisi', color: 'var(--color-brown-soft)' },
                    { emoji: '🔬', label: 'Membran Ultrafiltrasi (0.01–0.1 µm)', color: 'var(--color-green)' },
                    { emoji: '✨', label: 'SOYSU — Creamy, Bersih, Premium', color: 'var(--color-original)' },
                  ].map((step, i, arr) => (
                    <div key={step.label} className="flex flex-col items-center gap-2">
                      <div
                        className="w-full rounded-2xl px-5 py-3.5 flex items-center gap-4"
                        style={{
                          backgroundColor: 'var(--color-cream-soft)',
                          border: `1.5px solid ${step.color}40`,
                          boxShadow: 'var(--shadow-card)',
                        }}
                      >
                        <span className="text-2xl">{step.emoji}</span>
                        <span className="text-sm font-semibold" style={{ color: 'var(--color-brown)' }}>
                          {step.label}
                        </span>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="h-5 flex items-center justify-center">
                          <ArrowRight
                            size={16}
                            className="rotate-90"
                            style={{ color: 'var(--color-green)', opacity: 0.5 }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" className="lg:order-1">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-green)' }}>
                      Solusi #2
                    </p>
                    <h2
                      className="text-3xl sm:text-4xl font-bold mb-3"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      Teknologi Ultrafiltrasi Membran
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                      Ultrafiltrasi (UF) adalah teknologi penyaringan menggunakan membran semi-permeabel
                      berukuran pori sangat kecil — antara <strong style={{ color: 'var(--color-brown)' }}>0.01 hingga 0.1 mikron</strong>.
                      Ukuran ini menyaring partikel protein terdenaturasi, serat tidak larut, dan
                      komponen penyebab rasa pahit — sambil mempertahankan protein baik dan nutrisi penting.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Tekstur', value: 'Sangat halus & creamy' },
                      { label: 'Emulsi', value: 'Stabil, tidak mudah terpisah' },
                      { label: 'Warna', value: 'Putih bersih konsisten' },
                      { label: 'Rasa', value: 'Bersih, tanpa aftertaste' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl p-3.5"
                        style={{
                          backgroundColor: 'rgba(45,106,79,0.07)',
                          border: '1px solid rgba(45,106,79,0.15)',
                        }}
                      >
                        <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--color-green)' }}>
                          {stat.label}
                        </p>
                        <p className="text-sm font-medium" style={{ color: 'var(--color-brown)' }}>
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 5. Comparison Table ─────────────────────────────── */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: 'var(--color-cream-soft)' }}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-10">
              <SectionHeading
                eyebrow="Perbandingan"
                title="SOYSU vs Susu Kedelai Biasa"
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1}>
              <div
                className="rounded-3xl overflow-hidden"
                style={{ boxShadow: 'var(--shadow-hover)', border: '1px solid var(--color-cream-dark)' }}
              >
                {/* Header */}
                <div
                  className="grid grid-cols-3 px-6 py-4 text-sm font-bold"
                  style={{ backgroundColor: 'var(--color-green)', color: 'var(--color-cream)' }}
                >
                  <span>Aspek</span>
                  <span className="text-center">SOYSU</span>
                  <span className="text-center">Kedelai Biasa</span>
                </div>

                {comparisonRows.map((row, i) => (
                  <div
                    key={row.aspect}
                    className="grid grid-cols-3 px-6 py-4 text-sm items-center"
                    style={{
                      backgroundColor: i % 2 === 0 ? 'var(--color-cream-soft)' : 'var(--color-cream)',
                      borderTop: '1px solid var(--color-cream-dark)',
                    }}
                  >
                    <span className="font-medium" style={{ color: 'var(--color-brown)' }}>
                      {row.aspect}
                    </span>
                    <span className="text-center font-semibold flex justify-center items-center" style={{ color: 'var(--color-green)' }}>
                      <CellValue value={row.soysu} />
                    </span>
                    <span className="text-center flex justify-center items-center" style={{ color: 'var(--color-brown-soft)' }}>
                      <CellValue value={row.others} />
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 6. Sustainability ───────────────────────────────── */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-12">
              <SectionHeading
                eyebrow="Keberlanjutan"
                title="Baik untuk Kamu, Baik untuk Bumi"
                subtitle="Komitmen lingkungan SOYSU bukan sekadar klaim — ini program nyata yang terukur."
              />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sustainability.map((item, i) => {
                const Icon = item.icon
                return (
                  <AnimatedSection key={item.title} direction="up" delay={i * 0.12}>
                    <div
                      className="rounded-3xl p-7 h-full flex flex-col gap-4"
                      style={{
                        backgroundColor: 'var(--color-cream-soft)',
                        boxShadow: 'var(--shadow-card)',
                        border: '1px solid var(--color-cream-dark)',
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(45,106,79,0.1)' }}
                      >
                        <Icon size={24} style={{ color: 'var(--color-green)' }} strokeWidth={1.7} />
                      </div>
                      <h3
                        className="text-lg font-bold"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── 7. CTA ──────────────────────────────────────────── */}
        <section
          className="py-20 lg:py-24 relative overflow-hidden text-center"
          style={{ backgroundColor: 'var(--color-cream-dark)' }}
        >
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <AnimatedSection direction="up">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-green)' }}
              >
                Siap Membuktikan?
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Buktikan sendiri perbedaannya
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-brown-soft)' }}>
                Kata-kata hanya bisa sampai di sini. Selanjutnya, biarkan rasa yang berbicara.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" asChild>
                  <Link to="/produk">Lihat Semua Produk</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/temukan-kami">Temukan Toko Terdekat</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
