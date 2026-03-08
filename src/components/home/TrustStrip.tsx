import { motion } from 'framer-motion'

const items = [
  'Halal MUI',
  'Bebas Pengawet',
  'Non-GMO',
  'Bebas Laktosa',
  'PT Terdaftar',
  'Ultrafiltrasi',
  'Tanpa Pewarna Buatan',
  'Produksi Lokal',
]

// Duplicate for seamless loop
const marqueeItems = [...items, ...items]

export function TrustStrip() {
  return (
    <div
      className="w-full overflow-hidden py-4 select-none"
      style={{ backgroundColor: 'var(--color-brown)' }}
      aria-label="Trust badges"
    >
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        {marqueeItems.map((item, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            <span
              className="text-sm font-semibold uppercase tracking-widest whitespace-nowrap"
              style={{ color: 'var(--color-cream)' }}
            >
              {item}
            </span>
            <span className="text-base" style={{ color: 'var(--color-yellow)' }}>
              ·
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
