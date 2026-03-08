export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Produk', to: '/produk' },
  { label: 'Mengapa SOYSU', to: '/mengapa-soysu' },
  { label: 'Tentang Kami', to: '/tentang-kami' },
  { label: 'Artikel', to: '/artikel' },
  { label: 'Temukan Kami', to: '/temukan-kami' },
]

export const ctaLink: NavLink = { label: 'Hubungi Kami', to: '/kontak' }
