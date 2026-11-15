import Link from 'next/link'
import PricingGrid from '@/components/PricingGrid'
import Rotator from '@/components/Rotator'
import SignupForm from '@/components/SignupForm'
import { Cta, SectionHead } from '@/components/ui'

const TICKER = [
  'evaluation suites',
  'private VPC deployment',
  'full run traces',
  'budget ceilings',
  'human-in-the-loop',
  'correction loop',
  'audit trails',
  'zero retention mode',
]

const TIERS = [
  {
    name: 'Cloud',
    who: 'Prototypes, internal tools, first production agent',
    where: 'Agentshift multi-tenant',
    setup: 'Minutes',
  },
  {
    name: 'Private VPC',
    who: 'Regulated data, customer-facing agents, security review passed',
    where: 'Your AWS / GCP / Azure account',
    setup: '1–2 days',
  },
  {
    name: 'On-prem',
    who: 'Air-gapped environments, defence, public sector',
    where: 'Your hardware',
    setup: 'Scoped with us',
  },
]

const FEATURES = [
  {
    title: 'Model agnostic',
    body: 'Anthropic, OpenAI, Google, or an open model you host. Swap providers per step without rewriting the agent.',
    fill: 'fill-lime',
  },
  {
    title: 'Evals as a gate',
    body: 'Every agent change runs against your task suite. Regressions block the deploy instead of reaching a customer.',
    fill: 'fill-violet',
  },
  {
    title: 'Replayable traces',
    body: 'Every run recorded step by step, with cost, latency and tool calls. Replay a failure against a new version.',
    fill: 'fill-blue',
  },
  {
    title: 'Hard budgets',
    body: 'Step, spend and wall-clock ceilings per run. A looping agent gets stopped, not discovered on the invoice.',
    fill: 'fill-coral',
  },
]

const LOGOS = [
  { name: 'Northwind', what: 'Claims triage for insurers' },
  { name: 'Lumen Legal', what: 'Contract review at scale' },
  { name: 'Parcelworks', what: 'Logistics exception handling' },
  { name: 'Finch Health', what: 'Clinical documentation' },
]

