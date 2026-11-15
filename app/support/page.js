import { Cta, PageHead, SectionHead } from '@/components/ui'

export const metadata = {
  title: 'Support',
  description:
    'Support channels, response targets and security contact for Agentshift customers.',
}

const CHANNELS = [
  {
    title: 'Email support',
    email: 'support@agentshift.ai',
    body: 'Product questions, bugs and onboarding help.',
    fill: 'fill-lime',
  },
  {
    title: 'Talk to us',
    email: 'sales@agentshift.ai',
    body: 'Deployment models, procurement and security review.',
    fill: 'fill-violet',
  },
  {
    title: 'Report a vulnerability',
    email: 'security@agentshift.ai',
    body: 'We respond to every report and will not pursue good-faith researchers.',
    fill: 'fill-coral',
  },
]

const SLA = [
  ['Critical', 'Production agents down, or wrong output at scale', '1 business hour'],
  ['High', 'Major feature unusable, no workaround', '4 business hours'],
  ['Normal', 'Bug with a workaround, configuration help', '1 business day'],
  ['Low', 'Questions, feature requests', '3 business days'],
]

export default function SupportPage() {
  return (
    <>
      <PageHead
        eyebrow="Support"
        title="Get help from the people who built it"
        lead="Support goes straight to the engineering team. No tier-one queue, no ticket ping-pong."
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid-3">
            {CHANNELS.map((c) => (
              <a key={c.email} className={`card ${c.fill}`} href={`mailto:${c.email}`}>
                <h2 className="h3">{c.title}</h2>
                <p className="small" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  {c.email}
                </p>
                <p className="body small">{c.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <SectionHead
            title="Response targets"
            lead="Team and Enterprise customers get a shared Slack channel in addition to email."
          />
          <div className="table-wrap">
            <table className="t">
              <thead>
                <tr>
                  <th>Severity</th>
                  <th>Definition</th>
                  <th>First response</th>
                </tr>
              </thead>
              <tbody>
                {SLA.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="security">
        <div className="wrap">
          <div className="box fill-ink pad-lg">
            <SectionHead
              eyebrow="Security"
              title="Security & compliance"
              lead="Built for teams that have to answer to a security review before they can adopt anything."
            />
            <ul className="price-list" style={{ color: 'var(--paper)' }}>
              <li>Private deployment into your own VPC or on-premise environment.</li>
              <li>Encryption in transit and at rest; configurable retention, including zero-retention mode.</li>
              <li>Customer data is never used to train shared models.</li>
              <li>Role-based access control and full audit trails over every agent run.</li>
              <li>DPA available on request; SOC 2 Type II programme underway.</li>
            </ul>
            <p className="body mt-24">
              Need our security documentation for a review? Write to{' '}
              <a
                href="mailto:security@agentshift.ai"
                style={{ color: 'var(--lime)', textDecoration: 'underline' }}
              >
                security@agentshift.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Cta
        title="Not a customer yet?"
        text="Create a workspace on the free tier and see how far you get before you need us."
      />
    </>
  )
}
