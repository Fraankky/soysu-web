import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Clock, Calendar, User, ChevronRight, MessageCircle } from 'lucide-react'
import { articles } from '@/data/articles'
import type { ArticleCategory } from '@/types/article'
import { PageTransition } from '@/components/ui/PageTransition'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/button'
import { company } from '@/data/company'

export const Route = createFileRoute('/artikel/$slug')({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug)
    if (!article) throw notFound()
    return { article }
  },
  component: ArtikelDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <h1
        className="text-3xl font-bold"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
      >
        Artikel tidak ditemukan
      </h1>
      <Button variant="primary" asChild>
        <Link to="/artikel">Kembali ke Semua Artikel</Link>
      </Button>
    </div>
  ),
})

/* ─── Constants ──────────────────────────────────────────────── */
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

/* ─── Page ───────────────────────────────────────────────────── */
function ArtikelDetailPage() {
  const { article } = Route.useLoaderData()
  const color = categoryColors[article.category]
  const bg = categoryBg[article.category]

  usePageMeta(article.title, article.excerpt)

  // Related: same category first, then others, max 3
  const related = [
    ...articles.filter((a) => a.slug !== article.slug && a.category === article.category),
    ...articles.filter((a) => a.slug !== article.slug && a.category !== article.category),
  ].slice(0, 3)

  return (
    <PageTransition>
      <main style={{ backgroundColor: 'var(--color-cream)' }}>

        {/* ── Hero Image Area ───────────────────────────────────── */}
        <div
          className="w-full h-64 md:h-80 relative overflow-hidden"
          style={{ backgroundColor: bg }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse at 30% 60%, ${color}55, transparent 70%)` }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

            {/* ── Main content ────────────────────────────────── */}
            <article className="flex-1 min-w-0">
              {/* Header card */}
              <AnimatedSection direction="up">
                <div
                  className="rounded-3xl p-7 md:p-10 mb-8"
                  style={{
                    backgroundColor: 'var(--color-cream-soft)',
                    boxShadow: 'var(--shadow-hover)',
                  }}
                >
                  {/* Breadcrumb */}
                  <nav className="flex items-center gap-1.5 text-xs mb-6 flex-wrap" style={{ color: 'var(--color-brown-soft)' }}>
                    <Link to="/" className="hover:opacity-70">Home</Link>
                    <ChevronRight size={12} />
                    <Link to="/artikel" className="hover:opacity-70">Artikel</Link>
                    <ChevronRight size={12} />
                    <Link
                      to="/artikel"
                      search={{ kategori: article.category }}
                      className="hover:opacity-70"
                    >
                      {article.category}
                    </Link>
                    <ChevronRight size={12} />
                    <span className="line-clamp-1 max-w-[180px]">{article.title}</span>
                  </nav>

                  {/* Category badge */}
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full text-white mb-4"
                    style={{ backgroundColor: color }}
                  >
                    {article.category}
                  </span>

                  {/* Title */}
                  <h1
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                  >
                    {article.title}
                  </h1>

                  {/* Meta */}
                  <div
                    className="flex flex-wrap items-center gap-4 text-sm pb-6 border-b"
                    style={{ color: 'var(--color-brown-soft)', borderColor: 'var(--color-cream-dark)' }}
                  >
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {formatDate(article.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {article.readTime} menit baca
                    </span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Article body */}
              <AnimatedSection direction="up" delay={0.1}>
                <div
                  className="rounded-3xl p-7 md:p-10"
                  style={{
                    backgroundColor: 'var(--color-cream-soft)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div
                    className="article-prose"
                    style={{ color: 'var(--color-brown-soft)' }}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>
              </AnimatedSection>

              {/* Tags */}
              <AnimatedSection direction="up" delay={0.15} className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'var(--color-cream-dark)',
                        color: 'var(--color-brown)',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              {/* Article CTA */}
              <AnimatedSection direction="up" delay={0.2} className="mt-8">
                <div
                  className="rounded-3xl p-7 flex flex-col sm:flex-row sm:items-center gap-5"
                  style={{ backgroundColor: 'var(--color-green)', boxShadow: 'var(--shadow-card)' }}
                >
                  <div className="flex-1">
                    <p
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Sudah siap mencoba SOYSU?
                    </p>
                    <p className="text-sm text-white/80">
                      Buktikan manfaat yang kamu baca — langsung rasakan bedanya.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Button
                      size="sm"
                      asChild
                      style={{
                        backgroundColor: 'var(--color-yellow)',
                        color: 'var(--color-brown)',
                        borderRadius: 'var(--radius-pill)',
                      }}
                    >
                      <Link to="/produk">Lihat Produk</Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        color: 'white',
                        borderRadius: 'var(--radius-pill)',
                        border: '1.5px solid rgba(255,255,255,0.35)',
                      }}
                    >
                      <a
                        href={company.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-1.5"
                      >
                        <MessageCircle size={14} />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </article>

            {/* ── Sidebar ─────────────────────────────────────── */}
            <aside className="w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-24 flex flex-col gap-5">
              {/* Try SOYSU card */}
              <AnimatedSection direction="right" delay={0.15}>
                <div
                  className="rounded-3xl p-6 flex flex-col gap-4"
                  style={{
                    backgroundColor: 'var(--color-cream-soft)',
                    boxShadow: 'var(--shadow-card)',
                    border: '1px solid var(--color-cream-dark)',
                  }}
                >
                  {/* Product mini visual */}
                  <div
                    className="h-28 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: 'rgba(45,106,79,0.08)' }}
                  >
                    <div
                      className="absolute w-24 h-24 rounded-full opacity-20"
                      style={{ backgroundColor: 'var(--color-green)' }}
                    />
                    <div
                      className="relative z-10 w-10 h-24 rounded-xl flex items-end justify-center pb-2"
                      style={{
                        background: 'linear-gradient(155deg, var(--color-green) 0%, var(--color-green-light) 100%)',
                        border: '2px solid rgba(255,255,255,0.5)',
                      }}
                    >
                      <span className="text-[8px] font-bold text-white/90" style={{ writingMode: 'vertical-rl' }}>
                        SOYSU
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold mb-1"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                    >
                      Coba SOYSU
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-brown-soft)' }}>
                      5 varian rasa — creamy, bebas langu, bebas laktosa. Untuk seluruh keluarga.
                    </p>
                  </div>
                  <Button variant="primary" size="sm" asChild className="w-full">
                    <Link to="/produk">Lihat Semua Produk</Link>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Related articles */}
              {related.length > 0 && (
                <AnimatedSection direction="right" delay={0.25}>
                  <div
                    className="rounded-3xl p-6 flex flex-col gap-4"
                    style={{
                      backgroundColor: 'var(--color-cream-soft)',
                      boxShadow: 'var(--shadow-card)',
                      border: '1px solid var(--color-cream-dark)',
                    }}
                  >
                    <h3
                      className="text-sm font-bold uppercase tracking-wider"
                      style={{ color: 'var(--color-brown)' }}
                    >
                      Artikel Terkait
                    </h3>
                    <div className="flex flex-col gap-4">
                      {related.map((rel) => {
                        const relColor = categoryColors[rel.category]
                        return (
                          <Link
                            key={rel.slug}
                            to="/artikel/$slug"
                            params={{ slug: rel.slug }}
                            className="group flex flex-col gap-1.5"
                          >
                            <span
                              className="text-xs font-semibold"
                              style={{ color: relColor }}
                            >
                              {rel.category}
                            </span>
                            <span
                              className="text-sm font-medium leading-snug group-hover:opacity-70 transition-opacity line-clamp-2"
                              style={{ color: 'var(--color-brown)' }}
                            >
                              {rel.title}
                            </span>
                            <span className="text-xs flex items-center gap-1" style={{ color: 'var(--color-brown-soft)' }}>
                              <Clock size={10} />
                              {rel.readTime} menit
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                    <Button variant="ghost" size="sm" asChild className="w-full mt-1">
                      <Link to="/artikel">Semua Artikel</Link>
                    </Button>
                  </div>
                </AnimatedSection>
              )}
            </aside>
          </div>

          {/* ── Related Articles (bottom) ────────────────────── */}
          {related.length > 0 && (
            <div className="mt-16">
              <AnimatedSection direction="up" className="mb-6">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--color-green)' }}
                >
                  Baca Juga
                </p>
                <h2
                  className="text-2xl font-bold mt-1"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                >
                  Artikel Lainnya
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((rel, i) => {
                  const relColor = categoryColors[rel.category]
                  const relBg = categoryBg[rel.category]
                  return (
                    <AnimatedSection key={rel.slug} direction="up" delay={i * 0.1}>
                      <Link
                        to="/artikel/$slug"
                        params={{ slug: rel.slug }}
                        className="group flex flex-col rounded-2xl overflow-hidden transition-shadow hover:shadow-lg h-full"
                        style={{
                          backgroundColor: 'var(--color-cream-soft)',
                          boxShadow: 'var(--shadow-card)',
                          border: '1px solid var(--color-cream-dark)',
                        }}
                      >
                        <div
                          className="h-36 relative overflow-hidden"
                          style={{ backgroundColor: relBg }}
                        >
                          <div
                            className="absolute inset-0 opacity-25 group-hover:scale-105 transition-transform duration-500"
                            style={{ background: `radial-gradient(circle at 30% 50%, ${relColor}, transparent 70%)` }}
                          />
                          <span
                            className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                            style={{ backgroundColor: relColor }}
                          >
                            {rel.category}
                          </span>
                        </div>
                        <div className="p-4 flex flex-col gap-2 flex-1">
                          <h3
                            className="text-sm font-bold leading-snug line-clamp-2"
                            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
                          >
                            {rel.title}
                          </h3>
                          <p className="text-xs" style={{ color: 'var(--color-brown-soft)' }}>
                            {rel.readTime} menit baca
                          </p>
                        </div>
                      </Link>
                    </AnimatedSection>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Prose styles injected globally via style tag */}
        <style>{`
          .article-prose h2 {
            font-family: var(--font-display);
            font-size: 1.375rem;
            font-weight: 700;
            color: var(--color-brown);
            margin-top: 2rem;
            margin-bottom: 0.75rem;
          }
          .article-prose h3 {
            font-family: var(--font-display);
            font-size: 1.125rem;
            font-weight: 700;
            color: var(--color-brown);
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
          }
          .article-prose p {
            line-height: 1.8;
            margin-bottom: 1rem;
          }
          .article-prose strong {
            font-weight: 700;
            color: var(--color-brown);
          }
          .article-prose ul {
            list-style: disc;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
          }
          .article-prose li {
            line-height: 1.7;
            margin-bottom: 0.4rem;
          }
          .article-prose em { font-style: italic; }
          .article-prose table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.25rem 0;
            font-size: 0.875rem;
            border-radius: 0.75rem;
            overflow: hidden;
          }
          .article-prose th {
            background-color: var(--color-green);
            color: white;
            font-weight: 600;
            padding: 0.6rem 0.9rem;
            text-align: left;
          }
          .article-prose td {
            padding: 0.55rem 0.9rem;
            border-bottom: 1px solid var(--color-cream-dark);
            color: var(--color-brown-soft);
          }
          .article-prose tr:nth-child(even) td {
            background-color: var(--color-cream);
          }
        `}</style>
      </main>
    </PageTransition>
  )
}