export default function HomePage() {
  return (
    <>
      {/* ----------------------------------------------------------- hero */}
      <section className="section" style={{ paddingBottom: 56 }}>
        <div className="wrap center">
          <p className="mono-label mb-24">Infrastructure for trustworthy agents</p>

          <h1 className="display mb-24" style={{ maxWidth: '16ch', marginInline: 'auto' }}>
            AI agents that are{' '}
            <Rotator words={['reliable', 'private', 'self-learning']} />
          </h1>

          <p className="lead body mx-auto maxw-60 mb-24">
            Agentshift is the enterprise platform for building, evaluating and operating AI
            agents — inside your own security perimeter.
          </p>

          <div className="row gap-12 mb-40" style={{ justifyContent: 'center' }}>
            <Link href="/#start" className="btn btn-primary btn-lg">
              Start building free
            </Link>
            <Link href="/platform" className="btn btn-lg">
              See the platform →
            </Link>
          </div>
        </div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>
              {TICKER.map((t) => (
                <span key={t}>{t} ✦</span>
              ))}
            </span>
            <span>
              {TICKER.map((t) => (
                <span key={`${t}-dup`}>{t} ✦</span>
              ))}
            </span>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- code + metric */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead
            eyebrow="Drop-in SDK"
            title="Define the agent. Keep the guardrails."
            lead="Ten lines to a guarded, traced, evaluated agent. No bespoke orchestration layer to maintain."
          />

          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div className="code">
              <div className="code-bar">
                <span className="code-dot fill-coral" />
                <span className="code-dot fill-lime" />
                <span className="code-dot fill-violet" />
                <span style={{ marginLeft: 6 }}>triage_agent.py</span>
              </div>
              <pre>
                <code>
                  <span className="tok-key">from</span> agentshift <span className="tok-key">import</span> Agent, Budget{'\n'}
                  {'\n'}
                  agent = <span className="tok-fn">Agent</span>({'\n'}
                  {'    '}name=<span className="tok-str">&quot;claims-triage&quot;</span>,{'\n'}
                  {'    '}model=<span className="tok-str">&quot;claude-opus-5&quot;</span>,{'\n'}
                  {'    '}tools=[lookup_policy, open_ticket],{'\n'}
                  {'    '}budget=<span className="tok-fn">Budget</span>(steps=<span className="tok-str">12</span>, usd=<span className="tok-str">0.40</span>),{'\n'}
                  {'    '}on_low_confidence=<span className="tok-str">&quot;escalate&quot;</span>,{'\n'}
                  ){'\n'}
                  {'\n'}
                  <span className="tok-com"># blocks the deploy if the suite regresses</span>{'\n'}
                  agent.<span className="tok-fn">evaluate</span>(suite=<span className="tok-str">&quot;golden/claims-v4&quot;</span>){'\n'}
                  agent.<span className="tok-fn">deploy</span>(env=<span className="tok-str">&quot;vpc-eu-west&quot;</span>)
                </code>
              </pre>
            </div>

            <div className="stack gap-16">
              <div className="box pad">
                <p className="mono-label mb-12">What you get on every run</p>
                <div className="grid grid-2" style={{ gap: 18 }}>
                  <div className="stat">
                    <span className="stat-num">100%</span>
                    <span className="small body">of runs traced and replayable</span>
                  </div>
                  <div className="stat">
                    <span className="stat-num">12</span>
                    <span className="small body">step ceiling, enforced in the runtime</span>
                  </div>
                  <div className="stat">
                    <span className="stat-num">$0.40</span>
                    <span className="small body">hard spend cap per run</span>
                  </div>
                  <div className="stat">
                    <span className="stat-num">0</span>
                    <span className="small body">bytes of prompt data leaving your VPC</span>
                  </div>
                </div>
              </div>

              <div className="box fill-ink pad">
                <p className="h3 mb-12" style={{ color: 'var(--lime)' }}>
                  Escalation beats guessing
                </p>
                <p className="body">
                  When confidence drops below your threshold, the agent hands off to a
                  reviewer instead of inventing an answer. The correction it gets back
                  becomes an eval case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- deploy tiers */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Deployment"
            title="Run it where your data already lives"
            lead="Same platform, same SDK. The only thing that changes is which perimeter it runs inside."
          />

          <div className="table-wrap">
            <table className="t">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Built for</th>
                  <th>Runs in</th>
                  <th>Time to first agent</th>
                </tr>
              </thead>
              <tbody>
                {TIERS.map((tier) => (
                  <tr key={tier.name}>
                    <td>{tier.name}</td>
                    <td>{tier.who}</td>
                    <td>{tier.where}</td>
                    <td>{tier.setup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- features */}
      <section className="section-tight">
        <div className="wrap">
          <div className="grid grid-4">
            {FEATURES.map((f) => (
              <div key={f.title} className={`card ${f.fill}`}>
                <h3 className="h3">{f.title}</h3>
                <p className="body small">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ scale */}
      <section className="section">
        <div className="wrap">
          <div className="box fill-violet pad-lg">
            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div>
                <h2 className="h2 mb-12">Scale past the pilot</h2>
                <p className="lead">
                  One agent or ten thousand concurrent runs. Queue depth, retries and
                  provider failover are the platform&apos;s problem, not your on-call
                  engineer&apos;s.
                </p>
              </div>
              <div className="grid grid-2" style={{ gap: 16 }}>
                <div className="box box-sm pad">
                  <span className="stat-num">10k+</span>
                  <p className="small body">concurrent agent runs per workspace</p>
                </div>
                <div className="box box-sm pad">
                  <span className="stat-num">99.9%</span>
                  <p className="small body">uptime SLA on Team and Enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- social proof */}
      <section className="section-tight">
        <div className="wrap">
          <SectionHead center title="Teams running agents on real work" />

          <div className="grid grid-4 mb-40">
            {LOGOS.map((l) => (
              <div key={l.name} className="card center">
                <h3 className="h4">{l.name}</h3>
                <p className="small body">{l.what}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-2">
            <figure className="box pad-lg" style={{ margin: 0 }}>
              <blockquote className="lead mb-24">
                “We had three agents stuck in pilot for a year because security would not
                sign off. Private deployment closed that in a week.”
              </blockquote>
              <figcaption className="small body">
                <strong>Head of Platform</strong> — Northwind
              </figcaption>
            </figure>
            <figure className="box pad-lg" style={{ margin: 0 }}>
              <blockquote className="lead mb-24">
                “The eval gate is the whole thing. We ship agent changes on a Friday now,
                which we would not have said out loud last year.”
              </blockquote>
              <figcaption className="small body">
                <strong>Engineering Lead</strong> — Lumen Legal
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- manifesto tease */}
      <section className="section">
        <div className="wrap wrap-narrow center">
          <p className="mono-label mb-24">Our why</p>
          <h2 className="h2 mb-24">
            Agents should earn trust <span className="mark">before</span> they earn autonomy.
          </h2>
          <p className="lead body mb-24">
            The demo is easy. The eighteenth edge case of a Tuesday afternoon is not. That
            gap is the only problem we work on.
          </p>
          <Link href="/manifesto" className="btn">
            Read the manifesto →
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------- pricing */}
      <section className="section-tight" id="pricing">
        <div className="wrap">
          <SectionHead
            center
            eyebrow="Pricing"
            title="Three ways to run it"
            lead="Start free. Move to your own VPC when security asks. Nothing about the SDK changes."
          />

          <PricingGrid />

          <p className="small body center mt-24">
            Need SOC 2 evidence or a security questionnaire filled in?{' '}
            <Link href="/support#security" style={{ textDecoration: 'underline' }}>
              Start here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ start */}
      <section className="section" id="start">
        <div className="wrap">
          <div className="box box-lg pad-lg">
            <div className="grid grid-2" style={{ alignItems: 'center', gap: 36 }}>
              <div>
                <p className="mono-label mb-12">Get started</p>
                <h2 className="h2 mb-12">Your first guarded agent, today</h2>
                <p className="body">
                  Create a workspace, point the SDK at your tools, and run an evaluation
                  suite before anything touches a customer. Free tier, no card.
                </p>
              </div>
              <SignupForm />
            </div>
          </div>
        </div>
      </section>

      <Cta
        title="Still deciding?"
        text="Read how private deployment actually works, or send us the security questionnaire you are stuck on."
        primary={{ href: '/platform', label: 'See the platform' }}
        secondary={{ href: 'mailto:sales@agentshift.ai', label: 'Talk to us' }}
      />
    </>
  )
}
