import Link from 'next/link'

export const metadata = {
  title: 'Contact - WebCraft Media',
  description: 'Get in touch with WebCraft Media. WhatsApp, email, or phone — we respond fast.',
}

export default function ContactPageEn() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Ready to transform your business? Reach out and we'll respond fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-400 mb-3">Fastest response</p>
              <a href="https://wa.me/972534932631" className="text-brand-teal hover:underline">
                +972 53-493-2631
              </a>
            </div>
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-white mb-2">Email</h3>
              <p className="text-sm text-gray-400 mb-3">For detailed inquiries</p>
              <a href="mailto:sales@webcraftmedia.digital" className="text-brand-teal hover:underline">
                sales@webcraftmedia.digital
              </a>
            </div>
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-white mb-2">Phone</h3>
              <p className="text-sm text-gray-400 mb-3">Call us directly</p>
              <a href="tel:+972534932631" className="text-brand-teal hover:underline">
                +972 53-493-2631
              </a>
            </div>
          </div>

          <div className="bg-brand-dark border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
                <input type="email" placeholder="Email" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <textarea placeholder="Your message" rows={6} className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <button type="submit" className="btn-primary w-full text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
