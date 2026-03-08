import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { navLinks, ctaLink } from '@/data/navigation'
import { company } from '@/data/company'
import { Button } from '@/components/ui/button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-80 bg-(--color-cream) flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-(--color-cream-dark)">
              <span className="font-display text-xl font-bold text-(--color-green)">
                {company.brand}
              </span>
              <button
                onClick={onClose}
                aria-label="Tutup menu"
                className="rounded-full p-2 hover:bg-(--color-cream-dark) transition-colors"
              >
                <X className="h-5 w-5 text-(--color-brown)" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-(--color-brown) hover:bg-(--color-cream-dark) hover:text-(--color-green) transition-colors"
                  activeProps={{ className: 'bg-(--color-cream-dark) text-(--color-green) font-semibold' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Footer */}
            <div className="px-6 py-6 border-t border-(--color-cream-dark) space-y-3">
              <Button asChild variant="primary" size="lg" className="w-full">
                <Link to={ctaLink.to} onClick={onClose}>
                  {ctaLink.label}
                </Link>
              </Button>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-(--color-brown-soft) hover:text-(--color-green) transition-colors"
              >
                <span>WhatsApp: {company.phone}</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
