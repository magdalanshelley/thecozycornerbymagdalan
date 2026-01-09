"use client";

export default function BooksPage() {
  const books = [
    {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      emoji: "📖",
      cover: "/books/little-prince.webp",
    },
    {
      title: "Sense and Sensibility",
      author: "Jane Austen",
      emoji: "🌸",
      cover: "/books/sense-sensibility.avif",
    },
    {
      title: "Little Women",
      author: "Louisa May Alcott",
      emoji: "☕",
      cover: "/books/little-women.webp",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      emoji: "✨",
      cover: "/books/pride-prejudice.webp",
    },
  ];

  return (
    <main className="books-page">
      {/* FALLING PAGES */}
      <div className="pages-bg">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i}>📄</span>
        ))}
      </div>

      <h1 className="title">Book Recommendations</h1>

      <div className="grid">
        {books.map((book, i) => (
          <div key={i} className="book-card">
            <div className="img-wrap">
              <img src={book.cover} alt={book.title} />
            </div>

            <div className="info">
              <span className="emoji">{book.emoji}</span>
              <h3>{book.title}</h3>
              <p className="author">{book.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* STYLES */}
      <style jsx>{`
        .books-page {
          min-height: 100vh;
          padding: 120px 40px 80px;
          background: radial-gradient(
            circle at top,
            #2b1f33 0%,
            #140d1a 55%,
            #07060a 100%
          );
          color: #f3e9ef;
          font-family: Georgia, serif;
          position: relative;
          overflow: hidden;
        }

        .title {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2.4rem;
          color: #f4d6e4;
          letter-spacing: 0.5px;
          z-index: 5;
          position: relative;
        }

        /* BOOK GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 2.2rem;
          max-width: 1100px;
          margin: auto;
          position: relative;
          z-index: 5;
        }

        .book-card {
          background: linear-gradient(
            180deg,
            rgba(60, 38, 70, 0.9),
            rgba(30, 18, 38, 0.95)
          );
          border-radius: 24px;
          padding: 18px;
          text-align: center;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.55);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .book-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.08),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .book-card:hover::after {
          opacity: 1;
        }

        .book-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 28px 65px rgba(0, 0, 0, 0.7);
        }

        .img-wrap {
          width: 100%;
          height: 280px;
          overflow: hidden;
          border-radius: 16px;
          margin-bottom: 14px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .book-card:hover img {
          transform: scale(1.06);
        }

        .emoji {
          font-size: 1.2rem;
          display: block;
          margin-bottom: 6px;
        }

        h3 {
          margin: 0;
          color: #f0c9db;
          font-size: 1.1rem;
        }

        .author {
          font-size: 0.85rem;
          color: #d4b9c9;
          margin-top: 4px;
        }

        /* FALLING BOOK PAGES */
        .pages-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .pages-bg span {
          position: absolute;
          top: -10%;
          font-size: 1.2rem;
          opacity: 0.35;
          animation: fall linear infinite;
        }

        .pages-bg span:nth-child(1) { left: 6%; animation-duration: 14s; }
        .pages-bg span:nth-child(2) { left: 14%; animation-duration: 18s; }
        .pages-bg span:nth-child(3) { left: 22%; animation-duration: 16s; }
        .pages-bg span:nth-child(4) { left: 30%; animation-duration: 20s; }
        .pages-bg span:nth-child(5) { left: 38%; animation-duration: 15s; }
        .pages-bg span:nth-child(6) { left: 46%; animation-duration: 19s; }
        .pages-bg span:nth-child(7) { left: 54%; animation-duration: 17s; }
        .pages-bg span:nth-child(8) { left: 62%; animation-duration: 21s; }
        .pages-bg span:nth-child(9) { left: 70%; animation-duration: 16s; }
        .pages-bg span:nth-child(10){ left: 78%; animation-duration: 18s; }
        .pages-bg span:nth-child(11){ left: 86%; animation-duration: 20s; }
        .pages-bg span:nth-child(12){ left: 92%; animation-duration: 15s; }
        .pages-bg span:nth-child(13){ left: 48%; animation-duration: 22s; }
        .pages-bg span:nth-child(14){ left: 74%; animation-duration: 17s; }

        @keyframes fall {
          from {
            transform: translateY(0) rotate(0deg);
          }
          to {
            transform: translateY(120vh) rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}
