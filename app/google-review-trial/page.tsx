import Link from 'next/link'

export const metadata = {
  title: 'ניסיון צמיחת ביקורות Google — 14 יום - WebCraft Media',
  description: 'התחילו עם ניסיון של 14 יום לצמיחת ביקורות Google. חברו את פרופיל Google Business ונסו מסע ביקורות.',
}

export default function ReviewTrialPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-teal text-sm font-semibold uppercase tracking-wide">הצעה משנית</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              ניסיון צמיחת ביקורות Google
            </h1>
            <p className="text-gray-400 text-lg">
              14 יום להתחיל לבנות אמון מקוון. לא המערכת המלאה — נקודת כניסה קלה.
            </p>
          </div>

          <div className="bg-gradient-to-r from-brand-teal/5 to-brand-gold/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">מה כולל הניסיון?</h2>
            <ul className="space-y-3">
              {[
                'חיבור פרופיל Google Business',
                'מסע ביקורות ללקוחות קודמים',
                'תבניות בקשת ביקורות מותאמות',
                'מעקב אחר תשובות וביקורות חדשות',
                'דוח התקדמות שבועי',
                'הדרכה להמשך אחרי 14 יום',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-brand-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-dark border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">הירשמו לניסיון</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="שם מלא" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
                <input type="text" placeholder="שם העסק" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              </div>
              <input type="tel" placeholder="טלפון / WhatsApp" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <input type="email" placeholder="אימייל" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <input type="url" placeholder="קישור לפרופיל Google Business" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <button type="submit" className="btn-primary w-full text-lg">
                התחילו ניסיון ביקורות
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">
              שימו לב: זה לא אומר שהמערכת המלאה של WebCraft חינם. זו נקודת כניסה כדי להתחיל לבנות אמון.
            </p>
            <Link href="/packages" className="text-brand-teal hover:underline">
              רוצים את המערכת המלאה? צפו בחבילות →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
