import Link from 'next/link'

export function PageHead({ eyebrow, title, lead, children }) {
  return (
    <section className="pagehead">
      <div className="wrap">
        {eyebrow ? (
          <span className="pill fill-lime mb-24" style={{ display: 'inline-flex' }}>
            {eyebrow}
          </span>
        ) : null}
        <h1 className="h1 mb-24" style={{ maxWidth: '18ch' }}>
          {title}
        </h1>
        {lead ? <p className="lead body">{lead}</p> : null}
        {children}
      </div>
    </section>
  )
}

export function SectionHead({ eyebrow, title, lead, center = false }) {
  return (
    <div className={`section-head${center ? ' center' : ''}`}>
      {eyebrow ? <p className="mono-label mb-12">{eyebrow}</p> : null}
      <h2 className="h2 mb-12">{title}</h2>
      {lead ? <p className="lead body">{lead}</p> : null}
    </div>
  )
}

export function Cta({
  title = 'Ready to put agents in production?',
  text = 'Start free, or talk to us about a private deployment inside your own VPC.',
  primary = { href: '/#start', label: 'Start building' },
  secondary = { href: 'mailto:sales@agentshift.ai', label: 'Talk to us' },
}) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta">
          <h2 className="h2 mb-12">{title}</h2>
          <p className="lead mb-24">{text}</p>
          <div className="row gap-12" style={{ justifyContent: 'center' }}>
            <Link href={primary.href} className="btn btn-lg fill-ink" style={{ color: 'var(--paper)' }}>
              {primary.label}
            </Link>
            {secondary ? (
              <a href={secondary.href} className="btn btn-lg">
                {secondary.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
