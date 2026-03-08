import { useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { productImages } from '@/assets/images'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/button'

export function ProductsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.children[0]?.clientWidth ?? 320
    const gap = 24
    const delta = (cardWidth + gap) * (dir === 'right' ? 1 : -1)
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.children[0]?.clientWidth ?? 320
    const gap = 24
    const index = Math.round(el.scrollLeft / (cardWidth + gap))
    setActiveIndex(Math.min(index, products.length - 1))
  }

  return (
    <section className="py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: 'var(--color-cream-soft)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeading
              eyebrow="5 Varian Rasa"
              title="Pilih Favoritmu"
              subtitle="Dari original creamy hingga matcha, taro, stroberi, dan coklat — setiap varian punya karakter unik yang dibuat untuk momen berbeda."
              align="left"
            />
            {/* Desktop arrows */}
            <div className="hidden sm:flex gap-2 shrink-0">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors hover:bg-brown hover:text-white"
                style={{ borderColor: 'var(--color-brown)', color: 'var(--color-brown)' }}
                aria-label="Previous product"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors hover:bg-brown hover:text-white"
                style={{ borderColor: 'var(--color-brown)', color: 'var(--color-brown)' }}
                aria-label="Next product"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Scrollable carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="snap-center shrink-0 w-72 sm:w-80 rounded-3xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: product.bgColor,
                border: `2px solid ${product.color}33`,
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Product image */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: product.color + '18' }}
              >
                <img
                  src={productImages[product.slug]}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 py-2"
                  loading="lazy"
                />
                {/* Top badge */}
                {product.badges.slice(0, 1).map((badge) => (
                  <span
                    key={badge}
                    className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                    {product.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {product.badges.slice(1).map((badge) => (
                    <span
                      key={badge}
                      className="text-xs px-2.5 py-0.5 rounded-full font-medium"
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
                <div className="mt-auto pt-2">
                  <Button variant="ghost" size="sm" asChild className="w-full group">
                    <Link to="/produk/$slug" params={{ slug: product.slug }}>
                      Lihat Detail
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current
                if (!el) return
                const cardWidth = el.children[0]?.clientWidth ?? 320
                el.scrollTo({ left: i * (cardWidth + 24), behavior: 'smooth' })
                setActiveIndex(i)
              }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
                backgroundColor: i === activeIndex ? 'var(--color-green)' : 'var(--color-brown)',
                opacity: i === activeIndex ? 1 : 0.25,
              }}
              aria-label={`Go to product ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
