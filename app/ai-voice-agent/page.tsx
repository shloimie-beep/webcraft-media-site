import Link from 'next/link'

export const metadata = {
  title: 'סוכן קול AI - WebCraft Media',
  description: 'סוכן קול AI דו-לשוני בעברית ובאנגלית שעונה לשיחות, מסנן לידים, וקובע פגישות — 24/6.',
}

export default function VoiceAgentPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              סוכן קול AI
            </h1>
            <p className="text-gray-400 text-lg">
              מענה טלפוני AI מותאם אישית — עונה לשיחות, מטפל בשאלות נפוצות, מסנן לידים וקובע פגישות.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">למה סוכן קול?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> לעולם לא מפסידים שיחה</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> מענה מיידי 24/6</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> מסנן לידים רציניים</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> קובע פגישות אוטומטית</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> דו-לשוני עברית/אנגלית</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> מעקב SMS/אימייל אחרי שיחה</li>
              </ul>
            </div>
            <div className="bg-brand-dark border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">מה כלול?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> סוכן קול מאומן אישית</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> מענה שיחות נכנסות</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> טיפול בשיחות שלא נענו</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> העברת לידים רציניים</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> תזכורות SMS/אימייל</li>
                <li className="flex gap-2"><span className="text-brand-teal">✓</span> אנליטיקס שיחות</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-brand-gold/10 to-brand-teal/10 border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 mb-4">התקשרו להדגמה חיה</p>
              <a href="tel:+97223727020" className="text-3xl font-bold gradient-text hover:opacity-80 transition-opacity">
                +972-2-372-7020
              </a>
              <p className="text-sm text-gray-500 mt-4">
                דברו עם סוכן הקול AI שלנו ותראו איך זה עובד
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/free-local-growth-audit" className="btn-primary text-lg">
              קבלו בדיקת צמיחה חינם
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
