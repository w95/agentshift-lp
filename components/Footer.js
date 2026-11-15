import Link from 'next/link'
import Logo from '@/components/Logo'

// Static so the footer stays fully prerenderable (reading the clock at render
// time opts the whole tree out of static generation under Cache Components).
const COPYRIGHT_YEAR = 2026

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { href: '/platform', label: 'Platform' },
      { href: '/platform#reliability', label: 'Reliability' },
      { href: '/platform#privacy', label: 'Private deployment' },
      { href: '/platform#learning', label: 'Self-learning' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/support', label: 'Support' },
      { href: '/startups', label: 'Startup Program' },
      { href: '/support#security', label: 'Security' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/manifesto', label: 'Manifesto' },
      { href: '/careers', label: 'Careers' },
      { href: 'mailto:sales@agentshift.ai', label: 'Talk to us' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms & Conditions' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo size={28} />
            <p className="small mt-16" style={{ color: 'rgba(255,248,236,.7)', maxWidth: '34ch' }}>
              Infrastructure for agents that have to actually work. Built for teams that
              answer to a security review.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {COPYRIGHT_YEAR} Agentshift, Inc. All rights reserved.</p>
          <p className="row gap-16">
            <a href="https://www.linkedin.com/company/agentshift" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/agentshift" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
