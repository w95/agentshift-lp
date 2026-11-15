import Link from 'next/link'

const MARK =
  'M20 4V16.3604C20 19.087 16.6569 20.3998 14.8016 18.4017L7 10M40 24H27.6396C24.913 24 23.6002 20.6569 25.5983 18.8016L34 11M20 44V31.6396C20 28.913 23.3431 27.6002 25.1984 29.5983L33 38M0 24L12.3604 24C15.087 24 16.3998 27.3431 14.4017 29.1984L6 37'

/**
 * Icon mark drawn inline plus a live-text wordmark.
 *
 * Inlining the SVG is what makes `currentColor` work: an SVG loaded through
 * <img> is an isolated document and never inherits the page's colour, which is
 * why the footer logo previously rendered black-on-black. Both the mark and
 * the wordmark now take the colour of whatever they sit in, so the dark footer
 * and the light header share one component with no variants and no image files.
 */
export default function Logo({ size = 26, href = '/', className = '' }) {
  const content = (
    <>
      <svg
        viewBox="0 0 40 48"
        width={(size * 40) / 48}
        height={size}
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d={MARK} stroke="currentColor" strokeWidth="4" />
      </svg>
      <span className="logo-word">Agentshift</span>
    </>
  )

  if (!href) {
    return <span className={`logo ${className}`}>{content}</span>
  }

  return (
    <Link href={href} className={`logo ${className}`} aria-label="Agentshift — home">
      {content}
    </Link>
  )
}
