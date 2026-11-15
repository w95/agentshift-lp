import { Cta, PageHead, SectionHead } from '@/components/ui'

export const metadata = {
  title: 'Careers',
  description:
    'Open roles at Agentshift. Small team, wide scope, remote and async-first across EU and US.',
}

const ROLES = [
  { title: 'Founding Engineer — Agent Runtime', meta: 'Engineering · Remote (EU / US) · Full-time' },
  { title: 'Engineer — Evaluation & Learning', meta: 'Engineering · Remote (EU / US) · Full-time' },
  { title: 'Infrastructure Engineer — Private Deployment', meta: 'Engineering · Remote (EU / US) · Full-time' },
  { title: 'Founding Design Engineer', meta: 'Design · Remote (EU / US) · Full-time' },
]

const HOW = [
  {
    title: 'Small team, wide scope',
    body: 'Everyone owns a surface end to end, from design through on-call. No tickets handed down a chain.',
    fill: 'card-accent accent-lime',
  },
  {
    title: 'Remote, async-first',
    body: 'Written decisions, few meetings, overlapping hours between EU and US. We optimise for long uninterrupted blocks.',
    fill: 'card-accent accent-violet',
  },
  {
    title: 'Paid work trial',
    body: 'Instead of a whiteboard gauntlet, we pay for a short scoped project on something we actually need.',
    fill: 'card-accent accent-blue',
  },
  {
    title: 'Real equity',
    body: 'Meaningful ownership, a long exercise window, and a straight answer about the cap table in the first conversation.',
    fill: 'card-accent accent-coral',
  },
]

function mailto(role) {
  return `mailto:careers@agentshift.ai?subject=${encodeURIComponent(role)}`
}

export default function CareersPage() {
  return (
    <>
      <PageHead
        eyebrow="Careers"
        title="Come build the boring parts of agents"
        lead="We are a small team working on evaluation, private deployment and the correction loop. The work is infrastructure, and it ships."
      />

      <section className="section">
        <div className="wrap">
          <SectionHead title="Open roles" />
          <div className="rows">
            {ROLES.map((role) => (
              <a key={role.title} className="rowitem" href={mailto(role.title)}>
                <span className="h4">{role.title}</span>
                <span className="small body">{role.meta}</span>
              </a>
            ))}
          </div>
          <p className="body mt-24">
            Nothing that fits? Write to{' '}
            <a href="mailto:careers@agentshift.ai" style={{ textDecoration: 'underline' }}>
              careers@agentshift.ai
            </a>{' '}
            and tell us what you would work on.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <SectionHead title="How we work" />
          <div className="grid grid-4">
            {HOW.map((item) => (
              <div key={item.title} className={`card ${item.fill}`}>
                <h3 className="h4">{item.title}</h3>
                <p className="body small">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta
        title="Interested but not ready to apply?"
        text="Watch what we ship. We hire mostly from people who have followed the work."
        primary={{ href: '/blog', label: 'Read the blog' }}
        secondary={{ href: 'mailto:careers@agentshift.ai', label: 'Say hello' }}
      />
    </>
  )
}
