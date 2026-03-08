import { createFileRoute } from '@tanstack/react-router'
import { usePageMeta } from '@/hooks/usePageMeta'
import { PageTransition } from '@/components/ui/PageTransition'
import { HeroSection } from '@/components/home/HeroSection'
import { TrustStrip } from '@/components/home/TrustStrip'
import { ProductsCarousel } from '@/components/home/ProductsCarousel'
import { BrandStory } from '@/components/home/BrandStory'
import { WhySoysuPreview } from '@/components/home/WhySoysuPreview'
import { ArticlesPreview } from '@/components/home/ArticlesPreview'
import { CTASection } from '@/components/home/CTASection'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  usePageMeta(
    'SOYSU — Susu Kedelai Premium Indonesia',
    'Susu kedelai creamy, bebas langu, bebas laktosa. Diolah dengan teknologi ultrafiltrasi eksklusif. Halal bersertifikat. Cocok untuk seluruh keluarga Indonesia.',
  )

  return (
    <PageTransition>
      <main>
        <HeroSection />
        <TrustStrip />
        <ProductsCarousel />
        <BrandStory />
        <WhySoysuPreview />
        <ArticlesPreview />
        <CTASection />
      </main>
    </PageTransition>
  )
}
