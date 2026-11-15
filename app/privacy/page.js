import { PageHead } from '@/components/ui'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Agentshift collects, uses, stores and protects personal data.',
}

// Ported verbatim from the previous site; wording unchanged.
const BLOCKS = [
  { t: "h2", text: "1. Introduction" },
  { t: "p", text: "This Privacy Policy (\"Policy\") governs the collection, use, and disclosure of personal information by Agentshift, Inc., a corporation incorporated under the laws of Delaware (\"Company,\" \"we,\" \"us,\" or \"our\"). We are committed to protecting the privacy and security of your personal information in accordance with applicable privacy laws and regulations." },
  { t: "p", text: "This Policy applies to all personal information collected through our website located at agentshift.ai (the \"Website\"), our AI agent development platform and related services (collectively, the \"Services\"), and any other interactions you may have with us. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy." },
  { t: "h2", text: "2. Information We Collect" },
  { t: "h3", text: "Personal Information" },
  { t: "p", text: "We may collect the following personal information:" },
  { t: "ul", items: [
          "Email addresses provided through our waitlist or contact forms",
          "Account information if you create an account with us",
          "Payment information for billing purposes",
          "Professional information related to your use of our services",
          "Communications you send to us",
        ] },
  { t: "h3", text: "Usage Information" },
  { t: "p", text: "We automatically collect certain information about your use of our services:" },
  { t: "ul", items: [
          "IP address and location information",
          "Browser type and version",
          "Device information",
          "Pages visited and time spent on our site",
          "Referral sources",
        ] },
  { t: "h2", text: "3. How We Use Your Information" },
  { t: "p", text: "We use the collected information for the following purposes:" },
  { t: "ul", items: [
          "Provide and maintain our AI agent development services",
          "Process waitlist registrations and account creation",
          "Send you updates about our services and platform",
          "Improve our website and services",
          "Analyze usage patterns and trends",
          "Respond to your inquiries and provide customer support",
          "Send administrative information and updates",
        ] },
  { t: "h2", text: "4. Information Sharing and Disclosure" },
  { t: "p", text: "We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:" },
  { t: "ul", items: [
          "With your explicit consent",
          "To comply with legal obligations",
          "To protect our rights and prevent fraud",
          "With service providers who assist in our operations (under strict confidentiality agreements)",
          "In connection with a business transfer or acquisition",
        ] },
  { t: "h2", text: "5. Data Security" },
  { t: "p", text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:" },
  { t: "ul", items: [
          "Encryption of data in transit and at rest",
          "Regular security assessments",
          "Access controls and authentication procedures",
          "Secure data storage and processing systems",
        ] },
  { t: "h2", text: "6. Data Retention" },
  { t: "p", text: "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements. Our data retention practices are based on the following criteria:" },
  { t: "ul", items: [
          "Account Information: Retained for the duration of your account plus 7 years after account closure for legal compliance purposes",
          "Transactional Data: Retained for 7 years after the transaction date in accordance with financial recordkeeping requirements",
          "Marketing Communications: Retained until you unsubscribe or request deletion",
          "Website Analytics: Aggregated and anonymized data retained for up to 3 years for business analytics",
          "Support Communications: Retained for 3 years after the last communication for quality assurance and legal purposes",
        ] },
  { t: "p", text: "When the retention period expires, we will securely delete or anonymize your personal information in accordance with our data deletion procedures and applicable law requirements." },
  { t: "h2", text: "7. Your Rights and Choices" },
  { t: "p", text: "You have the following rights regarding your personal information:" },
  { t: "ul", items: [
          "Access: Request a copy of your personal information",
          "Correction: Request correction of inaccurate information",
          "Deletion: Request deletion of your personal information",
          "Portability: Request transfer of your data",
          "Opt-out: Unsubscribe from marketing communications",
        ] },
  { t: "h2", text: "8. Legal Compliance" },
  { t: "p", text: "We are committed to complying with applicable data protection laws and regulations, including but not limited to:" },
  { t: "h3", text: "General Data Protection Regulation (GDPR)" },
  { t: "p", text: "If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have additional rights under the GDPR, including:" },
  { t: "ul", items: [
          "The right to object to processing based on legitimate interests",
          "The right to data portability in machine-readable format",
          "The right to lodge a complaint with your local supervisory authority",
          "The right to withdraw consent for processing based on consent",
        ] },
  { t: "h3", text: "California Consumer Privacy Act (CCPA)" },
  { t: "p", text: "If you are a California resident, you have the right to:" },
  { t: "ul", items: [
          "Know what personal information is collected, used, shared, or sold",
          "Request deletion of personal information",
          "Opt-out of the sale of personal information (we do not sell personal information)",
          "Non-discrimination for exercising your privacy rights",
        ] },
  { t: "h2", text: "9. Data Breach Notification" },
  { t: "p", text: "In the event of a data breach that affects your personal information, we will:" },
  { t: "ul", items: [
          "Assess the scope and severity of the breach within 72 hours of discovery",
          "Notify relevant supervisory authorities as required by applicable law",
          "Notify affected users without undue delay when the breach is likely to result in high risk",
          "Provide clear information about the nature of the breach and steps taken to address it",
          "Offer appropriate remedial measures and support to affected users",
        ] },
  { t: "h2", text: "10. Cookies and Tracking Technologies" },
  { t: "p", text: "We use cookies and similar technologies to enhance your experience on our website. These technologies help us:" },
  { t: "ul", items: [
          "Remember your preferences",
          "Analyze website traffic and usage",
          "Improve website functionality",
          "Provide personalized content",
        ] },
  { t: "p", text: "You can control cookie settings through your browser preferences." },
  { t: "h2", text: "11. International Data Transfers" },
  { t: "p", text: "Your personal information may be transferred to and processed in countries other than your country of residence. These transfers are conducted in accordance with applicable data protection laws and include appropriate safeguards to protect your personal information, such as:" },
  { t: "ul", items: [
          "Standard Contractual Clauses approved by the European Commission",
          "Adequacy decisions by relevant data protection authorities",
          "Other lawful transfer mechanisms as recognized by applicable law",
        ] },
  { t: "p", text: "We ensure that any international transfers comply with applicable data protection requirements and provide appropriate protection for your personal information." },
  { t: "h2", text: "12. Third-Party Services" },
  { t: "p", text: "Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you use." },
  { t: "h2", text: "13. Children's Privacy" },
  { t: "p", text: "Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information." },
  { t: "h2", text: "14. Changes to This Privacy Policy" },
  { t: "p", text: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Effective Date\" at the top. We encourage you to review this Privacy Policy periodically." },
  { t: "h2", text: "15. Contact Information and Data Protection Officer" },
  { t: "p", text: "For any questions, concerns, or requests regarding this Privacy Policy, your personal information, or to exercise your privacy rights, please contact us through the following channels:" },
  { t: "h3", text: "General Privacy Inquiries" },
  { t: "p", text: "Agentshift, Inc. 220 E 23rd Street, New York, NY 10010, US Email: privacy@agentshift.ai General Contact: hello@agentshift.ai Website: https://agentshift.ai" },
  { t: "h3", text: "Response Timeframes" },
  { t: "p", text: "We are committed to responding to your privacy-related inquiries promptly:" },
  { t: "ul", items: [
          "General inquiries: Within 3-5 business days",
          "Data subject requests: Within 30 days (as required by applicable law)",
          "Urgent privacy concerns: Within 24-48 hours",
        ] },
  { t: "h3", text: "Dispute Resolution" },
  { t: "p", text: "If you have unresolved privacy concerns, you may:" },
  { t: "ul", items: [
          "Contact your local data protection authority",
          "Lodge a complaint with relevant supervisory authorities",
          "Seek resolution through applicable dispute resolution mechanisms",
        ] },
  { t: "h2", text: "16. Governing Law and Jurisdiction" },
  { t: "p", text: "This Privacy Policy and any disputes arising from or related to the collection, use, and disclosure of your personal information shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles. Any legal action or proceeding relating to this Privacy Policy shall be brought exclusively in the state or federal courts located in Delaware." },
  { t: "p", text: "Notwithstanding the above, this section shall not limit our compliance with applicable local data protection laws where you reside or operate." },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHead
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Effective Date: February 5, 2025"
      />

      <section className="section">
        <div className="wrap wrap-narrow prose">
          {BLOCKS.map((block, i) => {
            if (block.t === 'ul') {
              return (
                <ul key={i}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )
            }
            if (block.t === 'h2') {
              return (
                <h2 key={i} className="h3" style={{ marginTop: 44, marginBottom: 12 }}>
                  {block.text}
                </h2>
              )
            }
            if (block.t === 'h3') {
              return (
                <h3 key={i} className="h4">
                  {block.text}
                </h3>
              )
            }
            return <p key={i}>{block.text}</p>
          })}
        </div>
      </section>
    </>
  )
}
