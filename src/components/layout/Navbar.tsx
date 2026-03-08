import { useState, useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navLinks, ctaLink } from '@/data/navigation'
import { company } from '@/data/company'
import { Button } from '@/components/ui/button'
import { MobileMenu } from './MobileMenu'

// Routes where navbar starts transparent (hero pages)
const TRANSPARENT_ROUTES = ['/']

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const routerState = useRouterState()
  const currentPath = routerState.location.pathname
  const isTransparentRoute = TRANSPARENT_ROUTES.includes(currentPath)
  const isTransparent = isTransparentRoute && !isScrolled

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [currentPath])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          'fixed top-0 inset-x-0 z-30 transition-all duration-300',
          isTransparent
            ? 'bg-transparent'
            : 'bg-(--color-cream)/90 backdrop-blur-md shadow-sm border-b border-(--color-cream-dark)/60'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-green) rounded-lg"
            >
              <span
                className={cn(
                  'font-display text-2xl font-extrabold tracking-tight transition-colors duration-300',
                  isTransparent ? 'text-white drop-shadow-sm' : 'text-(--color-green)'
                )}
              >
                {company.brand}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi utama">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 group',
                    isTransparent
                      ? 'text-white/90 hover:text-white hover:bg-white/10'
                      : 'text-(--color-brown) hover:text-(--color-green) hover:bg-(--color-cream-dark)'
                  )}
                  activeProps={{ 'data-active': 'true' }}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className={cn(
                            'absolute bottom-1 left-4 right-4 h-0.5 rounded-full',
                            isTransparent ? 'bg-white' : 'bg-(--color-green)'
                          )}
                        />
                      )}
                    </>
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button asChild variant={isTransparent ? 'ghost' : 'primary'} size="sm"
                className={isTransparent ? 'border-white text-white hover:bg-white hover:text-(--color-green)' : ''}
              >
                <Link to={ctaLink.to}>{ctaLink.label}</Link>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={cn(
                'md:hidden rounded-full p-2 transition-colors',
                isTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-(--color-brown) hover:bg-(--color-cream-dark)'
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Buka menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
