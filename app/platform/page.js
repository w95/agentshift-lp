import { Cta, PageHead, SectionHead } from '@/components/ui'

export const metadata = {
  title: 'Platform',
  description:
    'Build, evaluate and operate AI agents inside your own security perimeter. Guardrails, eval gates, replayable traces and a correction loop.',
}

const STAGES = [
  {
    n: '01',
    title: 'Build',
    body: 'Compose agents from tools, retrieval and policies. Version every change, diff behaviour between versions, roll back in one click.',
    fill: 'fill-lime',
  },
  {
    n: '02',
    title: 'Evaluate',
    body: 'Run agents against your own task suites before they reach a customer. Regressions block the deploy instead of surfacing in a support ticket.',
    fill: 'fill-violet',
  },
  {
    n: '03',
    title: 'Operate',
    body: 'Full traces for every run with cost, latency and tool-call breakdowns. Replay any failed run step by step against a new agent version.',
    fill: 'fill-blue',
  },
]

const SIGNALS = [
  ['Human corrections', 'Reviewer edits, thumbs-down, escalations', 'Eval suite and policy rules'],
  ['Task outcomes', 'Your downstream system of record', 'Tool selection and routing'],
  ['Failure traces', 'Runtime', 'Guardrails and retry logic'],
]

export default function PlatformPage() {
  return (
    <>
      <PageHead
        eyebrow="Platform"
        title="Everything an enterprise agent needs to survive production"
        lead="Agentshift gives engineering teams one place to build, evaluate, deploy and improve AI agents — inside their own security perimeter."
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid-3">
            {STAGES.map((s) => (
              <div key={s.n} className={`card ${s.fill}`}>
                <span className="badge" style={{ background: 'var(--panel)' }}>
                  {s.n}
                </span>
                <h2 className="h3">{s.title}</h2>
                <p className="body small">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" id="reliability">
        <div className="wrap">
          <SectionHead
            eyebrow="Reliability"
            title="Reliable by construction"
            lead="Most agent failures are not model failures — they are missing guardrails. Agentshift treats reliability as infrastructure, not prompt engineering."
          />
          <div className="grid grid-2">
            <div className="box pad">
              <h3 className="h4 mb-12">Deterministic tool contracts</h3>
              <p className="body small">
                Schema validation on both sides of every call. A malformed tool response
                fails loudly at the boundary instead of becoming a confident wrong answer.
              </p>
            </div>
            <div className="box pad">
              <h3 className="h4 mb-12">Budget and step ceilings</h3>
              <p className="body small">
                Per-run limits on steps, spend and wall-clock time. A looping agent gets
                stopped by the runtime, not discovered on next month&apos;s invoice.
              </p>
            </div>
            <div className="box pad">
              <h3 className="h4 mb-12">Escalation paths</h3>
              <p className="body small">
                Automatic retries with a defined hand-off to a human reviewer when
                confidence drops below your threshold.
              </p>
            </div>
            <div className="box pad">
              <h3 className="h4 mb-12">Continuous evaluation</h3>
              <p className="body small">
                Golden task suites run on every agent change, in CI and before every
                deploy. The gate is the default, not an opt-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="privacy">
        <div className="wrap">
          <div className="box fill-ink pad-lg">
            <SectionHead
              eyebrow="Privacy"
              title="Private by default"
              lead="Your prompts, documents and traces are the most sensitive data your company produces. They should not leave your perimeter to make an agent work."
            />
            <div className="grid grid-2">
              <div className="box pad" style={{ color: 'var(--ink)' }}>
                <h3 className="h4 mb-12">Deploy where your data lives</h3>
                <p className="body small">
                  Run Agentshift in your own VPC or on-premise. Model traffic can be pinned
                  to the providers and regions your policy allows.
                </p>
              </div>
              <div className="box pad" style={{ color: 'var(--ink)' }}>
                <h3 className="h4 mb-12">No training on your data</h3>
                <p className="body small">
                  Customer data is never used to train shared models. Retention windows are
                  configurable, down to zero-retention for regulated workloads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" id="learning">
        <div className="wrap">
          <SectionHead
            eyebrow="Self-learning"
            title="Self-learning, not self-drifting"
            lead="Agents should get better with every run. They should not change behaviour without anyone noticing."
          />
          <p className="body mb-24 maxw-60">
            Agentshift captures outcomes and human corrections from production, turns them
            into evaluation cases and training signal, and proposes an improved agent
            version. You review the diff and the eval delta before anything ships.
          </p>
          <div className="table-wrap">
            <table className="t">
              <thead>
                <tr>
                  <th>Signal</th>
                  <th>Source</th>
                  <th>What it improves</th>
                </tr>
              </thead>
              <tbody>
                {SIGNALS.map((row) => (
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

      <Cta
        title="Ready to put agents in production?"
        text="Create a workspace free, or talk to us about a private deployment in your own VPC."
      />
    </>
  )
}
