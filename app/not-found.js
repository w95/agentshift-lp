import Link from 'next/link'
import { PageHead } from '@/components/ui'

export const metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <>
      <PageHead
        eyebrow="404"
        title="That page does not exist"
        lead="The link is wrong, or we moved something. Here is where everything lives."
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid-3">
            <Link className="card fill-lime" href="/platform">
              <h2 className="h3">Platform</h2>
              <p className="body small">What Agentshift does and how it deploys.</p>
            </Link>
            <Link className="card fill-violet" href="/pricing">
              <h2 className="h3">Pricing</h2>
              <p className="body small">Free, Team and Enterprise, with the limits spelled out.</p>
            </Link>
            <Link className="card" href="/support">
              <h2 className="h3">Support</h2>
              <p className="body small">Reach a human, or report a security issue.</p>
            </Link>
          </div>

          <p className="mt-32">
            <Link className="btn btn-primary" href="/">
              Back to the homepage
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
