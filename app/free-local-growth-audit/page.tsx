import Link from 'next/link'

export const metadata = {
  title: 'בדיקת צמיחה מקומית חינם - WebCraft Media',
  description: 'בדיקה מקיפה של הנוכחות הדיגיטלית שלך. Google Business, ביקורות, SEO, GEO, אתר, WhatsApp ועוד. דוח תוך 24-48 שעות.',
}

export default function AuditPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              בדיקת צמיחה מקומית <span className="gradient-text">חינם</span>
            </h1>
            <p className="text-gray-400 text-lg">
              בין אם יש לכם אתר ובין אם לא — נבדוק מה הלקוחות רואים כשהם מחפשים אתכם.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">יש לכם אתר?</h3>
              <p className="text-gray-400 mb-4">
                נראה מה עוזר ומה מפסיד לידים. נבדוק אם האתר שלכם מוכן לפרסום, ל-SEO, ול-AI Search.
              </p>
            </div>
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">אין לכם אתר עדיין?</h3>
              <p className="text-gray-400 mb-4">
                נראה מה הלקוחות שלכם רואים כשהם מחפשים אתכם — ומה צריך לבנות כדי להיראות מקצועיים.
              </p>
            </div>
          </div>

          <div className="bg-brand-dark border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">מה כוללת הבדיקה?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'בדיקת פרופיל Google Business',
                'בדיקת ביקורות ומוניטין',
                'בדיקת נראות SEO מקומי',
                'בדיקת נראות GEO / AI Search',
                'בדיקת "איך AI רואה את העסק שלך"',
                'בדיקת המרת אתר (אם יש)',
                'בדיקת הזדמנויות WhatsApp ולכידת לידים',
                'בדיקת שיחות שלא נענו / סוכן קול',
                'השוואת מתחרים ואמון מקומי',
                'דוח פעולה מותאם אישית תוך 24-48 שעות',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="text-brand-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 bg-gradient-to-r from-brand-gold/5 to-brand-teal/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">בקשו בדיקה חינם</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="שם מלא" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
                <input type="text" placeholder="שם העסק" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" placeholder="טלפון / WhatsApp" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
                <input type="email" placeholder="אימייל" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="קטגוריית עסק" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
                <input type="text" placeholder="עיר / אזור בישראל" className="bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              </div>
              <input type="url" placeholder="כתובת אתר (אופציונלי)" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <input type="url" placeholder="קישור לפרופיל Google Business (אופציונלי)" className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <select className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-gray-500 focus:border-brand-gold focus:outline-none">
                <option value="">בעיה עיקרית — בחרו</option>
                <option value="calls">שיחות שלא נענו</option>
                <option value="whatsapp">WhatsApp ללא מענה</option>
                <option value="reviews">חסרים ביקורות</option>
                <option value="google">נראות Google</option>
                <option value="website">אין אתר / אתר ישן</option>
                <option value="ads">בזבון כסף על פרסום</option>
                <option value="followup">אין מעקב אחר לידים</option>
              </select>
              <textarea placeholder="הודעה (אופציונלי)" rows={4} className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-brand-gold focus:outline-none" />
              <button type="submit" className="btn-primary w-full text-lg">
                שלחו בקשה לבדיקה חינם
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              אנחנו נחזור אליכם תוך 24-48 שעות עם דוח מותאם אישית.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
