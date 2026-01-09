"use client";

export default function ContactPage() {
  return (
    <main className="page">
      {/* FLOATING LOVE LETTERS */}
      <div className="bg-letters">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i}>💌</span>
        ))}
      </div>

      <div className="card">
        <h1>Contact Us</h1>
        <p className="tagline">
          We’d love to hear from you — send us a little note 🌷
        </p>

        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message..." rows={4}></textarea>
          <button type="button">Send Message</button>
        </form>

        <div className="info">
          <p>📧 cozycorner@email.com</p>
          <p>📸 @thecozycorner</p>
        </div>
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
          max-width: 620px;
          width: 100%;
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
          font-size: 2.5rem;
        }

        .tagline {
          text-align: center;
          color: #d7b7c9;
          font-style: italic;
          margin-bottom: 2rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        input,
        textarea {
          background: rgba(255, 255, 255, 0.08);
          border: none;
          border-radius: 12px;
          padding: 12px 14px;
          color: #f3e9ef;
          font-family: inherit;
        }

        input::placeholder,
        textarea::placeholder {
          color: #cdb6c6;
        }

        button {
          margin-top: 10px;
          padding: 12px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg, #f2b6cc, #d6b2ff);
          color: #3b1f2b;
          cursor: pointer;
          font-size: 0.95rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
          transition: transform 0.2s ease;
        }

        button:hover {
          transform: translateY(-2px);
        }

        .info {
          margin-top: 1.8rem;
          text-align: center;
          color: #e6d6de;
          font-size: 0.9rem;
        }

        /* LOVE LETTER ANIMATION */
        .bg-letters {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .bg-letters span {
          position: absolute;
          bottom: -10%;
          font-size: 1.2rem;
          opacity: 0.35;
          animation: floatUp linear infinite;
        }

        .bg-letters span:nth-child(1){left:6%;animation-duration:18s;}
        .bg-letters span:nth-child(2){left:14%;animation-duration:22s;}
        .bg-letters span:nth-child(3){left:22%;animation-duration:20s;}
        .bg-letters span:nth-child(4){left:30%;animation-duration:24s;}
        .bg-letters span:nth-child(5){left:38%;animation-duration:19s;}
        .bg-letters span:nth-child(6){left:46%;animation-duration:23s;}
        .bg-letters span:nth-child(7){left:54%;animation-duration:21s;}
        .bg-letters span:nth-child(8){left:62%;animation-duration:25s;}
        .bg-letters span:nth-child(9){left:70%;animation-duration:20s;}
        .bg-letters span:nth-child(10){left:78%;animation-duration:22s;}
        .bg-letters span:nth-child(11){left:86%;animation-duration:24s;}
        .bg-letters span:nth-child(12){left:92%;animation-duration:19s;}
        .bg-letters span:nth-child(13){left:48%;animation-duration:26s;}
        .bg-letters span:nth-child(14){left:74%;animation-duration:21s;}

        @keyframes floatUp {
          from {
            transform: translateY(0) scale(0.9);
          }
          to {
            transform: translateY(-120vh) scale(1.2);
          }
        }
      `}</style>
    </main>
  );
}
