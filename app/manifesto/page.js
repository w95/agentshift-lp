import { Cta, PageHead } from '@/components/ui'

export const metadata = {
  title: 'Manifesto',
  description:
    'Why we build Agentshift: reliability is infrastructure, privacy is a precondition, and an agent that does not learn is a liability.',
}

export default function ManifestoPage() {
  return (
    <>
      <PageHead
        eyebrow="Manifesto"
        title="Agents should earn trust before they earn autonomy"
        lead="Our why, and how."
      />

      <section className="section">
        <div className="wrap wrap-narrow prose">
          <p className="lead">
            The demo is easy. An agent books the meeting, writes the summary, files the
            ticket, and the room applauds. Then it meets the eighteenth edge case of a
            Tuesday afternoon and quietly does the wrong thing to a real customer.
          </p>
          <p className="lead">
            That gap — between an agent that works in a demo and an agent a company will
            actually let near its systems — is the only problem we are interested in.
          </p>

          <h2 className="h2" style={{ marginTop: 56 }}>
            Three things we believe
          </h2>

          <h3 className="h3">Reliability is infrastructure, not prompting</h3>
          <p>
            Teams are shipping agents held together by prompt tweaks and hope. Every other
            critical system in a company has contracts, tests, budgets, observability and
            rollback. Agents deserve the same, and until they have it they will keep being
            pilots that never graduate.
          </p>

          <h3 className="h3">Privacy is a precondition, not a tier</h3>
          <p>
            The work that benefits most from agents is the work companies are least willing
            to send to someone else&apos;s infrastructure: contracts, patient records,
            source code, financials. An agent platform that requires giving that up has
            excluded itself from the serious use cases.{' '}
            <span className="mark">Private deployment is the default here</span>, not an
            enterprise upsell.
          </p>

          <h3 className="h3">An agent that does not learn is a liability</h3>
          <p>
            Every correction a human makes to an agent&apos;s output is a lesson, and almost
            all of them are thrown away. We think the correction loop is the product. But
            learning has to be legible: a proposed change, an eval delta, a human approval.
            Agents that silently rewrite themselves are not improving, they are drifting.
          </p>

          <h2 className="h2" style={{ marginTop: 56 }}>
            What this means in practice
          </h2>
          <ul>
            <li>We ship evaluation before we ship autonomy.</li>
            <li>We make every agent action traceable and replayable.</li>
            <li>We run where your data already is.</li>
            <li>We show the diff before the agent changes.</li>
            <li>We would rather an agent escalate than guess.</li>
          </ul>
          <p>
            None of this is glamorous. It is the difference between a pilot and a production
            system.
          </p>
        </div>
      </section>

      <Cta
        title="Building agents that have to actually work?"
        text="We would like to hear what is breaking."
        primary={{ href: '/#start', label: 'Start building' }}
        secondary={{ href: 'mailto:hello@agentshift.ai', label: 'Tell us what broke' }}
      />
    </>
  )
}
