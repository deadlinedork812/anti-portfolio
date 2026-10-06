import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Box, Terminal, Layers, Plus } from 'lucide-react';

const explorations = [
  {
    id: 'exp1',
    num: '01',
    title: 'Interface Ideas & Interactions',
    desc: 'Exploring fluid interactive gestures, micro-interactions, responsive states, and human-centric design patterns.',
    tech: ['UI / UX', 'Prototyping', 'Design Systems'],
    status: '[Upcoming Exploration]',
    icon: Layers
  },
  {
    id: 'exp2',
    num: '02',
    title: 'Testing Workflows & Edge Cases',
    desc: 'Exploring multi-step operational journeys, edge-case failure modes, and systematic manual verification techniques.',
    tech: ['Manual Testing', 'Edge Cases', 'Workflows'],
    status: '[Upcoming Exploration]',
    icon: Terminal
  },
  {
    id: 'exp3',
    num: '03',
    title: 'Technical Concepts & Sandbox',
    desc: 'Exploring software behavior, state machines, lightweight utilities, and real-world system resilience.',
    tech: ['Systems', 'State Logic', 'Architecture'],
    status: '[Upcoming Exploration]',
    icon: Box
  },
  {
    id: 'exp4',
    num: '04',
    title: 'Small Things & Experiments',
    desc: 'A dedicated scratchpad for mini-tools, small interface components, and exploratory concepts.',
    tech: ['WIP', 'Lab', 'Exploration'],
    status: '[Future Sandbox]',
    icon: Plus
  }
];

