const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve a simple HTML page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="he">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>WebCraft Media</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #10151e;
          color: white;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          direction: rtl;
        }
        .container {
          text-align: center;
          padding: 2rem;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #E3A61A, #2E9B99);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 1.2rem;
          color: #ccc;
          margin-bottom: 2rem;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          background: #E3A61A;
          color: #10151e;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          margin: 0 10px;
        }
        .btn-secondary {
          background: transparent;
          color: #2E9B99;
          border: 2px solid #2E9B99;
        }
        .hebrew-letters {
          position: fixed;
          top: 20px;
          right: 20px;
          font-size: 1.5rem;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="hebrew-letters">א ב ס ד</div>
      <div class="container">
        <h1>WebCraft Media</h1>
        <p>אנו הופכים את האתר, הוואטסאפ, הטלפון, פרופיל Google, הביקורות והמעקב שלך למערכת צמיחה מקומית אחת מחוברת</p>
        <div>
          <a href="/en" class="btn">English</a>
          <a href="/packages" class="btn btn-secondary">חבילות</a>
        </div>
      </div>
    </body>
    </html>
  `);
});

// English version
app.get('/en', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>WebCraft Media - AI Local Growth Systems</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #10151e;
          color: white;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          text-align: center;
          padding: 2rem;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #E3A61A, #2E9B99);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 1.2rem;
          color: #ccc;
          margin-bottom: 2rem;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          background: #E3A61A;
          color: #10151e;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          margin: 0 10px;
        }
        .btn-secondary {
          background: transparent;
          color: #2E9B99;
          border: 2px solid #2E9B99;
        }
        .hebrew-letters {
          position: fixed;
          top: 20px;
          right: 20px;
          font-size: 1.5rem;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="hebrew-letters">א ב ס ד</div>
      <div class="container">
        <h1>WebCraft Media</h1>
        <p>We turn your website, WhatsApp, phone, Google profile, reviews, and follow-up into one connected local growth system</p>
        <div>
          <a href="/" class="btn">עברית</a>
          <a href="/packages" class="btn btn-secondary">Packages</a>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Packages page (Hebrew)
app.get('/packages', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="he">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>חבילות - WebCraft Media</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #10151e;
          color: white;
          margin: 0;
          padding: 0;
          direction: rtl;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        h1 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #E3A61A, #2E9B99);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .packages {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .package {
          background: #1a1f2e;
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .package h2 {
          color: #E3A61A;
          margin-bottom: 0.5rem;
        }
        .package .price {
          font-size: 1.5rem;
          color: #2E9B99;
          margin-bottom: 1rem;
        }
        .package ul {
          list-style: none;
          padding: 0;
        }
        .package li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .btn {
          display: block;
          text-align: center;
          padding: 12px;
          background: #E3A61A;
          color: #10151e;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          margin-top: 1rem;
        }
        .hebrew-letters {
          position: fixed;
          top: 20px;
          right: 20px;
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav {
          text-align: center;
          margin-bottom: 2rem;
        }
        .nav a {
          color: #2E9B99;
          text-decoration: none;
          margin: 0 1rem;
        }
      </style>
    </head>
    <body>
      <div class="hebrew-letters">א ב ס ד</div>
      <div class="container">
        <div class="nav">
          <a href="/">בית</a>
          <a href="/en">English</a>
        </div>
        <h1>חבילות</h1>
        <div class="packages">
          <div class="package">
            <h2>מערכת צמיחה לעסק קטן</h2>
            <div class="price">מ-₪998/חודש</div>
            <ul>
              <li>אתר מוביל-מובייל פרימיום</li>
              <li>בוט וואטסאפ AI מאומן אישית</li>
              <li>אופטימיזציה של פרופיל Google Business</li>
              <li>מסע ביקורות Google</li>
              <li>CRM / תיבת לידים בסיסית</li>
            </ul>
            <a href="/contact" class="btn">הרשמו עכשיו</a>
          </div>
          <div class="package">
            <h2>מערכת לידים מקומית שלמה</h2>
            <div class="price">מ-₪1,900/חודש</div>
            <ul>
              <li>כולל את כל מה שבמערכת צמיחה</li>
              <li>סוכן קול AI בעברית/אנגלית</li>
              <li>מענה טלפוני AI</li>
              <li>טיפול בשיחות שלא נענו</li>
              <li>CRM/משפך לידים מתקדם</li>
            </ul>
            <a href="/contact" class="btn">הרשמו עכשיו</a>
          </div>
          <div class="package">
            <h2>סוכן קול AI</h2>
            <div class="price">מ-₪1,200/חודש</div>
            <ul>
              <li>סוכן קול בעברית/אנגלית</li>
              <li>עונה לשיחות</li>
              <li>מסנן לידים</li>
              <li>שולח מעקב SMS/אימייל</li>
              <li>יכול לתזמן פגישות</li>
            </ul>
            <a href="/contact" class="btn">התקשרו להדגמה</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Contact page
app.get('/contact', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="he">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>צור קשר - WebCraft Media</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #10151e;
          color: white;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          direction: rtl;
        }
        .container {
          text-align: center;
          padding: 2rem;
          max-width: 600px;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #E3A61A, #2E9B99);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .contact-info {
          margin: 2rem 0;
        }
        .contact-info a {
          display: block;
          color: #2E9B99;
          text-decoration: none;
          font-size: 1.2rem;
          margin: 1rem 0;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          background: #25D366;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          margin-top: 1rem;
        }
        .hebrew-letters {
          position: fixed;
          top: 20px;
          right: 20px;
          font-size: 1.5rem;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="hebrew-letters">א ב ס ד</div>
      <div class="container">
        <h1>צור קשר</h1>
        <div class="contact-info">
          <a href="mailto:sales@webcraftmedia.digital">sales@webcraftmedia.digital</a>
          <a href="https://wa.me/972534932631">WhatsApp: +972 53-493-2631</a>
        </div>
        <a href="/" class="btn">חזרו לדף הבית</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});