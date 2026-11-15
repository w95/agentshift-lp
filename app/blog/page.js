import { Cta, PageHead, SectionHead } from '@/components/ui'

export const metadata = {
  title: 'Blog',
  description:
    'Engineering write-ups on evaluation, private deployment and running AI agents in production.',
}

const UPCOMING = [
  {
    tag: 'Evaluation',
    title: 'Building a task suite your agent cannot game',
    body: 'Why held-out tasks drawn from production beat synthetic benchmarks, and how to keep them honest as the agent improves.',
    fill: 'card-accent accent-lime',
  },
  {
    tag: 'Deployment',
    title: 'Running agents inside your own VPC',
    body: 'The architecture behind private deployment: what crosses the boundary, what never does, and what that costs you in latency.',
    fill: 'card-accent accent-violet',
  },
  {
    tag: 'Reliability',
    title: 'Budgets, ceilings and the looping agent problem',
    body: 'Guardrails that stop a stuck agent from spending an afternoon of compute on nothing, without killing legitimate long runs.',
    fill: 'card-accent accent-coral',
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHead
        eyebrow="Blog"
        title="Notes from building agent infrastructure"
        lead="Engineering write-ups, evaluation results and opinions about what it takes to run agents in production."
      />

      <section className="section">
        <div className="wrap">
          <div className="box pad-lg center">
            <p className="h3 mb-12">No posts published yet.</p>
            <p className="body maxw-60 mx-auto">
              The first write-ups land alongside our next release. We publish when there is
              something worth reading — no cadence, no newsletter filler.
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <SectionHead title="What we are writing about" />
          <div className="grid grid-3">
            {UPCOMING.map((post) => (
              <article key={post.title} className={`card ${post.fill}`}>
                <span className="pill" style={{ alignSelf: 'flex-start' }}>
                  {post.tag}
                </span>
                <h3 className="h3">{post.title}</h3>
                <p className="body small">{post.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Cta
        title="Want these as they land?"
        text="Create a workspace and we will send write-ups to the same address. Unsubscribe in one click."
        primary={{ href: '/#start', label: 'Start building' }}
        secondary={null}
      />
    </>
  )
}
