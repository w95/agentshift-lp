import Link from 'next/link'
import PricingGrid from '@/components/PricingGrid'
import { Cta, PageHead, SectionHead } from '@/components/ui'

export const metadata = {
  title: 'Pricing',
  description:
    'Free to build, usage-based in production, custom for regulated and air-gapped deployments.',
}

const FAQ = [
  {
    q: 'What counts as an agent step?',
    a: 'One model call or one tool call inside a run. Evaluation runs on the Developer tier do not count against your included steps.',
  },
  {
    q: 'What happens when I go over?',
    a: 'Additional steps are billed per thousand at the rate on your order form. Nothing stops working, and you can set a hard spend cap per workspace.',
  },
  {
    q: 'Is private deployment really on the Team plan?',
    a: 'Yes. VPC deployment is not an enterprise upsell here. Air-gapped and on-prem need Enterprise because they need us.',
  },
  {
    q: 'Do you train on our data?',
    a: 'No. Customer data is never used to train shared models, on any tier. Zero-retention mode is available on Enterprise.',
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHead
        eyebrow="Pricing"
        title="Three ways to run it"
        lead="Start free. Move to your own VPC when security asks. Nothing about the SDK changes."
      />

      <section className="section">
        <div className="wrap">
          <PricingGrid />
          <p className="small body center mt-24">
            All prices in USD, billed monthly. Annual contracts available on Team and
            Enterprise.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap wrap-narrow">
          <SectionHead title="Questions people actually ask" />
          <div className="rows">
            {FAQ.map((item) => (
              <div key={item.q} className="rowitem" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <span className="h4">{item.q}</span>
                <span className="body small">{item.a}</span>
              </div>
            ))}
          </div>
          <p className="body small mt-24">
            Something not covered?{' '}
            <Link href="/support" style={{ textDecoration: 'underline' }}>
              Ask support
            </Link>{' '}
            or email{' '}
            <a href="mailto:sales@agentshift.ai" style={{ textDecoration: 'underline' }}>
              sales@agentshift.ai
            </a>
            .
          </p>
        </div>
      </section>

      <Cta
        title="Start on the free tier"
        text="Build and evaluate an agent without talking to anyone. Upgrade when it goes to production."
      />
    </>
  )
}
