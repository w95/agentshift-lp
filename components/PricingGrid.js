import Link from 'next/link'
import { PLANS } from '@/data/pricing'

export default function PricingGrid() {
  return (
    <div className="grid grid-3" style={{ alignItems: 'stretch' }}>
      {PLANS.map((plan) => (
        <div
          key={plan.name}
          className={`card ${plan.fill}`}
          style={plan.featured ? { boxShadow: 'var(--shadow-lg)' } : undefined}
        >
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <h3 className="h3">{plan.name}</h3>
            {plan.featured ? <span className="pill">Most popular</span> : null}
          </div>

          <p>
            <span className="price">{plan.price}</span>
            {plan.unit ? <span className="body"> {plan.unit}</span> : null}
          </p>
          <p className="small body">{plan.note}</p>

          <ul className="price-list mb-24">
            {plan.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link
            href={plan.cta.href}
            className={`btn ${plan.featured ? 'btn-primary' : ''}`}
            style={{ marginTop: 'auto' }}
          >
            {plan.cta.label}
          </Link>
        </div>
      ))}
    </div>
  )
}
