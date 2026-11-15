'use client'

import { useState } from 'react'

const ENDPOINT = 'https://formspree.io/f/mdknvoyk'

export default function SignupForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    setStatus('sending')
    setError('')

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        form.reset()
        setStatus('done')
        return
      }

      const data = await response.json().catch(() => null)
      setError(
        data?.errors?.map((e) => e.message).join(', ') ||
          'Something went wrong. Email hello@agentshift.ai and we will sort it out.'
      )
      setStatus('error')
    } catch {
      setError('Network error. Email hello@agentshift.ai and we will sort it out.')
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="box fill-lime pad">
        <p className="h3 mb-12">You&apos;re in.</p>
        <p>
          Check your inbox — setup instructions and your workspace link are on the way.
          Nothing lands in five minutes? Write to{' '}
          <a href="mailto:hello@agentshift.ai" style={{ textDecoration: 'underline' }}>
            hello@agentshift.ai
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="stack gap-12">
      <div className="form-row">
        <div className="field">
          <label className="mono-label" htmlFor="work-email">
            Work email
          </label>
          <input
            id="work-email"
            className="input"
            type="email"
            name="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </div>
        <div className="field">
          <label className="mono-label" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            className="input"
            type="text"
            name="company"
            placeholder="Acme Inc."
            autoComplete="organization"
          />
        </div>
      </div>

      <button className="btn btn-primary btn-lg" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Create your workspace'}
      </button>

      {status === 'error' ? (
        <p className="small" style={{ color: 'var(--coral)', fontWeight: 600 }} role="alert">
          {error}
        </p>
      ) : (
        <p className="small body">
          Free tier, no credit card. We reply with setup instructions, not a drip campaign.
        </p>
      )}
    </form>
  )
}
