import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ArrowLeft, Check, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { productImages } from '@/assets/images'
import { PageTransition } from '@/components/ui/PageTransition'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/button'
import { company } from '@/data/company'

export const Route = createFileRoute('/produk/$slug')({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug)
    if (!product) throw notFound()
    return { product }
  },
  component: ProductDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <h1
        className="text-3xl font-bold"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
      >
        Produk tidak ditemukan
      </h1>
      <Button variant="primary" asChild>
        <Link to="/produk">Kembali ke Daftar Produk</Link>
      </Button>
    </div>
  ),
})

function ProductDetailPage() {
  const { product } = Route.useLoaderData()
  const related = products.filter((p) => p.slug !== product.slug)

  usePageMeta(
    `${product.name} — Susu Kedelai ${product.tagline}`,
    product.shortDescription,
  )

  return (
    <PageTransition>
      <main>
        {/* 1. Product Hero */}
        <section
          className="pt-24 pb-16 overflow-hidden"
          style={{ backgroundColor: product.bgColor }}
        >
          {/* Back link */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
            <Link
              to="/produk"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: 'var(--color-brown-soft)' }}
            >
              <ArrowLeft size={14} />
              Semua Produk
            </Link>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: product image */}
              <AnimatedSection direction="left">
                <div className="relative flex items-center justify-center h-80 lg:h-[480px]">
                  {/* Decorative bg circle */}
                  <motion.div
                    className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full opacity-15"
                    style={{ backgroundColor: product.color }}
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  {/* Product image */}
                  <motion.img
                    src={productImages[product.slug]}
                    alt={product.name}
                    className="relative z-10 h-full w-full object-contain drop-shadow-xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: [0, -10, 0], opacity: 1 }}
                    transition={{
                      opacity: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
                      y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 },
                    }}
                  />

                  {/* Shadow */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
                    style={{
                      width: 180,
                      height: 24,
                      background: `radial-gradient(ellipse, ${product.color}44, transparent 70%)`,
                      filter: 'blur(8px)',
                    }}
                  />

                  {/* Floating badge */}
                  <div
                    className="absolute top-6 right-4 lg:right-0 text-xs font-semibold px-3 py-1.5 rounded-full text-white shadow"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.badges[0]}
                  </div>
                </div>
              </AnimatedSection>

              {/* Right: info */}
              <AnimatedSection direction="right">
                <div className="flex flex-col gap-5">
                  <div>
                    <p
                      className="text-sm font-semibold uppercase tracking-widest mb-2"
                      style={{ color: product.color }}
                    >
                      {product.badges[0]}
                    </p>
                    <h1
                      className="text-4xl lg:text-5xl font-bold mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      {product.name}
                    </h1>
                    <p className="text-lg italic" style={{ color: product.color }}>
                      {product.tagline}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: product.color + '22',
                          color: product.color,
                          border: `1px solid ${product.color}44`,
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                    {product.shortDescription}
                  </p>

                  {/* Sizes */}
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-brown)' }}>
                      Ukuran Tersedia
                    </p>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="text-sm font-semibold px-4 py-2 rounded-xl border-2"
                          style={{
                            borderColor: product.color,
                            color: product.color,
                            backgroundColor: product.color + '10',
                          }}
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button variant="primary" size="lg" asChild>
                      <a
                        href={`${company.whatsapp}?text=${encodeURIComponent(`Halo SOYSU! Saya tertarik dengan ${product.name}. Boleh tahu info ketersediaan dan harganya?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <MessageCircle size={16} />
                        Pesan via WhatsApp
                      </a>
                    </Button>
                    <Button variant="ghost" size="lg" asChild>
                      <Link to="/temukan-kami">Temukan Toko</Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 2. Product Story */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-green)' }}
              >
                Tentang Produk
              </p>
              <div
                className="prose prose-brown max-w-none text-base leading-relaxed"
                style={{ color: 'var(--color-brown-soft)' }}
                dangerouslySetInnerHTML={{ __html: product.longDescription }}
              />
            </AnimatedSection>
          </div>
        </section>

        {/* 3. Serving Suggestions */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-cream-soft)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-10">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--color-green)' }}
              >
                Cara Menikmati
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Saran Penyajian
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {product.servingSuggestions.map((s, i) => (
                <AnimatedSection key={s.title} direction="up" delay={i * 0.1}>
                  <div
                    className="rounded-2xl p-5 h-full flex flex-col gap-3"
                    style={{ backgroundColor: product.color + '12', border: `1px solid ${product.color}28` }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: product.color }}
                    >
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-base" style={{ color: 'var(--color-brown)' }}>
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                      {s.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Nutrition Facts */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-10">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--color-green)' }}
              >
                Informasi Gizi
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Nutrition Facts
              </h2>
              <p className="text-sm mt-1" style={{ color: 'var(--color-brown-soft)' }}>
                Per 200ml sajian
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {product.nutrition.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-4 flex flex-col items-center text-center gap-1.5"
                    style={{
                      backgroundColor: item.isCheck ? product.color + '15' : 'var(--color-cream-soft)',
                      border: `1px solid ${item.isCheck ? product.color + '40' : 'var(--color-cream-dark)'}`,
                    }}
                  >
                    {item.isCheck ? (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: product.color }}
                      >
                        <Check size={14} className="text-white" strokeWidth={2.5} />
                      </div>
                    ) : (
                      <p
                        className="text-lg font-bold"
                        style={{ color: product.color, fontFamily: 'var(--font-display)' }}
                      >
                        {item.value}
                      </p>
                    )}
                    <p className="text-xs font-medium leading-tight" style={{ color: 'var(--color-brown)' }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Ingredients */}
            <AnimatedSection direction="up" delay={0.2} className="mt-8">
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--color-cream-soft)',
                  border: '1px solid var(--color-cream-dark)',
                }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: 'var(--color-brown)' }}>
                  Komposisi
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                  {product.ingredients}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 5. Suitable For */}
        <section
          className="py-16 lg:py-20"
          style={{ backgroundColor: product.bgColor }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-8">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--color-green)' }}
              >
                Cocok Untuk
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Siapa yang Cocok Minum {product.name}?
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {product.suitableFor.map((group) => (
                  <span
                    key={group}
                    className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full"
                    style={{
                      backgroundColor: 'var(--color-cream-soft)',
                      color: 'var(--color-brown)',
                      border: `2px solid ${product.color}44`,
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <Check size={13} style={{ color: product.color }} strokeWidth={2.5} />
                    {group}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 6. Related Products */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="mb-10">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--color-green)' }}
              >
                Produk Lain
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Varian Lainnya
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.slice(0, 4).map((rel, i) => (
                <AnimatedSection key={rel.slug} direction="up" delay={i * 0.08}>
                  <Link
                    to="/produk/$slug"
                    params={{ slug: rel.slug }}
                    className="group flex flex-col rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                    style={{
                      backgroundColor: rel.bgColor,
                      border: `1.5px solid ${rel.color}33`,
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    {/* Mini image */}
                    <div
                      className="h-36 flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: rel.color + '15' }}
                    >
                      <img
                        src={productImages[rel.slug]}
                        alt={rel.name}
                        className="h-full w-full object-contain py-2 transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3
                        className="text-sm font-bold"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                      >
                        {rel.name}
                      </h3>
                      <p className="text-xs mt-0.5 italic" style={{ color: rel.color }}>
                        {rel.tagline}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
