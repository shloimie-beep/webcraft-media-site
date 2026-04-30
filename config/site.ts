export const siteConfig = {
  name: 'WebCraft Media',
  tagline: {
    he: 'מערכות צמיחה מבוססות AI לעסקים קטנים',
    en: 'AI-Powered Local Growth Systems for Small Businesses',
  },
  description: {
    he: 'אנו הופכים את האתר, הוואטסאפ, הטלפון, פרופיל Google, הביקורות והמעקב שלך למערכת צמיחה מקומית אחת מחוברת',
    en: 'We turn your website, WhatsApp, phone, Google profile, reviews, and follow-up into one connected local growth system',
  },
  url: 'https://webcraftmedia.digital',
  email: 'sales@webcraftmedia.digital',
  whatsapp: {
    number: '+972534932631',
    prefilled: {
      he: 'שלום WebCraft Media, אני רוצה בדיקת צמיחה מקומית חינם לעסק שלי.',
      en: "Hi WebCraft Media, I'd like a free local growth audit for my business.",
    },
  },
  voiceDemo: {
    number: '+97223727020',
    label: {
      he: 'התקשרו להדגמת קול AI',
      en: 'Call AI Voice Demo',
    },
  },
  phone: '+972534932631',
  address: 'Ramat Beit Shemesh, Israel',
  founders: [
    {
      name: 'Yitzchak Goldberg',
      role: {
        he: 'מייסד • מנהל טכני ואדריכל מערכות אוטומציה',
        en: 'Founder • Technical Director & Automation Systems Architect',
      },
      initials: 'YG',
      bio: {
        he: 'מעל 20 שנות ניסיון ברשתות מחשבים, עיצוב אתרים ומערכות עסקיות. מתמחה בבניית מערכות אוטומציה אמינות ויעילות.',
        en: 'Over 20 years of experience in computer networking, web design, and business systems. Specializes in building reliable, efficient automation systems.',
      },
    },
    {
      name: 'Shloimie Dratler',
      role: {
        he: 'מנכ"ל ומייסד • אסטרטגיה עסקית ושביעות רצון לקוחות',
        en: 'CEO & Co-Founder • Business Strategy & Client Success',
      },
      initials: 'SD',
      bio: {
        he: 'עובד לצד בעלי עסקים כדי לפשט תפעול, לתקשר בצורה יעילה יותר עם לקוחות, ולהשתמש ב-AI בדרכים מעשיות ורווחיות.',
        en: 'Works closely with business owners to help them simplify operations, communicate more effectively with customers, and use AI in practical and profitable ways.',
      },
    },
  ],
  social: {
    // Add social links when available
  },
} as const

export const packages = [
  {
    id: 'small-business',
    name: {
      he: 'מערכת צמיחה לעסק קטן',
      en: 'Small Business Growth System',
    },
    price: {
      he: 'מ-₪998/חודש',
      en: 'From ₪998/month',
    },
    popular: false,
    features: {
      he: [
        'אתר מוביל-מובייל פרימיום או דף נחיתה',
        'בוט וואטסאפ AI מאומן אישית לעסק',
        'בוט עונה על שאלות, מסנן לידים, אוסף פרטים',
        'אופטימיזציה של פרופיל Google Business',
        'מסע ביקורות Google ללקוחות קודמים',
        'אוטומציה עתידית של ביקורות',
        'CRM / תיבת לידים בסיסית',
        'לכידת לידים ומעקב בסיסי',
      ],
      en: [
        'Premium mobile-first website or landing page',
        'AI WhatsApp bot personally trained for the business',
        'Bot answers questions, qualifies leads, collects details',
        'Google Business Profile optimization',
        'Google reviews campaign for past customers',
        'Future review automation setup',
        'Basic CRM / lead inbox access',
        'Basic lead capture and follow-up setup',
      ],
    },
    cta: {
      he: 'הרשמו עכשיו',
      en: 'Sign Up Now',
    },
  },
  {
    id: 'complete',
    name: {
      he: 'מערכת לידים מקומית שלמה',
      en: 'Complete Local Lead System',
    },
    price: {
      he: 'מ-₪1,900/חודש',
      en: 'From ₪1,900/month',
    },
    popular: true,
    features: {
      he: [
        'כולל את כל מה שבמערכת צמיחה לעסק קטן',
        'סוכן קול AI בעברית/אנגלית',
        'מענה טלפוני AI',
        'טיפול בשיחות שלא נענו',
        'מעקב SMS/אימייל',
        'תזמון פגישות או תזרים הזמנות',
        'התראות העברת לידים',
        'CRM/משפך לידים מתקדם יותר',
        'שיחות + וואטסאפ + אתר + ביקורות Google מחוברים למערכת אחת',
      ],
      en: [
        'Includes everything in Small Business Growth System',
        'Hebrew/English AI voice agent',
        'AI phone answering',
        'Missed-call handling',
        'SMS/email follow-up',
        'Appointment request or booking flow',
        'Lead handoff alerts',
        'Stronger CRM pipeline / funnel setup',
        'Calls + WhatsApp + website + Google reviews connected into one system',
      ],
    },
    cta: {
      he: 'הרשמו עכשיו',
      en: 'Sign Up Now',
    },
  },
  {
    id: 'voice-only',
    name: {
      he: 'סוכן קול AI',
      en: 'AI Voice Agent',
    },
    price: {
      he: 'מ-₪1,200/חודש',
      en: 'From ₪1,200/month',
    },
    popular: false,
    features: {
      he: [
        'סוכן קול בעברית/אנגלית',
        'עונה לשיחות',
        'מסנן לידים',
        'שולח מעקב SMS/אימייל',
        'יכול לתזמן פגישות',
        'יכול להעביר לידים רציניים',
      ],
      en: [
        'Hebrew/English voice agent',
        'Answers calls',
        'Qualifies leads',
        'Sends SMS/email follow-up',
        'Can request/schedule appointments',
        'Can hand off serious leads',
      ],
    },
    cta: {
      he: 'התקשרו להדגמה',
      en: 'Call for Demo',
    },
  },
] as const

export const navLinks = {
  he: [
    { href: '/', label: 'בית' },
    { href: '/packages', label: 'חבילות' },
    { href: '/free-local-growth-audit', label: 'בדיקת צמיחה חינם' },
    { href: '/blog', label: 'בלוג' },
    { href: '/contact', label: 'צור קשר' },
  ],
  en: [
    { href: '/en', label: 'Home' },
    { href: '/en/packages', label: 'Packages' },
    { href: '/en/free-local-growth-audit', label: 'Free Audit' },
    { href: '/en/blog', label: 'Blog' },
    { href: '/en/contact', label: 'Contact' },
  ],
} as const

export const setupFeeWording = {
  he: 'ייתכן שיחול דמי הגדרה. הנחות הגדרה מוגבלות בזמן עשויות להיות זמינות לאחר הביקורת החינם שלך.',
  en: 'Setup fee may apply. Limited-time setup discounts may be available after your free audit.',
} as const
