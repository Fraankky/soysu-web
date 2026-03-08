import { Link } from '@tanstack/react-router'
import { Instagram, Music2, MessageCircle, Mail, MapPin } from 'lucide-react'
import { company } from '@/data/company'
import { navLinks } from '@/data/navigation'

export function Footer() {
  return (
    <footer className="bg-(--color-brown) text-white" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="block">
              <span className="font-display text-3xl font-extrabold text-(--color-yellow)">
                {company.brand}
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              {company.tagline}
            </p>
            <p className="text-xs text-white/50 leading-relaxed">
              {company.name}
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram SOYSU"
                className="rounded-full bg-white/10 p-2 hover:bg-(--color-yellow) hover:text-(--color-brown) transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={company.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok SOYSU"
                className="rounded-full bg-white/10 p-2 hover:bg-(--color-yellow) hover:text-(--color-brown) transition-colors"
              >
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Halaman
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-(--color-yellow) transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-(--color-yellow) transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>{company.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-(--color-yellow) transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{company.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Kantor
            </h3>
            <ul className="space-y-4">
              {company.offices.map((office) => (
                <li key={office.city} className="flex gap-2">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-white/40" />
                  <div>
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wide">
                      {office.label}
                    </p>
                    <p className="text-sm text-white/70 leading-snug">{office.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Halal Badge */}
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
              <span className="text-xs font-bold text-(--color-yellow)">HALAL</span>
              <span className="text-xs text-white/50">{company.halal}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
