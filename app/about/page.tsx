"use client";

export default function AboutPage() {
  return (
    <main className="page">
      {/* FLOATING SPARKLES */}
      <div className="bg-sparkles">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i}>✨</span>
        ))}
      </div>

      <div className="card">
        <h1>About The Cozy Corner</h1>
        <p className="tagline">
          A gentle space where stories bloom and hearts feel at home.
        </p>

        <section>
          <h2>Our Story</h2>
          <p>
            The Cozy Corner was born from quiet afternoons, warm cups of tea, and
            the comfort found in turning pages. Inspired by soft library cafés
            and dreamy novel pages.
          </p>
        </section>

        <section>
          <h2>Our Philosophy</h2>
          <p>
            Books are companions, healing spaces, and tiny worlds we can visit
            whenever life feels heavy.
          </p>
        </section>

        <footer>© 2026 The Cozy Corner ✨</footer>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at top, #2b1f33, #140d1a 55%, #07060a);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 120px 20px;
          color: #f3e9ef;
          font-family: Georgia, serif;
          position: relative;
          overflow: hidden;
        }

        .card {
          max-width: 820px;
          background: linear-gradient(
            180deg,
            rgba(60, 38, 70, 0.9),
            rgba(30, 18, 38, 0.95)
          );
          border-radius: 28px;
          padding: 3rem 3.2rem;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(10px);
          z-index: 5;
        }

        h1 {
          text-align: center;
          color: #f4d6e4;
          font-size: 2.6rem;
        }

        .tagline {
          text-align: center;
          color: #d7b7c9;
          font-style: italic;
          margin-bottom: 2rem;
        }

        h2 {
          color: #f0c9db;
          margin-bottom: 0.4rem;
        }

        p {
          color: #e6d6de;
          line-height: 1.7;
          margin-bottom: 1.6rem;
        }

        footer {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.85rem;
          color: #c3a9b8;
        }

        /* SPARKLE ANIMATION */
        .bg-sparkles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .bg-sparkles span {
          position: absolute;
          top: -10%;
          font-size: 1.2rem;
          opacity: 0.45;
          animation: sparkleFall linear infinite;
        }

        .bg-sparkles span:nth-child(1){left:6%;animation-duration:16s;}
        .bg-sparkles span:nth-child(2){left:14%;animation-duration:20s;}
        .bg-sparkles span:nth-child(3){left:22%;animation-duration:18s;}
        .bg-sparkles span:nth-child(4){left:30%;animation-duration:22s;}
        .bg-sparkles span:nth-child(5){left:38%;animation-duration:17s;}
        .bg-sparkles span:nth-child(6){left:46%;animation-duration:21s;}
        .bg-sparkles span:nth-child(7){left:54%;animation-duration:19s;}
        .bg-sparkles span:nth-child(8){left:62%;animation-duration:23s;}
        .bg-sparkles span:nth-child(9){left:70%;animation-duration:18s;}
        .bg-sparkles span:nth-child(10){left:78%;animation-duration:20s;}
        .bg-sparkles span:nth-child(11){left:86%;animation-duration:22s;}
        .bg-sparkles span:nth-child(12){left:92%;animation-duration:17s;}
        .bg-sparkles span:nth-child(13){left:48%;animation-duration:24s;}
        .bg-sparkles span:nth-child(14){left:74%;animation-duration:19s;}

        @keyframes sparkleFall {
          from {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          to {
            transform: translateY(120vh) scale(1.2) rotate(180deg);
          }
        }
      `}</style>
    </main>
  );
}
