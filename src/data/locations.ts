import type { Location } from '@/types/location'

export const locations: Location[] = [
  {
    id: 'surabaya',
    label: 'Kantor Utama',
    type: 'office',
    city: 'Surabaya',
    address: 'Pondok Benowo Indah Blok EU-9, Pakal, Surabaya',
    mapsUrl: 'https://maps.google.com/?q=Pondok+Benowo+Indah+Blok+EU-9+Pakal+Surabaya',
    whatsapp: 'https://wa.me/6285806212929',
  },
  {
    id: 'semarang',
    label: 'Kantor Cabang',
    type: 'office',
    city: 'Semarang',
    address: 'Jl. Klentengsari Selatan 1 No 1, Pedalangan, Banyumanik, Semarang',
    mapsUrl: 'https://maps.google.com/?q=Jl+Klentengsari+Selatan+1+No+1+Pedalangan+Banyumanik+Semarang',
    whatsapp: 'https://wa.me/6285806212929',
  },
]
