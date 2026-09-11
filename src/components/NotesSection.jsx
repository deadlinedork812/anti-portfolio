import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, X } from 'lucide-react';

const articles = [
  {
    id: 'art1',
    num: '01',
    title: 'Testing beyond the happy path',
    subtitle: 'Why edge cases matter more than we think.',
    readTime: '10 min read',
    content: `When building software, the "happy path" is where feature demos succeed. But real-world users click buttons twice, drop connections mid-transaction, and input unexpected unicode characters.\n\nDesigning tests to aggressively explore edge cases, concurrency races, and boundary conditions is what transforms fragile prototypes into resilient, enterprise-ready digital products.`
  },
  {
    id: 'art2',
    num: '02',
    title: 'Designing for testability',
    subtitle: 'Small decisions that make a big difference.',
    readTime: '8 min read',
    content: `Testability isn't something you slap on after a codebase is finished; it's an architectural property.\n\nBy decoupling business logic from side-effecting external services, injecting dependencies clean, and exposing deterministic state hooks, you can eliminate flaky test suites and empower team velocity.`
  },
  {
    id: 'art3',
    num: '03',
    title: 'From manual to meaningful automation',
    subtitle: "What I've learned along the way.",
    readTime: '10 min read',
    content: `Automating for the sake of metric vanity leads to brittle scripts that fail on harmless visual changes. Meaningful test automation targets critical user journeys, asserts contract boundaries, and delivers instant, actionable feedback in CI/CD pipelines.`
  }
];

export default function NotesSection() {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <>
      <section id="notes" className="portfolio-section section-dark notes-section grid-background-dark">
        <div className="notes-top-bar">
          <div className="section-header-tag">
            <span>08. NOTES / BLOG</span>
          </div>
          <div className="notes-slogan">
            <span>THOUGHTS</span>
            <span className="dot">•</span>
            <span>NOTES IDEAS OBSERVATIONS</span>
          </div>
        </div>

        <div className="notes-grid">
          {/* Left Column: Articles */}
          <div className="notes-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="notes-title"
            >
              Notes from<br />
              the journey.
            </motion.h2>

            <p className="notes-subtitle">
              Lessons, observations and ideas on quality, engineering, design and product.
            </p>

            <div className="articles-list">
              {articles.map((art) => (
                <motion.div 
                  key={art.id}
                  whileHover={{ x: 6 }}
                  className="article-row glass-panel-dark"
                  onClick={() => setActiveArticle(art)}
                >
                  <div className="article-left">
                    <span className="article-num">{art.num}</span>
                    <div className="article-text-block">
                      <h3 className="article-title">{art.title}</h3>
                      <span className="article-sub">{art.subtitle}</span>
                    </div>
                  </div>

                  <div className="article-right">
                    <span className="read-time">{art.readTime}</span>
                    <ArrowRight size={16} className="article-arrow" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Angular Mountain Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="notes-right"
          >
            <div className="mountain-art-container">
              <svg className="mountain-svg" viewBox="0 0 300 300">
                <polygon points="150,40 260,260 40,260" fill="url(#mountGrad)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <polyline points="150,40 190,140 140,260" fill="none" stroke="#818cf8" strokeWidth="2" />
                <defs>
                  <linearGradient id="mountGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1e1b4b" />
                    <stop offset="50%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="handwriting-note-bubble">
                <span className="handwriting-light">"Better questions create better products."</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Drawer Preview Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="case-study-overlay" onClick={() => setActiveArticle(null)}>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="article-drawer glass-panel-dark"
              onClick={e => e.stopPropagation()}
            >
              <div className="drawer-header">
                <div className="drawer-meta">
                  <span className="article-num">{activeArticle.num}</span>
                  <span className="read-time"><Clock size={12} /> {activeArticle.readTime}</span>
                </div>
                <button className="modal-close-btn" onClick={() => setActiveArticle(null)}><X size={20} /></button>
              </div>

              <h2 className="drawer-title">{activeArticle.title}</h2>
              <p className="drawer-sub">{activeArticle.subtitle}</p>

              <div className="drawer-divider" />

              <div className="drawer-body">
                {activeArticle.content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .notes-section {
          background-color: #0d0f19;
          position: relative;
        }

        .notes-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .notes-slogan {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .notes-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .notes-title {
          font-family: var(--font-display);
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #f8fafc;
          margin-bottom: 1rem;
        }

        .notes-subtitle {
          font-size: 1.02rem;
          color: #94a3b8;
          max-width: 520px;
          margin-bottom: 2.5rem;
          line-height: 1.5;
        }

        .articles-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .article-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1.8rem;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .article-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .article-num {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1.1rem;
          color: #818cf8;
        }

        .article-text-block {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .article-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: #f8fafc;
        }

        .article-sub {
          font-size: 0.85rem;
          color: #64748b;
        }

        .article-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .read-time {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .article-arrow {
          color: #818cf8;
        }

        /* Right Mountain Visual */
        .mountain-art-container {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mountain-svg {
          width: 260px;
          height: 260px;
        }

        .handwriting-note-bubble {
          position: absolute;
          top: 30px;
          right: 20px;
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(129, 140, 248, 0.3);
          padding: 0.8rem 1.2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transform: rotate(3deg);
        }

        .handwriting-note-bubble span {
          font-size: 1.3rem;
          color: #93c5fd;
        }

        /* Drawer */
        .article-drawer {
          width: 90%;
          max-width: 650px;
          border-radius: 24px;
          padding: 2.5rem;
          color: #f8fafc;
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .drawer-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .drawer-title {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.4rem;
        }

        .drawer-sub {
          font-size: 1rem;
          color: #94a3b8;
          margin-bottom: 1.5rem;
        }

        .drawer-divider {
          height: 1px;
          background: rgba(255,255,255,0.1);
          margin-bottom: 1.5rem;
        }

        .drawer-body p {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        @media (max-width: 1024px) {
          .notes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
