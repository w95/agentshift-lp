import { PageHead } from '@/components/ui'

export const metadata = {
  title: 'Terms & Conditions',
  description: 'The terms governing use of the Agentshift website and platform.',
}

const SECTIONS = [
  {
    h: '1. Agreement to these terms',
    p: [
      'These Terms & Conditions ("Terms") govern your access to and use of the Agentshift website and platform (together, the "Services"), operated by Agentshift, Inc. ("Agentshift", "we", "us"). By accessing the Services you agree to these Terms. If you do not agree, do not use the Services.',
      'If you use the Services on behalf of an organisation, you confirm you have authority to bind that organisation, and "you" refers to that organisation.',
    ],
  },
  {
    h: '2. Accounts and eligibility',
    ul: [
      'You must be at least 18 years old to use the Services.',
      'You are responsible for the accuracy of the information you provide when creating an account.',
      'You are responsible for safeguarding your credentials and for all activity under your account.',
      'You must notify us promptly at security@agentshift.ai of any suspected unauthorised access.',
    ],
  },
  {
    h: '3. Acceptable use',
    p: ['You agree not to:'],
    ul: [
      'Use the Services in violation of any applicable law or third-party right.',
      'Attempt to gain unauthorised access to the Services or to any other customer’s data.',
      'Probe, scan or stress-test the Services except under an authorised security testing agreement.',
      'Reverse engineer or attempt to derive the source code of the Services, except where that restriction is prohibited by law.',
      'Use the Services to build or deploy agents that generate unlawful content, conduct surveillance of individuals without a lawful basis, or make legally significant decisions about people without adequate human review.',
      'Resell, sublicense or otherwise make the Services available to third parties without our written consent.',
    ],
  },
  {
    h: '4. Customer data and ownership',
    p: [
      'You retain all rights to the data, prompts, documents and outputs you submit to or generate with the Services ("Customer Data"). You grant us a limited licence to process Customer Data solely to provide and support the Services.',
      'We do not use Customer Data to train shared or third-party models. Our handling of personal data is described in our Privacy Policy, which forms part of these Terms.',
      'We retain all rights in the Services themselves, including all software, documentation and trademarks. No rights are granted other than those expressly stated here.',
    ],
  },
  {
    h: '5. AI-generated output',
    p: [
      'The Services use artificial intelligence, which can produce inaccurate, incomplete or unsuitable output. You are responsible for reviewing output before relying on it, and for applying human oversight proportionate to the consequences of the decision. We make no warranty that output will be accurate, complete or fit for a particular purpose.',
    ],
  },
  {
    h: '6. Third-party services',
    p: [
      'The Services may route requests to third-party model providers or integrate with systems you connect. Your use of those services is governed by their own terms, and we are not responsible for their acts or omissions.',
    ],
  },
  {
    h: '7. Fees',
    p: [
      'Paid use is governed by the order form or written agreement between us, which takes precedence over these Terms where they conflict. Where the Services are offered free of charge, including on the free tier and under the Startup Program, we may introduce or change fees on reasonable notice.',
    ],
  },
  {
    h: '8. Disclaimers',
    p: [
      'Except as expressly stated in a signed written agreement, the Services are provided "as is" and "as available", without warranties of any kind, whether express, implied or statutory, including implied warranties of merchantability, fitness for a particular purpose, title and non-infringement. We do not warrant that the Services will be uninterrupted, secure or error-free.',
    ],
  },
  {
    h: '9. Limitation of liability',
    p: [
      'To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue or data, arising out of or related to these Terms. Our aggregate liability arising out of or related to these Terms will not exceed the greater of (a) the amounts you paid us for the Services in the twelve months before the event giving rise to liability, or (b) one hundred US dollars.',
      'Nothing in these Terms limits liability that cannot be limited under applicable law, including for death or personal injury caused by negligence, or for fraud.',
    ],
  },
  {
    h: '10. Indemnity',
    p: [
      'You will defend and indemnify Agentshift against third-party claims arising from your Customer Data or your use of the Services in breach of these Terms, and for any resulting damages and reasonable legal costs finally awarded.',
    ],
  },
  {
    h: '11. Suspension and termination',
    p: [
      'You may stop using the Services at any time. We may suspend or terminate access with notice where practicable, and immediately where your use poses a security risk, breaches these Terms, or exposes us to legal liability. Sections that by their nature should survive termination will survive, including ownership, disclaimers, limitation of liability and indemnity.',
    ],
  },
  {
    h: '12. Changes to these Terms',
    p: [
      'We may update these Terms from time to time. Where changes are material we will give reasonable notice, for example by email or a notice on the Services. Continued use after the effective date constitutes acceptance.',
    ],
  },
  {
    h: '13. Governing law',
    p: [
      'These Terms are governed by the laws of the State of Delaware, United States, excluding its conflict of laws rules. The state and federal courts located in Delaware will have exclusive jurisdiction, except that either party may seek injunctive relief in any court of competent jurisdiction.',
    ],
  },
  {
    h: '14. Contact',
    p: ['Questions about these Terms: legal@agentshift.ai.'],
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHead eyebrow="Legal" title="Terms & Conditions" lead="Last updated: 16 November 2026" />

      <section className="section">
        <div className="wrap wrap-narrow prose">
          {SECTIONS.map((section) => (
            <div key={section.h}>
              <h2 className="h3" style={{ marginTop: 44, marginBottom: 12 }}>
                {section.h}
              </h2>
              {section.p?.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {section.ul ? (
                <ul>
                  {section.ul.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
