import { createFileRoute, Link } from '@tanstack/react-router'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { productImages } from '@/assets/images'
import { PageTransition } from '@/components/ui/PageTransition'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/home/CTASection'

export const Route = createFileRoute('/produk/')({
  component: ProdukPage,
})

function ProdukPage() {
  usePageMeta(
    'Produk SOYSU — 5 Varian Susu Kedelai Premium',
    'Pilih dari 5 varian rasa SOYSU: Original, Matcha, Taro, Stroberi, dan Coklat. Semua creamy, bebas langu, bebas laktosa. Halal bersertifikat.',
  )

  return (
    <PageTransition>
      <main>
        {/* Hero */}
        <section
          className="pt-28 pb-16 text-center relative overflow-hidden"
          style={{ backgroundColor: 'var(--color-cream-dark)' }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 0%, var(--color-green-light), transparent)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
            <AnimatedSection direction="up">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-green)' }}
              >
                Koleksi Produk
              </p>
              <h1
                className="text-4xl sm:text-5xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Varian Produk SOYSU
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                Lima varian rasa yang lahir dari riset mendalam — setiap botol membawa cerita inovasi,
                teknologi, dan cinta untuk keluarga Indonesia.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <AnimatedSection key={product.slug} direction="up" delay={i * 0.1}>
                  <Link
                    to="/produk/$slug"
                    params={{ slug: product.slug }}
                    className="group flex flex-col rounded-3xl overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl"
                    style={{
                      backgroundColor: product.bgColor,
                      border: `2px solid ${product.color}33`,
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    {/* Image area */}
                    <div
                      className="relative h-64 flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: product.color + '14' }}
                    >
                      <motion.img
                        src={productImages[product.slug]}
                        alt={product.name}
                        className="h-full w-full object-contain py-3"
                        loading="lazy"
                        whileHover={{ scale: 1.06, y: -4 }}
                        transition={{ duration: 0.35 }}
                      />
                      {/* Top badge */}
                      <span
                        className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.badges[0]}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 gap-4">
                      <div>
                        <h2
                          className="text-xl font-bold mb-1"
                          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                        >
                          {product.name}
                        </h2>
                        <p
                          className="text-sm italic mb-3"
                          style={{ color: product.color }}
                        >
                          {product.tagline}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                          {product.shortDescription}
                        </p>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {product.badges.slice(1).map((badge) => (
                          <span
                            key={badge}
                            className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                            style={{
                              backgroundColor: product.color + '20',
                              color: product.color,
                              border: `1px solid ${product.color}40`,
                            }}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      {/* Sizes */}
                      <div className="flex gap-2 items-center">
                        <span className="text-xs font-medium" style={{ color: 'var(--color-brown-soft)' }}>
                          Ukuran:
                        </span>
                        {product.sizes.map((size) => (
                          <span
                            key={size}
                            className="text-xs px-2 py-0.5 rounded border font-medium"
                            style={{
                              borderColor: 'var(--color-brown-soft)',
                              color: 'var(--color-brown)',
                            }}
                          >
                            {size}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <Button variant="primary" size="sm" asChild className="w-full group">
                          <span className="flex items-center justify-center gap-2">
                            Lihat Detail
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Link>
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
