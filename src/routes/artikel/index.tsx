import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Clock, ArrowRight } from 'lucide-react'
import { articles } from '@/data/articles'
import type { ArticleCategory } from '@/types/article'
import { PageTransition } from '@/components/ui/PageTransition'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CTASection } from '@/components/home/CTASection'

/* ─── Search Params ──────────────────────────────────────────── */
type ArtikelSearch = { kategori?: ArticleCategory }

export const Route = createFileRoute('/artikel/')({
  validateSearch: (search: Record<string, unknown>): ArtikelSearch => ({
    kategori: search.kategori as ArticleCategory | undefined,
  }),
  component: ArtikelPage,
})

/* ─── Constants ──────────────────────────────────────────────── */
const ALL_CATEGORIES: ArticleCategory[] = [
  'Edukasi Gizi',
  'Inovasi & Teknologi',
  'Keberlanjutan & Lingkungan',
  'Parenting & Nutrisi Anak',
  'Gaya Hidup & Wellness',
]

const categoryColors: Record<ArticleCategory, string> = {
  'Edukasi Gizi': 'var(--color-green)',
  'Inovasi & Teknologi': 'var(--color-brown)',
  'Keberlanjutan & Lingkungan': 'var(--color-matcha)',
  'Parenting & Nutrisi Anak': 'var(--color-strawberry)',
  'Gaya Hidup & Wellness': 'var(--color-original)',
}

const categoryBg: Record<ArticleCategory, string> = {
  'Edukasi Gizi': 'rgba(45,106,79,0.08)',
  'Inovasi & Teknologi': 'rgba(95,70,51,0.08)',
  'Keberlanjutan & Lingkungan': 'rgba(123,198,126,0.12)',
  'Parenting & Nutrisi Anak': 'rgba(247,168,184,0.15)',
  'Gaya Hidup & Wellness': 'rgba(200,169,110,0.12)',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/* ─── Article Card ───────────────────────────────────────────── */
function ArticleCard({ article, featured = false }: { article: (typeof articles)[0]; featured?: boolean }) {
  const color = categoryColors[article.category]
  const bg = categoryBg[article.category]

  return (
    <Link
      to="/artikel/$slug"
      params={{ slug: article.slug }}
      className={`group flex rounded-3xl overflow-hidden transition-shadow duration-300 hover:shadow-xl ${featured ? 'flex-col md:flex-row' : 'flex-col'}`}
      style={{
        backgroundColor: 'var(--color-cream-soft)',
        boxShadow: 'var(--shadow-card)',
        border: '1px solid var(--color-cream-dark)',
      }}
    >
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden shrink-0 ${featured ? 'h-56 md:h-auto md:w-2/5' : 'h-44'}`}
        style={{ backgroundColor: bg }}
      >
        <div
          className="absolute inset-0 opacity-30 group-hover:scale-105 transition-transform duration-500"
          style={{ background: `radial-gradient(circle at 30% 50%, ${color}, transparent 70%)` }}
        />
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: color }}
          >
            {article.category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: 'var(--color-yellow)', color: 'var(--color-brown)' }}
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 p-5 gap-3 ${featured ? 'md:p-7' : ''}`}>
        <h3
          className={`font-bold leading-snug group-hover:opacity-75 transition-opacity line-clamp-2 ${featured ? 'text-xl md:text-2xl' : 'text-base'}`}
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
        >
          {article.title}
        </h3>
        <p
          className={`leading-relaxed ${featured ? 'line-clamp-3 text-base' : 'line-clamp-3 text-sm'}`}
          style={{ color: 'var(--color-brown-soft)' }}
        >
          {article.excerpt}
        </p>
        <div
          className="mt-auto flex items-center justify-between pt-2"
          style={{ color: 'var(--color-brown-soft)' }}
        >
          <div className="flex items-center gap-1.5 text-xs">
            <Clock size={12} />
            <span>{article.readTime} menit baca</span>
            <span className="mx-1 opacity-40">·</span>
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          {featured && (
            <span
              className="hidden md:inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color }}
            >
              Baca <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */
function ArtikelPage() {
  usePageMeta(
    'Artikel & Insight — SOYSU',
    'Baca artikel seputar gizi, inovasi susu kedelai, parenting, dan gaya hidup sehat dari tim SOYSU.',
  )

  const { kategori } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  const filtered = kategori
    ? articles.filter((a) => a.category === kategori)
    : articles

  const featured = articles[0]
  const listArticles = kategori ? filtered : articles.slice(1)

  const setKategori = (k: ArticleCategory | undefined) => {
    navigate({ search: k ? { kategori: k } : {} })
  }

  return (
    <PageTransition>
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="pt-28 pb-16 text-center relative overflow-hidden"
          style={{ backgroundColor: 'var(--color-cream-dark)' }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at 70% 30%, var(--color-green-light), transparent 50%), radial-gradient(circle at 30% 70%, var(--color-yellow), transparent 50%)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
            <AnimatedSection direction="up">
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-green)' }}
              >
                Artikel & Insight
              </p>
              <h1
                className="text-4xl sm:text-5xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
              >
                Baca, Pelajari, Hidup Lebih Sehat
              </h1>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                Dari edukasi gizi hingga tips wellness harian — konten berbasis riset untuk keluarga Indonesia.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">

          {/* ── Featured (only when no filter active) ─────────── */}
          {!kategori && (
            <AnimatedSection direction="up" className="mb-14">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'var(--color-green)' }}
              >
                Artikel Pilihan
              </p>
              <ArticleCard article={featured} featured />
            </AnimatedSection>
          )}

          {/* ── Category Tabs ─────────────────────────────────── */}
          <AnimatedSection direction="up" className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setKategori(undefined)}
                className="text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: !kategori ? 'var(--color-green)' : 'var(--color-cream-soft)',
                  color: !kategori ? 'white' : 'var(--color-brown)',
                  border: `1.5px solid ${!kategori ? 'var(--color-green)' : 'var(--color-cream-dark)'}`,
                }}
              >
                Semua
              </button>
              {ALL_CATEGORIES.map((cat) => {
                const active = kategori === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setKategori(cat)}
                    className="text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: active ? categoryColors[cat] : 'var(--color-cream-soft)',
                      color: active ? 'white' : 'var(--color-brown)',
                      border: `1.5px solid ${active ? categoryColors[cat] : 'var(--color-cream-dark)'}`,
                    }}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </AnimatedSection>

          {/* ── Article Grid ──────────────────────────────────── */}
          {listArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listArticles.map((article, i) => (
                <AnimatedSection key={article.slug} direction="up" delay={i * 0.08}>
                  <ArticleCard article={article} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg font-medium" style={{ color: 'var(--color-brown-soft)' }}>
                Belum ada artikel di kategori ini.
              </p>
            </div>
          )}
        </div>

        <CTASection />
      </main>
    </PageTransition>
  )
}
