export type ProductSlug = 'original' | 'matcha' | 'taro' | 'stroberi' | 'coklat'

export interface NutritionItem {
  label: string
  value: string
  isCheck?: boolean
}

export interface ServingSuggestion {
  title: string
  description: string
}

export interface ProductSeo {
  title: string
  description: string
  keywords: string[]
}

export interface Product {
  slug: ProductSlug
  name: string
  tagline: string
  shortDescription: string
  longDescription: string
  color: string
  bgColor: string
  accentColor?: string
  badges: string[]
  ingredients: string
  nutrition: NutritionItem[]
  servingSuggestions: ServingSuggestion[]
  sizes: string[]
  suitableFor: string[]
  seo: ProductSeo
}
