import { motion, type Variants } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { company } from '@/data/company'
import { heroSoysu } from '@/assets/images'

const blobs = [
  { color: '#2D6A4F', size: 320, top: '-10%', left: '-8%', opacity: 0.12, delay: 0 },
  { color: '#F4C95D', size: 200, top: '60%', left: '-4%', opacity: 0.18, delay: 1.2 },
  { color: '#52B788', size: 260, top: '10%', right: '-6%', opacity: 0.14, delay: 0.6 },
  { color: '#C8A96E', size: 180, bottom: '-8%', right: '10%', opacity: 0.15, delay: 1.8 },
]


const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, var(--color-cream-soft) 0%, var(--color-cream-dark) 100%)' }}>
      {/* Floating blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: blob.size,
            height: blob.size,
            backgroundColor: blob.color,
            opacity: blob.opacity,
            top: blob.top,
            left: (blob as any).left,
            right: (blob as any).right,
            bottom: (blob as any).bottom,
            filter: 'blur(60px)',
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: blob.delay, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen lg:py-24">
          {/* Text side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6 text-left"
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{
                color: 'var(--color-green)',
                backgroundColor: 'rgba(45,106,79,0.08)',
                border: '1px solid rgba(45,106,79,0.2)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: 'var(--color-green)', boxShadow: '0 0 0 3px rgba(45,106,79,0.25)' }}
              />
              Minuman Sehat untuk Seluruh Keluarga
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brown)' }}
            >
              Lezat, Bergizi,{' '}
              <span style={{ color: 'var(--color-green)' }}>Baik untuk Tubuhmu.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed max-w-lg"
              style={{ color: 'var(--color-brown-soft)' }}
            >
              SOYSU adalah susu kedelai yang enak diminum setiap hari —
              kaya protein nabati, tidak bikin kenyang berat, dan aman
              untuk seluruh anggota keluarga, dari anak-anak hingga orang tua.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <Button variant="primary" size="lg" asChild>
                <Link to="/produk">Lihat Pilihan Rasa</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={company.whatsapp} target="_blank" rel="noopener noreferrer">
                  Pesan Sekarang
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              {['✓ Halal & Terjamin', '✓ Kaya Protein', '✓ Tanpa Bahan Pengawet', '✓ Aman untuk Anak'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    color: 'var(--color-brown)',
                    backgroundColor: 'rgba(95,70,51,0.06)',
                    border: '1px solid rgba(95,70,51,0.14)',
                  }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center relative h-80 lg:h-[520px]"
          >
            <motion.img
              src={heroSoysu}
              alt="5 varian produk SOYSU — Original, Matcha, Taro, Stroberi, Coklat"
              className="w-full h-full object-contain drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1"
          style={{ borderColor: 'var(--color-brown-soft)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ backgroundColor: 'var(--color-brown-soft)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
