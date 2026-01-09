"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      {/* SAKURA */}
      <div className="sakura">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i}>🌸</span>
        ))}
      </div>

      {/* CARD */}
      <div className="card-wrap">
        <div className="card">
          <h1>The Cozy Corner</h1>
          <p className="subtitle">
            A soft little library café — where books and hearts feel at home.
          </p>

          <section>
            <h2>About Us</h2>
            <p>
              Inspired by quiet cafés, rainy afternoons, and falling sakura
              petals. Every book feels like a warm cup of tea beside your
              favorite novels.
            </p>
          </section>

          <section>
            <h2>Featured Reads</h2>
            <ul>
              <li>📖 The Little Prince</li>
              <li>🌸 Sense and Sensibility</li>
              <li>☕ Little Women</li>
              <li>✨ Pride and Prejudice</li>
            </ul>
          </section>

          <section>
            <h2>Visit Our Café Shelf</h2>
            <p>
              Fresh recommendations every week. Perfect for slow mornings and
              peaceful nights.
            </p>
            <Link href="/books" className="cta">
              Browse Cozy Reads
            </Link>
          </section>

          <footer>
            © 2026 The Cozy Corner — brewed with love ☕📚
          </footer>
        </div>
      </div>

      {/* STYLES */}
      <style jsx global>{`
        body {
          margin: 0;
        }

        .page {
          min-height: 100vh;
          background: radial-gradient(
            circle at top,
            #2b1f33 0%,
            #140d1a 55%,
            #07060a 100%
          );
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Georgia, serif;
          color: #f3e9ef;
          position: relative;
        }

        /* SAKURA */
        .sakura {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .sakura span {
          position: absolute;
          top: -10%;
          opacity: 0.5;
          animation: fall linear infinite;
          font-size: 1.2rem;
        }

        .sakura span:nth-child(1) { left: 10%; animation-duration: 12s; }
        .sakura span:nth-child(2) { left: 20%; animation-duration: 10s; }
        .sakura span:nth-child(3) { left: 30%; animation-duration: 14s; }
        .sakura span:nth-child(4) { left: 40%; animation-duration: 11s; }
        .sakura span:nth-child(5) { left: 50%; animation-duration: 13s; }
        .sakura span:nth-child(6) { left: 60%; animation-duration: 9s; }
        .sakura span:nth-child(7) { left: 70%; animation-duration: 15s; }
        .sakura span:nth-child(8) { left: 80%; animation-duration: 12s; }
        .sakura span:nth-child(9) { left: 90%; animation-duration: 10s; }

        @keyframes fall {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(120vh) rotate(360deg); }
        }

        /* CARD */
        .card-wrap {
          z-index: 5;
          max-width: 820px;
          width: 100%;
          padding: 0 20px;
        }

        .card {
          background: linear-gradient(
            180deg,
            rgba(60, 38, 70, 0.85),
            rgba(30, 18, 38, 0.9)
          );
          border-radius: 26px;
          padding: 3rem 3.2rem;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(10px);
        }

        .card h1 {
          text-align: center;
          color: #f4d6e4;
          font-size: 2.6rem;
          margin-bottom: 0.3rem;
        }

        .subtitle {
          text-align: center;
          color: #d7b7c9;
          font-style: italic;
          margin-bottom: 2rem;
        }

        section { margin-bottom: 1.8rem; }

        h2 {
          color: #f0c9db;
          margin-bottom: 0.4rem;
          font-size: 1.3rem;
        }

        p, li {
          color: #e6d6de;
          line-height: 1.7;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        .cta {
          display: inline-block;
          margin-top: 12px;
          padding: 10px 26px;
          border-radius: 999px;
          background: linear-gradient(135deg, #f2b6cc, #d6b2ff);
          color: #3b1f2b;
          text-decoration: none;
          font-size: 0.95rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
        }

        .cta:hover {
          transform: translateY(-2px);
        }

        footer {
          text-align: center;
          margin-top: 2.2rem;
          font-size: 0.85rem;
          color: #c3a9b8;
        }
      `}</style>
    </main>
  );
}
