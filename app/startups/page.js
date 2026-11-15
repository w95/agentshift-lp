import { Cta, PageHead, SectionHead } from '@/components/ui'

export const metadata = {
  title: 'Startup Program',
  description:
    'Credits, hands-on onboarding and direct support for early-stage teams building AI agents.',
}

const PERKS = [
  {
    n: '01',
    title: 'Platform credits',
    body: '12 months of Agentshift credits, sized to carry a real production workload rather than a demo.',
    fill: 'fill-lime',
  },
  {
    n: '02',
    title: 'Hands-on onboarding',
    body: 'An engineer from our team helps you build your first evaluation suite and ship your first guarded agent.',
    fill: 'fill-violet',
  },
  {
    n: '03',
    title: 'Shared Slack channel',
    body: 'Direct access to the people building the platform, with the same response targets as enterprise teams.',
    fill: 'fill-blue',
  },
]

const STEPS = [
  ['1. Create a workspace', 'Takes a minute, free tier'],
  ['2. Send us what you are building', 'startups@agentshift.ai · a few paragraphs is fine'],
  ['3. Short call, then credits', 'Usually within a week'],
]

export default function StartupsPage() {
  return (
    <>
      <PageHead
        eyebrow="Startup Program"
        title="Agent infrastructure before the enterprise contract"
        lead="Early-stage teams hit the same reliability wall as large ones, with none of the headcount. This program gives you the platform at a price that fits a seed round."
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid-3">
            {PERKS.map((p) => (
              <div key={p.n} className={`card ${p.fill}`}>
                <span className="badge" style={{ background: 'var(--panel)' }}>
                  {p.n}
                </span>
                <h2 className="h3">{p.title}</h2>
                <p className="body small">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <SectionHead title="Who qualifies" />
              <ul className="price-list">
                <li>Founded within the last five years.</li>
                <li>Raised less than $10M in total funding.</li>
                <li>Building a product where an AI agent does real work for a customer.</li>
                <li>Not an existing Agentshift customer.</li>
              </ul>
              <p className="body small mt-24">
                Accelerator and VC partners can refer their portfolio directly — write to{' '}
                <a href="mailto:startups@agentshift.ai" style={{ textDecoration: 'underline' }}>
                  startups@agentshift.ai
                </a>
                .
              </p>
            </div>

            <div>
              <SectionHead title="How to apply" />
              <div className="rows">
                {STEPS.map(([title, meta]) => (
                  <div key={title} className="rowitem">
                    <span className="h4">{title}</span>
                    <span className="small body">{meta}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta
        title="Early-stage and shipping agents?"
        text="Create a workspace, then email startups@agentshift.ai so we can fast-track you."
        primary={{ href: '/#start', label: 'Start building' }}
        secondary={{ href: 'mailto:startups@agentshift.ai', label: 'Apply to the program' }}
      />
    </>
  )
}
