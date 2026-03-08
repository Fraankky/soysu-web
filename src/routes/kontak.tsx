import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import * as Accordion from '@radix-ui/react-accordion'
import { MessageCircle, Mail, MapPin, ChevronDown, Send, CheckCircle } from 'lucide-react'
import { company } from '@/data/company'
import { PageTransition } from '@/components/ui/PageTransition'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/kontak')({
  component: KontakPage,
})

/* ─── Form schema ────────────────────────────────────────────── */
const SUBJECTS = [
  'Pertanyaan Produk',
  'Pemesanan & Pengiriman',
  'Kemitraan & Reseller',
  'Masukan & Saran',
  'Lainnya',
] as const

const formSchema = z.object({
  nama: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Format email tidak valid'),
  subjek: z.enum(SUBJECTS, { message: 'Pilih subjek pesan' }),
  pesan: z.string().min(10, 'Pesan minimal 10 karakter'),
})

type FormData = z.infer<typeof formSchema>

/* ─── FAQ data ───────────────────────────────────────────────── */
const faqs = [
  {
    q: 'Apakah SOYSU aman untuk balita?',
    a: 'SOYSU aman untuk balita di atas 1 tahun sebagai pengganti susu sapi. Untuk bayi 0–6 bulan, ASI eksklusif tetap diutamakan. Untuk usia 6–12 bulan, SOYSU bisa mulai diperkenalkan sebagai bahan campuran MPASI. Selalu konsultasikan dengan dokter anak untuk saran yang spesifik.',
  },
  {
    q: 'Di mana bisa beli SOYSU?',
    a: 'Saat ini SOYSU tersedia melalui pemesanan langsung via WhatsApp di nomor 085806212929. Kami melayani pengiriman ke seluruh Indonesia. Jaringan reseller dan toko offline sedang dalam proses pengembangan.',
  },
  {
    q: 'Apakah SOYSU mengandung gula tambahan?',
    a: 'SOYSU Original menggunakan kedelai murni tanpa gula tambahan. Beberapa varian rasa menggunakan sedikit gula alami untuk menyeimbangkan rasa, namun dalam jumlah minimal. Kami tidak menggunakan pemanis buatan atau sirup fruktosa tinggi.',
  },
  {
    q: 'Berapa lama SOYSU tahan setelah dibuka?',
    a: 'Setelah dibuka, SOYSU sebaiknya disimpan di lemari pendingin dan dikonsumsi dalam 3–5 hari. Produk yang belum dibuka dapat disimpan sesuai tanggal kadaluarsa yang tertera pada kemasan. Hindari paparan sinar matahari langsung.',
  },
  {
    q: 'Apakah SOYSU sudah bersertifikasi halal?',
    a: 'Ya. SOYSU telah mendapatkan sertifikasi Halal MUI dengan nomor sertifikat ID35410028919870925. Semua bahan baku dan proses produksi telah memenuhi standar kehalalan yang ditetapkan oleh Majelis Ulama Indonesia.',
  },
]

/* ─── Contact option card ────────────────────────────────────── */
function ContactOption({
  icon: Icon,
  title,
  desc,
  action,
  href,
  color,
  bg,
}: {
  icon: React.ElementType
  title: string
  desc: string
  action: string
  href: string
  color: string
  bg: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex flex-col gap-4 rounded-3xl p-6 transition-shadow duration-300 hover:shadow-lg"
      style={{
        backgroundColor: 'var(--color-cream-soft)',
        boxShadow: 'var(--shadow-card)',
        border: '1px solid var(--color-cream-dark)',
      }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: bg }}
      >
        <Icon size={22} style={{ color }} />
      </div>
      <div>
        <h3
          className="text-base font-bold mb-1"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-brown-soft)' }}>
          {desc}
        </p>
        <span
          className="text-sm font-semibold group-hover:opacity-70 transition-opacity"
          style={{ color }}
        >
          {action} →
        </span>
      </div>
    </a>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */
function KontakPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(formSchema) })

  const onSubmit = (data: FormData) => {
    const msg = encodeURIComponent(
      `Halo SOYSU!\n\nNama: ${data.nama}\nEmail: ${data.email}\nSubjek: ${data.subjek}\n\n${data.pesan}`
    )
    window.open(`https://wa.me/6285806212929?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const inputBase: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1.5px solid var(--color-cream-dark)',
    backgroundColor: 'var(--color-cream)',
    color: 'var(--color-brown)',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.15s',
  }

  const inputError: React.CSSProperties = {
    borderColor: '#ef4444',
  }

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
                'radial-gradient(circle at 25% 75%, var(--color-green-light), transparent 50%), radial-gradient(circle at 75% 25%, var(--color-yellow), transparent 50%)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
            <AnimatedSection direction="up">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-green)' }}
              >
                Hubungi Kami
              </p>
              <h1
                className="text-4xl sm:text-5xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Ada yang Bisa Kami Bantu?
              </h1>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                Tim SOYSU siap menjawab pertanyaan kamu — dari info produk, pemesanan, hingga
                peluang kemitraan.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Contact Options ──────────────────────────────────── */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              <AnimatedSection direction="up" delay={0}>
                <ContactOption
                  icon={MessageCircle}
                  title="WhatsApp"
                  desc="Respons tercepat. Langsung terhubung dengan tim SOYSU."
                  action="Chat Sekarang"
                  href={company.whatsapp}
                  color="var(--color-green)"
                  bg="rgba(45,106,79,0.1)"
                />
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.1}>
                <ContactOption
                  icon={Mail}
                  title="Email"
                  desc="Cocok untuk pertanyaan detail atau kemitraan formal."
                  action={company.email}
                  href={`mailto:${company.email}`}
                  color="var(--color-brown)"
                  bg="rgba(95,70,51,0.08)"
                />
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.2}>
                <ContactOption
                  icon={MapPin}
                  title="Kantor"
                  desc={`Surabaya & Semarang. ${company.offices[0].address.split(',')[0]}.`}
                  action="Lihat Lokasi"
                  href="/temukan-kami"
                  color="var(--color-original)"
                  bg="rgba(200,169,110,0.12)"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Contact Form ─────────────────────────────────────── */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-cream-soft)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: copy */}
              <AnimatedSection direction="left" className="lg:sticky lg:top-24">
                <p
                  className="text-sm font-semibold uppercase tracking-widest mb-3"
                  style={{ color: 'var(--color-green)' }}
                >
                  Kirim Pesan
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-5"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                >
                  Tulis Pesanmu, Kami Akan Balas
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-brown-soft)' }}>
                  Isi form di bawah ini dan pesan akan langsung dikirim via WhatsApp ke tim kami.
                  Biasanya kami merespons dalam 1–2 jam di hari kerja.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Pertanyaan Produk & Gizi', sub: 'Komposisi, varian, cocok untuk siapa' },
                    { label: 'Pemesanan & Pengiriman', sub: 'Harga, stok, estimasi pengiriman' },
                    { label: 'Kemitraan & Reseller', sub: 'Bergabung sebagai mitra distribusi' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-start">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: 'var(--color-green)' }}
                      />
                      <div>
                        <p className="text-sm font-semibold" style={{ color: 'var(--color-brown)' }}>
                          {item.label}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--color-brown-soft)' }}>
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Right: form */}
              <AnimatedSection direction="right">
                {submitted ? (
                  <div
                    className="rounded-3xl p-10 flex flex-col items-center text-center gap-5"
                    style={{
                      backgroundColor: 'var(--color-cream-soft)',
                      boxShadow: 'var(--shadow-hover)',
                      border: '1px solid var(--color-cream-dark)',
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(45,106,79,0.1)' }}
                    >
                      <CheckCircle size={32} style={{ color: 'var(--color-green)' }} />
                    </div>
                    <h3
                      className="text-xl font-bold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      Pesan Terkirim!
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                      WhatsApp telah terbuka dengan pesanmu. Tim SOYSU akan segera membalasnya.
                    </p>
                    <Button variant="primary" onClick={() => setSubmitted(false)}>
                      Kirim Pesan Lain
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="rounded-3xl p-7 md:p-9 flex flex-col gap-5"
                    style={{
                      backgroundColor: 'var(--color-cream-soft)',
                      boxShadow: 'var(--shadow-hover)',
                      border: '1px solid var(--color-cream-dark)',
                    }}
                  >
                    {/* Nama */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="nama"
                        className="text-sm font-semibold"
                        style={{ color: 'var(--color-brown)' }}
                      >
                        Nama <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        id="nama"
                        {...register('nama')}
                        placeholder="Nama lengkap kamu"
                        style={{ ...inputBase, ...(errors.nama ? inputError : {}) }}
                      />
                      {errors.nama && (
                        <p className="text-xs" style={{ color: '#ef4444' }}>
                          {errors.nama.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold"
                        style={{ color: 'var(--color-brown)' }}
                      >
                        Email <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="email@kamu.com"
                        style={{ ...inputBase, ...(errors.email ? inputError : {}) }}
                      />
                      {errors.email && (
                        <p className="text-xs" style={{ color: '#ef4444' }}>
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Subjek */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="subjek"
                        className="text-sm font-semibold"
                        style={{ color: 'var(--color-brown)' }}
                      >
                        Subjek <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <select
                        id="subjek"
                        {...register('subjek')}
                        style={{ ...inputBase, ...(errors.subjek ? inputError : {}) }}
                      >
                        <option value="">Pilih subjek pesan...</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.subjek && (
                        <p className="text-xs" style={{ color: '#ef4444' }}>
                          {errors.subjek.message}
                        </p>
                      )}
                    </div>

                    {/* Pesan */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="pesan"
                        className="text-sm font-semibold"
                        style={{ color: 'var(--color-brown)' }}
                      >
                        Pesan <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <textarea
                        id="pesan"
                        rows={5}
                        {...register('pesan')}
                        placeholder="Tuliskan pertanyaan atau pesanmu di sini..."
                        style={{
                          ...inputBase,
                          resize: 'vertical',
                          minHeight: '120px',
                          ...(errors.pesan ? inputError : {}),
                        }}
                      />
                      {errors.pesan && (
                        <p className="text-xs" style={{ color: '#ef4444' }}>
                          {errors.pesan.message}
                        </p>
                      )}
                    </div>

                    <p className="text-xs" style={{ color: 'var(--color-brown-soft)' }}>
                      Pesan akan dikirim via WhatsApp. Pastikan nomor WhatsApp-mu aktif untuk menerima balasan.
                    </p>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full gap-2"
                    >
                      <Send size={16} />
                      {isSubmitting ? 'Mengirim...' : 'Kirim via WhatsApp'}
                    </Button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-10">
              <SectionHeading
                eyebrow="FAQ"
                title="Pertanyaan yang Sering Ditanyakan"
                subtitle="Tidak menemukan jawaban yang kamu cari? Hubungi kami langsung via WhatsApp."
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
                {faqs.map((faq, i) => (
                  <Accordion.Item
                    key={i}
                    value={`faq-${i}`}
                    className="rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: 'var(--color-cream-soft)',
                      border: '1px solid var(--color-cream-dark)',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <Accordion.Trigger
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left group"
                      style={{ cursor: 'pointer' }}
                    >
                      <span
                        className="text-sm font-semibold leading-snug"
                        style={{ color: 'var(--color-brown)' }}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                        style={{ color: 'var(--color-green)' }}
                      />
                    </Accordion.Trigger>
                    <Accordion.Content
                      className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
                      style={
                        {
                          '--radix-accordion-content-height': 'var(--radix-accordion-content-height)',
                        } as React.CSSProperties
                      }
                    >
                      <p
                        className="px-6 pb-5 text-sm leading-relaxed"
                        style={{ color: 'var(--color-brown-soft)' }}
                      >
                        {faq.a}
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2} className="mt-10 text-center">
              <p className="text-sm mb-4" style={{ color: 'var(--color-brown-soft)' }}>
                Masih punya pertanyaan lain?
              </p>
              <Button variant="primary" asChild className="gap-2">
                <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} />
                  Tanya Langsung via WhatsApp
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
