export interface Location {
  id: string
  label: string
  type: 'office' | 'reseller'
  city: string
  address: string
  mapsUrl?: string
  whatsapp?: string
}
