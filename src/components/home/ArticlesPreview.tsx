import { Link } from '@tanstack/react-router'
import { Clock, ArrowRight } from 'lucide-react'
import { articles } from '@/data/articles'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/button'

const categoryColors: Record<string, string> = {
  'Edukasi Gizi': 'var(--color-green)',
  'Inovasi & Teknologi': 'var(--color-brown)',
  'Keberlanjutan & Lingkungan': 'var(--color-matcha)',
  'Parenting & Nutrisi Anak': 'var(--color-strawberry)',
  'Gaya Hidup & Wellness': 'var(--color-original)',
}

export function ArticlesPreview() {
  const preview = articles.slice(0, 3)

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeading
              eyebrow="Artikel & Insight"
              title="Baca, Pelajari, Hidup Lebih Sehat"
              subtitle="Dari riset gizi hingga tips wellness harian — konten kami hadir untuk membantu keluarga Indonesia hidup lebih sehat."
              align="left"
            />
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex shrink-0">
              <Link to="/artikel">
                Semua Artikel <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((article, i) => {
            const accentColor = categoryColors[article.category] ?? 'var(--color-green)'
            return (
              <AnimatedSection key={article.slug} direction="up" delay={i * 0.12}>
                <Link
                  to="/artikel/$slug"
                  params={{ slug: article.slug }}
                  className="group flex flex-col rounded-3xl overflow-hidden transition-shadow duration-300 hover:shadow-xl h-full"
                  style={{
                    backgroundColor: 'var(--color-cream-soft)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {/* Thumbnail placeholder */}
                  <div
                    className="h-44 relative overflow-hidden"
                    style={{ backgroundColor: accentColor + '18' }}
                  >
                    <div
                      className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-500"
                      style={{
                        background: `radial-gradient(circle at 30% 50%, ${accentColor}, transparent 70%)`,
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: accentColor }}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <h3
                      className="text-base font-bold leading-snug group-hover:text-green transition-colors line-clamp-2"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--color-brown-soft)' }}>
                      {article.excerpt}
                    </p>
                    <div
                      className="mt-auto flex items-center gap-1.5 text-xs pt-2"
                      style={{ color: 'var(--color-brown-soft)' }}
                    >
                      <Clock size={12} />
                      <span>{article.readTime} menit baca</span>
                      <span className="ml-2 opacity-50">·</span>
                      <span className="ml-1">
                        {new Date(article.publishedAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Mobile CTA */}
        <AnimatedSection direction="up" delay={0.3} className="mt-8 flex justify-center sm:hidden">
          <Button variant="ghost" asChild>
            <Link to="/artikel">
              Baca Semua Artikel <ArrowRight size={14} />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
