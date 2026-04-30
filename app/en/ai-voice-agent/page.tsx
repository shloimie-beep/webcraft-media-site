import Link from 'next/link'

export const metadata = {
  title: 'AI Voice Agent - WebCraft Media',
  description: 'Bilingual Hebrew/English AI voice agent that answers calls, qualifies leads, and books appointments — 24/6.',
}

export default function VoiceAgentPageEn() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI Voice Agent
            </h1>
            <p className="text-gray-400 text-lg">
              Custom-trained AI phone assistant — answers calls, handles FAQs, qualifies leads, and books appointments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Why Voice Agent?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> Never miss a call</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> Instant response 24/6</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> Qualifies serious leads</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> Books appointments automatically</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> Bilingual Hebrew/English</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> SMS/email follow-up after calls</li>
              </ul>
            </div>
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">What's Included?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> Personally trained voice agent</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> Incoming call answering</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> Missed-call handling</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> Lead handoff for serious prospects</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> SMS/email reminders</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> Call analytics</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-brand-gold/10 to-brand-teal/10 border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 mb-4">Call for a live demo</p>
              <a href="tel:+97223727020" className="text-3xl font-bold gradient-text hover:opacity-80 transition-opacity">
                +972-2-372-7020
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Talk to our AI voice agent and see how it works
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/en/free-local-growth-audit" className="btn-primary text-lg">
              Get Free Growth Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
