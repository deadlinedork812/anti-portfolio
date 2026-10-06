import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, X } from 'lucide-react';

const noteCards = [
  {
    id: 'note1',
    num: '01',
    title: 'Testing Beyond the Happy Path',
    topic: 'Quality & Edge Case Thinking',
    status: '[Forthcoming]'
  },
  {
    id: 'note2',
    num: '02',
    title: 'Bridging Engineering & Product',
    topic: 'Product Development & Usability',
    status: '[Forthcoming]'
  },
  {
    id: 'note3',
    num: '03',
    title: 'Operational Reality & Complex Workflows',
    topic: 'WMS Validation & Systems',
    status: '[Forthcoming]'
  }
];

export default function NotesSection() {
  const [activeNote, setActiveNote] = useState(null);

  return (
    <>
      <section id="notes" className="portfolio-section section-dark notes-section grid-background-dark">
        <div className="notes-top-bar">
          <div className="section-header-tag">
            <span>06. NOTES</span>
          </div>
          <div className="notes-slogan">
            <span>THOUGHTS</span>
            <span className="dot">•</span>
            <span>OBSERVATIONS • DISPATCHES</span>
          </div>
        </div>

        <div className="notes-grid">
          {/* Left Column: Notes List */}
          <div className="notes-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="notes-title"
            >
              Notes from<br />
              the build.
            </motion.h2>

            <p className="notes-subtitle">
              Short observations from engineering, testing, product design, and the process of turning ideas into working systems.
            </p>

            <div className="articles-list">
              {noteCards.map((note) => (
                <motion.div 
                  key={note.id}
                  whileHover={{ x: 6 }}
                  className="article-row glass-panel-dark"
                  onClick={() => setActiveNote(note)}
                >
                  <div className="article-left">
                    <span className="article-num">{note.num}</span>
                    <div className="article-text-block">
                      <h3 className="article-title">{note.title}</h3>
                      <span className="article-sub">{note.topic}</span>
                    </div>
                  </div>

                  <div className="article-right">
                    <span className="read-time">{note.status}</span>
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
                <span className="handwriting-light">"Same curiosity. Different lenses."</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Note Preview Modal */}
      <AnimatePresence>
        {activeNote && (
          <div className="case-study-overlay" onClick={() => setActiveNote(null)}>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="article-drawer glass-panel-dark"
              onClick={e => e.stopPropagation()}
            >
              <div className="drawer-header">
                <div className="drawer-meta">
                  <span className="article-num">{activeNote.num}</span>
                  <span className="read-time"><Clock size={12} /> {activeNote.status}</span>
                </div>
                <button className="modal-close-btn" onClick={() => setActiveNote(null)}><X size={20} /></button>
              </div>

              <h2 className="drawer-title">{activeNote.title}</h2>
              <p className="drawer-sub">{activeNote.topic}</p>

              <div className="drawer-divider" />

              <div className="drawer-body">
                <p>This note card is reserved for future field observations and engineering reflections from ongoing builds, tests, and product iterations.</p>
                <p style={{ marginTop: '1rem', color: '#94a3b8' }}>Full text dispatches will be published here as they are written.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .notes-section {
          background-color: #0d0f19;
          position: relative;
          min-height: 100svh;
          height: 100dvh;
          max-height: 100dvh;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: clamp(1rem, 2.5vh, 2rem) clamp(1.5rem, 3.2vw, 3.5rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .notes-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: clamp(0.3rem, 1vh, 0.8rem);
          flex-shrink: 0;
        }

        .notes-slogan {
          font-family: var(--font-mono);
          font-size: clamp(0.6rem, 0.8vh, 0.65rem);
          letter-spacing: 0.12em;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .notes-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: clamp(1.5rem, 3vw, 3.5rem);
          align-items: center;
          flex: 1;
        }

        .notes-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 2.4vw + 1vh, 2.8rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #f8fafc;
          margin-bottom: clamp(0.3rem, 0.8vh, 0.6rem);
        }

        .notes-subtitle {
          font-size: clamp(0.78rem, 1vh, 0.88rem);
          color: #94a3b8;
          max-width: 520px;
          margin-bottom: clamp(0.6rem, 1.4vh, 1.2rem);
          line-height: 1.45;
        }

        .articles-list {
          display: flex;
          flex-direction: column;
          gap: clamp(0.4rem, 0.8vh, 0.75rem);
        }

        .article-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(0.6rem, 1vh, 1rem) clamp(0.8rem, 1.2vw, 1.4rem);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .article-left {
          display: flex;
          align-items: center;
          gap: clamp(0.8rem, 1.5vw, 1.4rem);
        }

        .article-num {
          font-family: var(--font-mono);
          font-size: clamp(0.72rem, 0.95vh, 0.82rem);
          font-weight: 800;
          color: #6366f1;
        }

        .article-text-block {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .article-title {
          font-family: var(--font-display);
          font-size: clamp(0.85rem, 1.1vh, 1rem);
          font-weight: 700;
          color: #f8fafc;
        }

        .article-sub {
          font-family: var(--font-sans);
          font-size: clamp(0.68rem, 0.85vh, 0.75rem);
          color: #94a3b8;
        }

        .article-right {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .read-time {
          font-family: var(--font-mono);
          font-size: clamp(0.62rem, 0.8vh, 0.7rem);
          color: #64748b;
        }

        .mountain-art-container {
          position: relative;
          width: 100%;
          height: clamp(200px, 30vh, 320px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mountain-svg {
          width: clamp(200px, 28vh, 260px);
          height: clamp(200px, 28vh, 260px);
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

        @media (max-width: 768px) {
          .notes-title {
            font-size: 2.2rem;
            word-break: break-word;
          }
          .article-row {
            padding: 1.2rem 1rem;
          }
        }
      `}</style>
    </>
  );
}
