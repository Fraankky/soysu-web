import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <a href="#main-content" className="skip-to-main">Lewati ke konten utama</a>
      <Navbar />
      <div id="main-content">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </div>
      <Footer />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  )
}