export default function PlaygroundSection() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <>
      <section id="playground" className="portfolio-section playground-section grid-background">
        <div className="pg-top-bar">
          <div className="section-header-tag">
            <span>05. PLAYGROUND</span>
          </div>
          <span className="pg-slogan">PLAY • LEARN • BUILD • REPEAT</span>
        </div>

        <div className="pg-grid">
          {/* Left Side: Text and Exploration Cards */}
          <div className="pg-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pg-title"
            >
              Things I'm<br />
              exploring.
            </motion.h2>

            <p className="pg-subtitle">
              A space for experiments, interface ideas, technical explorations, testing concepts, and small things that don't belong inside a conventional project case study.
            </p>

            {/* Cards Grid */}
            <div className="experiments-grid">
              {explorations.map((exp) => {
                const Icon = exp.icon;
                return (
                  <motion.div 
                    key={exp.id}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="exp-card glass-panel"
                    onClick={() => setSelectedExp(exp)}
                  >
                    <div className="exp-card-header">
                      <span className="exp-card-num">{exp.num}</span>
                      <span className="exp-status-pill">{exp.status}</span>
                    </div>

                    <h3 className="exp-card-title">{exp.title}</h3>
                    <p className="exp-card-desc">{exp.desc}</p>

                    <div className="exp-card-footer">
                      <div className="exp-tech-tags">
                        {exp.tech.map(t => (
                          <span key={t} className="tag-pill">{t}</span>
                        ))}
                      </div>
                      <ArrowRight size={15} className="exp-arrow" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Glowing 3D Glass Prism Rendering */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pg-right"
          >
            <div className="prism-art-container">
              {/* Animated 3D Glass Cube Mockup */}
              <motion.div 
                animate={{ rotateY: [0, 360], rotateX: [15, 25, 15] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="glass-cube"
              >
                <div className="cube-face face-front"></div>
                <div className="cube-face face-back"></div>
                <div className="cube-face face-right"></div>
                <div className="cube-face face-left"></div>
                <div className="cube-face face-top"></div>
                <div className="cube-face face-bottom"></div>
              </motion.div>

              <div className="handwriting-badge prism-tag">
                <span className="handwriting">Ideas today.<br />Better tools tomorrow.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exploration Details Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="case-study-overlay" onClick={() => setSelectedExp(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="exp-modal glass-panel-dark"
              onClick={e => e.stopPropagation()}
            >
              <div className="exp-modal-header">
                <span className="exp-card-num">{selectedExp.num}</span>
                <h3 className="modal-headline" style={{ color: '#fff', fontSize: '1.4rem' }}>{selectedExp.title}</h3>
                <button className="modal-close-btn" onClick={() => setSelectedExp(null)}>✕</button>
              </div>

              <p className="exp-card-desc" style={{ color: '#cbd5e1', fontSize: '0.95rem', margin: '1rem 0' }}>
                {selectedExp.desc}
              </p>

              <div className="exp-tech-tags" style={{ marginBottom: '1.5rem' }}>
                {selectedExp.tech.map(t => (
                  <span key={t} className="tag-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>{t}</span>
                ))}
              </div>

              <div className="exp-demo-box">
                <p>This exploratory topic is part of my ongoing learning space. Future write-ups and interactive sandboxes will be linked here.</p>
                <button className="btn-secondary" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }} onClick={() => setSelectedExp(null)}>
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .playground-section {
          background-color: #f6f5f0;
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

        .pg-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: clamp(0.3rem, 1vh, 0.8rem);
          flex-shrink: 0;
        }

        .pg-slogan {
          font-family: var(--font-mono);
          font-size: clamp(0.6rem, 0.8vh, 0.68rem);
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #94a3b8;
        }

        .pg-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: clamp(1.5rem, 3vw, 3.5rem);
          align-items: center;
          flex: 1;
        }

        .pg-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 2.4vw + 1vh, 2.8rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #0f172a;
          margin-bottom: clamp(0.3rem, 0.8vh, 0.6rem);
        }

        .pg-subtitle {
          font-size: clamp(0.78rem, 1vh, 0.88rem);
          color: #64748b;
          max-width: 520px;
          margin-bottom: clamp(0.6rem, 1.4vh, 1.2rem);
          line-height: 1.45;
        }

        .experiments-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(0.45rem, 0.9vh, 0.85rem);
        }

        .exp-card {
          padding: clamp(0.6rem, 1vh, 1rem);
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: clamp(0.2rem, 0.5vh, 0.4rem);
        }

        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .exp-card-num {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: clamp(0.72rem, 0.9vh, 0.82rem);
          color: #6366f1;
        }

        .exp-status-pill {
          font-family: var(--font-mono);
          font-size: clamp(0.58rem, 0.75vh, 0.64rem);
          font-weight: 600;
          color: #4f46e5;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 9999px;
          padding: 0.12rem 0.45rem;
        }

        .exp-card-title {
          font-family: var(--font-display);
          font-size: clamp(0.85rem, 1.1vh, 1rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        .exp-card-desc {
          font-size: clamp(0.68rem, 0.85vh, 0.75rem);
          color: #64748b;
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .exp-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: clamp(0.2rem, 0.4vh, 0.4rem);
        }

        .exp-tech-tags {
          display: flex;
          gap: 0.25rem;
          flex-wrap: wrap;
        }

        .exp-tech-tags .tag-pill {
          font-size: clamp(0.58rem, 0.72vh, 0.65rem);
          padding: 0.12rem 0.45rem;
        }

        .exp-arrow {
          color: #0f172a;
          width: 14px;
          height: 14px;
        }

        /* 3D Prism Visual */
        .prism-art-container {
          position: relative;
          width: 100%;
          height: clamp(200px, 30vh, 320px);
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 800px;
        }

        .glass-cube {
          width: 110px;
          height: 110px;
          position: relative;
          transform-style: preserve-3d;
        }

        .cube-face {
          position: absolute;
          width: 110px;
          height: 110px;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(236, 72, 153, 0.5);
          backdrop-filter: blur(8px);
          box-shadow: inset 0 0 20px rgba(99, 102, 241, 0.3);
        }

        .face-front  { transform: rotateY(  0deg) translateZ(55px); }
        .face-back   { transform: rotateY(180deg) translateZ(55px); }
        .face-right  { transform: rotateY( 90deg) translateZ(55px); }
        .face-left   { transform: rotateY(-90deg) translateZ(55px); }
        .face-top    { transform: rotateX( 90deg) translateZ(55px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(55px); }

        .prism-tag {
          position: absolute;
          bottom: 10px;
          right: 10px;
          transform: rotate(-3deg);
        }

        /* Exp Modal */
        .exp-modal {
          width: 90%;
          max-width: 500px;
          border-radius: 20px;
          padding: 2rem;
          color: #fff;
        }

        .exp-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .exp-demo-box {
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        @media (max-width: 820px) {
          .playground-section {
            overflow-y: auto;
          }
          .pg-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .experiments-grid {
            grid-template-columns: 1fr;
          }
          .prism-art-container {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .playground-section {
            padding: 1.25rem 1rem;
          }
          .pg-title {
            font-size: 2rem;
            word-break: break-word;
          }
          .exp-card {
            padding: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
