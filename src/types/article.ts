export type ArticleCategory =
  | 'Edukasi Gizi'
  | 'Inovasi & Teknologi'
  | 'Gaya Hidup & Wellness'
  | 'Keberlanjutan & Lingkungan'
  | 'Parenting & Nutrisi Anak'

export interface Article {
  slug: string
  title: string
  category: ArticleCategory
  tags: string[]
  readTime: number
  publishedAt: string
  author: string
  excerpt: string
  content: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}
