'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Logo from '@/components/Logo'

const NAV = [
  { href: '/platform', label: 'Platform' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/manifesto', label: 'Manifesto' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the drawer on navigation, and never leave it open if the viewport
  // grows back to a width where the inline nav is visible.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const mq = window.matchMedia('(min-width: 940px)')
    const close = () => setOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [open])

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Logo size={26} />

        <nav className="nav">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} data-active={pathname === item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <Link href="/support" className="btn btn-ghost btn-sm hide-sm">
            Support
          </Link>
          <Link href="/#start" className="btn btn-primary btn-sm">
            Start building
          </Link>
          <button
            type="button"
            className="btn btn-sm menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mobile-nav" id="mobile-nav">
          <div className="wrap">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} data-active={pathname === item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/support">Support</Link>
            <Link href="/startups">Startup Program</Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
